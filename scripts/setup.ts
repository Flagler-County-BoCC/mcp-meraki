/**
 * Registers meraki-dashboard-api in Claude Desktop and Claude Code CLI.
 * Also installs slash commands globally to ~/.claude/commands/.
 * Run with: npm run setup
 *
 * Claude Desktop — per-OS config file (claude_desktop_config.json)
 * Claude Code    — ~/.claude.json, mcpServers key, type: "stdio"
 *                  ~/.claude/commands/ — global slash commands (available in every project)
 *
 * Both config operations write a .bak backup before modifying and use an atomic
 * temp-file rename so a crash mid-write can never corrupt the live config.
 * Requires dist/stdio.js to be built first (handled by `npm run setup`).
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import readline from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BINARY = path.join(ROOT, 'dist', 'stdio.js');
const SERVER_KEY = 'meraki-dashboard-api';
const TEMPLATES_DIR = path.join(ROOT, 'templates', '.claude', 'commands');
const GLOBAL_COMMANDS_DIR = path.join(os.homedir(), '.claude', 'commands');
const ENV_EXAMPLE = path.join(ROOT, '.env.example');

function getClaudeDesktopConfigPaths(): string[] {
  switch (process.platform) {
    case 'darwin':
      return [
        path.join(
          os.homedir(),
          'Library',
          'Application Support',
          'Claude',
          'claude_desktop_config.json',
        ),
      ];
    case 'win32': {
      // Standard installer writes to %APPDATA%\Claude. The Microsoft Store (MSIX)
      // build is sandboxed: its %APPDATA% writes are redirected to a per-package
      // LocalCache\Roaming dir. The package hash isn't knowable up front, so scan
      // %LOCALAPPDATA%\Packages for the AnthropicClaude* package. Register in both.
      const appData = process.env['APPDATA'] ?? path.join(os.homedir(), 'AppData', 'Roaming');
      return [
        path.join(appData, 'Claude', 'claude_desktop_config.json'),
        ...findStoreDesktopConfigPaths(),
      ];
    }
    default:
      return [path.join(os.homedir(), '.config', 'Claude', 'claude_desktop_config.json')];
  }
}

// ponytail: scan for the MSIX package rather than hardcode its hash; covers reinstalls.
function findStoreDesktopConfigPaths(): string[] {
  const localAppData =
    process.env['LOCALAPPDATA'] ?? path.join(os.homedir(), 'AppData', 'Local');
  const packagesDir = path.join(localAppData, 'Packages');
  if (!fs.existsSync(packagesDir)) {
    return [];
  }
  try {
    return fs
      .readdirSync(packagesDir)
      .filter((name) => name.startsWith('AnthropicClaude'))
      .map((name) =>
        path.join(
          packagesDir,
          name,
          'LocalCache',
          'Roaming',
          'Claude',
          'claude_desktop_config.json',
        ),
      );
  } catch {
    return [];
  }
}

function getClaudeCodeConfigPath(): string {
  // ~/.claude.json — NOT ~/.claude/settings.json (that file is for preferences, not MCP)
  return path.join(os.homedir(), '.claude.json');
}

function readJson(filePath: string): Record<string, unknown> {
  if (!fs.existsSync(filePath)) {
    return {};
  }
  const raw = fs.readFileSync(filePath, 'utf-8').trim();
  if (!raw) {
    return {};
  }
  try {
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    console.error(`\n  Config at ${filePath} is not valid JSON — fix manually.\n`);
    process.exit(1);
  }
}

function writeJson(filePath: string, data: Record<string, unknown>): void {
  if (fs.existsSync(filePath)) {
    fs.copyFileSync(filePath, filePath + '.bak');
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  // NEVER use PowerShell ConvertFrom-Json | ConvertTo-Json — it silently drops unknown fields.
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  fs.renameSync(tmpPath, filePath); // atomic replace — live config is never partially written
}

/**
 * Parse .env.example for keys whose example value is `CHANGE_ME`. Those are the
 * secrets that require a real value; everything else already has a working
 * default baked into the config schema and is left alone.
 */
function parseRequiredKeys(): string[] {
  if (!fs.existsSync(ENV_EXAMPLE)) {
    return [];
  }
  return fs
    .readFileSync(ENV_EXAMPLE, 'utf-8')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#') && l.includes('='))
    .filter((l) => l.slice(l.indexOf('=') + 1).trim() === 'CHANGE_ME')
    .map((l) => l.slice(0, l.indexOf('=')).trim());
}

/**
 * Prompt for each required secret, pre-filling the existing value (from a prior
 * run, the process env, or .env) as the default so re-running setup is a series
 * of Enter presses. Returns the merged env object to embed in the client config.
 */
async function collectEnv(existing: Record<string, string>): Promise<Record<string, string>> {
  const keys = parseRequiredKeys();
  const env: Record<string, string> = { ...existing };
  if (!keys.length) {
    return env;
  }
  if (!process.stdin.isTTY) {
    console.warn('\n  Non-interactive shell — skipping key prompts; keeping existing values.');
    return env;
  }
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  console.log('\n  Enter required values (press Enter to keep the current value):');
  for (const key of keys) {
    const current = env[key] ?? process.env[key] ?? '';
    const shown = current ? ` [${current.length > 8 ? current.slice(0, 4) + '…' : current}]` : '';
    const answer = (await rl.question(`    ${key}${shown}: `)).trim();
    const value = answer || current;
    if (value) {
      env[key] = value;
    }
  }
  rl.close();
  return env;
}

function existingEnvFor(configPath: string): Record<string, string> {
  const servers = readJson(configPath)['mcpServers'] as
    | Record<string, { env?: Record<string, string> }>
    | undefined;
  return servers?.[SERVER_KEY]?.env ?? {};
}

function registerDesktop(configPath: string, env: Record<string, string>): void {
  // Do NOT skip when the config dir is missing: on Windows %APPDATA%\Claude is
  // only created on Claude Desktop's first launch, so guarding on its existence
  // silently skips registration. writeJson mkdirs the parent — writing a fresh
  // config is safe; Desktop reads it on next launch.
  const config = readJson(configPath);
  const mcpServers = (config['mcpServers'] as Record<string, unknown> | undefined) ?? {};
  const isUpdate = SERVER_KEY in mcpServers;
  const entry: Record<string, unknown> = { command: 'node', args: [BINARY] };
  if (Object.keys(env).length) {
    entry['env'] = env;
  }
  mcpServers[SERVER_KEY] = entry;
  config['mcpServers'] = mcpServers;
  writeJson(configPath, config);
  console.log(`\n  ${isUpdate ? 'Updated' : 'Registered'} in Claude Desktop`);
  console.log(`  Config: ${configPath}`);
}

function registerClaudeCode(configPath: string, env: Record<string, string>): void {
  const config = readJson(configPath);
  const mcpServers = (config['mcpServers'] as Record<string, unknown> | undefined) ?? {};
  const isUpdate = SERVER_KEY in mcpServers;
  // Claude Code requires type: "stdio" for local process servers
  const entry: Record<string, unknown> = { type: 'stdio', command: 'node', args: [BINARY] };
  if (Object.keys(env).length) {
    entry['env'] = env;
  }
  mcpServers[SERVER_KEY] = entry;
  config['mcpServers'] = mcpServers;
  writeJson(configPath, config);
  console.log(`\n  ${isUpdate ? 'Updated' : 'Registered'} in Claude Code`);
  console.log(`  Config: ${configPath}`);
}

function installCommands(): void {
  if (!fs.existsSync(TEMPLATES_DIR)) {
    return;
  }
  fs.mkdirSync(GLOBAL_COMMANDS_DIR, { recursive: true });
  const files = fs.readdirSync(TEMPLATES_DIR).filter((f) => f.endsWith('.md'));
  const installed: string[] = [];
  const updated: string[] = [];
  for (const file of files) {
    const dest = path.join(GLOBAL_COMMANDS_DIR, file);
    const isUpdate = fs.existsSync(dest);
    fs.copyFileSync(path.join(TEMPLATES_DIR, file), dest);
    (isUpdate ? updated : installed).push(file.replace('.md', ''));
  }
  console.log(`\n  Slash commands installed to: ${GLOBAL_COMMANDS_DIR}`);
  if (installed.length) {
    console.log(`  Installed: ${installed.map((f) => `/${f}`).join('  ')}`);
  }
  if (updated.length) {
    console.log(`  Updated:   ${updated.map((f) => `/${f}`).join('  ')}`);
  }
}

async function main(): Promise<void> {
  if (!fs.existsSync(BINARY)) {
    console.error('\n  Build not found. Run `npm run build` first.\n');
    process.exit(1);
  }
  const desktopPaths = getClaudeDesktopConfigPaths();
  const codePath = getClaudeCodeConfigPath();
  // Seed from whichever client already has values so keys carry across all of them.
  const existing = desktopPaths.reduce((acc, p) => ({ ...acc, ...existingEnvFor(p) }), {
    ...existingEnvFor(codePath),
  });
  const env = await collectEnv(existing);
  for (const desktopPath of desktopPaths) {
    registerDesktop(desktopPath, env);
  }
  registerClaudeCode(codePath, env);
  installCommands();
  console.log(`\n  Binary: ${BINARY}`);
  console.log('\n  Restart Claude Desktop to apply the change.');
  console.log('  Claude Code picks up the change automatically.\n');
}

void main();

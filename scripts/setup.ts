/**
 * Registers meraki-dashboard-api in Claude Desktop and Claude Code CLI.
 * Also installs slash commands globally to ~/.claude/commands/.
 * Run with: npm run setup
 *
 * Both config operations write a .bak backup before modifying and use an atomic
 * temp-file rename so a crash mid-write can never corrupt the live config.
 * Requires dist/stdio.js to be built first (handled by `npm run setup`).
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BINARY = path.join(ROOT, 'dist', 'stdio.js');
const SERVER_KEY = 'meraki-dashboard-api';
const TEMPLATES_DIR = path.join(ROOT, 'templates', '.claude', 'commands');
const GLOBAL_COMMANDS_DIR = path.join(os.homedir(), '.claude', 'commands');

// If credentials are present in the current environment at setup time, bake them
// into the MCP "env" block so the server starts without further configuration.
function credentialEnv(): Record<string, string> {
  const out: Record<string, string> = {};
  if (process.env['MERAKI_API_KEY']) {
    out['MERAKI_API_KEY'] = process.env['MERAKI_API_KEY'];
  }
  if (process.env['MERAKI_BASE_URL']) {
    out['MERAKI_BASE_URL'] = process.env['MERAKI_BASE_URL'];
  }
  return out;
}

function getClaudeDesktopConfigPath(): string {
  switch (process.platform) {
    case 'darwin':
      return path.join(
        os.homedir(),
        'Library',
        'Application Support',
        'Claude',
        'claude_desktop_config.json',
      );
    case 'win32':
      return path.join(
        process.env['APPDATA'] ?? path.join(os.homedir(), 'AppData', 'Roaming'),
        'Claude',
        'claude_desktop_config.json',
      );
    default:
      return path.join(os.homedir(), '.config', 'Claude', 'claude_desktop_config.json');
  }
}

function getClaudeCodeConfigPath(): string {
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
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  fs.renameSync(tmpPath, filePath);
}

function registerDesktop(configPath: string): void {
  const configDir = path.dirname(configPath);
  if (!fs.existsSync(configDir)) {
    console.warn(`\n  Claude Desktop: config directory not found — may not be installed.`);
    return;
  }
  const config = readJson(configPath);
  const mcpServers = (config['mcpServers'] as Record<string, unknown> | undefined) ?? {};
  const isUpdate = SERVER_KEY in mcpServers;
  const env = credentialEnv();
  mcpServers[SERVER_KEY] = {
    command: 'node',
    args: [BINARY],
    ...(Object.keys(env).length > 0 ? { env } : {}),
  };
  config['mcpServers'] = mcpServers;
  writeJson(configPath, config);
  console.log(`\n  ${isUpdate ? 'Updated' : 'Registered'} in Claude Desktop`);
  console.log(`  Config: ${configPath}`);
}

function registerClaudeCode(configPath: string): void {
  const config = readJson(configPath);
  const mcpServers = (config['mcpServers'] as Record<string, unknown> | undefined) ?? {};
  const isUpdate = SERVER_KEY in mcpServers;
  const env = credentialEnv();
  mcpServers[SERVER_KEY] = {
    type: 'stdio',
    command: 'node',
    args: [BINARY],
    ...(Object.keys(env).length > 0 ? { env } : {}),
  };
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
  let installed = 0;
  let updated = 0;
  for (const file of files) {
    const dest = path.join(GLOBAL_COMMANDS_DIR, file);
    if (fs.existsSync(dest)) {
      updated += 1;
    } else {
      installed += 1;
    }
    fs.copyFileSync(path.join(TEMPLATES_DIR, file), dest);
  }
  console.log(`\n  Slash commands installed to: ${GLOBAL_COMMANDS_DIR}`);
  console.log(`  Installed: ${installed}  Updated: ${updated}  (${files.length} total)`);
}

function main(): void {
  if (!fs.existsSync(BINARY)) {
    console.error('\n  Build not found. Run `npm run build` first.\n');
    process.exit(1);
  }
  registerDesktop(getClaudeDesktopConfigPath());
  registerClaudeCode(getClaudeCodeConfigPath());
  installCommands();
  console.log(`\n  Binary: ${BINARY}`);
  console.log('\n  Set MERAKI_API_KEY in your environment (or the MCP server "env" block).');
  console.log('  Restart Claude Desktop to apply the change.');
  console.log('  Claude Code picks up the change automatically.\n');
}

main();

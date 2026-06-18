/**
 * Removes meraki-dashboard-api from Claude Desktop and Claude Code.
 * Also removes this server's slash commands from ~/.claude/commands/.
 * Run with: npm run uninstall
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SERVER_KEY = 'meraki-dashboard-api';
const TEMPLATES_DIR = path.join(ROOT, 'templates', '.claude', 'commands');
const GLOBAL_COMMANDS_DIR = path.join(os.homedir(), '.claude', 'commands');

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
      // Standard installer + sandboxed Microsoft Store (MSIX) build — clean both.
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
    console.error(`\n  ${filePath} is not valid JSON.\n`);
    process.exit(1);
  }
}

function writeJson(filePath: string, data: Record<string, unknown>): void {
  if (fs.existsSync(filePath)) {
    fs.copyFileSync(filePath, filePath + '.bak');
  }
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  fs.renameSync(tmpPath, filePath);
}

function deregister(configPath: string, label: string): void {
  if (!fs.existsSync(configPath)) {
    console.log(`\n  ${label}: not found — nothing to remove.`);
    return;
  }
  const config = readJson(configPath);
  const mcpServers = config['mcpServers'] as Record<string, unknown> | undefined;
  if (!mcpServers || !(SERVER_KEY in mcpServers)) {
    console.log(`\n  ${label}: ${SERVER_KEY} not registered — nothing to remove.`);
    return;
  }
  delete mcpServers[SERVER_KEY];
  if (Object.keys(mcpServers).length === 0) {
    delete config['mcpServers'];
  }
  writeJson(configPath, config);
  console.log(`\n  Removed from ${label}: ${configPath}`);
}

function removeCommands(): void {
  if (!fs.existsSync(GLOBAL_COMMANDS_DIR) || !fs.existsSync(TEMPLATES_DIR)) {
    return;
  }
  // Only remove commands this server installed.
  const ours = new Set(fs.readdirSync(TEMPLATES_DIR).filter((f) => f.endsWith('.md')));
  let removed = 0;
  for (const file of ours) {
    const dest = path.join(GLOBAL_COMMANDS_DIR, file);
    if (fs.existsSync(dest)) {
      fs.unlinkSync(dest);
      removed += 1;
    }
  }
  console.log(`\n  Removed ${removed} slash command(s) from ${GLOBAL_COMMANDS_DIR}`);
}

function main(): void {
  for (const desktopPath of getClaudeDesktopConfigPaths()) {
    deregister(desktopPath, 'Claude Desktop');
  }
  deregister(getClaudeCodeConfigPath(), 'Claude Code');
  removeCommands();
  console.log('\n  Manual steps remaining:');
  console.log('    1. Restart Claude Desktop');
  console.log(`    2. Delete: ${ROOT}`);
  console.log();
}

main();

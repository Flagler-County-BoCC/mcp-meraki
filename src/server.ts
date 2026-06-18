import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { config } from './config/index.js';
import { registerApplianceTools } from './tools/appliance/appliance.tool.js';
import { registerDevicesTools } from './tools/devices/devices.tool.js';
import { registerNetworksTools } from './tools/networks/networks.tool.js';
import { registerOrganizationsTools } from './tools/organizations/organizations.tool.js';
import { registerSwitchTools } from './tools/switch/switch.tool.js';
import { registerWirelessTools } from './tools/wireless/wireless.tool.js';

export function createServer(): McpServer {
  const server = new McpServer({
    name: config.app.name,
    version: process.env['npm_package_version'] ?? '0.1.0',
  });

  registerApplianceTools(server);
  registerDevicesTools(server);
  registerNetworksTools(server);
  registerOrganizationsTools(server);
  registerSwitchTools(server);
  registerWirelessTools(server);

  return server;
}

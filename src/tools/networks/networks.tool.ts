import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { validate } from '../../lib/validate.js';
import { selectFields } from '../../lib/select-fields.js';
import { handleToolError } from '../../lib/tool-error-handler.js';
import { merakiService } from '../../lib/container.js';
import { createLogger } from '../../lib/logger.js';
import {
  NetworksGetClientsSchema,
  NetworksGetNetworksSchema,
  NetworksListAlertsSchema,
  NetworksListClientsSchema,
  NetworksListDevicesSchema,
  NetworksListLinklayerSchema,
  NetworksListOverviewSchema,
} from './networks.schema.js';

const log = createLogger({ module: 'networksTool' });

export function registerNetworksTools(server: McpServer): void {
  server.tool(
    'networks-get-clients',
    "Return the client associated with the given identifier. (read-only)",
    NetworksGetClientsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(NetworksGetClientsSchema, params);
      log.debug({ input }, 'networks-get-clients called');
      try {
        const result = await merakiService.call('networks-get-clients', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'networks-get-clients');
      }
    },
  );

  server.tool(
    'networks-get-networks',
    "Return a network. (read-only)",
    NetworksGetNetworksSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(NetworksGetNetworksSchema, params);
      log.debug({ input }, 'networks-get-networks called');
      try {
        const result = await merakiService.call('networks-get-networks', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'networks-get-networks');
      }
    },
  );

  server.tool(
    'networks-list-alerts',
    "Return all global alerts on this network. (read-only)",
    NetworksListAlertsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(NetworksListAlertsSchema, params);
      log.debug({ input }, 'networks-list-alerts called');
      try {
        const result = await merakiService.call('networks-list-alerts', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'networks-list-alerts');
      }
    },
  );

  server.tool(
    'networks-list-clients',
    "List the clients that have used this network in the timespan. (read-only)",
    NetworksListClientsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(NetworksListClientsSchema, params);
      log.debug({ input }, 'networks-list-clients called');
      try {
        const result = await merakiService.call('networks-list-clients', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'networks-list-clients');
      }
    },
  );

  server.tool(
    'networks-list-devices',
    "List the devices in a network. (read-only)",
    NetworksListDevicesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(NetworksListDevicesSchema, params);
      log.debug({ input }, 'networks-list-devices called');
      try {
        const result = await merakiService.call('networks-list-devices', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'networks-list-devices');
      }
    },
  );

  server.tool(
    'networks-list-linklayer',
    "List the LLDP and CDP information for all discovered devices and connections in a network. (read-only)",
    NetworksListLinklayerSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(NetworksListLinklayerSchema, params);
      log.debug({ input }, 'networks-list-linklayer called');
      try {
        const result = await merakiService.call('networks-list-linklayer', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'networks-list-linklayer');
      }
    },
  );

  server.tool(
    'networks-list-overview',
    "Return overview statistics for network clients. (read-only)",
    NetworksListOverviewSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(NetworksListOverviewSchema, params);
      log.debug({ input }, 'networks-list-overview called');
      try {
        const result = await merakiService.call('networks-list-overview', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'networks-list-overview');
      }
    },
  );

}

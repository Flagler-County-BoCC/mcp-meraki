import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { validate } from '../../lib/validate.js';
import { selectFields } from '../../lib/select-fields.js';
import { handleToolError } from '../../lib/tool-error-handler.js';
import { merakiService } from '../../lib/container.js';
import { createLogger } from '../../lib/logger.js';
import {
  WirelessGetSsidsSchema,
  WirelessListBydeviceSchema,
  WirelessListMeshstatusesSchema,
  WirelessListSsidsSchema,
  WirelessListStatusSchema,
} from './wireless.schema.js';

const log = createLogger({ module: 'wirelessTool' });

export function registerWirelessTools(server: McpServer): void {
  server.tool(
    'wireless-get-ssids',
    "Return a single MR SSID. (read-only)",
    WirelessGetSsidsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(WirelessGetSsidsSchema, params);
      log.debug({ input }, 'wireless-get-ssids called');
      try {
        const result = await merakiService.call('wireless-get-ssids', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'wireless-get-ssids');
      }
    },
  );

  server.tool(
    'wireless-list-bydevice',
    "List status information of all BSSIDs in your organization. (read-only)",
    WirelessListBydeviceSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(WirelessListBydeviceSchema, params);
      log.debug({ input }, 'wireless-list-bydevice called');
      try {
        const result = await merakiService.call('wireless-list-bydevice', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'wireless-list-bydevice');
      }
    },
  );

  server.tool(
    'wireless-list-meshstatuses',
    "List wireless mesh statuses for repeaters. (read-only)",
    WirelessListMeshstatusesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(WirelessListMeshstatusesSchema, params);
      log.debug({ input }, 'wireless-list-meshstatuses called');
      try {
        const result = await merakiService.call('wireless-list-meshstatuses', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'wireless-list-meshstatuses');
      }
    },
  );

  server.tool(
    'wireless-list-ssids',
    "List the MR SSIDs in a network. (read-only)",
    WirelessListSsidsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(WirelessListSsidsSchema, params);
      log.debug({ input }, 'wireless-list-ssids called');
      try {
        const result = await merakiService.call('wireless-list-ssids', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'wireless-list-ssids');
      }
    },
  );

  server.tool(
    'wireless-list-status',
    "Return the SSID statuses of an access point. (read-only)",
    WirelessListStatusSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(WirelessListStatusSchema, params);
      log.debug({ input }, 'wireless-list-status called');
      try {
        const result = await merakiService.call('wireless-list-status', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'wireless-list-status');
      }
    },
  );

}

import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { validate } from '../../lib/validate.js';
import { selectFields } from '../../lib/select-fields.js';
import { handleToolError } from '../../lib/tool-error-handler.js';
import { merakiService } from '../../lib/container.js';
import { createLogger } from '../../lib/logger.js';
import {
  DevicesGetDevicesSchema,
  DevicesListClientsSchema,
  DevicesListLldpcdpSchema,
  DevicesListManagementinterfaceSchema,
} from './devices.schema.js';

const log = createLogger({ module: 'devicesTool' });

export function registerDevicesTools(server: McpServer): void {
  server.tool(
    'devices-get-devices',
    "Return a single device. (read-only)",
    DevicesGetDevicesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(DevicesGetDevicesSchema, params);
      log.debug({ input }, 'devices-get-devices called');
      try {
        const result = await merakiService.call('devices-get-devices', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'devices-get-devices');
      }
    },
  );

  server.tool(
    'devices-list-clients',
    "List the clients of a device, up to a maximum of a month ago. (read-only)",
    DevicesListClientsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(DevicesListClientsSchema, params);
      log.debug({ input }, 'devices-list-clients called');
      try {
        const result = await merakiService.call('devices-list-clients', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'devices-list-clients');
      }
    },
  );

  server.tool(
    'devices-list-lldpcdp',
    "List LLDP and CDP information for a device. (read-only)",
    DevicesListLldpcdpSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(DevicesListLldpcdpSchema, params);
      log.debug({ input }, 'devices-list-lldpcdp called');
      try {
        const result = await merakiService.call('devices-list-lldpcdp', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'devices-list-lldpcdp');
      }
    },
  );

  server.tool(
    'devices-list-managementinterface',
    "Return the management interface settings for a device. (read-only)",
    DevicesListManagementinterfaceSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(DevicesListManagementinterfaceSchema, params);
      log.debug({ input }, 'devices-list-managementinterface called');
      try {
        const result = await merakiService.call('devices-list-managementinterface', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'devices-list-managementinterface');
      }
    },
  );

}

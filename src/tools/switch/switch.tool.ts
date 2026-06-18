import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { validate } from '../../lib/validate.js';
import { selectFields } from '../../lib/select-fields.js';
import { handleToolError } from '../../lib/tool-error-handler.js';
import { merakiService } from '../../lib/container.js';
import { createLogger } from '../../lib/logger.js';
import {
  GetOrganizationSwitchPortsBySwitchSchema,
  GetOrganizationSwitchPortsStatusesBySwitchSchema,
  SwitchGetPortsSchema,
  SwitchListBydeviceSchema,
  SwitchListInterfacesSchema,
  SwitchListLinkaggregationsSchema,
  SwitchListMulticastSchema,
  SwitchListOspfSchema,
  SwitchListPortsSchema,
  SwitchListStacksSchema,
  SwitchListStaticroutesSchema,
  SwitchListStatusesSchema,
  SwitchListStpSchema,
} from './switch.schema.js';

const log = createLogger({ module: 'switchTool' });

export function registerSwitchTools(server: McpServer): void {
  server.tool(
    'get-organization-switch-ports-by-switch',
    "List the switchports in an organization by switch. (read-only)",
    GetOrganizationSwitchPortsBySwitchSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(GetOrganizationSwitchPortsBySwitchSchema, params);
      log.debug({ input }, 'get-organization-switch-ports-by-switch called');
      try {
        const result = await merakiService.call('get-organization-switch-ports-by-switch', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'get-organization-switch-ports-by-switch');
      }
    },
  );

  server.tool(
    'get-organization-switch-ports-statuses-by-switch',
    "List the switchports in an organization. (read-only)",
    GetOrganizationSwitchPortsStatusesBySwitchSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(GetOrganizationSwitchPortsStatusesBySwitchSchema, params);
      log.debug({ input }, 'get-organization-switch-ports-statuses-by-switch called');
      try {
        const result = await merakiService.call('get-organization-switch-ports-statuses-by-switch', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'get-organization-switch-ports-statuses-by-switch');
      }
    },
  );

  server.tool(
    'switch-get-ports',
    "Return a switch port. (read-only)",
    SwitchGetPortsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(SwitchGetPortsSchema, params);
      log.debug({ input }, 'switch-get-ports called');
      try {
        const result = await merakiService.call('switch-get-ports', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'switch-get-ports');
      }
    },
  );

  server.tool(
    'switch-list-bydevice',
    "List most recently seen LLDP/CDP discovery and topology information per switch port in an organization. (read-only)",
    SwitchListBydeviceSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(SwitchListBydeviceSchema, params);
      log.debug({ input }, 'switch-list-bydevice called');
      try {
        const result = await merakiService.call('switch-list-bydevice', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'switch-list-bydevice');
      }
    },
  );

  server.tool(
    'switch-list-interfaces',
    "List layer 3 interfaces for a switch. (read-only)",
    SwitchListInterfacesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(SwitchListInterfacesSchema, params);
      log.debug({ input }, 'switch-list-interfaces called');
      try {
        const result = await merakiService.call('switch-list-interfaces', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'switch-list-interfaces');
      }
    },
  );

  server.tool(
    'switch-list-linkaggregations',
    "List link aggregation groups. (read-only)",
    SwitchListLinkaggregationsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(SwitchListLinkaggregationsSchema, params);
      log.debug({ input }, 'switch-list-linkaggregations called');
      try {
        const result = await merakiService.call('switch-list-linkaggregations', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'switch-list-linkaggregations');
      }
    },
  );

  server.tool(
    'switch-list-multicast',
    "Return multicast settings for a network. (read-only)",
    SwitchListMulticastSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(SwitchListMulticastSchema, params);
      log.debug({ input }, 'switch-list-multicast called');
      try {
        const result = await merakiService.call('switch-list-multicast', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'switch-list-multicast');
      }
    },
  );

  server.tool(
    'switch-list-ospf',
    "Return layer 3 OSPF routing configuration. (read-only)",
    SwitchListOspfSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(SwitchListOspfSchema, params);
      log.debug({ input }, 'switch-list-ospf called');
      try {
        const result = await merakiService.call('switch-list-ospf', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'switch-list-ospf');
      }
    },
  );

  server.tool(
    'switch-list-ports',
    "List the switch ports for a switch. (read-only)",
    SwitchListPortsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(SwitchListPortsSchema, params);
      log.debug({ input }, 'switch-list-ports called');
      try {
        const result = await merakiService.call('switch-list-ports', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'switch-list-ports');
      }
    },
  );

  server.tool(
    'switch-list-stacks',
    "List the switch stacks in a network. (read-only)",
    SwitchListStacksSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(SwitchListStacksSchema, params);
      log.debug({ input }, 'switch-list-stacks called');
      try {
        const result = await merakiService.call('switch-list-stacks', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'switch-list-stacks');
      }
    },
  );

  server.tool(
    'switch-list-staticroutes',
    "List layer 3 static routes for a switch. (read-only)",
    SwitchListStaticroutesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(SwitchListStaticroutesSchema, params);
      log.debug({ input }, 'switch-list-staticroutes called');
      try {
        const result = await merakiService.call('switch-list-staticroutes', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'switch-list-staticroutes');
      }
    },
  );

  server.tool(
    'switch-list-statuses',
    "Return the status for all the ports of a switch. (read-only)",
    SwitchListStatusesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(SwitchListStatusesSchema, params);
      log.debug({ input }, 'switch-list-statuses called');
      try {
        const result = await merakiService.call('switch-list-statuses', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'switch-list-statuses');
      }
    },
  );

  server.tool(
    'switch-list-stp',
    "Returns STP settings. (read-only)",
    SwitchListStpSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(SwitchListStpSchema, params);
      log.debug({ input }, 'switch-list-stp called');
      try {
        const result = await merakiService.call('switch-list-stp', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'switch-list-stp');
      }
    },
  );

}

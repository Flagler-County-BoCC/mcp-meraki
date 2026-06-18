import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { validate } from '../../lib/validate.js';
import { selectFields } from '../../lib/select-fields.js';
import { handleToolError } from '../../lib/tool-error-handler.js';
import { merakiService } from '../../lib/container.js';
import { createLogger } from '../../lib/logger.js';
import {
  ApplianceGetVlansSchema,
  ApplianceListL3Schema,
  ApplianceListPortsSchema,
  ApplianceListSitetositevpnSchema,
  ApplianceListStaticroutesSchema,
  ApplianceListVlansSchema,
  GetOrganizationApplianceUplinkStatusesSchema,
  GetOrganizationApplianceVpnStatusesSchema,
} from './appliance.schema.js';

const log = createLogger({ module: 'applianceTool' });

export function registerApplianceTools(server: McpServer): void {
  server.tool(
    'appliance-get-vlans',
    "Return a VLAN. (read-only)",
    ApplianceGetVlansSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(ApplianceGetVlansSchema, params);
      log.debug({ input }, 'appliance-get-vlans called');
      try {
        const result = await merakiService.call('appliance-get-vlans', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'appliance-get-vlans');
      }
    },
  );

  server.tool(
    'appliance-list-l3',
    "List L3 interfaces across networks for the organization. (read-only)",
    ApplianceListL3Schema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(ApplianceListL3Schema, params);
      log.debug({ input }, 'appliance-list-l3 called');
      try {
        const result = await merakiService.call('appliance-list-l3', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'appliance-list-l3');
      }
    },
  );

  server.tool(
    'appliance-list-ports',
    "List per-port VLAN settings for all ports of a secure router or security appliance. (read-only)",
    ApplianceListPortsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(ApplianceListPortsSchema, params);
      log.debug({ input }, 'appliance-list-ports called');
      try {
        const result = await merakiService.call('appliance-list-ports', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'appliance-list-ports');
      }
    },
  );

  server.tool(
    'appliance-list-sitetositevpn',
    "Return the site-to-site VPN settings of a network. (read-only)",
    ApplianceListSitetositevpnSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(ApplianceListSitetositevpnSchema, params);
      log.debug({ input }, 'appliance-list-sitetositevpn called');
      try {
        const result = await merakiService.call('appliance-list-sitetositevpn', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'appliance-list-sitetositevpn');
      }
    },
  );

  server.tool(
    'appliance-list-staticroutes',
    "List the static routes for an MX or teleworker network. (read-only)",
    ApplianceListStaticroutesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(ApplianceListStaticroutesSchema, params);
      log.debug({ input }, 'appliance-list-staticroutes called');
      try {
        const result = await merakiService.call('appliance-list-staticroutes', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'appliance-list-staticroutes');
      }
    },
  );

  server.tool(
    'appliance-list-vlans',
    "List the VLANs for a Security Appliance network. (read-only)",
    ApplianceListVlansSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(ApplianceListVlansSchema, params);
      log.debug({ input }, 'appliance-list-vlans called');
      try {
        const result = await merakiService.call('appliance-list-vlans', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'appliance-list-vlans');
      }
    },
  );

  server.tool(
    'get-organization-appliance-uplink-statuses',
    "List the uplink status of every Meraki MX and Z series appliances in the organization. (read-only)",
    GetOrganizationApplianceUplinkStatusesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(GetOrganizationApplianceUplinkStatusesSchema, params);
      log.debug({ input }, 'get-organization-appliance-uplink-statuses called');
      try {
        const result = await merakiService.call('get-organization-appliance-uplink-statuses', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'get-organization-appliance-uplink-statuses');
      }
    },
  );

  server.tool(
    'get-organization-appliance-vpn-statuses',
    "Show VPN status for networks in an organization. (read-only)",
    GetOrganizationApplianceVpnStatusesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(GetOrganizationApplianceVpnStatusesSchema, params);
      log.debug({ input }, 'get-organization-appliance-vpn-statuses called');
      try {
        const result = await merakiService.call('get-organization-appliance-vpn-statuses', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'get-organization-appliance-vpn-statuses');
      }
    },
  );

}

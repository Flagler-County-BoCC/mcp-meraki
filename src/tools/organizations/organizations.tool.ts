import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { validate } from '../../lib/validate.js';
import { selectFields } from '../../lib/select-fields.js';
import { handleToolError } from '../../lib/tool-error-handler.js';
import { merakiService } from '../../lib/container.js';
import { createLogger } from '../../lib/logger.js';
import {
  GetOrganizationClientsOverviewSchema,
  GetOrganizationDevicesSchema,
  GetOrganizationDevicesStatusesSchema,
  GetOrganizationDevicesStatusesOverviewSchema,
  GetOrganizationInventoryDevicesSchema,
  GetOrganizationUplinksStatusesSchema,
  OrganizationsGetDevicesSchema,
  OrganizationsGetOrganizationsSchema,
  OrganizationsListAvailabilitiesSchema,
  OrganizationsListNetworksSchema,
  OrganizationsListOrganizationsSchema,
  OrganizationsListSearchSchema,
  OrganizationsListUplinkslossandlatencySchema,
} from './organizations.schema.js';

const log = createLogger({ module: 'organizationsTool' });

export function registerOrganizationsTools(server: McpServer): void {
  server.tool(
    'get-organization-clients-overview',
    "Return summary information around client data usage (in kb) across the given organization. (read-only)",
    GetOrganizationClientsOverviewSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(GetOrganizationClientsOverviewSchema, params);
      log.debug({ input }, 'get-organization-clients-overview called');
      try {
        const result = await merakiService.call('get-organization-clients-overview', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'get-organization-clients-overview');
      }
    },
  );

  server.tool(
    'get-organization-devices',
    "List the devices in an organization that have been assigned to a network. (read-only)",
    GetOrganizationDevicesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(GetOrganizationDevicesSchema, params);
      log.debug({ input }, 'get-organization-devices called');
      try {
        const result = await merakiService.call('get-organization-devices', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'get-organization-devices');
      }
    },
  );

  server.tool(
    'get-organization-devices-statuses',
    "List the status of every Meraki device in the organization. (read-only)",
    GetOrganizationDevicesStatusesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(GetOrganizationDevicesStatusesSchema, params);
      log.debug({ input }, 'get-organization-devices-statuses called');
      try {
        const result = await merakiService.call('get-organization-devices-statuses', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'get-organization-devices-statuses');
      }
    },
  );

  server.tool(
    'get-organization-devices-statuses-overview',
    "Return an overview of current device statuses. (read-only)",
    GetOrganizationDevicesStatusesOverviewSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(GetOrganizationDevicesStatusesOverviewSchema, params);
      log.debug({ input }, 'get-organization-devices-statuses-overview called');
      try {
        const result = await merakiService.call('get-organization-devices-statuses-overview', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'get-organization-devices-statuses-overview');
      }
    },
  );

  server.tool(
    'get-organization-inventory-devices',
    "Return the device inventory for an organization. (read-only)",
    GetOrganizationInventoryDevicesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(GetOrganizationInventoryDevicesSchema, params);
      log.debug({ input }, 'get-organization-inventory-devices called');
      try {
        const result = await merakiService.call('get-organization-inventory-devices', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'get-organization-inventory-devices');
      }
    },
  );

  server.tool(
    'get-organization-uplinks-statuses',
    "List the uplink status of every Meraki MX, MG and Z series devices in the organization. (read-only)",
    GetOrganizationUplinksStatusesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(GetOrganizationUplinksStatusesSchema, params);
      log.debug({ input }, 'get-organization-uplinks-statuses called');
      try {
        const result = await merakiService.call('get-organization-uplinks-statuses', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'get-organization-uplinks-statuses');
      }
    },
  );

  server.tool(
    'organizations-get-devices',
    "Return a single device from the inventory of an organization. (read-only)",
    OrganizationsGetDevicesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(OrganizationsGetDevicesSchema, params);
      log.debug({ input }, 'organizations-get-devices called');
      try {
        const result = await merakiService.call('organizations-get-devices', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'organizations-get-devices');
      }
    },
  );

  server.tool(
    'organizations-get-organizations',
    "Return an organization. (read-only)",
    OrganizationsGetOrganizationsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(OrganizationsGetOrganizationsSchema, params);
      log.debug({ input }, 'organizations-get-organizations called');
      try {
        const result = await merakiService.call('organizations-get-organizations', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'organizations-get-organizations');
      }
    },
  );

  server.tool(
    'organizations-list-availabilities',
    "List the availability information for devices in an organization. (read-only)",
    OrganizationsListAvailabilitiesSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(OrganizationsListAvailabilitiesSchema, params);
      log.debug({ input }, 'organizations-list-availabilities called');
      try {
        const result = await merakiService.call('organizations-list-availabilities', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'organizations-list-availabilities');
      }
    },
  );

  server.tool(
    'organizations-list-networks',
    "List the networks that the user has privileges on in an organization. (read-only)",
    OrganizationsListNetworksSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(OrganizationsListNetworksSchema, params);
      log.debug({ input }, 'organizations-list-networks called');
      try {
        const result = await merakiService.call('organizations-list-networks', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'organizations-list-networks');
      }
    },
  );

  server.tool(
    'organizations-list-organizations',
    "List the organizations that the user has privileges on. (read-only)",
    OrganizationsListOrganizationsSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(OrganizationsListOrganizationsSchema, params);
      log.debug({ input }, 'organizations-list-organizations called');
      try {
        const result = await merakiService.call('organizations-list-organizations', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'organizations-list-organizations');
      }
    },
  );

  server.tool(
    'organizations-list-search',
    "Return the client details in an organization. (read-only)",
    OrganizationsListSearchSchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(OrganizationsListSearchSchema, params);
      log.debug({ input }, 'organizations-list-search called');
      try {
        const result = await merakiService.call('organizations-list-search', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'organizations-list-search');
      }
    },
  );

  server.tool(
    'organizations-list-uplinkslossandlatency',
    "Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago. (read-only)",
    OrganizationsListUplinkslossandlatencySchema.shape,
    async (params): Promise<CallToolResult> => {
      const input = validate(OrganizationsListUplinkslossandlatencySchema, params);
      log.debug({ input }, 'organizations-list-uplinkslossandlatency called');
      try {
        const result = await merakiService.call('organizations-list-uplinkslossandlatency', input);
        const projected = selectFields(result, input.fields);
        return { content: [{ type: 'text', text: JSON.stringify(projected, null, 2) }] };
      } catch (err) {
        return handleToolError(err, 'organizations-list-uplinkslossandlatency');
      }
    },
  );

}

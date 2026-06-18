import { z } from 'zod';

export const ApplianceGetVlansSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  vlanId: z.string().min(1).describe("Vlan ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: applianceIp, cidr, dhcpBootFilename, dhcpBootNextServer, dhcpBootOptionsEnabled, dhcpHandling, dhcpLeaseTime, dhcpOptions, dhcpRelayServerIps, dnsNameservers, fixedIpAssignments, groupPolicyId, id, interfaceId, ipv6, mandatoryDhcp, mask, name, reservedIpRanges, sgt, subnet, templateVlanType, vpnNatSubnet, vrf."),
});
export type ApplianceGetVlansInput = z.infer<typeof ApplianceGetVlansSchema>;

export const ApplianceListL3Schema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  networkIds: z.array(z.string()).optional().describe("Optional Network IDs to filter results"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: items, meta."),
});
export type ApplianceListL3Input = z.infer<typeof ApplianceListL3Schema>;

export const ApplianceListPortsSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: accessPolicy, allowedVlans, dropUntaggedTraffic, enabled, number, sgt, type, vlan."),
});
export type ApplianceListPortsInput = z.infer<typeof ApplianceListPortsSchema>;

export const ApplianceListSitetositevpnSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: hostTranslations, hubs, mode, sgt, subnet, subnets."),
});
export type ApplianceListSitetositevpnInput = z.infer<typeof ApplianceListSitetositevpnSchema>;

export const ApplianceListStaticroutesSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: enabled, fixedIpAssignments, gatewayIp, gatewayVlanId, id, ipVersion, name, networkId, reservedIpRanges, subnet."),
});
export type ApplianceListStaticroutesInput = z.infer<typeof ApplianceListStaticroutesSchema>;

export const ApplianceListVlansSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: applianceIp, cidr, dhcpBootFilename, dhcpBootNextServer, dhcpBootOptionsEnabled, dhcpHandling, dhcpLeaseTime, dhcpOptions, dhcpRelayServerIps, dnsNameservers, fixedIpAssignments, groupPolicyId, id, interfaceId, ipv6, mandatoryDhcp, mask, name, reservedIpRanges, sgt, subnet, templateVlanType, vpnNatSubnet, vrf."),
});
export type ApplianceListVlansInput = z.infer<typeof ApplianceListVlansSchema>;

export const GetOrganizationApplianceUplinkStatusesSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  networkIds: z.array(z.string()).optional().describe("A list of network IDs. The returned devices will be filtered to only include these networks."),
  serials: z.array(z.string()).optional().describe("A list of serial numbers. The returned devices will be filtered to only include these serials."),
  iccids: z.array(z.string()).optional().describe("A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: highAvailability, lastReportedAt, model, networkId, serial, uplinks."),
});
export type GetOrganizationApplianceUplinkStatusesInput = z.infer<typeof GetOrganizationApplianceUplinkStatusesSchema>;

export const GetOrganizationApplianceVpnStatusesSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 300. Default is 300."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  networkIds: z.array(z.string()).optional().describe("A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: deviceSerial, deviceStatus, exportedSubnets, merakiVpnPeers, networkId, networkName, thirdPartyVpnPeers, uplinks, vpnMode."),
});
export type GetOrganizationApplianceVpnStatusesInput = z.infer<typeof GetOrganizationApplianceVpnStatusesSchema>;

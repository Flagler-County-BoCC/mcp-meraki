import { z } from 'zod';

export const GetOrganizationSwitchPortsBySwitchSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 50. Default is 50."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  configurationUpdatedAfter: z.string().optional().describe("Optional parameter to filter items to switches where the configuration has been updated after the given timestamp."),
  mac: z.string().optional().describe("Optional parameter to filter items to switches with MAC addresses that contain the search term or are an exact match."),
  macs: z.array(z.string()).optional().describe("Optional parameter to filter items to switches that have one of the provided MAC addresses."),
  name: z.string().optional().describe("Optional parameter to filter items to switches with names that contain the search term or are an exact match."),
  networkIds: z.array(z.string()).optional().describe("Optional parameter to filter items to switches in one of the provided networks."),
  portProfileIds: z.array(z.string()).optional().describe("Optional parameter to filter items to switches that contain switchports belonging to one of the specified port profiles."),
  serial: z.string().optional().describe("Optional parameter to filter items to switches with serial number that contains the search term or are an exact match."),
  serials: z.array(z.string()).optional().describe("Optional parameter to filter items to switches that have one of the provided serials."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: mac, model, name, network, ports, serial."),
});
export type GetOrganizationSwitchPortsBySwitchInput = z.infer<typeof GetOrganizationSwitchPortsBySwitchSchema>;

export const GetOrganizationSwitchPortsStatusesBySwitchSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 20. Default is 10."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  configurationUpdatedAfter: z.string().optional().describe("Optional parameter to filter items to switches where the configuration has been updated after the given timestamp."),
  mac: z.string().optional().describe("Optional parameter to filter items to switches with MAC addresses that contain the search term or are an exact match."),
  macs: z.array(z.string()).optional().describe("Optional parameter to filter items to switches that have one of the provided MAC addresses."),
  name: z.string().optional().describe("Optional parameter to filter items to switches with names that contain the search term or are an exact match."),
  networkIds: z.array(z.string()).optional().describe("Optional parameter to filter items to switches in one of the provided networks."),
  portProfileIds: z.array(z.string()).optional().describe("Optional parameter to filter items to switches that contain switchports belonging to one of the specified port profiles."),
  serial: z.string().optional().describe("Optional parameter to filter items to switches with serial number that contains the search term or are an exact match."),
  serials: z.array(z.string()).optional().describe("Optional parameter to filter items to switches that have one of the provided serials."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: items, meta."),
});
export type GetOrganizationSwitchPortsStatusesBySwitchInput = z.infer<typeof GetOrganizationSwitchPortsStatusesBySwitchSchema>;

export const SwitchGetPortsSchema = z.object({
  serial: z.string().min(1).describe("Serial"),
  portId: z.string().min(1).describe("Port ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: accessPolicyNumber, accessPolicyType, adaptivePolicyGroup, adaptivePolicyGroupId, allowedVlans, daiTrusted, dot3az, enabled, flexibleStackingEnabled, highSpeed, isolationEnabled, linkNegotiation, linkNegotiationCapabilities, macAllowList, macWhitelistLimit, mirror, module, name, peerSgtCapable, poeEnabled, portId, portScheduleId, profile, rstpEnabled, schedule, stickyMacAllowList, stickyMacAllowListLimit, stormControlEnabled, stpGuard, stpPortFastTrunk, tags, type, udld, vlan, voiceVlan."),
});
export type SwitchGetPortsInput = z.infer<typeof SwitchGetPortsSchema>;

export const SwitchListBydeviceSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  t0: z.string().optional().describe("The beginning of the timespan for the data. The maximum lookback period is 31 days from today."),
  timespan: z.coerce.number().optional().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds an"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 20. Default is 10."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  configurationUpdatedAfter: z.string().optional().describe("Optional parameter to filter items to switches where the configuration has been updated after the given timestamp."),
  mac: z.string().optional().describe("Optional parameter to filter items to switches with MAC addresses that contain the search term or are an exact match."),
  macs: z.array(z.string()).optional().describe("Optional parameter to filter items to switches that have one of the provided MAC addresses."),
  name: z.string().optional().describe("Optional parameter to filter items to switches with names that contain the search term or are an exact match."),
  networkIds: z.array(z.string()).optional().describe("Optional parameter to filter items to switches in one of the provided networks."),
  portProfileIds: z.array(z.string()).optional().describe("Optional parameter to filter items to switches that contain switchports belonging to one of the specified port profiles."),
  serial: z.string().optional().describe("Optional parameter to filter items to switches with serial number that contains the search term or are an exact match."),
  serials: z.array(z.string()).optional().describe("Optional parameter to filter items to switches that have one of the provided serials."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: items, meta."),
});
export type SwitchListBydeviceInput = z.infer<typeof SwitchListBydeviceSchema>;

export const SwitchListInterfacesSchema = z.object({
  serial: z.string().min(1).describe("Serial"),
  mode: z.enum(["loopback", "oob_management", "routed", "vlan"]).optional().describe("Optional parameter to filter L3 interfaces by mode."),
  protocol: z.enum(["ipv4", "ipv6"]).optional().describe("Optional parameter to filter L3 interfaces by protocol."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: defaultGateway, interfaceId, interfaceIp, ipv6, loopback, mode, mtu, multicastRouting, name, ospfSettings, ospfV3, serial, subnet, switchPortId, uplinkV4, uplinkV6, vlanId, vrf."),
});
export type SwitchListInterfacesInput = z.infer<typeof SwitchListInterfacesSchema>;

export const SwitchListLinkaggregationsSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: id, switchPorts."),
});
export type SwitchListLinkaggregationsInput = z.infer<typeof SwitchListLinkaggregationsSchema>;

export const SwitchListMulticastSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: defaultSettings, overrides."),
});
export type SwitchListMulticastInput = z.infer<typeof SwitchListMulticastSchema>;

export const SwitchListOspfSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  vrf: z.string().optional().describe("The VRF to return the OSPF routing configuration for. When not provided, the default VRF is used. Included on networks with IOS XE 17.18 or"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: areas, deadTimerInSeconds, enabled, helloTimerInSeconds, md5AuthenticationEnabled, md5AuthenticationKey, v3, vrf."),
});
export type SwitchListOspfInput = z.infer<typeof SwitchListOspfSchema>;

export const SwitchListPortsSchema = z.object({
  serial: z.string().min(1).describe("Serial"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: accessPolicyNumber, accessPolicyType, adaptivePolicyGroup, adaptivePolicyGroupId, allowedVlans, daiTrusted, dot3az, enabled, flexibleStackingEnabled, highSpeed, isolationEnabled, linkNegotiation, linkNegotiationCapabilities, macAllowList, macWhitelistLimit, mirror, module, name, peerSgtCapable, poeEnabled, portId, portScheduleId, profile, rstpEnabled, schedule, stickyMacAllowList, stickyMacAllowListLimit, stormControlEnabled, stpGuard, stpPortFastTrunk, tags, type, udld, vlan, voiceVlan."),
});
export type SwitchListPortsInput = z.infer<typeof SwitchListPortsSchema>;

export const SwitchListStacksSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: id, isMonitorOnly, members, name, serials, virtualMac."),
});
export type SwitchListStacksInput = z.infer<typeof SwitchListStacksSchema>;

export const SwitchListStaticroutesSchema = z.object({
  serial: z.string().min(1).describe("Serial"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: advertiseViaOspfEnabled, managementNextHop, name, nextHopIp, preferOverOspfRoutesEnabled, staticRouteId, subnet, vrf."),
});
export type SwitchListStaticroutesInput = z.infer<typeof SwitchListStaticroutesSchema>;

export const SwitchListStatusesSchema = z.object({
  serial: z.string().min(1).describe("Serial"),
  t0: z.string().optional().describe("The beginning of the timespan for the data. The maximum lookback period is 31 days from today."),
  timespan: z.coerce.number().optional().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds an"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: cdp, clientCount, duplex, enabled, errors, isUplink, lldp, poe, portId, powerUsageInWh, securePort, spanningTree, speed, status, trafficInKbps, usageInKb, warnings."),
});
export type SwitchListStatusesInput = z.infer<typeof SwitchListStatusesSchema>;

export const SwitchListStpSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: rstpEnabled, stpBridgePriority."),
});
export type SwitchListStpInput = z.infer<typeof SwitchListStpSchema>;

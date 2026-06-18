import { z } from 'zod';

export const NetworksGetClientsSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  clientId: z.string().min(1).describe("Client ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: cdp, clientVpnConnections, description, deviceTypePrediction, firstSeen, id, ip, ip6, ip6Local, lastSeen, lldp, mac, manufacturer, model, namedVlan, notes, os, recentDeviceConnection, recentDeviceId, recentDeviceMac, recentDeviceName, recentDeviceSerial, smInstalled, ssid, status, switchport, user, vlan, wirelessCapabilities."),
});
export type NetworksGetClientsInput = z.infer<typeof NetworksGetClientsSchema>;

export const NetworksGetNetworksSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: enrollmentString, id, isBoundToConfigTemplate, name, notes, organizationId, productTypes, tags, timeZone, url."),
});
export type NetworksGetNetworksInput = z.infer<typeof NetworksGetNetworksSchema>;

export const NetworksListAlertsSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: category, id, scope, severity, type."),
});
export type NetworksListAlertsInput = z.infer<typeof NetworksListAlertsSchema>;

export const NetworksListClientsSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  t0: z.string().optional().describe("The beginning of the timespan for the data. The maximum lookback period is 31 days from today."),
  timespan: z.coerce.number().optional().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds an"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 5000. Default is 10."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  statuses: z.array(z.string()).optional().describe("Filters clients based on status. Can be one of 'Online' or 'Offline'."),
  ip: z.string().optional().describe("Filters clients based on a partial or full match for the ip address field."),
  ip6: z.string().optional().describe("Filters clients based on a partial or full match for the ip6 address field."),
  ip6Local: z.string().optional().describe("Filters clients based on a partial or full match for the ip6Local address field."),
  mac: z.string().optional().describe("Filters clients based on a partial or full match for the mac address field."),
  os: z.string().optional().describe("Filters clients based on a partial or full match for the os (operating system) field."),
  pskGroup: z.string().optional().describe("Filters clients based on partial or full match for the iPSK name field."),
  description: z.string().optional().describe("Filters clients based on a partial or full match for the description field."),
  vlan: z.string().optional().describe("Filters clients based on the full match for the VLAN field."),
  namedVlan: z.string().optional().describe("Filters clients based on the partial or full match for the named VLAN field."),
  recentDeviceConnections: z.array(z.string()).optional().describe("Filters clients based on recent connection type. Can be one of 'Wired' or 'Wireless'."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: adaptivePolicyGroup, description, deviceTypePrediction, firstSeen, groupPolicy8021x, id, ip, ip6, ip6Local, lastSeen, mac, manufacturer, namedVlan, notes, os, pskGroup, recentDeviceConnection, recentDeviceMac, recentDeviceName, recentDeviceSerial, smInstalled, ssid, status, switchport, usage, user, vlan, wirelessCapabilities."),
});
export type NetworksListClientsInput = z.infer<typeof NetworksListClientsSchema>;

export const NetworksListDevicesSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: address, beaconIdParams, details, firmware, floorPlanId, lanIp, lat, lng, mac, model, name, networkId, notes, serial, tags."),
});
export type NetworksListDevicesInput = z.infer<typeof NetworksListDevicesSchema>;

export const NetworksListLinklayerSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: errors, links, nodes."),
});
export type NetworksListLinklayerInput = z.infer<typeof NetworksListLinklayerSchema>;

export const NetworksListOverviewSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  t0: z.string().optional().describe("The beginning of the timespan for the data. The maximum lookback period is 31 days from today."),
  t1: z.string().optional().describe("The end of the timespan for the data. t1 can be a maximum of 31 days after t0."),
  timespan: z.coerce.number().optional().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in se"),
  resolution: z.coerce.number().int().optional().describe("The time resolution in seconds for returned data. The valid resolutions are: 7200, 86400, 604800, 2629746. The default is 604800."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: counts, usages."),
});
export type NetworksListOverviewInput = z.infer<typeof NetworksListOverviewSchema>;

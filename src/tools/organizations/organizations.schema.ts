import { z } from 'zod';

export const GetOrganizationClientsOverviewSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  t0: z.string().optional().describe("The beginning of the timespan for the data."),
  t1: z.string().optional().describe("The end of the timespan for the data. t1 can be a maximum of 31 days after t0."),
  timespan: z.coerce.number().optional().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in se"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: counts, usage."),
});
export type GetOrganizationClientsOverviewInput = z.infer<typeof GetOrganizationClientsOverviewSchema>;

export const GetOrganizationDevicesSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 5000. Default is 1000."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  configurationUpdatedAfter: z.string().optional().describe("Filter results by whether or not the device's configuration has been updated after the given timestamp"),
  networkIds: z.array(z.string()).optional().describe("Optional parameter to filter devices by network."),
  productTypes: z.array(z.string()).optional().describe("Optional parameter to filter devices by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway,"),
  tags: z.array(z.string()).optional().describe("Optional parameter to filter devices by tags."),
  tagsFilterType: z.enum(["withAllTags", "withAnyTags"]).optional().describe("Optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included t"),
  name: z.string().optional().describe("Optional parameter to filter devices by name. All returned devices will have a name that contains the search term or is an exact match."),
  mac: z.string().optional().describe("Optional parameter to filter devices by MAC address. All returned devices will have a MAC address that contains the search term or is an exa"),
  serial: z.string().optional().describe("Optional parameter to filter devices by serial number. All returned devices will have a serial number that contains the search term or is an"),
  model: z.string().optional().describe("Optional parameter to filter devices by model. All returned devices will have a model that contains the search term or is an exact match."),
  macs: z.array(z.string()).optional().describe("Optional parameter to filter devices by one or more MAC addresses. All returned devices will have a MAC address that is an exact match."),
  serials: z.array(z.string()).optional().describe("Optional parameter to filter devices by one or more serial numbers. All returned devices will have a serial number that is an exact match."),
  sensorMetrics: z.array(z.string()).optional().describe("Optional parameter to filter devices by the metrics that they provide. Only applies to sensor devices."),
  sensorAlertProfileIds: z.array(z.string()).optional().describe("Optional parameter to filter devices by the alert profiles that are bound to them. Only applies to sensor devices."),
  models: z.array(z.string()).optional().describe("Optional parameter to filter devices by one or more models. All returned devices will have a model that is an exact match."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: address, details, firmware, imei, lanIp, lat, lng, mac, model, name, networkId, notes, productType, serial, tags."),
});
export type GetOrganizationDevicesInput = z.infer<typeof GetOrganizationDevicesSchema>;

export const GetOrganizationDevicesStatusesSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  networkIds: z.array(z.string()).optional().describe("Optional parameter to filter devices by network ids."),
  serials: z.array(z.string()).optional().describe("Optional parameter to filter devices by serials."),
  statuses: z.array(z.string()).optional().describe("Optional parameter to filter devices by statuses. Valid statuses are ['online', 'alerting', 'offline', 'dormant']."),
  productTypes: z.array(z.string()).optional().describe("An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellul"),
  models: z.array(z.string()).optional().describe("Optional parameter to filter devices by models."),
  tags: z.array(z.string()).optional().describe("An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be incl"),
  tagsFilterType: z.enum(["withAllTags", "withAnyTags"]).optional().describe("An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: components, gateway, ipType, lanIp, lastReportedAt, mac, model, name, networkId, primaryDns, productType, publicIp, secondaryDns, serial, status, tags."),
});
export type GetOrganizationDevicesStatusesInput = z.infer<typeof GetOrganizationDevicesStatusesSchema>;

export const GetOrganizationDevicesStatusesOverviewSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  productTypes: z.array(z.string()).optional().describe("An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellul"),
  networkIds: z.array(z.string()).optional().describe("An optional parameter to filter device statuses by network."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: counts."),
});
export type GetOrganizationDevicesStatusesOverviewInput = z.infer<typeof GetOrganizationDevicesStatusesOverviewSchema>;

export const GetOrganizationInventoryDevicesSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  usedState: z.enum(["unused", "used"]).optional().describe("Filter results by used or unused inventory. Accepted values are 'used' or 'unused'."),
  search: z.string().optional().describe("Search for devices in inventory based on serial number, mac address, or model."),
  macs: z.array(z.string()).optional().describe("Search for devices in inventory based on mac addresses."),
  networkIds: z.array(z.string()).optional().describe("Search for devices in inventory based on network ids. Use explicit 'null' value to get available devices only."),
  serials: z.array(z.string()).optional().describe("Search for devices in inventory based on serials."),
  models: z.array(z.string()).optional().describe("Search for devices in inventory based on model."),
  orderNumbers: z.array(z.string()).optional().describe("Search for devices in inventory based on order numbers."),
  tags: z.array(z.string()).optional().describe("Filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below)."),
  tagsFilterType: z.enum(["withAllTags", "withAnyTags"]).optional().describe("To use with 'tags' parameter, to filter devices which contain ANY or ALL given tags. Accepted values are 'withAnyTags' or 'withAllTags', def"),
  productTypes: z.array(z.string()).optional().describe("Filter devices by product type. Accepted values are appliance, camera, campusGateway, cellularGateway, secureConnect, sensor, switch, system"),
  eoxStatuses: z.array(z.string()).optional().describe("Filter devices by EoX status. Accepted values are 'endOfSale', 'endOfSupport', 'nearEndOfSupport', or 'null'. Use 'null' to filter for devic"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: claimedAt, countryCode, details, eox, licenseExpirationDate, mac, model, name, networkId, orderNumber, productType, serial, sku, tags."),
});
export type GetOrganizationInventoryDevicesInput = z.infer<typeof GetOrganizationInventoryDevicesSchema>;

export const GetOrganizationUplinksStatusesSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  networkIds: z.array(z.string()).optional().describe("A list of network IDs. The returned devices will be filtered to only include these networks."),
  serials: z.array(z.string()).optional().describe("A list of serial numbers. The returned devices will be filtered to only include these serials."),
  iccids: z.array(z.string()).optional().describe("A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: highAvailability, lastReportedAt, model, networkId, serial, uplinks."),
});
export type GetOrganizationUplinksStatusesInput = z.infer<typeof GetOrganizationUplinksStatusesSchema>;

export const OrganizationsGetDevicesSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  serial: z.string().min(1).describe("Serial"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: claimedAt, countryCode, details, eox, licenseExpirationDate, mac, model, name, networkId, orderNumber, productType, serial, sku, tags."),
});
export type OrganizationsGetDevicesInput = z.infer<typeof OrganizationsGetDevicesSchema>;

export const OrganizationsGetOrganizationsSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: api, cloud, id, licensing, management, name, privacy, url."),
});
export type OrganizationsGetOrganizationsInput = z.infer<typeof OrganizationsGetOrganizationsSchema>;

export const OrganizationsListAvailabilitiesSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  networkIds: z.array(z.string()).optional().describe("Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches."),
  productTypes: z.array(z.string()).optional().describe("Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches. Valid types are wireles"),
  serials: z.array(z.string()).optional().describe("Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches."),
  tags: z.array(z.string()).optional().describe("An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be incl"),
  tagsFilterType: z.enum(["withAllTags", "withAnyTags"]).optional().describe("An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included"),
  statuses: z.array(z.string()).optional().describe("Optional parameter to filter device availabilities by device status. This filter uses multiple exact matches."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: mac, name, network, productType, serial, status, tags."),
});
export type OrganizationsListAvailabilitiesInput = z.infer<typeof OrganizationsListAvailabilitiesSchema>;

export const OrganizationsListNetworksSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  configTemplateId: z.string().optional().describe("An optional parameter that is the ID of a config template. Will return all networks bound to that template."),
  isBoundToConfigTemplate: z.coerce.boolean().optional().describe("An optional parameter to filter config template bound networks. If configTemplateId is set, this cannot be false."),
  tags: z.array(z.string()).optional().describe("An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be inc"),
  tagsFilterType: z.enum(["withAllTags", "withAnyTags"]).optional().describe("An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the include"),
  productTypes: z.array(z.string()).optional().describe("An optional parameter to filter networks by product type. Results will have at least one of the included product types."),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: enrollmentString, id, isBoundToConfigTemplate, name, notes, organizationId, productTypes, tags, timeZone, url."),
});
export type OrganizationsListNetworksInput = z.infer<typeof OrganizationsListNetworksSchema>;

export const OrganizationsListOrganizationsSchema = z.object({
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 9000. Default is 9000."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: api, cloud, id, licensing, management, name, privacy, url."),
});
export type OrganizationsListOrganizationsInput = z.infer<typeof OrganizationsListOrganizationsSchema>;

export const OrganizationsListSearchSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 5. Default is 5."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  mac: z.string().describe("The MAC address of the client. Required."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: clientId, mac, manufacturer, records."),
});
export type OrganizationsListSearchInput = z.infer<typeof OrganizationsListSearchSchema>;

export const OrganizationsListUplinkslossandlatencySchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  t0: z.string().optional().describe("The beginning of the timespan for the data. The maximum lookback period is 60 days from today."),
  t1: z.string().optional().describe("The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into t"),
  timespan: z.coerce.number().optional().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in se"),
  uplink: z.enum(["cellular", "wan1", "wan2", "wan3"]).optional().describe("Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, wan3, cellular. Default will return all uplinks."),
  ip: z.string().optional().describe("Optional filter for a specific destination IP. Default will return all destination IPs."),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: ip, networkId, serial, timeSeries, uplink."),
});
export type OrganizationsListUplinkslossandlatencyInput = z.infer<typeof OrganizationsListUplinkslossandlatencySchema>;

import { z } from 'zod';

export const WirelessGetSsidsSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  number: z.string().min(1).describe("Number"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: adminSplashUrl, authMode, availabilityTags, availableOnAllAps, bandSelection, enabled, encryptionMode, ipAssignmentMode, localAuth, mandatoryDhcpEnabled, minBitrate, name, number, perClientBandwidthLimitDown, perClientBandwidthLimitUp, perSsidBandwidthLimitDown, perSsidBandwidthLimitUp, psk, radiusAccountingEnabled, radiusAccountingServers, radiusAttributeForGroupPolicies, radiusEnabled, radiusFailoverPolicy, radiusLoadBalancingPolicy, radiusServers, splashPage, splashTimeout, ssidAdminAccessible, visible, walledGardenEnabled, walledGardenRanges, wpaEncryptionMode."),
});
export type WirelessGetSsidsInput = z.infer<typeof WirelessGetSsidsSchema>;

export const WirelessListBydeviceSchema = z.object({
  organizationId: z.string().min(1).describe("Organization ID"),
  networkIds: z.array(z.string()).optional().describe("Optional parameter to filter the result set by the included set of network IDs"),
  serials: z.array(z.string()).optional().describe("A list of serial numbers. The returned devices will be filtered to only include these serials."),
  bssids: z.array(z.string()).optional().describe("A list of BSSIDs. The returned devices will be filtered to only include these BSSIDs."),
  hideDisabled: z.coerce.boolean().optional().describe("If true, the returned devices will not include disabled SSIDs. (default: true)"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 500. Default is 100."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: items, meta."),
});
export type WirelessListBydeviceInput = z.infer<typeof WirelessListBydeviceSchema>;

export const WirelessListMeshstatusesSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  perPage: z.coerce.number().int().optional().describe("The number of entries per page returned. Acceptable range is 3 - 500. Default is 50."),
  startingAfter: z.string().optional().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame"),
  endingBefore: z.string().optional().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: latestMeshPerformance, meshRoute, serial."),
});
export type WirelessListMeshstatusesInput = z.infer<typeof WirelessListMeshstatusesSchema>;

export const WirelessListSsidsSchema = z.object({
  networkId: z.string().min(1).describe("Network ID"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: adminSplashUrl, authMode, availabilityTags, availableOnAllAps, bandSelection, enabled, encryptionMode, ipAssignmentMode, localAuth, mandatoryDhcpEnabled, minBitrate, name, number, perClientBandwidthLimitDown, perClientBandwidthLimitUp, perSsidBandwidthLimitDown, perSsidBandwidthLimitUp, psk, radiusAccountingEnabled, radiusAccountingServers, radiusAttributeForGroupPolicies, radiusEnabled, radiusFailoverPolicy, radiusLoadBalancingPolicy, radiusServers, splashPage, splashTimeout, ssidAdminAccessible, visible, walledGardenEnabled, walledGardenRanges, wpaEncryptionMode."),
});
export type WirelessListSsidsInput = z.infer<typeof WirelessListSsidsSchema>;

export const WirelessListStatusSchema = z.object({
  serial: z.string().min(1).describe("Serial"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: basicServiceSets."),
});
export type WirelessListStatusInput = z.infer<typeof WirelessListStatusSchema>;

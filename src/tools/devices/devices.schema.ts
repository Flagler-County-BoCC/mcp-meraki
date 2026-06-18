import { z } from 'zod';

export const DevicesGetDevicesSchema = z.object({
  serial: z.string().min(1).describe("Serial"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: address, beaconIdParams, details, firmware, floorPlanId, lanIp, lat, lng, mac, model, name, networkId, notes, serial, tags."),
});
export type DevicesGetDevicesInput = z.infer<typeof DevicesGetDevicesSchema>;

export const DevicesListClientsSchema = z.object({
  serial: z.string().min(1).describe("Serial"),
  t0: z.string().optional().describe("The beginning of the timespan for the data. The maximum lookback period is 31 days from today."),
  timespan: z.coerce.number().optional().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds an"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: adaptivePolicyGroup, description, dhcpHostname, id, ip, mac, mdnsName, namedVlan, switchport, usage, user, vlan."),
});
export type DevicesListClientsInput = z.infer<typeof DevicesListClientsSchema>;

export const DevicesListLldpcdpSchema = z.object({
  serial: z.string().min(1).describe("Serial"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: ports, sourceMac."),
});
export type DevicesListLldpcdpInput = z.infer<typeof DevicesListLldpcdpSchema>;

export const DevicesListManagementinterfaceSchema = z.object({
  serial: z.string().min(1).describe("Serial"),
  fields: z.array(z.string()).optional().describe("Return only these top-level fields; omit for all. Available: ddnsHostnames, wan1, wan2."),
});
export type DevicesListManagementinterfaceInput = z.infer<typeof DevicesListManagementinterfaceSchema>;

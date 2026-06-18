Call the `organizations-list-uplinkslossandlatency` tool from meraki-dashboard-api.

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- t0: string — The beginning of the timespan for the data. The maximum lookback period is 60 days from today. (optional)
- t1: string — The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into t (optional)
- timespan: number — The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in se (optional)
- uplink: string — Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, wan3, cellular. Default will return all uplinks. (optional)
- ip: string — Optional filter for a specific destination IP. Default will return all destination IPs. (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

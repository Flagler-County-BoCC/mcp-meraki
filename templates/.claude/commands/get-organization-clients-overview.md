Call the `get-organization-clients-overview` tool from meraki-dashboard-api.

Return summary information around client data usage (in kb) across the given organization. (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- t0: string — The beginning of the timespan for the data. (optional)
- t1: string — The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
- timespan: number — The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in se (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

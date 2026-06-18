Call the `networks-list-overview` tool from meraki-dashboard-api.

Return overview statistics for network clients (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- t0: string — The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
- t1: string — The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
- timespan: number — The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in se (optional)
- resolution: integer — The time resolution in seconds for returned data. The valid resolutions are: 7200, 86400, 604800, 2629746. The default is 604800. (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

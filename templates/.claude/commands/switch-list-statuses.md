Call the `switch-list-statuses` tool from meraki-dashboard-api.

Return the status for all the ports of a switch (read-only GET).

Arguments (from the tool's input schema):
- serial: string — Serial (required)
- t0: string — The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
- timespan: number — The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds an (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

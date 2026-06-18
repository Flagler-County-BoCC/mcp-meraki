Call the `wireless-get-ssids` tool from meraki-dashboard-api.

Return a single MR SSID (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- number: string — Number (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

Call the `wireless-list-status` tool from meraki-dashboard-api.

Return the SSID statuses of an access point (read-only GET).

Arguments (from the tool's input schema):
- serial: string — Serial (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

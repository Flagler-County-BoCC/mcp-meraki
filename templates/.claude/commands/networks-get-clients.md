Call the `networks-get-clients` tool from meraki-dashboard-api.

Return the client associated with the given identifier (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- clientId: string — Client ID (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

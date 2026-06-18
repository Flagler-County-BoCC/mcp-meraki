Call the `wireless-list-ssids` tool from meraki-dashboard-api.

List the MR SSIDs in a network (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

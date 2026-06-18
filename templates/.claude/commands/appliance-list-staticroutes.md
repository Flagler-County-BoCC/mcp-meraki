Call the `appliance-list-staticroutes` tool from meraki-dashboard-api.

List the static routes for an MX or teleworker network (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

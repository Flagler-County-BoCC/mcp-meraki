Call the `switch-list-stacks` tool from meraki-dashboard-api.

List the switch stacks in a network (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

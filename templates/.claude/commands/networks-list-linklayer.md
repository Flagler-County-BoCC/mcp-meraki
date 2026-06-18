Call the `networks-list-linklayer` tool from meraki-dashboard-api.

List the LLDP and CDP information for all discovered devices and connections in a network (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

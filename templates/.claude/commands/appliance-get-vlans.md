Call the `appliance-get-vlans` tool from meraki-dashboard-api.

Return a VLAN (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- vlanId: string — Vlan ID (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

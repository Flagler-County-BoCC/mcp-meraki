Call the `appliance-list-sitetositevpn` tool from meraki-dashboard-api.

Return the site-to-site VPN settings of a network (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

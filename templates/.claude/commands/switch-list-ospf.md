Call the `switch-list-ospf` tool from meraki-dashboard-api.

Return layer 3 OSPF routing configuration (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- vrf: string — The VRF to return the OSPF routing configuration for. When not provided, the default VRF is used. Included on networks with IOS XE 17.18 or  (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

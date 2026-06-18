Call the `switch-list-interfaces` tool from meraki-dashboard-api.

List layer 3 interfaces for a switch (read-only GET).

Arguments (from the tool's input schema):
- serial: string — Serial (required)
- mode: string — Optional parameter to filter L3 interfaces by mode. (optional)
- protocol: string — Optional parameter to filter L3 interfaces by protocol. (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

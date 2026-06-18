Call the `switch-get-ports` tool from meraki-dashboard-api.

Return a switch port (read-only GET).

Arguments (from the tool's input schema):
- serial: string — Serial (required)
- portId: string — Port ID (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

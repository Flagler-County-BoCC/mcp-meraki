Call the `switch-list-ports` tool from meraki-dashboard-api.

List the switch ports for a switch (read-only GET).

Arguments (from the tool's input schema):
- serial: string — Serial (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

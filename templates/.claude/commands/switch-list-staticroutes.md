Call the `switch-list-staticroutes` tool from meraki-dashboard-api.

List layer 3 static routes for a switch (read-only GET).

Arguments (from the tool's input schema):
- serial: string — Serial (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

Call the `organizations-get-organizations` tool from meraki-dashboard-api.

Return an organization (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

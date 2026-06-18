Call the `organizations-get-devices` tool from meraki-dashboard-api.

Return a single device from the inventory of an organization (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- serial: string — Serial (required)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

Call the `get-organization-devices-statuses-overview` tool from meraki-dashboard-api.

Return an overview of current device statuses (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- productTypes: array — An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellul (optional)
- networkIds: array — An optional parameter to filter device statuses by network. (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

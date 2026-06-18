Call the `get-organization-devices-statuses` tool from meraki-dashboard-api.

List the status of every Meraki device in the organization (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- perPage: integer — The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
- startingAfter: string — A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame (optional)
- endingBefore: string — A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete (optional)
- networkIds: array — Optional parameter to filter devices by network ids. (optional)
- serials: array — Optional parameter to filter devices by serials. (optional)
- statuses: array — Optional parameter to filter devices by statuses. Valid statuses are ['online', 'alerting', 'offline', 'dormant']. (optional)
- productTypes: array — An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellul (optional)
- models: array — Optional parameter to filter devices by models. (optional)
- tags: array — An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be incl (optional)
- tagsFilterType: string — An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

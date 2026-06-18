Call the `get-organization-switch-ports-by-switch` tool from meraki-dashboard-api.

List the switchports in an organization by switch (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- perPage: integer — The number of entries per page returned. Acceptable range is 3 - 50. Default is 50. (optional)
- startingAfter: string — A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame (optional)
- endingBefore: string — A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete (optional)
- configurationUpdatedAfter: string — Optional parameter to filter items to switches where the configuration has been updated after the given timestamp. (optional)
- mac: string — Optional parameter to filter items to switches with MAC addresses that contain the search term or are an exact match. (optional)
- macs: array — Optional parameter to filter items to switches that have one of the provided MAC addresses. (optional)
- name: string — Optional parameter to filter items to switches with names that contain the search term or are an exact match. (optional)
- networkIds: array — Optional parameter to filter items to switches in one of the provided networks. (optional)
- portProfileIds: array — Optional parameter to filter items to switches that contain switchports belonging to one of the specified port profiles. (optional)
- serial: string — Optional parameter to filter items to switches with serial number that contains the search term or are an exact match. (optional)
- serials: array — Optional parameter to filter items to switches that have one of the provided serials. (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

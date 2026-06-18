Call the `organizations-list-availabilities` tool from meraki-dashboard-api.

List the availability information for devices in an organization (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- perPage: integer — The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
- startingAfter: string — A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame (optional)
- endingBefore: string — A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete (optional)
- networkIds: array — Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches. (optional)
- productTypes: array — Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches. Valid types are wireles (optional)
- serials: array — Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. (optional)
- tags: array — An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be incl (optional)
- tagsFilterType: string — An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included (optional)
- statuses: array — Optional parameter to filter device availabilities by device status. This filter uses multiple exact matches. (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

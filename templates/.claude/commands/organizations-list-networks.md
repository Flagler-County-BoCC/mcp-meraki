Call the `organizations-list-networks` tool from meraki-dashboard-api.

List the networks that the user has privileges on in an organization (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- configTemplateId: string — An optional parameter that is the ID of a config template. Will return all networks bound to that template. (optional)
- isBoundToConfigTemplate: boolean — An optional parameter to filter config template bound networks. If configTemplateId is set, this cannot be false. (optional)
- tags: array — An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be inc (optional)
- tagsFilterType: string — An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the include (optional)
- productTypes: array — An optional parameter to filter networks by product type. Results will have at least one of the included product types. (optional)
- perPage: integer — The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. (optional)
- startingAfter: string — A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame (optional)
- endingBefore: string — A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

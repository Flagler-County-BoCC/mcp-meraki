Call the `get-organization-appliance-uplink-statuses` tool from meraki-dashboard-api.

List the uplink status of every Meraki MX and Z series appliances in the organization (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- perPage: integer — The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
- startingAfter: string — A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame (optional)
- endingBefore: string — A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete (optional)
- networkIds: array — A list of network IDs. The returned devices will be filtered to only include these networks. (optional)
- serials: array — A list of serial numbers. The returned devices will be filtered to only include these serials. (optional)
- iccids: array — A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

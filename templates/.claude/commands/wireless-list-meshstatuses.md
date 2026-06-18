Call the `wireless-list-meshstatuses` tool from meraki-dashboard-api.

List wireless mesh statuses for repeaters (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- perPage: integer — The number of entries per page returned. Acceptable range is 3 - 500. Default is 50. (optional)
- startingAfter: string — A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame (optional)
- endingBefore: string — A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

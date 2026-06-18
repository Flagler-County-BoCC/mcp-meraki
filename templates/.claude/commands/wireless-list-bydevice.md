Call the `wireless-list-bydevice` tool from meraki-dashboard-api.

List status information of all BSSIDs in your organization (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- networkIds: array — Optional parameter to filter the result set by the included set of network IDs (optional)
- serials: array — A list of serial numbers. The returned devices will be filtered to only include these serials. (optional)
- bssids: array — A list of BSSIDs. The returned devices will be filtered to only include these BSSIDs. (optional)
- hideDisabled: boolean — If true, the returned devices will not include disabled SSIDs. (default: true) (optional)
- perPage: integer — The number of entries per page returned. Acceptable range is 3 - 500. Default is 100. (optional)
- startingAfter: string — A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame (optional)
- endingBefore: string — A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

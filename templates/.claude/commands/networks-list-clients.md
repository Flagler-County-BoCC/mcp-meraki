Call the `networks-list-clients` tool from meraki-dashboard-api.

List the clients that have used this network in the timespan (read-only GET).

Arguments (from the tool's input schema):
- networkId: string — Network ID (required)
- t0: string — The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
- timespan: number — The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds an (optional)
- perPage: integer — The number of entries per page returned. Acceptable range is 3 - 5000. Default is 10. (optional)
- startingAfter: string — A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame (optional)
- endingBefore: string — A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete (optional)
- statuses: array — Filters clients based on status. Can be one of 'Online' or 'Offline'. (optional)
- ip: string — Filters clients based on a partial or full match for the ip address field. (optional)
- ip6: string — Filters clients based on a partial or full match for the ip6 address field. (optional)
- ip6Local: string — Filters clients based on a partial or full match for the ip6Local address field. (optional)
- mac: string — Filters clients based on a partial or full match for the mac address field. (optional)
- os: string — Filters clients based on a partial or full match for the os (operating system) field. (optional)
- pskGroup: string — Filters clients based on partial or full match for the iPSK name field. (optional)
- description: string — Filters clients based on a partial or full match for the description field. (optional)
- vlan: string — Filters clients based on the full match for the VLAN field. (optional)
- namedVlan: string — Filters clients based on the partial or full match for the named VLAN field. (optional)
- recentDeviceConnections: array — Filters clients based on recent connection type. Can be one of 'Wired' or 'Wireless'. (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

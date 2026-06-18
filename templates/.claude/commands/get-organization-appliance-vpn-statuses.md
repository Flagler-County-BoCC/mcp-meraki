Call the `get-organization-appliance-vpn-statuses` tool from meraki-dashboard-api.

Show VPN status for networks in an organization (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- perPage: integer — The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. (optional)
- startingAfter: string — A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame (optional)
- endingBefore: string — A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete (optional)
- networkIds: array — A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456 (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

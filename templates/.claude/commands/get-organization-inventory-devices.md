Call the `get-organization-inventory-devices` tool from meraki-dashboard-api.

Return the device inventory for an organization (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- perPage: integer — The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
- startingAfter: string — A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame (optional)
- endingBefore: string — A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete (optional)
- usedState: string — Filter results by used or unused inventory. Accepted values are 'used' or 'unused'. (optional)
- search: string — Search for devices in inventory based on serial number, mac address, or model. (optional)
- macs: array — Search for devices in inventory based on mac addresses. (optional)
- networkIds: array — Search for devices in inventory based on network ids. Use explicit 'null' value to get available devices only. (optional)
- serials: array — Search for devices in inventory based on serials. (optional)
- models: array — Search for devices in inventory based on model. (optional)
- orderNumbers: array — Search for devices in inventory based on order numbers. (optional)
- tags: array — Filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). (optional)
- tagsFilterType: string — To use with 'tags' parameter, to filter devices which contain ANY or ALL given tags. Accepted values are 'withAnyTags' or 'withAllTags', def (optional)
- productTypes: array — Filter devices by product type. Accepted values are appliance, camera, campusGateway, cellularGateway, secureConnect, sensor, switch, system (optional)
- eoxStatuses: array — Filter devices by EoX status. Accepted values are 'endOfSale', 'endOfSupport', 'nearEndOfSupport', or 'null'. Use 'null' to filter for devic (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

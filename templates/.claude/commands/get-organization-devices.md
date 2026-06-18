Call the `get-organization-devices` tool from meraki-dashboard-api.

List the devices in an organization that have been assigned to a network. (read-only GET).

Arguments (from the tool's input schema):
- organizationId: string — Organization ID (required)
- perPage: integer — The number of entries per page returned. Acceptable range is 3 - 5000. Default is 1000. (optional)
- startingAfter: string — A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parame (optional)
- endingBefore: string — A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This paramete (optional)
- configurationUpdatedAfter: string — Filter results by whether or not the device's configuration has been updated after the given timestamp (optional)
- networkIds: array — Optional parameter to filter devices by network. (optional)
- productTypes: array — Optional parameter to filter devices by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway,  (optional)
- tags: array — Optional parameter to filter devices by tags. (optional)
- tagsFilterType: string — Optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included t (optional)
- name: string — Optional parameter to filter devices by name. All returned devices will have a name that contains the search term or is an exact match. (optional)
- mac: string — Optional parameter to filter devices by MAC address. All returned devices will have a MAC address that contains the search term or is an exa (optional)
- serial: string — Optional parameter to filter devices by serial number. All returned devices will have a serial number that contains the search term or is an (optional)
- model: string — Optional parameter to filter devices by model. All returned devices will have a model that contains the search term or is an exact match. (optional)
- macs: array — Optional parameter to filter devices by one or more MAC addresses. All returned devices will have a MAC address that is an exact match. (optional)
- serials: array — Optional parameter to filter devices by one or more serial numbers. All returned devices will have a serial number that is an exact match. (optional)
- sensorMetrics: array — Optional parameter to filter devices by the metrics that they provide. Only applies to sensor devices. (optional)
- sensorAlertProfileIds: array — Optional parameter to filter devices by the alert profiles that are bound to them. Only applies to sensor devices. (optional)
- models: array — Optional parameter to filter devices by one or more models. All returned devices will have a model that is an exact match. (optional)
- fields: string[] — optional; return only these fields.

Pass the user's `$ARGUMENTS` as the tool arguments. Return the tool's result
verbatim. Do not add interpretation.

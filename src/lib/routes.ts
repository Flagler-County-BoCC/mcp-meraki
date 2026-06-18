// AUTO-GENERATED from the Meraki OpenAPI spec. Read-only (GET) routes only.

export interface RouteDef {
  readonly method: 'GET';
  readonly path: string;
  readonly pathParams: readonly string[];
  readonly queryParams: readonly string[];
}

export const ROUTES = {
  'appliance-get-vlans': {
    method: 'GET',
    path: '/networks/{networkId}/appliance/vlans/{vlanId}',
    pathParams: ['networkId', 'vlanId'],
    queryParams: [],
  },
  'appliance-list-l3': {
    method: 'GET',
    path: '/organizations/{organizationId}/appliance/devices/interfaces/l3',
    pathParams: ['organizationId'],
    queryParams: ['networkIds', 'perPage', 'startingAfter', 'endingBefore'],
  },
  'appliance-list-ports': {
    method: 'GET',
    path: '/networks/{networkId}/appliance/ports',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'appliance-list-sitetositevpn': {
    method: 'GET',
    path: '/networks/{networkId}/appliance/vpn/siteToSiteVpn',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'appliance-list-staticroutes': {
    method: 'GET',
    path: '/networks/{networkId}/appliance/staticRoutes',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'appliance-list-vlans': {
    method: 'GET',
    path: '/networks/{networkId}/appliance/vlans',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'devices-get-devices': {
    method: 'GET',
    path: '/devices/{serial}',
    pathParams: ['serial'],
    queryParams: [],
  },
  'devices-list-clients': {
    method: 'GET',
    path: '/devices/{serial}/clients',
    pathParams: ['serial'],
    queryParams: ['t0', 'timespan'],
  },
  'devices-list-lldpcdp': {
    method: 'GET',
    path: '/devices/{serial}/lldpCdp',
    pathParams: ['serial'],
    queryParams: [],
  },
  'devices-list-managementinterface': {
    method: 'GET',
    path: '/devices/{serial}/managementInterface',
    pathParams: ['serial'],
    queryParams: [],
  },
  'get-organization-appliance-uplink-statuses': {
    method: 'GET',
    path: '/organizations/{organizationId}/appliance/uplink/statuses',
    pathParams: ['organizationId'],
    queryParams: ['perPage', 'startingAfter', 'endingBefore', 'networkIds', 'serials', 'iccids'],
  },
  'get-organization-appliance-vpn-statuses': {
    method: 'GET',
    path: '/organizations/{organizationId}/appliance/vpn/statuses',
    pathParams: ['organizationId'],
    queryParams: ['perPage', 'startingAfter', 'endingBefore', 'networkIds'],
  },
  'get-organization-clients-overview': {
    method: 'GET',
    path: '/organizations/{organizationId}/clients/overview',
    pathParams: ['organizationId'],
    queryParams: ['t0', 't1', 'timespan'],
  },
  'get-organization-devices': {
    method: 'GET',
    path: '/organizations/{organizationId}/devices',
    pathParams: ['organizationId'],
    queryParams: ['perPage', 'startingAfter', 'endingBefore', 'configurationUpdatedAfter', 'networkIds', 'productTypes', 'tags', 'tagsFilterType', 'name', 'mac', 'serial', 'model', 'macs', 'serials', 'sensorMetrics', 'sensorAlertProfileIds', 'models'],
  },
  'get-organization-devices-statuses': {
    method: 'GET',
    path: '/organizations/{organizationId}/devices/statuses',
    pathParams: ['organizationId'],
    queryParams: ['perPage', 'startingAfter', 'endingBefore', 'networkIds', 'serials', 'statuses', 'productTypes', 'models', 'tags', 'tagsFilterType'],
  },
  'get-organization-devices-statuses-overview': {
    method: 'GET',
    path: '/organizations/{organizationId}/devices/statuses/overview',
    pathParams: ['organizationId'],
    queryParams: ['productTypes', 'networkIds'],
  },
  'get-organization-inventory-devices': {
    method: 'GET',
    path: '/organizations/{organizationId}/inventory/devices',
    pathParams: ['organizationId'],
    queryParams: ['perPage', 'startingAfter', 'endingBefore', 'usedState', 'search', 'macs', 'networkIds', 'serials', 'models', 'orderNumbers', 'tags', 'tagsFilterType', 'productTypes', 'eoxStatuses'],
  },
  'get-organization-switch-ports-by-switch': {
    method: 'GET',
    path: '/organizations/{organizationId}/switch/ports/bySwitch',
    pathParams: ['organizationId'],
    queryParams: ['perPage', 'startingAfter', 'endingBefore', 'configurationUpdatedAfter', 'mac', 'macs', 'name', 'networkIds', 'portProfileIds', 'serial', 'serials'],
  },
  'get-organization-switch-ports-statuses-by-switch': {
    method: 'GET',
    path: '/organizations/{organizationId}/switch/ports/statuses/bySwitch',
    pathParams: ['organizationId'],
    queryParams: ['perPage', 'startingAfter', 'endingBefore', 'configurationUpdatedAfter', 'mac', 'macs', 'name', 'networkIds', 'portProfileIds', 'serial', 'serials'],
  },
  'get-organization-uplinks-statuses': {
    method: 'GET',
    path: '/organizations/{organizationId}/uplinks/statuses',
    pathParams: ['organizationId'],
    queryParams: ['perPage', 'startingAfter', 'endingBefore', 'networkIds', 'serials', 'iccids'],
  },
  'networks-get-clients': {
    method: 'GET',
    path: '/networks/{networkId}/clients/{clientId}',
    pathParams: ['networkId', 'clientId'],
    queryParams: [],
  },
  'networks-get-networks': {
    method: 'GET',
    path: '/networks/{networkId}',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'networks-list-alerts': {
    method: 'GET',
    path: '/networks/{networkId}/health/alerts',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'networks-list-clients': {
    method: 'GET',
    path: '/networks/{networkId}/clients',
    pathParams: ['networkId'],
    queryParams: ['t0', 'timespan', 'perPage', 'startingAfter', 'endingBefore', 'statuses', 'ip', 'ip6', 'ip6Local', 'mac', 'os', 'pskGroup', 'description', 'vlan', 'namedVlan', 'recentDeviceConnections'],
  },
  'networks-list-devices': {
    method: 'GET',
    path: '/networks/{networkId}/devices',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'networks-list-linklayer': {
    method: 'GET',
    path: '/networks/{networkId}/topology/linkLayer',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'networks-list-overview': {
    method: 'GET',
    path: '/networks/{networkId}/clients/overview',
    pathParams: ['networkId'],
    queryParams: ['t0', 't1', 'timespan', 'resolution'],
  },
  'organizations-get-devices': {
    method: 'GET',
    path: '/organizations/{organizationId}/inventory/devices/{serial}',
    pathParams: ['organizationId', 'serial'],
    queryParams: [],
  },
  'organizations-get-organizations': {
    method: 'GET',
    path: '/organizations/{organizationId}',
    pathParams: ['organizationId'],
    queryParams: [],
  },
  'organizations-list-availabilities': {
    method: 'GET',
    path: '/organizations/{organizationId}/devices/availabilities',
    pathParams: ['organizationId'],
    queryParams: ['perPage', 'startingAfter', 'endingBefore', 'networkIds', 'productTypes', 'serials', 'tags', 'tagsFilterType', 'statuses'],
  },
  'organizations-list-networks': {
    method: 'GET',
    path: '/organizations/{organizationId}/networks',
    pathParams: ['organizationId'],
    queryParams: ['configTemplateId', 'isBoundToConfigTemplate', 'tags', 'tagsFilterType', 'productTypes', 'perPage', 'startingAfter', 'endingBefore'],
  },
  'organizations-list-organizations': {
    method: 'GET',
    path: '/organizations',
    pathParams: [],
    queryParams: ['perPage', 'startingAfter', 'endingBefore'],
  },
  'organizations-list-search': {
    method: 'GET',
    path: '/organizations/{organizationId}/clients/search',
    pathParams: ['organizationId'],
    queryParams: ['perPage', 'startingAfter', 'endingBefore', 'mac'],
  },
  'organizations-list-uplinkslossandlatency': {
    method: 'GET',
    path: '/organizations/{organizationId}/devices/uplinksLossAndLatency',
    pathParams: ['organizationId'],
    queryParams: ['t0', 't1', 'timespan', 'uplink', 'ip'],
  },
  'switch-get-ports': {
    method: 'GET',
    path: '/devices/{serial}/switch/ports/{portId}',
    pathParams: ['serial', 'portId'],
    queryParams: [],
  },
  'switch-list-bydevice': {
    method: 'GET',
    path: '/organizations/{organizationId}/switch/ports/topology/discovery/byDevice',
    pathParams: ['organizationId'],
    queryParams: ['t0', 'timespan', 'perPage', 'startingAfter', 'endingBefore', 'configurationUpdatedAfter', 'mac', 'macs', 'name', 'networkIds', 'portProfileIds', 'serial', 'serials'],
  },
  'switch-list-interfaces': {
    method: 'GET',
    path: '/devices/{serial}/switch/routing/interfaces',
    pathParams: ['serial'],
    queryParams: ['mode', 'protocol'],
  },
  'switch-list-linkaggregations': {
    method: 'GET',
    path: '/networks/{networkId}/switch/linkAggregations',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'switch-list-multicast': {
    method: 'GET',
    path: '/networks/{networkId}/switch/routing/multicast',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'switch-list-ospf': {
    method: 'GET',
    path: '/networks/{networkId}/switch/routing/ospf',
    pathParams: ['networkId'],
    queryParams: ['vrf'],
  },
  'switch-list-ports': {
    method: 'GET',
    path: '/devices/{serial}/switch/ports',
    pathParams: ['serial'],
    queryParams: [],
  },
  'switch-list-stacks': {
    method: 'GET',
    path: '/networks/{networkId}/switch/stacks',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'switch-list-staticroutes': {
    method: 'GET',
    path: '/devices/{serial}/switch/routing/staticRoutes',
    pathParams: ['serial'],
    queryParams: [],
  },
  'switch-list-statuses': {
    method: 'GET',
    path: '/devices/{serial}/switch/ports/statuses',
    pathParams: ['serial'],
    queryParams: ['t0', 'timespan'],
  },
  'switch-list-stp': {
    method: 'GET',
    path: '/networks/{networkId}/switch/stp',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'wireless-get-ssids': {
    method: 'GET',
    path: '/networks/{networkId}/wireless/ssids/{number}',
    pathParams: ['networkId', 'number'],
    queryParams: [],
  },
  'wireless-list-bydevice': {
    method: 'GET',
    path: '/organizations/{organizationId}/wireless/ssids/statuses/byDevice',
    pathParams: ['organizationId'],
    queryParams: ['networkIds', 'serials', 'bssids', 'hideDisabled', 'perPage', 'startingAfter', 'endingBefore'],
  },
  'wireless-list-meshstatuses': {
    method: 'GET',
    path: '/networks/{networkId}/wireless/meshStatuses',
    pathParams: ['networkId'],
    queryParams: ['perPage', 'startingAfter', 'endingBefore'],
  },
  'wireless-list-ssids': {
    method: 'GET',
    path: '/networks/{networkId}/wireless/ssids',
    pathParams: ['networkId'],
    queryParams: [],
  },
  'wireless-list-status': {
    method: 'GET',
    path: '/devices/{serial}/wireless/status',
    pathParams: ['serial'],
    queryParams: [],
  },
} as const satisfies Record<string, RouteDef>;

export type RouteName = keyof typeof ROUTES;

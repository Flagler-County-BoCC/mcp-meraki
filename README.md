# meraki-dashboard-api (MCP server)

A **read-only** [Model Context Protocol](https://modelcontextprotocol.io) server for the
[Cisco Meraki Dashboard API](https://developer.cisco.com/meraki/api-v1/). It exposes a
curated set of 50 `GET` endpoints focused on **understanding network topology** — from
the organization level down to individual switch ports, clients, and wireless APs.

Every tool is a `GET`. This server **never** creates, updates, or deletes Meraki
configuration.

## What it covers

| Module | Tools | Topology use |
|--------|-------|--------------|
| `organizations` | org/network/device inventory, device & uplink statuses, client search & overview | top-level discovery |
| `networks` | network detail, devices, **link-layer topology (LLDP/CDP)**, clients, health alerts | per-site map |
| `devices` | device detail, connected clients, **LLDP/CDP neighbors**, management interface | per-device |
| `switch` | ports + live port statuses, L3 interfaces, static routes, stacks, STP, LAGs, OSPF, multicast, org-wide port topology discovery | wired fabric |
| `wireless` | SSIDs, AP status, mesh statuses, org-wide SSID statuses | wireless fabric |
| `appliance` | MX VLANs, ports, static routes, site-to-site VPN, uplink & VPN statuses, L3 interfaces | network edge / WAN |

A typical drill-down: `organizations-list-organizations` →
`organizations-list-networks` → `networks-list-devices` →
`networks-list-linklayer` → `devices-list-lldpcdp` → `switch-list-statuses`.

## Requirements

- Node.js >= 22
- A Meraki Dashboard API key (Organization → Settings → Dashboard API access)

## Install & register

```bash
npm install
export MERAKI_API_KEY=<your-key>     # baked into the MCP config at setup time if set
npm run setup                         # builds, then registers in Claude Desktop + Claude Code
```

`npm run setup` also installs one slash command per tool to `~/.claude/commands/`.
Run `npm run uninstall` to reverse everything.

## Configuration

| Variable | Required | Default | Notes |
|----------|----------|---------|-------|
| `MERAKI_API_KEY` | yes | — | sent as `Authorization: Bearer <key>` |
| `MERAKI_BASE_URL` | no | `https://api.meraki.com/api/v1` | use a regional shard if needed |
| `MERAKI_TIMEOUT_MS` | no | `30000` | per-request timeout |
| `LOG_LEVEL` | no | `info` | logs go to **stderr** only |

## Development

```bash
npm run dev          # watch mode (tsx)
npm test             # unit + integration tests
npm run typecheck
npm run lint
npm run inspect      # debug with the MCP Inspector
```

## Field projection

Every tool accepts an optional `fields: string[]` argument. Pass it to return only the
top-level fields you care about (e.g. `["name","serial","status"]`), keeping irrelevant
data out of the model's context. Each tool's schema enumerates the available fields.

## Notes

- The Meraki API rate-limits at ~10 req/s per organization; the client retries `429`
  responses up to 3 times, honoring `Retry-After`.
- All upstream failures surface as `EXTERNAL_SERVICE_ERROR` tool results, never crashes.

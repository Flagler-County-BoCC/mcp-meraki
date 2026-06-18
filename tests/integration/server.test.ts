import { describe, it, expect } from 'vitest';
import { createServer } from '../../src/server.js';
import { ROUTES } from '../../src/lib/routes.js';

describe('MCP server', () => {
  it('builds and registers all tools without throwing', () => {
    const server = createServer();
    expect(server).toBeDefined();
  });

  it('has one route per generated tool', () => {
    // 50 curated read-only Meraki endpoints.
    expect(Object.keys(ROUTES)).toHaveLength(50);
  });

  it('every route is a GET (read-only server)', () => {
    for (const route of Object.values(ROUTES)) {
      expect(route.method).toBe('GET');
    }
  });
});

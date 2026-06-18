import { describe, it, expect, vi } from 'vitest';
import type { AxiosInstance } from 'axios';
import { MerakiService } from '../meraki-service.js';

function mockClient(data: unknown): AxiosInstance {
  return { get: vi.fn().mockResolvedValue({ data }) } as unknown as AxiosInstance;
}

describe('MerakiService', () => {
  it('substitutes path params and omits them from the query string', async () => {
    const client = mockClient({ id: 'N1' });
    const svc = new MerakiService(client);

    const result = await svc.call('networks-get-networks', { networkId: 'N1' });

    expect(result).toEqual({ id: 'N1' });
    expect(client.get).toHaveBeenCalledWith('/networks/N1', { params: {} });
  });

  it('passes through defined query params and drops undefined ones', async () => {
    const client = mockClient([]);
    const svc = new MerakiService(client);

    await svc.call('organizations-list-networks', {
      organizationId: 'O1',
      perPage: 50,
      tags: undefined,
    });

    expect(client.get).toHaveBeenCalledWith('/organizations/O1/networks', {
      params: { perPage: 50 },
    });
  });

  it('url-encodes path parameter values', async () => {
    const client = mockClient({});
    const svc = new MerakiService(client);

    await svc.call('devices-get-devices', { serial: 'Q2XX-AB/CD' });

    expect(client.get).toHaveBeenCalledWith('/devices/Q2XX-AB%2FCD', { params: {} });
  });
});

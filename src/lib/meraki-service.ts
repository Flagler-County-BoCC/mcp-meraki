import type { AxiosInstance } from 'axios';
import { ROUTES, type RouteName } from './routes.js';
import { createLogger } from './logger.js';

const log = createLogger({ module: 'merakiService' });

/**
 * Single read-only data-access service for the Meraki Dashboard API.
 *
 * Every generated tool maps to one entry in the ROUTES table. Path parameters
 * are substituted into the URL; the remaining validated input becomes the query
 * string. All routes are GET — this server never mutates Meraki state.
 */
export class MerakiService {
  constructor(private readonly client: AxiosInstance) {}

  async call(routeName: RouteName, input: Record<string, unknown>): Promise<unknown> {
    const route = ROUTES[routeName];

    let path: string = route.path;
    for (const name of route.pathParams) {
      const value = input[name];
      path = path.replace(`{${name}}`, encodeURIComponent(String(value)));
    }

    const params: Record<string, unknown> = {};
    for (const name of route.queryParams) {
      const value = input[name];
      if (value !== undefined) {
        params[name] = value;
      }
    }

    log.debug({ routeName, path, params }, 'Meraki GET');
    const res = await this.client.get(path, { params });
    return res.data;
  }
}

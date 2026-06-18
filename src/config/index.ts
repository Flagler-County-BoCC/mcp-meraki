import { env } from './env.js';

export const config = {
  env: env.NODE_ENV,
  log: { level: env.LOG_LEVEL },
  meraki: {
    apiKey: env.MERAKI_API_KEY,
    baseUrl: env.MERAKI_BASE_URL,
    timeoutMs: env.MERAKI_TIMEOUT_MS,
  },
  app: {
    name: 'meraki-dashboard-api',
  },
} as const;

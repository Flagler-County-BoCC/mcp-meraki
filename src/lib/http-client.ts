import axios, { type AxiosInstance, type AxiosError } from 'axios';
import { config } from '../config/index.js';
import { createLogger } from './logger.js';
import { ExternalServiceError } from '../errors/index.js';

const log = createLogger({ module: 'httpClient' });

// Meraki rate-limits at ~10 requests/second per organization and returns 429 with
// a Retry-After header. Retry a bounded number of times before surfacing the error.
const MAX_429_RETRIES = 3;
const DEFAULT_RETRY_AFTER_MS = 1000;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function createApiClient(): AxiosInstance {
  const client = axios.create({
    baseURL: config.meraki.baseUrl,
    timeout: config.meraki.timeoutMs,
    headers: {
      Authorization: `Bearer ${config.meraki.apiKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': 'meraki-dashboard-api-mcp/0.1.0',
    },
  });

  client.interceptors.response.use(
    (res) => res,
    async (err: unknown) => {
      if (axios.isAxiosError(err)) {
        const aerr = err as AxiosError;
        const status = aerr.response?.status;

        // Retry on 429 (rate limit) honoring Retry-After.
        const retryCount = (aerr.config as { _retryCount?: number } | undefined)?._retryCount ?? 0;
        if (status === 429 && aerr.config && retryCount < MAX_429_RETRIES) {
          const retryAfterHeader = aerr.response?.headers?.['retry-after'] as string | undefined;
          const waitMs =
            retryAfterHeader !== undefined
              ? Number(retryAfterHeader) * 1000
              : DEFAULT_RETRY_AFTER_MS * (retryCount + 1);
          log.warn({ waitMs, retryCount }, 'Meraki rate limit (429) — retrying');
          await sleep(Number.isFinite(waitMs) ? waitMs : DEFAULT_RETRY_AFTER_MS);
          (aerr.config as { _retryCount?: number })._retryCount = retryCount + 1;
          return client.request(aerr.config);
        }

        const body = aerr.response?.data as { errors?: string[]; message?: string } | undefined;
        const message =
          body?.errors?.join('; ') ?? body?.message ?? aerr.message ?? 'Request failed';
        log.warn({ status, url: aerr.config?.url }, 'Meraki API error');
        throw new ExternalServiceError('MerakiDashboard', message, status);
      }
      log.error({ err }, 'Unexpected non-Axios error');
      throw new ExternalServiceError('MerakiDashboard', String(err));
    },
  );

  return client;
}

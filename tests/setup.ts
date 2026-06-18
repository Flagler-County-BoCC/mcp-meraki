// setupFiles run before any test module imports src/config, so setting these
// here satisfies the env schema without a dotenv dependency.
process.env['NODE_ENV'] = 'test';
process.env['LOG_LEVEL'] = 'silent';
process.env['MERAKI_API_KEY'] ??= 'test_key_0000000000000000000000000000000000000000';
process.env['MERAKI_BASE_URL'] ??= 'https://api.meraki.com/api/v1';
process.env['MERAKI_TIMEOUT_MS'] ??= '5000';

import { afterEach, vi } from 'vitest';

afterEach(() => {
  vi.restoreAllMocks();
});

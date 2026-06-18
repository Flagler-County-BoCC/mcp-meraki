import { z } from 'zod';

/**
 * Environment schema. Every variable used by the server is declared here and
 * validated once at startup. Missing or malformed values fail fast.
 */
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  LOG_LEVEL: z.string().min(1).default('info'),
  MERAKI_API_KEY: z.string().min(8),
  MERAKI_BASE_URL: z.string().url().default('https://api.meraki.com/api/v1'),
  MERAKI_TIMEOUT_MS: z.coerce.number().int().positive().default(30000),
});

export type Env = z.infer<typeof envSchema>;

function loadEnv(): Env {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  - ${i.path.join('.') || '(root)'}: ${i.message}`)
      .join('\n');
    // Startup failure is one of the few places console output is allowed.
    // eslint-disable-next-line no-console
    console.error(`\nInvalid environment configuration:\n${issues}\n`);
    process.exit(1);
  }
  return result.data;
}

export const env = loadEnv();

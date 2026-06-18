import pino from 'pino';
import { config } from '../config/index.js';

/**
 * MCP stdio rule: stdout is reserved for JSON-RPC. ALL log output goes to stderr
 * in every environment — dev (pino-pretty → fd 2) and prod (pino JSON → stderr).
 */
const redact = {
  paths: [
    'apiKey',
    'api_key',
    'authorization',
    'Authorization',
    '*.apiKey',
    '*.token',
    '*.secret',
    '*.password',
    '*.authorization',
    'meraki.apiKey',
  ],
  censor: '[REDACTED]',
};

export const logger =
  config.env !== 'production'
    ? pino({
        level: config.env === 'test' ? 'silent' : (process.env['LOG_LEVEL'] ?? config.log.level),
        transport: {
          target: 'pino-pretty',
          options: { colorize: true, ignore: 'pid,hostname', destination: 2 },
        },
        redact,
      })
    : pino(
        {
          level: process.env['LOG_LEVEL'] ?? config.log.level,
          redact,
        },
        process.stderr,
      );

export function createLogger(context: Record<string, unknown>): pino.Logger {
  return logger.child(context);
}

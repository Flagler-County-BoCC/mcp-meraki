import { describe, it, expect } from 'vitest';
import { handleToolError } from '../tool-error-handler.js';
import { ExternalServiceError, ValidationError } from '../../errors/index.js';

describe('handleToolError', () => {
  it('formats an AppError with its code', () => {
    const result = handleToolError(new ExternalServiceError('MerakiDashboard', 'Unauthorized', 401), 't');
    expect(result.isError).toBe(true);
    expect((result.content[0] as { text: string }).text).toMatch(/EXTERNAL_SERVICE_ERROR/);
  });

  it('reports validation failures as operational errors', () => {
    const result = handleToolError(new ValidationError([]), 't');
    expect(result.isError).toBe(true);
    expect((result.content[0] as { text: string }).text).toMatch(/VALIDATION_ERROR/);
  });

  it('masks unexpected non-AppError throwables', () => {
    const result = handleToolError(new Error('boom'), 't');
    expect(result.isError).toBe(true);
    expect((result.content[0] as { text: string }).text).toBe(
      'An unexpected error occurred. Check server logs.',
    );
  });
});

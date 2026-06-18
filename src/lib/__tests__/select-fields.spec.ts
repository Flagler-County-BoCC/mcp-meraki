import { describe, it, expect } from 'vitest';
import { selectFields } from '../select-fields.js';

describe('selectFields', () => {
  it('returns data unchanged when no fields requested', () => {
    const data = { a: 1, b: 2 };
    expect(selectFields(data, undefined)).toEqual(data);
    expect(selectFields(data, [])).toEqual(data);
  });

  it('projects requested top-level keys on an object', () => {
    expect(selectFields({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('projects each element of an array of objects', () => {
    const data = [
      { id: 1, name: 'x', extra: true },
      { id: 2, name: 'y', extra: false },
    ];
    expect(selectFields(data, ['id', 'name'])).toEqual([
      { id: 1, name: 'x' },
      { id: 2, name: 'y' },
    ]);
  });

  it('ignores requested keys that are absent', () => {
    expect(selectFields({ a: 1 }, ['a', 'missing'])).toEqual({ a: 1 });
  });
});

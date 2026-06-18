/**
 * Client-side field projection. Returns only the requested top-level fields.
 * - Objects: keep only keys in `fields`.
 * - Arrays of objects: project each element.
 * - Anything else, or empty/undefined `fields`: return unchanged.
 * ponytail: top-level keys only; deep dot-paths are a future extension if needed.
 */
export function selectFields<T>(data: T, fields?: string[]): unknown {
  if (!fields || fields.length === 0) {
    return data;
  }
  const pick = (obj: Record<string, unknown>): Record<string, unknown> => {
    const out: Record<string, unknown> = {};
    for (const f of fields) {
      if (f in obj) {
        out[f] = obj[f];
      }
    }
    return out;
  };
  if (Array.isArray(data)) {
    return (data as unknown[]).map((item) =>
      item && typeof item === 'object' ? pick(item as Record<string, unknown>) : item,
    );
  }
  if (data && typeof data === 'object') {
    return pick(data as Record<string, unknown>);
  }
  return data;
}

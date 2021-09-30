import { format } from "./format.js";

/**
 * Asserts the value is an array, not an array-like.
 *
 * @example
 * ```typescript
 * import { isArray } from 'primitive-assert'
 *
 * isArray([])
 * isArray([1, 2, 3])
 * isArray(null) // => throws error
 * isArray({ length: 1 }) // => throws error
 * ```
 */
export function isArray<T>(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is T[] {
  if (!Array.isArray(value)) {
    throw new Err(message ?? `expected array, but got ${format(value)}`);
  }
}

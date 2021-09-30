import { assert } from "./assert.js";

/**
 * Asserts the value is not a `null` nor `undefined`.
 *
 * @example
 * ```typescript
 * import { isNonNullish } from 'primitive-assert'
 *
 * isNonNullish(false)
 * isNonNullish(0)
 * isNonNullish('')
 * isNonNullish(null) // => throws error
 * isNonNullish(undefined) // => throws error
 * ```
 */
export function isNonNullish(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value {
  assert(typeof value !== "undefined", message, Err);
  assert(value !== null, message, Err);
}

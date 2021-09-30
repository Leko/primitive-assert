import { assert } from "./assert.js";

/**
 * Asserts the value is a boolean.
 *
 * @example
 * ```typescript
 * import { isBoolean } from 'primitive-assert'
 *
 * isBoolean(true)
 * isBoolean(false)
 * isBoolean(1 !== 1)
 * isBoolean(null) // => throws error
 * isBoolean('') // => throws error
 * ```
 */
export function isBoolean(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is string {
  assert(typeof value === "boolean", message, Err);
}

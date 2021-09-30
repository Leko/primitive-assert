import { assert } from "./assert.js";

/**
 * Asserts the value is a string.
 *
 * @example
 * ```typescript
 * import { isString } from 'primitive-assert'
 *
 * isString('a')
 * isString('')
 * isString(1) // => throws error
 * isString(Symbol('a')) // => throws error
 * ```
 */
export function isString(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is string {
  assert(typeof value === "string", message, Err);
}

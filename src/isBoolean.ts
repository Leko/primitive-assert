import { format } from "./format.js";

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
  if (typeof value !== "boolean") {
    throw new Err(message ?? `expected boolean, but got ${format(value)}`);
  }
}

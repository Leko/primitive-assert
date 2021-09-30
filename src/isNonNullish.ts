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
  if (typeof value === "undefined") {
    throw new Err(message ?? `not expected undefined, but got undefined`);
  }
  if (value === null) {
    throw new Err(message ?? `not expected null, but got null`);
  }
}

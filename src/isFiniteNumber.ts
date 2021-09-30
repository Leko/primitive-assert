import { assert } from "./assert.js";

/**
 * Asserts the value is a finite number. `NaN` and `Infinity` will be rejected.
 *
 * @example
 * ```typescript
 * import { isFiniteNumber } from 'primitive-assert'
 *
 * isFiniteNumber(123)
 * isFiniteNumber(0)
 * isFiniteNumber(1.2345)
 * isFiniteNumber(Infinity) // => throws error
 * isFiniteNumber(-Infinity) // => throws error
 * isFiniteNumber(NaN) // => throws error
 * isFiniteNumber('123') // => throws error
 * ```
 */
export function isFiniteNumber(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is number {
  assert(typeof value === "number", message, Err);
  assert(Number.isFinite(value), message, Err);
}

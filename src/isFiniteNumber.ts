import { assert } from "./assert.js";
import { format } from "./format.js";

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
  if (typeof value !== "number") {
    throw new Err(message ?? `expected number, but got ${format(value)}`);
  }
  if (!Number.isFinite(value)) {
    throw new Err(
      message ?? `expected finite number, but got ${format(value)}`
    );
  }
}

import { format } from "./format.js";

/**
 * Asserts the first argument is exactly the same as the second argument.
 *
 * @example
 * ```typescript
 * import { equal } from 'primitive-assert'
 *
 * equal('abc', 'abc')
 * equal(1, 1)
 * equal('1', 1) // => throws error
 * equal({}, {}) // => throws error
 * equal(NaN, NaN) // => throws error
 * ```
 */
export function equal<T>(
  actual: unknown,
  expected: T,
  message?: string,
  Err = Error
): asserts actual is T {
  if (actual !== expected) {
    throw new Err(
      message ?? `expected ${format(expected)}, but got ${format(actual)}`
    );
  }
}

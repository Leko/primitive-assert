import { format } from "./format.js";

type Not<T, Exclude> = T extends Exclude ? never : T;

/**
 * Asserts the first argument is not exactly the same as the second argument.
 *
 * @example
 * ```typescript
 * import { notEqual } from 'primitive-assert'
 *
 * notEqual('1', 1)
 * notEqual('a', 'b')
 * notEqual({}, {})
 * notEqual(NaN, NaN)
 * notEqual('abc', 'abc') // => throws error
 * notEqual(1, 1) // => throws error
 * ```
 */
export function notEqual<T extends unknown, E>(
  actual: T,
  expected: E,
  message?: string,
  Err = Error
): asserts actual is Not<T, E> {
  if (actual === expected) {
    throw new Err(
      message ?? `not expected ${format(expected)}, but got ${format(actual)}`
    );
  }
}

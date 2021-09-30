import { assert } from "./assert.js";

/**
 * Asserts the value is a BigInt.
 *
 * @example
 * ```typescript
 * import { isBigInt } from 'primitive-assert'
 *
 * isBigInt(BigInt(123))
 * isBigInt(BigInt('123'))
 * isBigInt(1n)
 * isBigInt(1) // => throws error
 * isBigInt('1') // => throws error
 * ```
 */
export function isBigInt(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is number {
  assert(typeof value === "bigint", message, Err);
}

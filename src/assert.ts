import { equal } from "./equal.js";

/**
 * Asserts the value is a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).
 *
 * @example
 * ```typescript
 * import { assert } from 'primitive-assert'
 *
 * assert('abc')
 * assert(1 === 1)
 * assert(1 === 0) // => throws error
 * assert('') // => throws error
 * ```
 */
export function assert(
  value: unknown,
  message?: string,
  Err = Error
): asserts value {
  equal(!!value, true, message, Err);
}

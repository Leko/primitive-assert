import { assert } from "./assert.js";

/**
 * Asserts the first argument is an instance of the second argument.
 *
 * @example
 * ```typescript
 * import { isInstanceOf } from 'primitive-assert'
 *
 * isInstanceOf(new TypeError(), Error)
 * isInstanceOf(new TypeError(), TypeError)
 * isInstanceOf({}, Error) // => throws error
 * ```
 *
 * @example
 * ```typescript
 * import { isInstanceOf } from 'primitive-assert'
 *
 * class A {}
 * class B extends A {}
 * class C {}
 *
 * isInstanceOf(new A(), A)
 * isInstanceOf(new B(), A)
 * isInstanceOf(new B(), B)
 * isInstanceOf(new C(), A) // => throws error
 * ```
 */
export function isInstanceOf<
  T extends abstract new (...args: unknown[]) => unknown
>(
  value: unknown,
  constructor: T,
  message?: string,
  Err = TypeError
): asserts value is InstanceType<T> {
  assert(value instanceof constructor, message, Err);
}

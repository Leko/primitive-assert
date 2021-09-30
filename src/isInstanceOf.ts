import { assert } from "./assert.js";

export function isInstanceOf<T extends abstract new (...args: any) => any>(
  value: unknown,
  constructor: T,
  message?: string,
  Err = TypeError
): asserts value is InstanceType<T> {
  assert(value instanceof constructor, message, Err);
}

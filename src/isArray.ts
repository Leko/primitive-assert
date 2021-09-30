import { assert } from "./assert.js";

export function isArray<T>(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is T[] {
  assert(Array.isArray(value), message, Err);
}

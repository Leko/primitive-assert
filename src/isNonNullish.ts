import { assert } from "./assert.js";

export function isNonNullish(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value {
  assert(typeof value !== "undefined", message, Err);
  assert(value !== null, message, Err);
}

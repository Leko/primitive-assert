import { assert } from "./assert.js";

export function isString(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is string {
  assert(typeof value === "string", message, Err);
}

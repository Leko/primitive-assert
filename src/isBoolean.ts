import { assert } from "./assert.js";

export function isBoolean(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is string {
  assert(typeof value === "boolean", message, Err);
}

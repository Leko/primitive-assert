import { assert } from "./assert.js";

export function isBigInt(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is number {
  assert(typeof value === "bigint", message, Err);
}

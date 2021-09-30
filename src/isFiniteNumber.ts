import { assert } from "./assert.js";

export function isFiniteNumber(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is number {
  assert(typeof value === "number" && Number.isFinite(value), message, Err);
}

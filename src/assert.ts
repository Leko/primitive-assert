import { equal } from "./equal.js";

export function assert(
  value: any,
  message?: string,
  Err = Error
): asserts value {
  equal(!!value, true, message, Err);
}

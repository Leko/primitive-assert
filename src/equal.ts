import { format } from "./format.js";

export function equal<T>(
  actual: unknown,
  expected: T,
  message?: string,
  Err = Error
): asserts actual is T {
  if (actual !== expected) {
    throw new Err(
      message ?? `expected ${format(expected)}, but got ${format(actual)}`
    );
  }
}

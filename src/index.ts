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

export function assert(
  value: any,
  message?: string,
  Err = Error
): asserts value {
  equal(!!value, true, message, Err);
}

export function isArray<T>(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is T[] {
  assert(Array.isArray(value), message, Err);
}

export function isBoolean(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is string {
  assert(typeof value === "boolean", message, Err);
}

export function isString(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is string {
  assert(typeof value === "string", message, Err);
}

export function isFiniteNumber(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is number {
  assert(typeof value === "number" && Number.isFinite(value), message, Err);
}

export function isBigInt(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value is number {
  assert(typeof value === "bigint", message, Err);
}

export function isNonNullish(
  value: unknown,
  message?: string,
  Err = TypeError
): asserts value {
  assert(typeof value !== "undefined", message, Err);
  assert(value !== null, message, Err);
}

export function isInstanceOf<T extends abstract new (...args: any) => any>(
  value: unknown,
  constructor: T,
  message?: string,
  Err = TypeError
): asserts value is InstanceType<T> {
  assert(value instanceof constructor, message, Err);
}

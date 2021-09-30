import { isString } from "./isString.js";

describe("isString", () => {
  test.concurrent.each(["", "a"])("is string", (value) => {
    isString(value);
  });
  test.concurrent.each([0, false, null, undefined, NaN, [], {}, Symbol("a")])(
    "is not string",
    (value) => {
      expect(() => isString(value)).toThrowError();
    }
  );

  describe("typecheck", () => {
    it.skip("narrowing works correctly", () => {
      const x: unknown = Math.random() ? "a" : 1;
      isString(x);
      x.toUpperCase();
    });
    it.skip("narrowing works correctly", () => {
      const x: string | number = Math.random() ? "a" : 1;
      isString(x);
      x.toUpperCase();
    });
  });
});

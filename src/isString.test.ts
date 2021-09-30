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
});

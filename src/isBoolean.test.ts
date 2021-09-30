import { isBoolean } from "./isBoolean.js";

describe("isBoolean", () => {
  test.concurrent.each([true, false])("is boolean", (value) => {
    isBoolean(value);
  });
  test.concurrent.each([0, 1, "", "a", [], {}, NaN, null, undefined])(
    "is not boolean",
    (value) => {
      expect(() => isBoolean(value)).toThrowError();
    }
  );
});

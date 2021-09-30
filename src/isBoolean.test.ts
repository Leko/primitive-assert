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

  describe("typecheck", () => {
    it.skip("narrowing works correctly", () => {
      const x: unknown = Math.random() ? "a" : false;
      isBoolean(x);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: boolean = x;
    });
    it.skip("narrowing works correctly", () => {
      const x: boolean | string = Math.random() ? "a" : false;
      isBoolean(x);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: boolean = x;
    });
  });
});

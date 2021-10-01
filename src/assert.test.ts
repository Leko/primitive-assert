import { assert } from "./assert.js";

describe("assert", () => {
  test.concurrent.each(["a", 1, true, {}, [], Infinity])("truthy", (value) => {
    assert(value);
  });
  test.concurrent.each(["", 0, false, null, undefined, NaN])(
    "falsy",
    (value) => {
      expect(() => assert(value)).toThrowError();
    }
  );

  describe("typecheck", () => {
    it.skip("narrowing works correctly", () => {
      const x: unknown = Math.random() ? "a" : 1;
      assert(typeof x === "number");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: number = x;
    });
    it.skip("narrowing works correctly", () => {
      const x: number | string = Math.random() ? "1" : 0;
      assert(typeof x === "number");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: number = x;
    });
  });
});

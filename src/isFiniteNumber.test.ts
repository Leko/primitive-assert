import { isFiniteNumber } from "./isFiniteNumber.js";

describe("isFiniteNumber", () => {
  test.concurrent.each([0, 1])("is finite", (value) => {
    isFiniteNumber(value);
  });
  test.concurrent.each([Infinity, NaN])("is not finute", (value) => {
    expect(() => isFiniteNumber(value)).toThrowError();
  });
  test.concurrent.each([true, false, "", "a", [], {}, null, undefined])(
    "is not number",
    (value) => {
      expect(() => isFiniteNumber(value)).toThrowError();
    }
  );

  describe("typecheck", () => {
    it.skip("narrowing works correctly", () => {
      const x: unknown = Math.random() ? "a" : 1;
      isFiniteNumber(x);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: number = x;
    });
    it.skip("narrowing works correctly", () => {
      const x: number | string = Math.random() ? "a" : 1;
      isFiniteNumber(x);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: number = x;
    });
  });
});

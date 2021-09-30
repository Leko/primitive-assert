import { equal } from "./equal.js";

describe("equal", () => {
  test.concurrent.each([
    [1, 1],
    [null, null],
    [undefined, undefined],
    [true, true],
    ["a", "a"],
  ])("is equal", (actual, expected) => {
    equal(actual, expected);
  });
  test.concurrent.each([
    [1, "1"],
    [null, ""],
    [false, ""],
    [0, ""],
  ])("is not equal", (actual, expected) => {
    expect(() => equal(actual, expected)).toThrowError();
  });

  describe("typecheck", () => {
    it.skip("narrowing works correctly", () => {
      const x: unknown = Math.random() ? "a" : 1;
      equal(x, 1);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: number = x;
    });
    it.skip("narrowing works correctly", () => {
      const x: number | string = Math.random() ? "a" : 1;
      equal(x, 1);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: number = x;
    });
    it.skip("narrowing works correctly", () => {
      const x: "a" | "b" = Math.random() ? "a" : "b";
      equal(x, "a" as const);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: "a" = x;
    });
  });
});

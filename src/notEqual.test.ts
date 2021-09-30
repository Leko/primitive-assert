import { notEqual } from "./notEqual.js";

describe("notEqual", () => {
  test.concurrent.each([
    [1, 1],
    [null, null],
    [undefined, undefined],
    [true, true],
    ["a", "a"],
  ])("is not equal", (actual, expected) => {
    expect(() => notEqual(actual, expected)).toThrowError();
  });
  test.concurrent.each([
    [1, "1"],
    [null, ""],
    [false, ""],
    [0, ""],
  ])("is equal", (actual, expected) => {
    notEqual(actual, expected);
  });

  describe("typecheck", () => {
    it.skip("narrowing works correctly", () => {
      const x: string | number = Math.random() ? "a" : 1;
      notEqual(x, 1);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: string = x;
    });
    it.skip("narrowing works correctly", () => {
      const x: "a" | "b" = Math.random() ? "a" : "b";
      notEqual(x, "a" as const);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: "b" = x;
    });
  });
});

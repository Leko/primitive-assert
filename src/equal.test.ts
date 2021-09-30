import { equal } from "./equal.js";

describe("equal", () => {
  test.concurrent.each([
    [1, 1],
    [null, null],
    [undefined, undefined],
    [true, true],
    ["a", "a"],
  ])("is equal", (a, b) => {
    equal(a, b);
  });
  test.concurrent.each([
    [1, "1"],
    [null, ""],
    [false, ""],
    [0, ""],
  ])("is not equal", (a, b) => {
    expect(() => equal(a, b)).toThrowError();
  });
});

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
});

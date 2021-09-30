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
});

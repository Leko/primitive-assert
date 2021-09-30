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
});

import { isFiniteNumber } from "./isFiniteNumber.js";

describe("isFiniteNumber", () => {
  test.concurrent.each([{ v: 0 }, { v: 1 }])("is finite", ({ v }) => {
    isFiniteNumber(v);
  });
  test.concurrent.each([{ v: Infinity }, { v: NaN }])(
    "is not finute",
    ({ v }) => {
      expect(() => isFiniteNumber(v)).toThrowError();
    }
  );
  test.concurrent.each([
    { v: true },
    { v: false },
    { v: "" },
    { v: "a" },
    { v: [] },
    { v: {} },
    { v: null },
    { v: undefined },
  ])("is not number", ({ v }) => {
    expect(() => isFiniteNumber(v)).toThrowError();
  });
});

import { isString } from "./isString.js";

describe("isString", () => {
  test.concurrent.each([{ v: "" }, { v: "a" }])("is string", ({ v }) => {
    isString(v);
  });
  test.concurrent.each([
    { v: 0 },
    { v: false },
    { v: null },
    { v: undefined },
    { v: NaN },
    { v: [] },
    { v: {} },
  ])("is not string", ({ v }) => {
    expect(() => isString(v)).toThrowError();
  });
});

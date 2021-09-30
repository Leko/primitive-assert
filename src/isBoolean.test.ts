import { isBoolean } from "./isBoolean.js";

describe("isBoolean", () => {
  test.concurrent.each([{ v: true }, { v: false }])("is boolean", ({ v }) => {
    isBoolean(v);
  });
  test.concurrent.each([
    { v: 0 },
    { v: 1 },
    { v: "" },
    { v: "a" },
    { v: [] },
    { v: {} },
    { v: NaN },
    { v: null },
    { v: undefined },
  ])("is not boolean", ({ v }) => {
    expect(() => isBoolean(v)).toThrowError();
  });
});

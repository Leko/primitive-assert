import { isArray } from "./isArray.js";

describe("isArray", () => {
  test.concurrent.each([{ v: [] }, { v: [1] }])("is array", ({ v }) => {
    isArray(v);
  });
  test.concurrent.each([
    { v: { length: 1 } },
    { v: "" },
    { v: 0 },
    { v: false },
    { v: null },
    { v: undefined },
    { v: NaN },
  ])("is not array", ({ v }) => {
    expect(() => isArray(v)).toThrowError();
  });
});

import { assert } from "./assert.js";

describe("assert", () => {
  test.concurrent.each([
    { v: "a" },
    { v: 1 },
    { v: true },
    { v: {} },
    { v: [] },
    { v: Infinity },
  ])("truthy", ({ v }) => {
    assert(v);
  });
  test.concurrent.each([
    { v: "" },
    { v: 0 },
    { v: false },
    { v: null },
    { v: undefined },
    { v: NaN },
  ])("falsy", ({ v }) => {
    expect(() => assert(v)).toThrowError();
  });
});

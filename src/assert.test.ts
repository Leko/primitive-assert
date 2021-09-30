import { assert } from "./assert.js";

describe("assert", () => {
  test.concurrent.each(["a", 1, true, {}, [], Infinity])("truthy", (value) => {
    assert(value);
  });
  test.concurrent.each(["", 0, false, null, undefined, NaN])(
    "falsy",
    (value) => {
      expect(() => assert(value)).toThrowError();
    }
  );
});

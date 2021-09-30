import { isArray } from "./isArray.js";

describe("isArray", () => {
  test.concurrent.each([{ value: [] }, { value: [1] }])(
    "is array",
    ({ value }) => {
      isArray(value);
    }
  );
  test.concurrent.each([{ length: 1 }, "", 0, false, null, undefined, NaN])(
    "is not array",
    (value) => {
      expect(() => isArray(value)).toThrowError();
    }
  );
});

import { isNonNullish } from "./isNonNullish.js";

describe("isNonNullish", () => {
  test.concurrent.each([{ v: 0 }, { v: "" }, { v: NaN }, { v: false }])(
    "is not nullish",
    ({ v }) => {
      isNonNullish(v);
    }
  );
  test.concurrent.each([{ v: null }, { v: undefined }])(
    "is nullish",
    ({ v }) => {
      expect(() => isNonNullish(v)).toThrowError();
    }
  );
});

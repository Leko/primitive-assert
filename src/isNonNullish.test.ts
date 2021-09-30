import { isNonNullish } from "./isNonNullish.js";

describe("isNonNullish", () => {
  test.concurrent.each([0, "", NaN, false])("is not nullish", (value) => {
    isNonNullish(value);
  });
  test.concurrent.each([null, undefined])("is nullish", (value) => {
    expect(() => isNonNullish(value)).toThrowError();
  });
});

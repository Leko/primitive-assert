import { isBigInt } from "./isBigInt.js";

describe("isBigInt", () => {
  test.concurrent.each([BigInt(1), BigInt("1"), 1n])("is BigInt", (value) => {
    isBigInt(value);
  });
  test.concurrent.each([0, 1, "", "a", [], {}, NaN, null, undefined])(
    "is not BigInt",
    (value) => {
      expect(() => isBigInt(value)).toThrowError();
    }
  );
});

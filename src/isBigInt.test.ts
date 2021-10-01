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
  describe("typecheck", () => {
    it.skip("narrowing works correctly", () => {
      const x: unknown = Math.random() ? "a" : 1n;
      isBigInt(x);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: BigInt = x;
    });
    it.skip("narrowing works correctly", () => {
      const x: BigInt | string = Math.random() ? "a" : 1n;
      isBigInt(x);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: BigInt = x;
    });
  });
});

import { isNonNullish } from "./isNonNullish.js";

describe("isNonNullish", () => {
  test.concurrent.each([0, "", NaN, false])("is not nullish", (value) => {
    isNonNullish(value);
  });
  test.concurrent.each([null, undefined])("is nullish", (value) => {
    expect(() => isNonNullish(value)).toThrowError();
  });

  describe("typecheck", () => {
    it.skip("unwrap null", () => {
      const x: number | null = [Math.random()].find((n) => n > 0) ?? null;
      // @ts-expect-error can be null
      x.toFixed();
      isNonNullish(x);
      x.toFixed();
    });
    it.skip("unwrap undefined", () => {
      const x: number | undefined = [Math.random()].find((n) => n > 0);
      // @ts-expect-error can be undefined
      x.toFixed();
      isNonNullish(x);
      x.toFixed();
    });
  });
});

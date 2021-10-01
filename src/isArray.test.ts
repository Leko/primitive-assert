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

  describe("typecheck", () => {
    it.skip("narrowing works correctly", () => {
      const x: unknown = Math.random() ? "a" : ["a"];
      isArray(x);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: unknown[] = x;
    });
    it.skip("it keeps element type", () => {
      const x: string[] | string = Math.random() ? "a" : ["a"];
      isArray(x);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: string[] = x;
    });
  });
});

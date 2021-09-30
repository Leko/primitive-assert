import { isBigInt } from "./isBigInt.js";

describe("isBigInt", () => {
  test.concurrent.each([{ v: BigInt(1) }, { v: BigInt("1") }, { v: 1n }])(
    "is BigInt",
    ({ v }) => {
      isBigInt(v);
    }
  );
  test.concurrent.each([
    { v: 0 },
    { v: 1 },
    { v: "" },
    { v: "a" },
    { v: [] },
    { v: {} },
    { v: NaN },
    { v: null },
    { v: undefined },
  ])("is not BigInt", ({ v }) => {
    expect(() => isBigInt(v)).toThrowError();
  });
});

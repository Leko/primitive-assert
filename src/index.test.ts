import {
  equal,
  assert,
  isArray,
  isString,
  isFiniteNumber,
  isBoolean,
  isBigInt,
  isNonNullish,
  isInstanceOf,
} from "./index";

describe("equal", () => {
  test.concurrent.each([
    [1, 1],
    [null, null],
    [undefined, undefined],
    [true, true],
    ["a", "a"],
  ])("is equal", (a, b) => {
    equal(a, b);
  });
  test.concurrent.each([
    [1, "1"],
    [null, ""],
    [false, ""],
    [0, ""],
  ])("is not equal", (a, b) => {
    expect(() => equal(a, b)).toThrowError();
  });
});

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

describe("isArray", () => {
  test.concurrent.each([{ v: [] }, { v: [1] }])("is array", ({ v }) => {
    isArray(v);
  });
  test.concurrent.each([
    { v: "" },
    { v: 0 },
    { v: false },
    { v: null },
    { v: undefined },
    { v: NaN },
  ])("is not array", ({ v }) => {
    expect(() => isArray(v)).toThrowError();
  });
});

describe("isString", () => {
  test.concurrent.each([{ v: "" }, { v: "a" }])("is string", ({ v }) => {
    isString(v);
  });
  test.concurrent.each([
    { v: 0 },
    { v: false },
    { v: null },
    { v: undefined },
    { v: NaN },
    { v: [] },
    { v: {} },
  ])("is not string", ({ v }) => {
    expect(() => isString(v)).toThrowError();
  });
});

describe("isFiniteNumber", () => {
  test.concurrent.each([{ v: 0 }, { v: 1 }])("is finite", ({ v }) => {
    isFiniteNumber(v);
  });
  test.concurrent.each([{ v: Infinity }, { v: NaN }])(
    "is not finute",
    ({ v }) => {
      expect(() => isFiniteNumber(v)).toThrowError();
    }
  );
  test.concurrent.each([
    { v: true },
    { v: false },
    { v: "" },
    { v: "a" },
    { v: [] },
    { v: {} },
    { v: null },
    { v: undefined },
  ])("is not number", ({ v }) => {
    expect(() => isFiniteNumber(v)).toThrowError();
  });
});

describe("isBoolean", () => {
  test.concurrent.each([{ v: true }, { v: false }])("is boolean", ({ v }) => {
    isBoolean(v);
  });
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
  ])("is not boolean", ({ v }) => {
    expect(() => isBoolean(v)).toThrowError();
  });
});

describe("isBigInt", () => {
  test.concurrent.each([{ v: BigInt(1) }, { v: 1n }])("is BigInt", ({ v }) => {
    isBigInt(v);
  });
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

describe("isInstanceOf", () => {
  class A {
    hoge() {}
  }
  class B {
    foo() {}
  }
  class C extends A {
    bar() {}
  }

  test.concurrent.each([new A(), new C()])("is instance of", (instance) => {
    isInstanceOf(instance, A);
  });
  test.concurrent.each([new B()])("is not instance of", (instance) => {
    expect(() => isInstanceOf(instance, A)).toThrowError();
  });
});

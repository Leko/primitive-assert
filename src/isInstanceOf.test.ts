import { isInstanceOf } from "./isInstanceOf.js";

describe("isInstanceOf", () => {
  class A {}
  class B {}
  class C extends A {}

  test.concurrent.each([new A(), new C()])("is instance of", (instance) => {
    isInstanceOf(instance, A);
  });
  test.concurrent.each([new B()])("is not instance of", (instance) => {
    expect(() => isInstanceOf(instance, A)).toThrowError();
  });
});

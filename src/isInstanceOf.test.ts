import { isInstanceOf } from "./isInstanceOf.js";

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

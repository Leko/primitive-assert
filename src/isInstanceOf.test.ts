import { isInstanceOf } from "./isInstanceOf.js";

describe("isInstanceOf", () => {
  class A {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    hoge() {}
  }
  class B {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    foo() {}
  }
  class C extends A {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    bar() {}
  }

  test.concurrent.each([new A(), new C()])("is instance of", (instance) => {
    isInstanceOf(instance, A);
  });
  test.concurrent.each([new B()])("is not instance of", (instance) => {
    expect(() => isInstanceOf(instance, A)).toThrowError();
  });

  describe("typecheck", () => {
    it.skip("narrowing works correctly", () => {
      const x = Math.random() ? new C() : new B();
      isInstanceOf(x, C);
      x.hoge();
      // @ts-expect-error foo is not defined in C
      x.foo();
      x.bar();
    });
    it.skip("narrowing works correctly", () => {
      const x = Math.random() ? new C() : new B();
      isInstanceOf(x, B);
      x.foo();
      // @ts-expect-error bar is not defined in B
      x.bar();
    });
  });
});

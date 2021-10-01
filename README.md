# primitive-assert

![npm](https://img.shields.io/npm/v/primitive-assert)
![NPM](https://img.shields.io/npm/l/primitive-assert)
![Codecov](https://img.shields.io/codecov/c/github/Leko/primitive-assert)
![GitHub branch checks state](https://img.shields.io/github/checks-status/Leko/primitive-assert/main)

An assertion library to be used at runtime.

- Runtime agnostic: It works on Node.js and Deno, Electron, and browser.
- Type friendly: It not only throws exceptions, but also supports narrowing of the type with [assertion function](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)
- Zero dependency
- Tiny (~13 kb gzipped)

## Motivation

Even if we are using TypeScript, we still need to check for the existence of values and types, for example, when parsing untrustworthy JSON, handling user inputs, etc. Casting untrusted values to `any`, and not handling them properly can lead to unexpected bugs. Writing `if` and `throw` statements and handling them properly can make the code look bad. Worse yet, we can even embed unexpected bugs by using the wrong if condition such as handling boundary value or falsy values.  
Alternatively, you could consider using the [assert module](https://nodejs.org/api/assert.html) in Node.js. However, that will only work with Node.js unless you use [a polyfill](https://www.npmjs.com/package/assert) or something similar.

We do not need rich assertion libraries like [jest](https://github.com/facebook/jest) or [power-assert](https://github.com/power-assert-js/power-assert) in this case. We just want to lightly verify that we can handle untrustworthy values. This library is intended to be used at runtime. As such, it is not an assertion library that requires rich output to be used for unit tests.

## Getting Started

Install primitive-assert using yarn:

```
yarn add primitive-assert
```

Or npm:

```
npm install --save primitive-assert
```

Let's get started by writing an assertion.

```ts
import * as assert from "primitive-assert";

const y = JSON.parse('{"data":null}');
assert.isArray(y.data); // => throws an error

const z = parseInt("a user input", 10);
assert.isFiniteNumber(z); // => throws an error
```

For all available methods, please check the [API documentation here](./docs/api.md).

## License

primitive-assert is [MIT licensed](./LICENSE).

API

# API

## Table of contents

### Functions

- [assert](api.md#assert)
- [equal](api.md#equal)
- [isArray](api.md#isarray)
- [isBigInt](api.md#isbigint)
- [isBoolean](api.md#isboolean)
- [isFiniteNumber](api.md#isfinitenumber)
- [isInstanceOf](api.md#isinstanceof)
- [isNonNullish](api.md#isnonnullish)
- [isString](api.md#isstring)
- [notEqual](api.md#notequal)

## Functions

### assert

▸ **assert**(`value`, `message?`, `Err?`): asserts value

Asserts the value is a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

**`example`**
```typescript
import { assert } from 'primitive-assert'

assert('abc')
assert(1 === 1)
assert(1 === 0) // => throws error
assert('') // => throws error
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `ErrorConstructor` |

#### Returns

asserts value

#### Defined in

[assert.ts:16](https://github.com/Leko/primitive-assert/blob/b52b46b/src/assert.ts#L16)

___

### equal

▸ **equal**<`T`\>(`actual`, `expected`, `message?`, `Err?`): asserts actual is T

Asserts the first argument is exactly the same as the second argument.

**`example`**
```typescript
import { equal } from 'primitive-assert'

equal('abc', 'abc')
equal(1, 1)
equal('1', 1) // => throws error
equal({}, {}) // => throws error
equal(NaN, NaN) // => throws error
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `unknown` |
| `expected` | `T` |
| `message?` | `string` |
| `Err` | `ErrorConstructor` |

#### Returns

asserts actual is T

#### Defined in

[equal.ts:17](https://github.com/Leko/primitive-assert/blob/b52b46b/src/equal.ts#L17)

___

### isArray

▸ **isArray**<`T`\>(`value`, `message?`, `Err?`): asserts value is T[]

Asserts the value is an array, not an array-like.

**`example`**
```typescript
import { isArray } from 'primitive-assert'

isArray([])
isArray([1, 2, 3])
isArray(null) // => throws error
isArray({ length: 1 }) // => throws error
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value is T[]

#### Defined in

[isArray.ts:16](https://github.com/Leko/primitive-assert/blob/b52b46b/src/isArray.ts#L16)

___

### isBigInt

▸ **isBigInt**(`value`, `message?`, `Err?`): asserts value is number

Asserts the value is a BigInt.

**`example`**
```typescript
import { isBigInt } from 'primitive-assert'

isBigInt(BigInt(123))
isBigInt(BigInt('123'))
isBigInt(1n)
isBigInt(1) // => throws error
isBigInt('1') // => throws error
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value is number

#### Defined in

[isBigInt.ts:17](https://github.com/Leko/primitive-assert/blob/b52b46b/src/isBigInt.ts#L17)

___

### isBoolean

▸ **isBoolean**(`value`, `message?`, `Err?`): asserts value is string

Asserts the value is a boolean.

**`example`**
```typescript
import { isBoolean } from 'primitive-assert'

isBoolean(true)
isBoolean(false)
isBoolean(1 !== 1)
isBoolean(null) // => throws error
isBoolean('') // => throws error
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value is string

#### Defined in

[isBoolean.ts:17](https://github.com/Leko/primitive-assert/blob/b52b46b/src/isBoolean.ts#L17)

___

### isFiniteNumber

▸ **isFiniteNumber**(`value`, `message?`, `Err?`): asserts value is number

Asserts the value is a finite number. `NaN` and `Infinity` will be rejected.

**`example`**
```typescript
import { isFiniteNumber } from 'primitive-assert'

isFiniteNumber(123)
isFiniteNumber(0)
isFiniteNumber(1.2345)
isFiniteNumber(Infinity) // => throws error
isFiniteNumber(-Infinity) // => throws error
isFiniteNumber(NaN) // => throws error
isFiniteNumber('123') // => throws error
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value is number

#### Defined in

[isFiniteNumber.ts:19](https://github.com/Leko/primitive-assert/blob/b52b46b/src/isFiniteNumber.ts#L19)

___

### isInstanceOf

▸ **isInstanceOf**<`T`\>(`value`, `constructor`, `message?`, `Err?`): asserts value is InstanceType<T\>

Asserts the first argument is an instance of the second argument.

**`example`**
```typescript
import { isInstanceOf } from 'primitive-assert'

isInstanceOf(new TypeError(), Error)
isInstanceOf(new TypeError(), TypeError)
isInstanceOf({}, Error) // => throws error
```

**`example`**
```typescript
import { isInstanceOf } from 'primitive-assert'

class A {}
class B extends A {}
class C {}

isInstanceOf(new A(), A)
isInstanceOf(new B(), A)
isInstanceOf(new B(), B)
isInstanceOf(new C(), A) // => throws error
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `unknown`[]) => `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `constructor` | `T` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value is InstanceType<T\>

#### Defined in

[isInstanceOf.ts:29](https://github.com/Leko/primitive-assert/blob/b52b46b/src/isInstanceOf.ts#L29)

___

### isNonNullish

▸ **isNonNullish**(`value`, `message?`, `Err?`): asserts value

Asserts the value is not a `null` nor `undefined`.

**`example`**
```typescript
import { isNonNullish } from 'primitive-assert'

isNonNullish(false)
isNonNullish(0)
isNonNullish('')
isNonNullish(null) // => throws error
isNonNullish(undefined) // => throws error
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value

#### Defined in

[isNonNullish.ts:17](https://github.com/Leko/primitive-assert/blob/b52b46b/src/isNonNullish.ts#L17)

___

### isString

▸ **isString**(`value`, `message?`, `Err?`): asserts value is string

Asserts the value is a string.

**`example`**
```typescript
import { isString } from 'primitive-assert'

isString('a')
isString('')
isString(1) // => throws error
isString(Symbol('a')) // => throws error
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value is string

#### Defined in

[isString.ts:16](https://github.com/Leko/primitive-assert/blob/b52b46b/src/isString.ts#L16)

___

### notEqual

▸ **notEqual**<`T`, `E`\>(`actual`, `expected`, `message?`, `Err?`): asserts actual is Not<T, E\>

Asserts the first argument is not exactly the same as the second argument.

**`example`**
```typescript
import { notEqual } from 'primitive-assert'

notEqual('1', 1)
notEqual('a', 'b')
notEqual({}, {})
notEqual(NaN, NaN)
notEqual('abc', 'abc') // => throws error
notEqual(1, 1) // => throws error
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |
| `E` | `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `T` |
| `expected` | `E` |
| `message?` | `string` |
| `Err` | `ErrorConstructor` |

#### Returns

asserts actual is Not<T, E\>

#### Defined in

[notEqual.ts:20](https://github.com/Leko/primitive-assert/blob/b52b46b/src/notEqual.ts#L20)

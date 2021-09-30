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

## Functions

### assert

▸ **assert**(`value`, `message?`, `Err?`): asserts value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `message?` | `string` |
| `Err` | `ErrorConstructor` |

#### Returns

asserts value

#### Defined in

[index.ts:16](https://github.com/Leko/primitive-assert/blob/dac8ba7/src/index.ts#L16)

___

### equal

▸ **equal**<`T`\>(`actual`, `expected`, `message?`, `Err?`): asserts actual is T

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

[index.ts:3](https://github.com/Leko/primitive-assert/blob/dac8ba7/src/index.ts#L3)

___

### isArray

▸ **isArray**<`T`\>(`value`, `message?`, `Err?`): asserts value is T[]

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

[index.ts:24](https://github.com/Leko/primitive-assert/blob/dac8ba7/src/index.ts#L24)

___

### isBigInt

▸ **isBigInt**(`value`, `message?`, `Err?`): asserts value is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value is number

#### Defined in

[index.ts:56](https://github.com/Leko/primitive-assert/blob/dac8ba7/src/index.ts#L56)

___

### isBoolean

▸ **isBoolean**(`value`, `message?`, `Err?`): asserts value is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value is string

#### Defined in

[index.ts:32](https://github.com/Leko/primitive-assert/blob/dac8ba7/src/index.ts#L32)

___

### isFiniteNumber

▸ **isFiniteNumber**(`value`, `message?`, `Err?`): asserts value is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value is number

#### Defined in

[index.ts:48](https://github.com/Leko/primitive-assert/blob/dac8ba7/src/index.ts#L48)

___

### isInstanceOf

▸ **isInstanceOf**<`T`\>(`value`, `constructor`, `message?`, `Err?`): asserts value is InstanceType<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

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

[index.ts:73](https://github.com/Leko/primitive-assert/blob/dac8ba7/src/index.ts#L73)

___

### isNonNullish

▸ **isNonNullish**(`value`, `message?`, `Err?`): asserts value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value

#### Defined in

[index.ts:64](https://github.com/Leko/primitive-assert/blob/dac8ba7/src/index.ts#L64)

___

### isString

▸ **isString**(`value`, `message?`, `Err?`): asserts value is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `message?` | `string` |
| `Err` | `TypeErrorConstructor` |

#### Returns

asserts value is string

#### Defined in

[index.ts:40](https://github.com/Leko/primitive-assert/blob/dac8ba7/src/index.ts#L40)

[@otp/core-ui](../README.md) / [Exports](../modules.md) / Store

# Class: Store<T\>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* **Store**

## Table of contents

### Constructors

- [constructor](store.md#constructor)

### Properties

- [\_state$](store.md#_state$)
- [state$](store.md#state$)

### Methods

- [setState](store.md#setstate)
- [state](store.md#state)

## Constructors

### constructor

\+ **new Store**<T\>(`initialState`: T): [*Store*](store.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`initialState` | T |

**Returns:** [*Store*](store.md)<T\>

Defined in: store.ts:5

## Properties

### \_state$

• `Private` **\_state$**: *BehaviorSubject*<T\>

Defined in: store.ts:5

___

### state$

• **state$**: *Observable*<T\>

Defined in: store.ts:4

## Methods

### setState

▸ **setState**(`nextState`: T): *void*

#### Parameters:

Name | Type |
------ | ------ |
`nextState` | T |

**Returns:** *void*

Defined in: store.ts:16

___

### state

▸ **state**(): T

**Returns:** T

Defined in: store.ts:12

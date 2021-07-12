[@otp/core-ui](../README.md) / [Exports](../modules.md) / BusyLoader

# Class: BusyLoader

## Hierarchy

* **BusyLoader**

## Implements

* [*IRunnableFetchInterceptor*](../interfaces/irunnablefetchinterceptor.md)

## Table of contents

### Constructors

- [constructor](busyloader.md#constructor)

### Properties

- [fetchInterceptorModel](busyloader.md#fetchinterceptormodel)

### Methods

- [runFetchInterceptor](busyloader.md#runfetchinterceptor)

## Constructors

### constructor

\+ **new BusyLoader**(`fetchInterceptorModel`: [*IFetchInterceptorModel*](../interfaces/ifetchinterceptormodel.md)): [*BusyLoader*](busyloader.md)

#### Parameters:

Name | Type |
------ | ------ |
`fetchInterceptorModel` | [*IFetchInterceptorModel*](../interfaces/ifetchinterceptormodel.md) |

**Returns:** [*BusyLoader*](busyloader.md)

Defined in: fetch-interceptors/busy-loader.ts:6

## Properties

### fetchInterceptorModel

• **fetchInterceptorModel**: [*IFetchInterceptorModel*](../interfaces/ifetchinterceptormodel.md)

Implementation of: [IRunnableFetchInterceptor](../interfaces/irunnablefetchinterceptor.md).[fetchInterceptorModel](../interfaces/irunnablefetchinterceptor.md#fetchinterceptormodel)

Defined in: fetch-interceptors/busy-loader.ts:6

## Methods

### runFetchInterceptor

▸ **runFetchInterceptor**(): *void*

**Returns:** *void*

Implementation of: [IRunnableFetchInterceptor](../interfaces/irunnablefetchinterceptor.md)

Defined in: fetch-interceptors/busy-loader.ts:12

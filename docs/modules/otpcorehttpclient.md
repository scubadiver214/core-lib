[@otp/core-ui](../README.md) / [Exports](../modules.md) / OTPCoreHttpClient

# Namespace: OTPCoreHttpClient

## Table of contents

### Functions

- [deleteData](otpcorehttpclient.md#deletedata)
- [get](otpcorehttpclient.md#get)
- [http](otpcorehttpclient.md#http)
- [patch](otpcorehttpclient.md#patch)
- [post](otpcorehttpclient.md#post)
- [put](otpcorehttpclient.md#put)
- [registerFetchAPIInterceptor](otpcorehttpclient.md#registerfetchapiinterceptor)

## Functions

### deleteData

▸ **deleteData**<T\>(`path`: *string*, `headers?`: *any*, `id?`: *any*): *Observable*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |
`headers?` | *any* |
`id?` | *any* |

**Returns:** *Observable*<T\>

Defined in: otp-core-http-client.ts:34

___

### get

▸ **get**<T\>(`path`: *string*, `headers?`: *any*, `body?`: *any*): *Observable*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |
`headers?` | *any* |
`body?` | *any* |

**Returns:** *Observable*<T\>

Defined in: otp-core-http-client.ts:24

___

### http

▸ **http**<T\>(`request`: RequestInfo): *Observable*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`request` | RequestInfo |

**Returns:** *Observable*<T\>

Defined in: otp-core-http-client.ts:11

___

### patch

▸ **patch**<T\>(`path`: *string*, `body`: *any*, `headers?`: *any*): *Observable*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |
`body` | *any* |
`headers?` | *any* |

**Returns:** *Observable*<T\>

Defined in: otp-core-http-client.ts:66

___

### post

▸ **post**<T\>(`path`: *string*, `body`: *any*, `headers?`: *any*): *Observable*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |
`body` | *any* |
`headers?` | *any* |

**Returns:** *Observable*<T\>

Defined in: otp-core-http-client.ts:46

___

### put

▸ **put**<T\>(`path`: *string*, `body`: *any*, `headers?`: *any*): *Observable*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |
`body` | *any* |
`headers?` | *any* |

**Returns:** *Observable*<T\>

Defined in: otp-core-http-client.ts:56

___

### registerFetchAPIInterceptor

▸ `Const`**registerFetchAPIInterceptor**(`fetchInterceptorModel`: [*IFetchInterceptorModel*](../interfaces/ifetchinterceptormodel.md)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`fetchInterceptorModel` | [*IFetchInterceptorModel*](../interfaces/ifetchinterceptormodel.md) |

**Returns:** *void*

Defined in: otp-core-http-client.ts:77

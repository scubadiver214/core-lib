[@otp/core-ui](README.md) / Exports

# @otp/core-ui

## Table of contents

### Namespaces

- [LocalStorageHelper](modules/localstoragehelper.md)
- [OTPCoreHttpClient](modules/otpcorehttpclient.md)
- [SessionStorageHelper](modules/sessionstoragehelper.md)
- [UtilityHelper](modules/utilityhelper.md)

### Enumerations

- [AlertType](enums/alerttype.md)
- [HttpStatus](enums/httpstatus.md)
- [HttpStatusCode](enums/httpstatuscode.md)
- [IFetchInterceptorType](enums/ifetchinterceptortype.md)
- [KeyEvents](enums/keyevents.md)

### Classes

- [BusyLoader](classes/busyloader.md)
- [Store](classes/store.md)

### Interfaces

- [IBusyLoader](interfaces/ibusyloader.md)
- [IBusyLoaderSpinner](interfaces/ibusyloaderspinner.md)
- [IDataResponse](interfaces/idataresponse.md)
- [IDateTime](interfaces/idatetime.md)
- [IFetchInterceptorModel](interfaces/ifetchinterceptormodel.md)
- [IFetchLoader](interfaces/ifetchloader.md)
- [IFlexGridQueryStringOptions](interfaces/iflexgridquerystringoptions.md)
- [IGlobalEvent](interfaces/iglobalevent.md)
- [IKeyIndex](interfaces/ikeyindex.md)
- [IODataModel](interfaces/iodatamodel.md)
- [IOtpInstance](interfaces/iotpinstance.md)
- [IOtpInstanceIdInfo](interfaces/iotpinstanceidinfo.md)
- [IOtpInstances](interfaces/iotpinstances.md)
- [IRunnableFetchInterceptor](interfaces/irunnablefetchinterceptor.md)
- [IStartupData](interfaces/istartupdata.md)
- [IStartupDataWrapper](interfaces/istartupdatawrapper.md)

### Type aliases

- [CallbackFunction](modules.md#callbackfunction)
- [Function](modules.md#function)
- [GenericObject](modules.md#genericobject)
- [Predicate](modules.md#predicate)

### Variables

- [fetchApiHooks](modules.md#fetchapihooks)
- [filterBlankValue](modules.md#filterblankvalue)
- [globalEvents](modules.md#globalevents)
- [instanceId](modules.md#instanceid)
- [udsLongToken](modules.md#udslongtoken)
- [xOTPSessionToken](modules.md#xotpsessiontoken)

### Functions

- [apiHeaders](modules.md#apiheaders)
- [convertUTCDateToLocalDate](modules.md#convertutcdatetolocaldate)
- [formatDate](modules.md#formatdate)
- [getCookie](modules.md#getcookie)
- [parseDateTimeStr](modules.md#parsedatetimestr)
- [runFetchInterceptors](modules.md#runfetchinterceptors)

## Type aliases

### CallbackFunction

Ƭ **CallbackFunction**: (...`args`: *any*) => *any*

Defined in: utility-helper.ts:6

___

### Function

Ƭ **Function**<A, B\>: (...`args`: A *extends* *any*[] ? A : [A]) => B

#### Type parameters:

Name | Default |
------ | ------ |
`A` | *any*[] |
`B` | *any* |

Defined in: utility-helper.ts:7

___

### GenericObject

Ƭ **GenericObject**: { [key: string]: *any*;  }

Defined in: utility-helper.ts:4

___

### Predicate

Ƭ **Predicate**<T\>: (`val`: T) => *boolean*

#### Type parameters:

Name |
------ |
`T` |

Defined in: utility-helper.ts:5

## Variables

### fetchApiHooks

• `Const` **fetchApiHooks**: *Array*<[*IRunnableFetchInterceptor*](interfaces/irunnablefetchinterceptor.md)\>

Defined in: fetch-interceptors/run-fetch-interceptors.ts:3

___

### filterBlankValue

• `Const` **filterBlankValue**: *object*

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`blank` | *string* | 'Blank' |
`value` | *string* | '' |

Defined in: constants.ts:88

___

### globalEvents

• `Const` **globalEvents**: *object*

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`controlCenterEvent` | *string* | 'controlCenterEvent' |
`emitChangedEvent` | *string* | 'emitChangedEvent' |
`hideBusySpinner` | *string* | 'hideBusySpinner' |
`openDataSourceHistoryModal` | *string* | 'openDataSourceHistoryModal' |
`otpFlexgridPendingChanges` | *string* | 'otpFlexgridPendingChanges' |
`otpFlexgridResetPendingChanges` | *string* | 'otpFlexgridResetPendingChanges' |
`otpFlexgridSaveAndContinue` | *string* | 'otpFlexgridSaveAndContinue' |

Defined in: constants.ts:21

___

### instanceId

• `Const` **instanceId**: *InstanceId*= 'InstanceId'

Defined in: constants.ts:2

___

### udsLongToken

• `Const` **udsLongToken**: *UDSLongToken*= 'UDSLongToken'

Defined in: constants.ts:3

___

### xOTPSessionToken

• `Const` **xOTPSessionToken**: *xOTPSessionToken*= 'xOTPSessionToken'

Defined in: constants.ts:1

## Functions

### apiHeaders

▸ `Const`**apiHeaders**(): *any*

**Returns:** *any*

Defined in: headers-helper.ts:5

___

### convertUTCDateToLocalDate

▸ `Const`**convertUTCDateToLocalDate**(`date`: Date): Date

#### Parameters:

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** Date

Defined in: date-time.ts:59

___

### formatDate

▸ `Const`**formatDate**(`date`: *string*): *string*

#### Parameters:

Name | Type |
------ | ------ |
`date` | *string* |

**Returns:** *string*

Defined in: date-time.ts:67

___

### getCookie

▸ `Const`**getCookie**(`name`: *string*): *string*

#### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *string*

Defined in: cookie-helper.ts:1

___

### parseDateTimeStr

▸ `Const`**parseDateTimeStr**(`dateTimeStr`: *string*): [*IDateTime*](interfaces/idatetime.md)

#### Parameters:

Name | Type |
------ | ------ |
`dateTimeStr` | *string* |

**Returns:** [*IDateTime*](interfaces/idatetime.md)

Defined in: date-time.ts:10

___

### runFetchInterceptors

▸ `Const`**runFetchInterceptors**(): *void*

**Returns:** *void*

Defined in: fetch-interceptors/run-fetch-interceptors.ts:5

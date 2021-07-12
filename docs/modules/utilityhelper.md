[@otp/core-ui](../README.md) / [Exports](../modules.md) / UtilityHelper

# Namespace: UtilityHelper

## Table of contents

### Functions

- [arrayFindObjectIndexByProp](utilityhelper.md#arrayfindobjectindexbyprop)
- [arraySort](utilityhelper.md#arraysort)
- [arraysEqual](utilityhelper.md#arraysequal)
- [compact](utilityhelper.md#compact)
- [contains](utilityhelper.md#contains)
- [delay](utilityhelper.md#delay)
- [flatten](utilityhelper.md#flatten)
- [forkJoinObservables](utilityhelper.md#forkjoinobservables)
- [formUrlParam](utilityhelper.md#formurlparam)
- [generateRandomString](utilityhelper.md#generaterandomstring)
- [hasValidFileExtension](utilityhelper.md#hasvalidfileextension)
- [isEmpty](utilityhelper.md#isempty)
- [isFilenameValid](utilityhelper.md#isfilenamevalid)
- [queryKeyArrayBuilder](utilityhelper.md#querykeyarraybuilder)
- [queryStringBuilder](utilityhelper.md#querystringbuilder)
- [removeDuplicates](utilityhelper.md#removeduplicates)
- [removeParentWithoutAnyChild](utilityhelper.md#removeparentwithoutanychild)
- [sortArrayByType](utilityhelper.md#sortarraybytype)
- [sum](utilityhelper.md#sum)
- [sumBy](utilityhelper.md#sumby)
- [unique](utilityhelper.md#unique)

## Functions

### arrayFindObjectIndexByProp

▸ `Const`**arrayFindObjectIndexByProp**<T\>(`arr`: T[], `prop`: *string* \| *number*, `val`: *string*): *number*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arr` | T[] |
`prop` | *string* \| *number* |
`val` | *string* |

**Returns:** *number*

Defined in: utility-helper.ts:45

___

### arraySort

▸ `Const`**arraySort**<T\>(`array`: T[], `property`: *string*): T[]

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`array` | T[] |
`property` | *string* |

**Returns:** T[]

Defined in: utility-helper.ts:67

___

### arraysEqual

▸ `Const`**arraysEqual**<T\>(`a`: T[], `b`: T[]): *boolean*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`a` | T[] |
`b` | T[] |

**Returns:** *boolean*

Defined in: utility-helper.ts:49

___

### compact

▸ `Const`**compact**<T\>(`arr?`: *any*[]): T[]

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`arr` | *any*[] | ... |

**Returns:** T[]

Defined in: utility-helper.ts:110

___

### contains

▸ `Const`**contains**(`s1`: *string*, `s2?`: *string*): *boolean*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`s1` | *string* | - |
`s2` | *string* | '' |

**Returns:** *boolean*

Defined in: utility-helper.ts:112

___

### delay

▸ `Const`**delay**(`fn`: [*CallbackFunction*](../modules.md#callbackfunction), `wait`: *number*, ...`args`: *any*[]): *number*

#### Parameters:

Name | Type |
------ | ------ |
`fn` | [*CallbackFunction*](../modules.md#callbackfunction) |
`wait` | *number* |
`...args` | *any*[] |

**Returns:** *number*

Defined in: utility-helper.ts:114

___

### flatten

▸ `Const`**flatten**<T\>(`array`: T[], `prop`: *string*): T[]

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`array` | T[] |
`prop` | *string* |

**Returns:** T[]

Defined in: utility-helper.ts:76

___

### forkJoinObservables

▸ `Const`**forkJoinObservables**(`observables`: *Observable*<*any*[]\>[]): *Observable*<*any*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`observables` | *Observable*<*any*[]\>[] |

**Returns:** *Observable*<*any*[]\>

Defined in: utility-helper.ts:10

___

### formUrlParam

▸ `Const`**formUrlParam**(`url`: *string*, `data`: *string*[]): *string*

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* |
`data` | *string*[] |

**Returns:** *string*

Defined in: utility-helper.ts:131

___

### generateRandomString

▸ `Const`**generateRandomString**(): *string*

**Returns:** *string*

Defined in: utility-helper.ts:23

___

### hasValidFileExtension

▸ `Const`**hasValidFileExtension**(`fileName`: *string*, `validFileExtensions`: *string*[]): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`fileName` | *string* |
`validFileExtensions` | *string*[] |

**Returns:** *boolean*

Defined in: utility-helper.ts:106

___

### isEmpty

▸ `Const`**isEmpty**(`obj`: [*GenericObject*](../modules.md#genericobject)): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`obj` | [*GenericObject*](../modules.md#genericobject) |

**Returns:** *boolean*

Defined in: utility-helper.ts:14

___

### isFilenameValid

▸ `Const`**isFilenameValid**(`filename`: *string*): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`filename` | *string* |

**Returns:** *boolean*

Defined in: utility-helper.ts:102

___

### queryKeyArrayBuilder

▸ `Const`**queryKeyArrayBuilder**<T\>(`paramsValue`: T[], `paramId`: *string*): *string*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`paramsValue` | T[] |
`paramId` | *string* |

**Returns:** *string*

Defined in: utility-helper.ts:71

___

### queryStringBuilder

▸ `Const`**queryStringBuilder**(`data`: [*GenericObject*](../modules.md#genericobject), `url?`: *string*): *string*

#### Parameters:

Name | Type |
------ | ------ |
`data` | [*GenericObject*](../modules.md#genericobject) |
`url?` | *string* |

**Returns:** *string*

Defined in: utility-helper.ts:88

___

### removeDuplicates

▸ `Const`**removeDuplicates**<T\>(`array`: T[], `prop`: *string*): T[]

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`array` | T[] |
`prop` | *string* |

**Returns:** T[]

Defined in: utility-helper.ts:80

___

### removeParentWithoutAnyChild

▸ `Const`**removeParentWithoutAnyChild**<T\>(`array`: T[], `prop`: *string*): T[]

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`array` | T[] |
`prop` | *string* |

**Returns:** T[]

Defined in: utility-helper.ts:84

___

### sortArrayByType

▸ `Const`**sortArrayByType**(`propertyName`: *string*): *any*

#### Parameters:

Name | Type |
------ | ------ |
`propertyName` | *string* |

**Returns:** *any*

Defined in: utility-helper.ts:34

___

### sum

▸ `Const`**sum**(...`arr`: *number*[]): *number*

#### Parameters:

Name | Type |
------ | ------ |
`...arr` | *number*[] |

**Returns:** *number*

Defined in: utility-helper.ts:118

___

### sumBy

▸ `Const`**sumBy**<T\>(`arr`: T[], `fn`: *string* \| (`a`: T) => *number*): *number*

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *any* |

#### Parameters:

Name | Type |
------ | ------ |
`arr` | T[] |
`fn` | *string* \| (`a`: T) => *number* |

**Returns:** *number*

Defined in: utility-helper.ts:120

___

### unique

▸ `Const`**unique**<T\>(`arr`: *any*[]): T[]

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arr` | *any*[] |

**Returns:** T[]

Defined in: utility-helper.ts:116

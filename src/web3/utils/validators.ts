//-----------------------------------------------------------------------------------------------//
import _ from 'lodash'


//-----------------------------------------------------------------------------------------------//
export enum types {
  /*
  'value',
  'anyValue',
  'zeroValue',
  'nonZeroValue',
  'integerValue',
  'signedValue',
  'unsignedValue',
  'positiveValue',
  'negativeValue',
  'chainId',
  'address',
  'anyAddress',
  'zeroAddress',
  'nonZeroAddress',

  'boolean',
  'anyBoolean',
  'truthy',
  'falsy',
  'number',
  'anyNumber',
  'integer',
  'signed',
  'unsigned',
  'positive',
  'negative',
  'zero',
  'string',
  'anyString',
  */
  'nonEmptyString',
}


const nonEmptyString = (value: any): boolean =>
  typeof value === 'string' &&
  !_.isEmpty(value)


const Validators: { [x in types]: (value: any) => boolean } = {
  [types.nonEmptyString]: nonEmptyString
}


//-----------------------------------------------------------------------------------------------//
export const is = (that: any, expected: types): boolean => Validators[expected](that)


export const slam = (message?: string) => { throw new Error(message) }


export const req = (condition: boolean, message?: string) => condition || slam(message)


export const expect = (that: any) => ({
  toBe: (expected: types) => req(
    is(that, expected),
    `expected ${that} to be ${expected}`,
  ),
  notToBe: (expected: types): boolean => req(
    !is(that, expected),
    `expected ${that} not to be ${expected}`,
  ),
})


//-----------------------------------------------------------------------------------------------//
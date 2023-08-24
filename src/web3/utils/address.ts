//-----------------------------------------------------------------------------------------------//
import { expect, types } from './validators';

//-----------------------------------------------------------------------------------------------//
export const shortAddress = (address: string): string => {
  expect(address).toBe(types.nonEmptyString);
  return address.slice(0, 5) + '...' + address.slice(-4);
};

export const isAddress = (str: any): boolean => {
  if (typeof str == 'string' && str.length == 42 && str.substring(0, 2) == '0x') return true;
  else return false;
};

//-----------------------------------------------------------------------------------------------//

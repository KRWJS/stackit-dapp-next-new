/* #INPUT - INTERFACES
    1. Input addon
    2. Input number
*/

import value from '../../../web3/types/value';
import listedToken from '../../../web3/types/listedToken';

// 1. Input addon
export interface InputAddonProps {
  margin?: string;
  id: string;
  label?: any;
  placeholder?: string;
  value?: value;
  maxValue?: value;
  onChange: Function;
  asset?: listedToken | null;
  addon?: boolean;
  autofocus?: boolean;
}

// 2. Input number
export interface InputNumberProps {
  id: string;
  label: string;
}

/* #UTILS - NUMBER
    1. Check if negative number
*/

// 1. Check if negative number
export const isNegativeNumber = (number: number) => {
  if (typeof number === 'number' && Math.sign(number) === -1) {
    return true;
  }
  return false;
};

export const renderPositiveNegativePrefix = (x: number) => (!isNegativeNumber(x) ? '+' : null);

export const renderPositiveNegativeClass = (x: number) =>
  isNegativeNumber(x) ? 'u-color-red' : 'u-color-green';

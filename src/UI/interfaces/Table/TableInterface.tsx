/* #UI - INTERFACES
    1. Table positions
    2. Table transactions
*/

import BN from '../../../web3/types/bn';

// 1. Table positions
export interface TablePositionsProps {
  asset: string;
  stablecoin: string;
  assetPnl: BN;
  assetPnlPercent: number;
  onClickManage: Function;
  onClickPause: Function;
}

// 2. Table transactions
export interface TableTransactionsProps {
  asset: string;
  stablecoin: string;
  price: BN;
  quantity: BN;
  timestamp: string;
}

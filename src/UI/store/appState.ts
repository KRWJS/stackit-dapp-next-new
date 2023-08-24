import { state } from '../interfaces/Store/StateInterface';
import { AppState } from '../interfaces/Store/appStateInterface';

import BN from '../../web3/types/bn';
import { DAILY } from '../constants/transaction';

export const appInitialState: state<AppState> = {
  userAccount: null,
  userChainId: null,

  // INVEST PAGE
  sellChoice: null,
  buyChoice: null,
  investAmount: undefined,
  userSellBalance: new BN(0),
  activeInvestFrequencyTab: DAILY,

  // DASHBOARD PAGE
  manageModal: false,

  repeat: 1,
  overallPnl: new BN(5432.22),
  overallPnlPercent: 22.32,
  netInvestment: new BN(28000),
  assetPnl: new BN(53.21),
  assetPnlPercent: 2.55,
  assetPrice: new BN(15513.5),
  assetQuantity: new BN(0.011),
  assetTimestamp: '2023-01-08 09:18',
};

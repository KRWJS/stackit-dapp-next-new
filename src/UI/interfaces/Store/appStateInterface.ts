import BN from '../../../web3/types/bn';
import listedToken from '../../../web3/types/listedToken';

// 1. App store
export interface AppState {
  userAccount: string | null;
  userChainId: string | null;

  // INVEST PAGE
  sellChoice: listedToken | null;
  buyChoice: listedToken | null;
  investAmount: BN | undefined;
  userSellBalance: BN;
  activeInvestFrequencyTab: string;


  repeat: number;
  overallPnl: BN;
  overallPnlPercent: number;
  netInvestment: BN;
  assetPnl: BN;
  assetPnlPercent: number;
  assetPrice: BN;
  assetQuantity: BN;
  assetTimestamp: string;
  manageModal: boolean;
}

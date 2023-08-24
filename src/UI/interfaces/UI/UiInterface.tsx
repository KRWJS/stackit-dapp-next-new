/* #UI - INTERFACES
    1. App Logo
    2. Button
    3. Phishing
    4. Investment summary
    5. Banner widget
    6. Asset image pair
    7. Pill
*/

import BN from '../../../web3/types/bn';
import { Metamask } from '../../../web3/types/metamask';
import { stateProps } from '../Store/StateInterface';
import { AppState } from '../Store/appStateInterface';

// 1. App Logo
export interface LogoProps {
  logo: React.ReactNode;
  margin?: string;
}

// 2. Button
export interface ButtonProps {
  icon?: any;
  size?: string;
  color?: string;
  variant?: string;
  onClick?: any;
  title: any;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  disabled?: boolean;
  role?: string;
}

// 3. Phishing
export interface PhishingProps {
  onClick: Function;
  link: string;
  margin?: string;
}

// 4. Investment summary
export interface InvestmentSummaryProps {
  appState: stateProps<AppState>
  margin?: string;
}
export interface InvestmentSummaryItemProps {
  label: string;
  value: number | string;
}
export interface InvestmentSummaryPositionProps {
  label: string;
  value: any;
  prefix?: string;
  suffix?: string;
}

// 5. Banner widget
export interface BannerWidgetProps {
  pnl: BN;
  pnlPercent: number;
  netInvestment: BN;
}

// 6. Asset image pair
export interface AssetImagePairProps {
  asset: string;
  stablecoin: string;
}

// 7. Pill
export interface PillProps {
  icon: React.ReactNode;
  label: string;
}

export interface WalletProps {
  metamask: Metamask;
  appState: any //StateProps<AppStoreProps>;
}

export interface NetworkProps {
  metamask: Metamask;
  appState: any //StateProps<AppStoreProps>;
}

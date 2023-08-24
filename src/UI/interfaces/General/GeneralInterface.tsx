/* #GENERL - INTERFACES
    1. Children
    2. Navigation
*/

import { Metamask } from '../../../web3/types/metamask';
import { stateProps } from '../Store/StateInterface';
import { AppState } from '../Store/appStateInterface';

// 1. Children
export interface ChildrenProps {
  children: React.ReactNode;
}

// 2. Navigation
export interface NavigationProps {
  items: any;
  direction?: string;
  gap?: string;
  icon?: boolean;
}

export interface NavigationLinkProps {
  label: string;
  route: string;
}

export interface PageProps {
  appState: stateProps<AppState>;
  metamask: Metamask;
}

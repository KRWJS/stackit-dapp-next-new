//-----------------------------------------------------------------------------------------------//
import chainInfo from './chainInfo';


//-----------------------------------------------------------------------------------------------//
export enum MetamaskStatus {
  "unavailable" = "unavailable",
  "notConnected" = "notConnected",
  "initializing" = "initializing",
  "connecting" = "connecting",
  "connected" = "connected",
}

export type Metamask = {
  ethereum: any;
  status: MetamaskStatus;
  account: string | null;
  chainId: string | null;
  connect: () => Promise<string[] | null>;
  addChain: (parameters: chainInfo) => Promise<void>;
  switchChain: (chainId: string) => Promise<void>;
}


//-----------------------------------------------------------------------------------------------//
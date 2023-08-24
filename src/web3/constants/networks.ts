//-----------------------------------------------------------------------------------------------//
import Chains from './chains';
import chainInfo from '../types/chainInfo';


//-----------------------------------------------------------------------------------------------//
const Networks: {
  [name in Chains]: chainInfo;
} = {
  [Chains.arbitrum]: {
    chainName: 'Arbitrum One',
    chainId: '0xa4b1',
    nativeCurrency: {
      name: 'Ether',
      decimals: 18,
      symbol: 'ETH',
    },
  },
  /*
  [Chains.bsc]: {
    chainName: 'BNB Chain',
    chainId: '0x38',
    nativeCurrency: {
      name: 'BNB',
      decimals: 18,
      symbol: 'BNB',
    },
  },
  [Chains.ethereum]: {
    chainName: 'Ethereum',
    chainId: '0x1',
    nativeCurrency: {
      name: 'Ether',
      decimals: 18,
      symbol: 'ETH',
    },
  },
  [Chains.polygon]: {
    chainName: 'Polygon',
    chainId: '0x89',
    nativeCurrency: {
      name: 'MATIC',
      decimals: 18,
      symbol: 'MATIC',
    },
  },
  [Chains.aurora]: {
    chainName: 'Aurora',
    chainId: '0x4e454152',
    nativeCurrency: {
      name: 'Ether',
      decimals: 18,
      symbol: 'ETH',
    },
  },
  [Chains.avalanche]: {
    chainName: 'Avalanche',
    chainId: '0xa86a',
    nativeCurrency: {
      name: 'AVAX',
      decimals: 18,
      symbol: 'AVAX',
    },
  },
  [Chains.cronos]: {
    chainName: 'Cronos',
    chainId: '0x19',
    nativeCurrency: {
      name: 'Cronos',
      decimals: 18,
      symbol: 'CRO',
    },
  },
  [Chains.fantom]: {
    chainName: 'Fantom',
    chainId: '0xfa',
    nativeCurrency: {
      name: 'FTM',
      decimals: 18,
      symbol: 'FTM',
    },
  },
  [Chains.optimism]: {
    chainName: 'Optimism',
    chainId: '0xa',
    nativeCurrency: {
      name: 'Ether',
      decimals: 18,
      symbol: 'ETH',
    },
  },
  */
};

export default Networks;


//-----------------------------------------------------------------------------------------------//
export const DEFAULT_NETWORK = Networks.arbitrum;

export const WRONG_NETWORK_OPTION = {
  value: 'unsupported',
  label: 'Wrong Network',
  image: '/icons/icon-wrong-network.svg',
};

export const NETWORK_CHANGE_OPTIONS = [
  {
    value: Chains.arbitrum,
    label: Networks[Chains.arbitrum].chainName || Chains.arbitrum,
    image: '/icons/icon-arb-network.svg',
  },
  /*
  {
    value: Chains.bsc,
    label: Networks[Chains.bsc].chainName || Chains.bsc,
    image: '/icons/icon-bsc-network.svg',
  },
  {
    value: Chains.polygon,
    label: Networks[Chains.polygon].chainName || Chains.polygon,
    image: '/icons/icon-polygon-network.svg',
  },
  {
    value: Chains.avalanche,
    label: Networks[Chains.avalanche].chainName || Chains.avalanche,
    image: '/icons/icon-avalanche-network.svg',
  },
  {
    value: Chains.ethereum,
    label: Networks[Chains.ethereum].chainName || Chains.ethereum,
    image: '/icons/icon-ethereum-network.svg',
  },
  {
    value: Chains.optimism,
    label: Networks[Chains.optimism].chainName || Chains.optimism,
    image: '/icons/icon-optimism-network.svg',
  },
  {
    value: Chains.fantom,
    label: Networks[Chains.fantom].chainName || Chains.fantom,
    image: '/icons/icon-fantom-network.svg',
  },
  {
    value: Chains.cronos,
    label: Networks[Chains.cronos].chainName || Chains.cronos,
    image: '/icons/icon-cronos-network.svg',
  },
  {
    value: Chains.aurora,
    label: Networks[Chains.aurora].chainName || Chains.aurora,
    image: '/icons/icon-aurora-network.svg',
  },
  */
];


//-----------------------------------------------------------------------------------------------//
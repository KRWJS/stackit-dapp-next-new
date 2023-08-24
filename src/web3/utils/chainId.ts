import Networks, { DEFAULT_NETWORK } from '../constants/networks'
import nil from '../types/nil';

export const supportedUserChainIdOrDefault = (userChainId: string | nil): string => {
  for (const { chainId } of Object.values(Networks)) {
    if (userChainId === chainId) {
      return userChainId;
    }
  }
  return DEFAULT_NETWORK.chainId;
}

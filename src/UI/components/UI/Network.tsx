// EXTERNAL
import { useCallback, useEffect } from 'react';
import Select from 'react-select';

// TYPES / INTERFACES / ENUMS / CONSTANTS
import { MetamaskStatus } from '../../../web3/types/metamask';
import Networks, {
  NETWORK_CHANGE_OPTIONS,
  WRONG_NETWORK_OPTION,
} from '../../../web3/constants/networks';
import { NetworkProps } from '../../interfaces/UI/UiInterface';

const Network = ({ metamask, appState }: NetworkProps) => {

  const updateChainId = useCallback(() => {
    if (
      metamask.status === MetamaskStatus.connected &&
      appState.userChainId != metamask.chainId
    ) {
      appState.set('userChainId', metamask.chainId);
    }
  }, [appState, metamask]);

  useEffect(() => {
    updateChainId();
  }, [updateChainId]);

  const handleNetworkSwitch = async (name: string) => {
    if (metamask.status == MetamaskStatus.connected) {
      try {
        await metamask.switchChain(Networks[name as keyof typeof Networks].chainId);
      } catch (err: any) {
        if (err.code === 4902) {
          await metamask.addChain(Networks[name as keyof typeof Networks]);
        }
      }
    } else {
      appState.set('userChainId', Networks[name as keyof typeof Networks].chainId);
    }
  };

  const renderSelectedNetwork = () => {
    let selectedNetwork = WRONG_NETWORK_OPTION;
    for (const name in Networks) {
      if (Networks[name as keyof typeof Networks].chainId == appState.userChainId) {
        selectedNetwork =
          NETWORK_CHANGE_OPTIONS.find(({ value }) => value == name) || selectedNetwork;
        break;
      }
    }
    return (
      <Select
        classNamePrefix="select"
        className={
          selectedNetwork.value !== 'unsupported'
            ? 'select--navbar'
            : 'select--navbar select--wrong-network'
        }
        instanceId="network"
        options={NETWORK_CHANGE_OPTIONS}
        value={selectedNetwork}
        onChange={(option) => handleNetworkSwitch(option?.value as string)}
        isSearchable={false}
        formatOptionLabel={(selected: any) => (
          <div className="select__option">
            <picture>
              <img src={selected.image} alt={selected.image} />
            </picture>
            <span className="u-hidden-sm">{selected.label}</span>
          </div>
        )}
      />
    );
  };

  return renderSelectedNetwork();
};

export default Network;

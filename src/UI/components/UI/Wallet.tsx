// EXTERNAL
import { useCallback, useEffect } from 'react';

// TYPES / INTERFACES / ENUMS / CONSTANTS
import { MetamaskStatus } from '../../../web3/types/metamask';
import { shortAddress } from '../../../web3/utils/address';

// UI
import Button from './Button';
import { WalletProps } from '../../interfaces/UI/UiInterface';

const Wallet = ({ metamask, appState }: WalletProps) => {
  const handleDisconnectWallet = () => {
    metamask.account = null;
    metamask.chainId = null;
    metamask.status = MetamaskStatus.notConnected;
    appState.set('userAccount', null);
    appState.set('userChainId', null);
  };

  const updateAccount = useCallback(() => {
    if (
      metamask.status === MetamaskStatus.connected &&
      appState.userAccount != metamask.account
    ) {
      appState.set('userAccount', metamask.account);
    }
  }, [appState, metamask]);

  useEffect(() => {
    updateAccount();
  }, [updateAccount]);

  const renderWalletButton = () => {
    switch (metamask.status) {
      case MetamaskStatus.initializing:
        return (
          <Button color="wallet" title={(`common:wallet_initializing`)}>
            {(`common:initializing`)}
          </Button>
        );
      case MetamaskStatus.notConnected:
        return (
          <Button
            color="wallet"
            title={(`common:click_to_connect_wallet`)}
            onClick={() => metamask.connect()}
          >
            {(`common:connect_wallet`)}
          </Button>
        );
      case MetamaskStatus.connecting:
        return (
          <Button color="wallet" title={(`common:wallet_connecting`)}>
            {(`common:connecting`)}
          </Button>
        );
      case MetamaskStatus.connected:
        return (
          <>
            <Button
              color="wallet"
              title={(`common:click_to_disconnect_wallet`)}
              onClick={handleDisconnectWallet}
            >
              {shortAddress(metamask.account as string)}
            </Button>
          </>
        );
      default:
        return (
          <Button color="wallet" title={(`common:metamask_unavailable`)} disabled>
            {(`common:metamask_unavailable`)}
          </Button>
        );
    }
  };

  return renderWalletButton();
};

export default Wallet;

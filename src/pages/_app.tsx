import Link from 'next/link';
import type { AppProps } from 'next/app';

import { MetaMaskProvider, useMetaMask } from 'metamask-react';

import { Metamask } from '../web3/types/metamask';
import { MAIN_NAVIGATION, SOCIAL_NAVIGATION } from '../UI/constants/navigation';

import LayoutFlex from '../UI/components/Layout/LayoutFlex';
import LayoutFooter from '../UI/components/Layout/LayoutFooter';
import LayoutHeader from '../UI/components/Layout/LayoutHeader';
import LayoutMain from '../UI/components/Layout/LayoutMain';
import LayoutNavigation from '../UI/components/Layout/LayoutNavigation';

import AppLogo from '../UI/components/UI/AppLogo';
import Logo from '../UI/components/UI/Logo';
import Navigation from '../UI/components/UI/Navigation';

import IconKyber from '../UI/components/UI/Icons/Outline/IconKyber';
import IconBeefy from '../UI/components/UI/Icons/Outline/IconBeefy';

import '../UI/assets/stylesheets/main.scss';
import { appInitialState } from '../UI/store/appState';
import { getReducer, initState } from '../UI/utils/states';
import dynamic from 'next/dynamic';
import Network from '../UI/components/UI/Network';
import { useReducer } from 'react';
import { AppState } from '../UI/interfaces/Store/appStateInterface';


const Wallet = dynamic(() => import('../UI/components/UI/Wallet'), {
  ssr: false,
});

function App(this: any, { Component, pageProps }: AppProps) {
  const appState = initState(...useReducer(getReducer<AppState>, appInitialState));
  const metamask = useMetaMask() as Metamask;
  const componentProps = { metamask, appState, ...pageProps };

  const renderLogo = () => <Logo logo={<AppLogo />} />;

  const renderNetworkSwitch = () => appState.userAccount
    ? <Network metamask={metamask} appState={appState} /> : null;

  return (
    <>
      <LayoutHeader>
        <LayoutNavigation>
          <LayoutFlex gap="u-gap-42">
            {renderLogo()}
            <Navigation items={MAIN_NAVIGATION} gap="u-gap-32" />
          </LayoutFlex>
          <LayoutFlex gap="u-gap-24">
            {renderNetworkSwitch()}
            <Wallet metamask={metamask} appState={appState} />
          </LayoutFlex>
        </LayoutNavigation>
      </LayoutHeader>
      <LayoutMain>
        <Component {...componentProps} />
      </LayoutMain>
      <LayoutFooter>
        <LayoutFlex gap="u-gap-32">
          {renderLogo()}
          <Navigation items={SOCIAL_NAVIGATION} direction="row" icon />
        </LayoutFlex>
        <div className="powered-by">
          <p>Powered by</p>
          <div className="powered-by__item">
            <IconKyber />
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://kyber.network/"
              title="Click to visit Kyber Network"
            >
              Kyber Network
            </Link>
          </div>
          <div className="powered-by__item">
            <IconBeefy />
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://beefy.com/"
              title="Click to visit Beefy Finance"
            >
              Beefy Finance
            </Link>
          </div>
          <div className="powered-by__item">
            <p>
              Built by{' '}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://archon.finance/"
                title="Click to visit Archon.finance"
              >
                Archon.finance
              </Link>
            </p>
          </div>
        </div>
      </LayoutFooter>
      <div id="portal" />
    </>
  );
}

function AppWithContext(props: AppProps) {
  return (
    <MetaMaskProvider>
      <App {...props} />
    </MetaMaskProvider>
  );
}

export default AppWithContext;

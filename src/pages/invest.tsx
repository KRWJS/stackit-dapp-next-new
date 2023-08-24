import Head from 'next/head';
import type { NextPage } from 'next';
import BN from '../web3/types/bn';
import { INVEST_FREQUENCY_TABS } from '../UI/constants/tab';
import { INVEST_FREQUENCY_INPUTS } from '../UI/constants/input';
import Select from 'react-select';
import LayoutFlex from '../UI/components/Layout/LayoutFlex';
import LayoutBanner from '../UI/components/Layout/LayoutBanner';
import InvestmentSummary from '../UI/components/UI/InvestmentSummary';
import InputNumber from '../UI/components/UI/Inputs/InputNumber';
import Tabs from '../UI/components/UI/Tabs/Tabs';
import TabsContent from '../UI/components/UI/Tabs/TabsContent';
import TabsNav from '../UI/components/UI/Tabs/TabsNav';
import IconLeftRight from '../UI/components/UI/Icons/Solid/IconLeftRight';
import Pill from '../UI/components/UI/Pill';
import IconAudited from '../UI/components/UI/Icons/Outline/IconAudited';
import IconNonCustodial from '../UI/components/UI/Icons/Outline/IconNonCustodial';
import IconNoKyc from '../UI/components/UI/Icons/Outline/IconNoKyc';
import { PageProps } from '../UI/interfaces/General/GeneralInterface';
import listedTokens from '../web3/constants/listedTokens';
import { supportedUserChainIdOrDefault } from '../web3/utils/chainId';
import listedToken from '../web3/types/listedToken';
import { useEffect } from 'react';
import value from '../web3/types/value';
import ERC20 from '../web3/types/ERC20';

const InvestPage: NextPage<PageProps> = ({ appState, metamask }) => {

  const getTokenList = () => {
    return listedTokens[
      supportedUserChainIdOrDefault(appState.userChainId)
    ].map((token) => {
      return {
        ...token,
        value: token.address,
        label: token.name,
      };
    });
  }

  const formatSelectOptionLabel = (asset: listedToken) => {
    return (
      <div className="select__option">
        <picture>
          <img src={asset.logo} alt={`${asset.symbol} logo`} />
        </picture>
        <span>{asset.name}</span>
      </div>
    );
  };

  const setSellChoice = (choice: listedToken | null) => {
    appState.set('sellChoice', choice);
  };

  const setBuyChoice = (choice: listedToken | null) => {
    appState.set('buyChoice', choice);
  };

  const switchBuySell = () => {
    const _sellChoice = appState.get('sellChoice');
    const _buyChoice = appState.get('buyChoice');
    appState.set('sellChoice', _buyChoice);
    appState.set('buyChoice', _sellChoice);
  };

  const setInvestAmount = (amount: value) => {
    const _amount = amount === '' ? undefined : new BN(amount);
    appState.set('investAmount', _amount);
  };

  const updateUserSellBalance = async () => {
    try {
      if (
        appState.sellChoice &&
        appState.userAccount &&
        appState.userChainId
      ) {
        const sellToken = new ERC20(appState.userChainId, appState.sellChoice.address);
        const decimals = await sellToken.decimals();
        const balance = (await sellToken.balanceOf(appState.userAccount)).weiToEther(decimals);
        appState.set('userSellBalance', balance);
      }
    } catch (e: unknown) {
      console.log(e);
    }
  };

  useEffect(() => {
    updateUserSellBalance();
  }, [appState.userAccount, appState.userChainId, appState.sellChoice]);

  const renderInvestFrequencyTabsNav = () => {
    return INVEST_FREQUENCY_TABS.map((tab) => (
      <TabsNav
        key={tab.id}
        title={tab.title}
        id={tab.id}
        activeTab={appState.activeInvestFrequencyTab}
        setActiveTab={(id: string) => appState.set('activeInvestFrequencyTab', id)}
      />
    ));
  };

  const setRepeat = (number: number) => {
    appState.set('repeat', new BN(number).integer().toNumber());
  };

  return (
    <>
      <Head>
        <title>Invest | Stackit Finance</title>
        <meta property="og:title" content="Invest | Stackit Finance" />
        <meta property="og:url" content="https://app.stackit.finance/" />
        <meta name="twitter:title" content="Invest | Stackit Finance" />
        <meta property="twitter:url" content="https://app.stackit.finance/" />
      </Head>
      <LayoutBanner>
        <h1>Automate Your Crypto Investments</h1>
        <LayoutFlex gap="u-gap-12" direction="row-justify-center" margin="u-mb-18">
          <Pill label="Audited" icon={<IconAudited width={15} height={15} strokeColor="#FFF" />} />
          <Pill
            label="Non-Custodial"
            icon={<IconNonCustodial width={15} height={15} strokeColor="#FFF" />}
          />
          <Pill label="No KYC" icon={<IconNoKyc width={15} height={15} strokeColor="#FFF" />} />
        </LayoutFlex>
        <h3>Setup an automatic dollar cost averaging strategy in seconds.</h3>
      </LayoutBanner>
      <LayoutFlex direction="row-start" gap="u-gap-42" margin="u-mtb-48" size="sm">
        <div className="invest">
          <div className="invest__panel invest__panel--tokens">
            <div className="invest__upper">
              <label htmlFor="sell-asset">You Sell</label>
              <label htmlFor="receive-asset">You Receive</label>
            </div>
            <div className="invest__lower">
              <Select
                instanceId="sell-asset"
                className="select"
                classNamePrefix="select"
                value={appState.sellChoice}
                isSearchable={true}
                name="sell"
                options={getTokenList()}
                formatOptionLabel={formatSelectOptionLabel}
                onChange={setSellChoice}
              />
              <IconLeftRight height={31} width={35} fillColor="#B6BEB5" onClick={switchBuySell} />
              <Select
                instanceId="receive-asset"
                className="select"
                classNamePrefix="select"
                value={appState.buyChoice}
                isSearchable={true}
                name="receive"
                options={getTokenList()}
                formatOptionLabel={formatSelectOptionLabel}
                onChange={setBuyChoice}
              />
            </div>
          </div>
          <div className="invest__panel invest__panel--amount">
            <InputNumber
              id="invest-amount"
              label={
                `How much \
                ${appState.sellChoice?.symbol || ''} \
                do you want to invest \
                ${appState.buyChoice ? 'in ' + appState.buyChoice.symbol : ''} ?`
              }
              onChange={setInvestAmount}
              value={appState.investAmount}
              maxValue={appState.userSellBalance}
              asset={appState.sellChoice}
              addon
              autofocus
            />
            <p>
              Balance: {appState.userSellBalance.format(6, false)} {appState.sellChoice?.symbol}
            </p>
          </div>
          <div className="invest__panel invest__panel--period">
            <h3>How frequently ?</h3>
            <Tabs nav={renderInvestFrequencyTabsNav()} navMargin="u-mb-18">
            </Tabs>
          </div>
          <div className="invest__panel invest__panel--iterations">
            <InputNumber
              id="invest-iterations"
              label={'How many times ?'}
              onChange={setRepeat}
              value={appState.repeat}
              placeholder='1'
              autofocus
            />
          </div>
        </div>
        <InvestmentSummary appState={appState} />
      </LayoutFlex>
    </>
  );
};

export default InvestPage;

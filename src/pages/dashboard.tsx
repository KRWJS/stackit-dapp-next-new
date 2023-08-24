import { useReducer } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import BN from '../web3/types/bn';
import { AnimatePresence } from 'framer-motion';
import { MetamaskProps } from '../UI/interfaces/Metamask/MetamaskInterface';
import LayoutBanner from '../UI/components/Layout/LayoutBanner';
import LayoutContainer from '../UI/components/Layout/LayoutContainer';
import LayoutFlex from '../UI/components/Layout/LayoutFlex';
import BannerWidget from '../UI/components/UI/BannerWidget';
import Button from '../UI/components/UI/Button';
import InputNumber from '../UI/components/UI/Inputs/InputNumber';
import Modal from '../UI/components/UI/Modals/Modal';
import TablePositions from '../UI/components/UI/Tables/TablePositions';
import TableTransactions from '../UI/components/UI/Tables/TableTransactions';
import IconChevRight from '../UI/components/UI/Icons/Outline/IconChevRight';
import { PageProps } from '../UI/interfaces/General/GeneralInterface';

const DashboardPage: NextPage<PageProps> = ({ appState, metamask }) => {

  const handleManageModal = () => null
  //dispatchApp({ type: 'SET_MANAGE_MODAL', payload: !appState.manageModal });

  const handleInvestAmount = (e: any) => null
  //dispatchApp({ type: 'SET_INVEST_AMOUNT', payload: new BN(e.target.value) });

  const handlePause = () => console.log('Paused');

  return (
    <>
      <Head>
        <title>Dashboard | Stackit Finance</title>
        <meta property="og:title" content="Dashboard | Stackit Finance" />
        <meta property="og:url" content="https://app.stackit.finance/dashboard" />
        <meta name="twitter:title" content="Dashboard | Stackit Finance" />
        <meta property="twitter:url" content="https://app.stackit.finance/dashboard" />
      </Head>
      <LayoutBanner size="md" margin="u-mb-30">
        <div>
          <p className="u-mb-9">My Balance</p>
          <h1 className="u-font-alt u-mb-0 u-font-55">
            {BN.format("appState.userBalance")} <span>USD</span>
          </h1>
        </div>
        <BannerWidget
          pnl={new BN("appState.overallPnl")}
          pnlPercent={new BN("appState.overallPnlPercent").toNumber()}
          netInvestment={new BN("appState.netInvestment")}
        />
      </LayoutBanner>
      <LayoutContainer>
        <h3 className="u-mb-15 u-font-alt u-font-16">Positions</h3>
        <TablePositions
          asset="ETH"
          stablecoin="USDC"
          onClickManage={handleManageModal}
          onClickPause={handlePause}
          assetPnl={new BN("appState.assetPnl")}
          assetPnlPercent={new BN("appState.assetPnlPercent").toNumber()}
        />
        <h3 className="u-mb-15 u-font-alt u-font-16">Transactions</h3>
        <TableTransactions
          asset="ETH"
          stablecoin="USDC"
          price={new BN("appState.assetPrice")}
          quantity={new BN("appState.assetQuantity")}
          timestamp={"appState.assetTimestamp"}
        />
      </LayoutContainer>
      <AnimatePresence initial={true} mode="wait">
        {appState.manageModal && (
          <Modal type="manage-position">
            <h2>Manage Position</h2>
            <div className="invest__panel invest__panel--amount u-mb-12">
              <InputNumber
                id="invest-amount"
                label={`How much ${"appState.sellChoice"} do you want to invest?`}
                onChange={(e: any) => handleInvestAmount(e)}
                value={+"appState.investAmount"}
                asset={appState.sellChoice}
                addon
                autofocus
              />
              <p>
                Balance: {BN.format("appState.userBalance")} {"appState.sellChoice"}
              </p>
            </div>
            <LayoutFlex direction="row-center-space-between" gap="u-gap-8">
              <Button color="grey" size="lg" title="Click to close" onClick={handleManageModal}>
                Close
              </Button>
              <Button
                title="Click to update position"
                color="black"
                size="lg"
                icon={<IconChevRight height={24} width={24} strokeColor="#FFFFFF" />}
              >
                Update Position
              </Button>
            </LayoutFlex>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default DashboardPage;

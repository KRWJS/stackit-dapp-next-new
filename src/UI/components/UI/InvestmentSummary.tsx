import BN from '../../../web3/types/bn';
import { FREQUENCY_MS } from '../../constants/transaction';
import { InvestmentSummaryProps } from '../../interfaces/UI/UiInterface';
import Button from './Button';

const FEE_P = 0.8 / 100;

const InvestmentSummary = ({ appState, margin = 'u-m-0' }: InvestmentSummaryProps) => {
  const getInvestAmountPerIteration = () => {
    let investAmountPerIteration = new BN(0);
    if (appState.investAmount) {
      investAmountPerIteration = appState.investAmount.div(appState.repeat || 1);
    }
    return investAmountPerIteration;
  };

  const getDuration = () => {
    return (appState.repeat || 1) * FREQUENCY_MS[appState.activeInvestFrequencyTab];
  };

  const getFees = () => {
    return appState.investAmount?.mul(FEE_P);
  };

  const getFinalAmount = () => {
    return appState.investAmount?.sub(getFees() || 0);
  };

  const confirmInvestment = () => {

  };

  return (
    <div className={`investment-summary ${margin}`}>
      <h3>Investment Summary</h3>
      <div key='Total invested' className="investment-summary__row">
        <p>Total invested {appState.activeInvestFrequencyTab}</p>
        <p>{getInvestAmountPerIteration().format(6)} {appState.sellChoice?.symbol}</p>
      </div>
      <div key='Starts' className="investment-summary__row">
        <p>Starts</p>
        <p>Today</p>
      </div>
      <div key='Finishes' className="investment-summary__row">
        <p>Finishes</p>
        <p>{new Date(Date.now() + getDuration()).toDateString()}</p>
      </div>
      <div key='Fees' className="investment-summary__row">
        <p>Fees</p>
        <p>{getFees()?.format(6) || 0} {appState.sellChoice?.symbol}</p>
      </div>
      <div key='Total Amount' className="investment-summary__row">
        <p>Total Amount</p>
        <p>{getFinalAmount()?.format(6, false)} {appState.sellChoice?.symbol}</p>
      </div>
      <Button
        title="Click to confirm investment"
        size="lg"
        color="black"
        onClick={confirmInvestment}
      >
        Confirm
      </Button>
    </div>
  );
};

export default InvestmentSummary;

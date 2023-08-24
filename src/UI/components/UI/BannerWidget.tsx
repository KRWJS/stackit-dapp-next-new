import { BannerWidgetProps } from '../../interfaces/UI/UiInterface';

import { renderPositiveNegativeClass, renderPositiveNegativePrefix } from '../../utils/number';

import BN from '../../../web3/types/bn';

const BannerWidget = ({ pnl, pnlPercent, netInvestment }: BannerWidgetProps) => {
  return (
    <div className="banner-widget">
      <div className="banner-widget__left">
        <p>My Profit / Loss</p>
        <h4 className={renderPositiveNegativeClass(pnl.toNumber())}>
          {renderPositiveNegativePrefix(pnl.toNumber())}${BN.format(pnl)} ({pnlPercent}%)
        </h4>
      </div>
      <div className="banner-widget__right">
        <p>My Net Investments</p>
        <h4>${BN.format(netInvestment)}</h4>
      </div>
    </div>
  );
};

export default BannerWidget;

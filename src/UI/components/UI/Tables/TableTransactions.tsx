import { TableTransactionsProps } from '../../../interfaces/Table/TableInterface';

import BN from '../../../../web3/types/bn';

import { TRANSACTIONS_TABLE_HEADER } from '../../../constants/table';

import LayoutFlex from '../../Layout/LayoutFlex';

const TableTransactions = ({
  asset,
  stablecoin,
  price,
  quantity,
  timestamp,
}: TableTransactionsProps) => {
  return (
    <div className="table table--transactions">
      <div className="table__header">
        {TRANSACTIONS_TABLE_HEADER.map((item, idx) => (
          <h6 key={idx}>{item}</h6>
        ))}
      </div>
      <div className="table__row">
        <div className="table__column">
          <LayoutFlex gap="u-gap-12">
            <picture>
              <img src={`./images/assets/${asset}.png`} alt={`${asset} logo`} />
            </picture>
            <p>
              {asset} / {stablecoin}
            </p>
          </LayoutFlex>
        </div>
        <div className="table__column">
          <p>${BN.format(price)}</p>
        </div>
        <div className="table__column">
          <p>{BN.format(quantity)} BTC</p>
        </div>
        <div className="table__column">
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default TableTransactions;

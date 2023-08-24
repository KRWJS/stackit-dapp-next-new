import { TablePositionsProps } from '../../../interfaces/Table/TableInterface';

import BN from '../../../../web3/types/bn';

import { POSITIONS_TABLE_HEADER } from '../../../constants/table';

import { renderPositiveNegativeClass, renderPositiveNegativePrefix } from '../../../utils/number';

import LayoutFlex from '../../Layout/LayoutFlex';

import Button from '../Button';
import AssetImagePair from '../AssetImagePair';

import IconChevRight from '../Icons/Outline/IconChevRight';
import IconPause from '../Icons/Outline/IconPause';

const TablePositions = ({
  asset,
  stablecoin,
  assetPnl,
  assetPnlPercent,
  onClickManage,
  onClickPause,
}: TablePositionsProps) => {
  const renderManageButton = () => (
    <Button
      title="Click to manage position"
      color="black"
      size="lg"
      onClick={onClickManage}
      icon={<IconChevRight height={24} width={24} strokeColor="#FFFFFF" />}
    >
      Manage
    </Button>
  );
  const renderPauseButton = () => (
    <Button title="Click to pause position" color="black" variant="icon" onClick={onClickPause}>
      <IconPause height={18} width={18} strokeColor="#FFFFFF" />
    </Button>
  );

  return (
    <div className="table">
      <div className="table__header">
        {POSITIONS_TABLE_HEADER.map((item, idx) => (
          <h6 key={idx}>{item}</h6>
        ))}
      </div>
      <div className="table__row">
        <div className="table__column">
          <LayoutFlex gap="u-gap-6">
            <AssetImagePair asset={asset} stablecoin={stablecoin} />
            <p>
              {asset} / {stablecoin}
            </p>
          </LayoutFlex>
        </div>
        <div className="table__column">
          <p>Progress</p>
        </div>
        <div className="table__column">
          <LayoutFlex direction="column">
            <p>${BN.format(assetPnl)}</p>
            <p className={renderPositiveNegativeClass(assetPnlPercent)}>
              {renderPositiveNegativePrefix(assetPnlPercent)}
              {assetPnlPercent}%
            </p>
          </LayoutFlex>
        </div>
        <div className="table__column">
          <LayoutFlex gap="u-gap-16" direction="row-center-justify-end">
            {renderPauseButton()}
            {renderManageButton()}
          </LayoutFlex>
        </div>
      </div>
    </div>
  );
};

export default TablePositions;

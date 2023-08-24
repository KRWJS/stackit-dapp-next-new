import BN from '../../../../web3/types/bn';
import { InputAddonProps } from '../../../interfaces/Input/InputInterface';

import Button from '../Button';

const InputNumber = ({
  margin = 'u-m-0',
  id,
  label,
  placeholder = '0.0',
  value,
  maxValue,
  onChange,
  asset,
  addon,
  autofocus,
}: InputAddonProps) => {
  const renderAssetImage = () =>
    asset ? (
      <picture>
        <img src={asset.logo} alt={`${asset.symbol} logo`} />
      </picture>
    ) : null;

  const renderAddon = () =>
    addon && maxValue ? (
      <Button
        variant="max"
        title="Click to select max"
        onClick={() => onChange(new BN(maxValue).trunc(6))}
      >
        MAX
      </Button>
    ) : null;

  const renderAddonClassName = () => (addon ? 'input-number__wrapper--addon' : '');

  return (
    <div className={`input-number ${margin}`}>
      <label htmlFor={id}>{label}</label>
      <div className={`input-number__wrapper ${renderAddonClassName()}`}>
        {renderAssetImage()}
        <input
          id={id}
          placeholder={placeholder}
          type="number"
          min="1"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          inputMode="decimal"
          value={value?.toString() || ''}
          onChange={(e) => onChange(e.target.value)}
          autoFocus={autofocus}
        />
        {renderAddon()}
      </div>
    </div>
  );
};

export default InputNumber;

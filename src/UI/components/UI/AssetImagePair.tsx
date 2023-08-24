import { AssetImagePairProps } from '../../interfaces/UI/UiInterface';

const AssetImagePair = ({ asset, stablecoin }: AssetImagePairProps) => {
  return (
    <div className="asset-image-pair">
      <picture>
        <img src={`./images/assets/${asset}.png`} alt={`${asset} logo`} />
      </picture>
      <picture>
        <img src={`./images/assets/${stablecoin}.png`} alt={`${stablecoin} logo`} />
      </picture>
    </div>
  );
};

export default AssetImagePair;

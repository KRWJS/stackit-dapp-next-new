import { LayoutBannerProps } from '../../interfaces/Layout/LayoutInterface';

const LayoutBanner = ({ size = `sm`, margin = 'u-m-0', children }: LayoutBannerProps) => {
  return (
    <div className={`l-banner ${margin}`}>
      <div className={`l-banner__container l-banner__container--${size}`}>{children}</div>
    </div>
  );
};

export default LayoutBanner;

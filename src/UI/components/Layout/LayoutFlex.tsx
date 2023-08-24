import { LayoutFlexProps } from '../../interfaces/Layout/LayoutInterface';

const LayoutFlex = ({
  direction = 'row',
  margin = 'u-m-0',
  gap = 'u-gap-0',
  padding = 'u-p-0',
  size = 'default',
  children,
}: LayoutFlexProps) => {
  return (
    <div className={`l-flex l-flex--${direction} ${margin} ${gap} ${padding} u-flex-${size}`}>
      {children}
    </div>
  );
};

export default LayoutFlex;

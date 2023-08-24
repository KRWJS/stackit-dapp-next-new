import { LayoutContainerProps } from '../../interfaces/Layout/LayoutInterface';

const LayoutContainer = ({ size = 'md', margin, children }: LayoutContainerProps) => {
  return (
    <div className={`l-container l-container--${size} ${margin ? margin : ''}`}>{children}</div>
  );
};

export default LayoutContainer;

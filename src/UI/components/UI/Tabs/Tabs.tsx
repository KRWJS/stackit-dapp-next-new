import { TabsProps } from '../../../interfaces/Tab/TabInterface';

const Tabs = ({ navMargin = 'u-m-0', nav, children, gap = 'u-gap-8' }: TabsProps) => {
  return (
    <div className="tabs">
      <div className={`tabs__nav ${gap} ${navMargin}`} role="tablist" aria-orientation="horizontal">
        {nav}
      </div>
      {children}
    </div>
  );
};

export default Tabs;

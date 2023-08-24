import { TabsContentProps } from '../../../interfaces/Tab/TabInterface';

const TabsContent = ({ id, activeTab, children }: TabsContentProps) => {
  return activeTab === id ? (
    <div className="tabs__body" role="tabpanel">
      {children}
    </div>
  ) : null;
};

export default TabsContent;

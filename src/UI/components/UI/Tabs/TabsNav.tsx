import { TabsNavProps } from '../../../interfaces/Tab/TabInterface';

import Button from '../Button';

const TabsNav = ({ id, title, titleAddon, activeTab, setActiveTab }: TabsNavProps) => {
  const handleTabClick = () => setActiveTab(id);
  const renderTabActiveClass = () => (activeTab === id ? 'tab is-active' : 'tab');

  return (
    <Button
      role="tab"
      onClick={handleTabClick}
      aria-selected={activeTab === id}
      size={renderTabActiveClass()}
      title={`Click to select ${title.toLowerCase()}`}
    >
      {title} {titleAddon}
    </Button>
  );
};

export default TabsNav;

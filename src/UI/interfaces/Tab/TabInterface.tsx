/* #TAB - INTERFACES
    1. Tab data
    2. Tabs
    3. Tabs nav
    4. Tabs content
*/

// 1. Tab data
export interface TabDataProps {
  title: string;
  id: string;
  icon?: any;
}

// 2. Tabs
export interface TabsProps {
  nav: any;
  children: React.ReactNode;
  gap?: string;
  navMargin?: string;
}

// 3. Tabs nav
export interface TabsNavProps {
  type?: string;
  id: string;
  title: string;
  titleAddon?: any;
  activeTab: string;
  setActiveTab: Function;
  icon?: string;
}

// 4. Tabs content
export interface TabsContentProps {
  id: string;
  activeTab: string;
  children: React.ReactNode;
}

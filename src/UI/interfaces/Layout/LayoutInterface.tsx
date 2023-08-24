/* #LAYOUT - INTERFACES
    1. Layout container
    2. Layout error
    3. Layout flex
    4. Layout grid
    5. Layout sidebar
    6. Layout panel
    7. Layout dropdown
    8. Layout banner
*/

// 1. Layout container
export interface LayoutContainerProps {
  size?: string;
  margin?: string;
  children: React.ReactNode;
}

// 2. Layout error
export interface LayoutErrorProps {
  title: string;
  subtitle?: string;
}

// 3. Layout flex
export interface LayoutFlexProps {
  direction?: string;
  margin?: string;
  gap?: string;
  padding?: string;
  size?: string;
  children: React.ReactNode;
}

// 4. Layout grid
export interface LayoutGridProps {
  rows: number;
  columns: number;
  children: React.ReactNode;
}

// 5. Layout sidebar
export interface LayoutSidebarProps {
  children: React.ReactNode;
  gap?: string;
  aside?: string;
  sticky?: boolean;
}

// 6. Layout panel
export interface LayoutPanelProps {
  children: React.ReactNode;
  margin?: string;
  padding?: string;
}

// 7. Layout dropdown
export interface LayoutDropdownProps {
  type: string;
  children: React.ReactNode;
}

// 8. Layout banner
export interface LayoutBannerProps {
  size?: string;
  margin?: string;
  children: React.ReactNode;
}

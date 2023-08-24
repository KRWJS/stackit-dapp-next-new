import { ChildrenProps } from '../../interfaces/General/GeneralInterface';

const LayoutNavigation = ({ children }: ChildrenProps) => {
  return <div className="l-navigation">{children}</div>;
};

export default LayoutNavigation;

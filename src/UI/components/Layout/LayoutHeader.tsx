import { ChildrenProps } from '../../interfaces/General/GeneralInterface';

const LayoutHeader = ({ children }: ChildrenProps) => {
  return <header className="l-header">{children}</header>;
};

export default LayoutHeader;

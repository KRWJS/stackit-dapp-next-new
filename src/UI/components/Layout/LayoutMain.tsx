import { ChildrenProps } from '../../interfaces/General/GeneralInterface';

const LayoutMain = ({ children }: ChildrenProps) => {
  return <section className="l-main">{children}</section>;
};

export default LayoutMain;

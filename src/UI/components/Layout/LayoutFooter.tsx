import { ChildrenProps } from '../../interfaces/General/GeneralInterface';

const LayoutFooter = ({ children }: ChildrenProps) => {
  return (
    <footer className="l-footer">
      <div className="l-footer__container">{children}</div>
    </footer>
  );
};

export default LayoutFooter;

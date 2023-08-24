import { createPortal } from 'react-dom';
import { ChildrenProps } from '../interfaces/General/GeneralInterface';

const Portal = ({ children }: ChildrenProps) => {
  return createPortal(children, document.querySelector('#portal') as any);
};

export default Portal;

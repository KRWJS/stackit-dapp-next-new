import { motion } from 'framer-motion';
import { ModalProps } from '../../../interfaces/Modal/ModalInterface';

import ModalBackdrop from './ModalBackdrop';

const animatedModal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
      stiffness: 250,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Modal = ({ children, type = 'default' }: ModalProps) => {
  return (
    <ModalBackdrop>
      <motion.div
        onClick={(e: any) => e.stopPropagation()}
        className={`modal modal--${type}`}
        variants={animatedModal}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </ModalBackdrop>
  );
};

export default Modal;

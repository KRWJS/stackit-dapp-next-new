import { motion } from 'framer-motion';
import { ModalProps } from '../../../interfaces/Modal/ModalInterface';

const ModalBackdrop = ({ children, onClick }: ModalProps) => {
  return (
    <motion.div
      onClick={onClick}
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default ModalBackdrop;

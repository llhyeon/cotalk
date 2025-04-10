'use client';

import { SetStateAction } from 'react';
import Button from '../common/button';
import { motion } from 'framer-motion';

type ProfileModalProps = {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
};

export default function ProfileModal({ setIsModalOpen }: ProfileModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>test</div>
      <Button onClick={() => setIsModalOpen(false)}>닫기</Button>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';

type MotionDiv = {
  children: React.ReactNode;
};

export default function MotionDiv({ children }: MotionDiv) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

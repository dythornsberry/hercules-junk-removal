import React from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-[9999]">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="p-4 bg-white rounded-full shadow-lg"
      >
        <Loader2 className="h-10 w-10 text-yellow-500 animate-spin" />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SatisfactionGuaranteeBadge = ({ className = "" }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center gap-3 bg-black/5 p-2 pr-4 rounded-full border border-black/10 ${className}`}
    >
      <div className="bg-yellow-400 p-2 rounded-full text-black">
        <ShieldCheck className="w-5 h-5" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xs font-bold uppercase tracking-wider text-inherit">Job photos</span>
        <span className="text-sm font-black text-inherit">Before / after</span>
      </div>
    </motion.div>
  );
};

export default SatisfactionGuaranteeBadge;

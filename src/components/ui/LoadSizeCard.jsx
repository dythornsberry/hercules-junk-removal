import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const LoadSizeCard = ({ title, price, description, tag, index = 0 }) => {
  const handleCalendlyClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative flex flex-col h-full bg-[#1A1A1A] rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#FFC107]/10 transition-all duration-300 border border-gray-800 group p-5"
    >
      {tag && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-[#FFC107] text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg shadow-sm uppercase tracking-wider">
            {tag}
          </div>
        </div>
      )}
      
      <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
      <div className="mb-3 flex items-baseline gap-1">
        <span className="text-2xl font-black text-[#FFC107]">{price}</span>
        {price !== 'Custom' && <span className="text-xs text-gray-400 font-medium">+ tax</span>}
      </div>
      
      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      <button 
        onClick={handleCalendlyClick}
        className="w-full bg-white/5 hover:bg-[#FFC107] text-white hover:text-black font-bold py-2.5 rounded-lg mt-auto transition-all duration-300 hover:scale-105 active:scale-95 flex justify-center items-center text-sm"
      >
        Book This Pickup <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

export default LoadSizeCard;
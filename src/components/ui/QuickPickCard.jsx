import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const QuickPickCard = ({ title, price, description, tag, index = 0 }) => {
  const handleCalendlyClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex flex-col h-full bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#FFC107]/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-800 group"
    >
      {tag && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-[#FFC107] text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md uppercase tracking-wider">
            {tag}
          </div>
        </div>
      )}
      
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-4 flex items-baseline gap-1">
          <span className="text-5xl font-black text-[#FFC107]">{price}</span>
          {price !== 'Custom' && <span className="text-sm text-gray-400 font-medium">+ tax</span>}
        </div>
        
        <p className="text-gray-300 text-lg mb-8 flex-grow leading-relaxed">
          {description}
        </p>
        
        <button 
          onClick={handleCalendlyClick}
          className="w-full bg-[#FFC107] text-black hover:bg-[#e6ae06] font-bold py-4 rounded-xl mt-auto shadow-md transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl flex justify-center items-center text-lg"
        >
          Book This Pickup <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default QuickPickCard;
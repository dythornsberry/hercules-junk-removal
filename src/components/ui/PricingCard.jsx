import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight } from 'lucide-react';
import TruckFillIndicator from '@/components/ui/TruckFillIndicator.jsx';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const PricingCard = ({ 
  loadSize, 
  price, 
  description, 
  tag, 
  fillPercentage,
  index = 0 
}) => {
  const handleCalendlyClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative flex flex-col h-full bg-[#1A1A1A] rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-2xl hover:shadow-[#FFC107]/10 transition-all duration-300 transform hover:-translate-y-1 group"
    >
      {tag && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm">
            {tag}
          </div>
        </div>
      )}
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{loadSize}</h3>
        
        {fillPercentage !== undefined && (
          <TruckFillIndicator fillPercentage={fillPercentage} />
        )}
        
        <div className="mb-4">
          <span className="text-4xl font-black text-[#FFC107]">{price}</span>
          {price !== 'Custom' && <span className="text-sm text-gray-400 font-medium ml-1">+ tax</span>}
        </div>
        
        <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <Button 
          onClick={handleCalendlyClick}
          className="w-full bg-[#FFC107] text-black hover:bg-[#e6ae06] font-bold py-6 rounded-xl mt-auto shadow-md transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl group"
        >
          Book This Pickup <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import TruckLoadVisualSVG from '@/components/ui/TruckLoadVisualSVG.jsx';
import TruckLoadVisual1_8 from '@/components/ui/TruckLoadVisual1_8.jsx';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const PricingTierCard = ({ tier, index }) => {
  const handleBookClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] rounded-2xl p-4 lg:p-6 border border-gray-800 shadow-xl hover:shadow-[0_8px_30px_rgb(255,149,0,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group h-full"
    >
      <h4 className="text-xl font-black text-white mb-1">{tier.size}</h4>
      <div className="flex items-end justify-center gap-1 mb-4">
        <span className="text-3xl font-black text-[#FF9500]">{tier.price}</span>
        <span className="text-sm text-gray-400 mb-1">+ tax</span>
      </div>
      
      <div className="w-full mb-4">
        {tier.isOneEighth ? (
          <TruckLoadVisual1_8 />
        ) : (
          <TruckLoadVisualSVG fillPercentage={tier.fillPercentage} />
        )}
      </div>
      
      <p className="text-gray-400 text-sm mb-6 flex-grow">{tier.desc}</p>
      
      <Button 
        onClick={handleBookClick}
        className="w-full bg-[#FF9500] text-black hover:bg-[#e68600] font-bold transition-transform group-hover:scale-[1.02]"
      >
        Book Now <ArrowRight className="ml-1 w-4 h-4 hidden lg:inline" />
      </Button>
    </motion.div>
  );
};

export default PricingTierCard;
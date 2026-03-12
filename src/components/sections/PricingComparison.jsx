import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import TruckLoadVisual from '@/components/ui/TruckLoadVisual.jsx';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const PricingComparison = () => {
  const tiers = [
    { size: "Minimum", price: "$75", fillPercentage: 10, desc: "Single item or a few small boxes" },
    { size: "1/4 Truck", price: "$220", fillPercentage: 25, desc: "Couch, chair, and some boxes" },
    { size: "1/2 Truck", price: "$365", fillPercentage: 50, desc: "1-2 bedroom apartment size" },
    { size: "3/4 Truck", price: "$470", fillPercentage: 75, desc: "Small house or large apartment" },
    { size: "Full Truck", price: "$575", fillPercentage: 100, desc: "Large house cleanout" },
  ];

  const handleBookClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-yellow-500 mb-2 tracking-wider">TRUCK SPECIFICATIONS</h3>
        <p className="text-white font-black text-xl bg-black/50 inline-block px-6 py-2 rounded-full border border-yellow-500/30">
          12 FEET LONG | 6 FEET WIDE | 7 FEET TALL
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 lg:p-6 border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 flex flex-col items-center text-center group ${index === 0 ? 'col-span-2 md:col-span-1' : ''}`}
          >
            <h4 className="text-xl font-black text-white mb-1">{tier.size}</h4>
            <div className="text-3xl font-black text-yellow-500 mb-4">{tier.price}</div>
            
            <div className="w-full mb-4">
              <TruckLoadVisual fillPercentage={tier.fillPercentage} />
            </div>
            
            <p className="text-gray-400 text-sm mb-6 flex-grow">{tier.desc}</p>
            
            <Button 
              onClick={handleBookClick}
              className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-bold transition-transform group-hover:scale-105"
            >
              Book <ArrowRight className="ml-1 w-4 h-4 hidden lg:inline" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingComparison;
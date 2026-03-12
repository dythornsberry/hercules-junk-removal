import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const PricingAccordion = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const additionalTiers = [
    { size: "1/8 Truck", price: "$179", desc: "A couch OR a chair + small stack of boxes" },
    { size: "3/8 Truck", price: "$379", desc: "Bedroom set + couch + some boxes" },
    { size: "5/8 Truck", price: "$559", desc: "Living room + bedroom set + boxes/clutter" },
    { size: "3/4 Truck", price: "$639", desc: "Several rooms of furniture + bags (bigger cleanout)" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-[#1A1A1A] border border-gray-800 p-6 rounded-xl text-white hover:bg-gray-900 transition-colors shadow-md group"
      >
        <span className="font-bold text-lg">Need a more exact size? Show all pricing sizes</span>
        <ChevronDown className={`w-6 h-6 text-[#FFC107] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalTiers.map((tier, idx) => (
                <div key={idx} className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-5 flex flex-col shadow-sm hover:border-gray-600 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-1">{tier.size}</h4>
                  <div className="mb-2">
                    <span className="text-2xl font-black text-[#FFC107]">{tier.price}</span>
                    <span className="text-xs text-gray-400 ml-1">+ tax</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 flex-grow">{tier.desc}</p>
                  <button
                    onClick={() => onBookClick({ loadSize: tier.size, expectedPrice: tier.price })}
                    className="w-full bg-white/10 hover:bg-[#FFC107] hover:text-black text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center text-sm group/btn"
                  >
                    Book This Pickup <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PricingAccordion;
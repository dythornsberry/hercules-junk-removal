import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const WhatWeHaul = () => {
  const takeItems = [
    "Furniture", "Appliances", "Electronics", "Mattresses", 
    "Yard Waste", "Construction Debris", "Hot Tubs", "Garage Junk"
  ];

  return (
    <section className="py-20 bg-[#1A1A1A] border-y border-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">What We Take</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
            {takeItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full flex items-center gap-2 font-medium shadow-sm hover:bg-white/10 transition-colors"
              >
                <Check className="w-4 h-4 text-[#FFC107]" />
                {item}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-400 font-medium">
            Pretty much anything non-hazardous that two people can lift.
          </p>
        </div>

        <div className="bg-black/50 border border-red-900/30 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 justify-center">
            <X className="w-6 h-6 text-red-500" />
            What We Can't Take
          </h3>
          <p className="text-gray-400 text-center text-sm leading-relaxed">
            Hazardous waste, oil-based paint, chemicals, solvents, asbestos, car batteries, lithium batteries, large propane tanks, anything with bed bugs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeHaul;
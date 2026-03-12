import React from 'react';
import { motion } from 'framer-motion';
import HercJunkPricingSection from '@/components/sections/HercJunkPricingSection.jsx';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF9500] rounded-full mix-blend-screen filter blur-[200px] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 w-full max-w-[1200px]">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight uppercase"
          >
            Clear, Upfront Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 font-medium max-w-3xl mx-auto"
          >
            Volume-based pricing means you only pay for the space you use in our massive box trucks. No hidden fees.
          </motion.p>
        </div>

        <HercJunkPricingSection />
      </div>
    </section>
  );
};

export default PricingSection;
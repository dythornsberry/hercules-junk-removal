import React from 'react';
import { motion } from 'framer-motion';
import TruckLoadVisualSVG from '@/components/ui/TruckLoadVisualSVG.jsx';

const TruckSpecsCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] rounded-2xl shadow-xl border border-gray-800 p-6 sm:p-8 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9500]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
      
      <div className="text-center mb-8 relative z-10">
        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">Our Mighty Trucks</h3>
        <p className="text-[#FF9500] font-medium">Bigger trucks mean better value for you.</p>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-[280px] mb-8 relative">
          {/* Dimension Lines */}
          <div className="absolute -top-6 left-0 right-0 flex items-center justify-center">
            <div className="h-px bg-gray-600 w-full absolute top-1/2"></div>
            <span className="bg-[#1a1a1a] px-2 text-xs text-gray-400 font-bold relative z-10">12 FT LONG</span>
          </div>
          <div className="absolute top-0 bottom-0 -left-8 flex flex-col items-center justify-center">
            <div className="w-px bg-gray-600 h-full absolute left-1/2"></div>
            <span className="bg-[#1a1a1a] py-2 text-xs text-gray-400 font-bold relative z-10" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>7 FT TALL</span>
          </div>
          
          <TruckLoadVisualSVG fillPercentage={100} />
        </div>

        <div className="grid grid-cols-3 gap-2 w-full max-w-sm mt-4">
          <div className="bg-black/50 border border-gray-800 rounded-lg p-3 text-center">
            <div className="text-2xl font-black text-white">12'</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Length</div>
          </div>
          <div className="bg-black/50 border border-gray-800 rounded-lg p-3 text-center">
            <div className="text-2xl font-black text-white">6'</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Width</div>
          </div>
          <div className="bg-black/50 border border-gray-800 rounded-lg p-3 text-center">
            <div className="text-2xl font-black text-white">7'</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Height</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center bg-[#FF9500]/10 border border-[#FF9500]/20 rounded-xl p-4 relative z-10">
        <p className="text-white text-sm">
          Our trucks hold up to <strong className="text-[#FF9500]">18.6 cubic yards</strong> of junk. That's roughly equal to 7-8 standard pickup truck loads!
        </p>
      </div>
    </motion.div>
  );
};

export default TruckSpecsCard;
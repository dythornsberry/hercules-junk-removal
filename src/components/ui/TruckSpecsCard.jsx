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
      className="bg-[#1a1a1a] rounded-3xl shadow-2xl border-4 border-[#FF9500] p-6 lg:p-10 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9500]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      
      <div className="text-center mb-10 relative z-10">
        <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 uppercase tracking-tight drop-shadow-md">Our Mighty Trucks</h3>
        <p className="text-[#FF9500] text-lg font-bold">Bigger trucks mean better value for you.</p>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-full lg:max-w-[90%] mb-12 relative">
          {/* Dimension Lines */}
          <div className="absolute -top-8 left-0 right-0 flex items-center justify-center">
            <div className="h-px bg-gray-600 w-full absolute top-1/2"></div>
            <span className="bg-[#1a1a1a] px-4 py-1 rounded-full border border-gray-600 text-sm text-[#FF9500] font-black relative z-10 shadow-lg">12 FT LONG</span>
          </div>
          <div className="absolute top-0 bottom-0 -left-10 flex flex-col items-center justify-center">
            <div className="w-px bg-gray-600 h-full absolute left-1/2"></div>
            <span className="bg-[#1a1a1a] px-1 py-4 rounded-full border border-gray-600 text-sm text-[#FF9500] font-black relative z-10 shadow-lg" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>7 FT TALL</span>
          </div>
          
          <TruckLoadVisualSVG fillPercentage={100} />
        </div>

        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="bg-black border-2 border-gray-800 hover:border-[#FF9500]/50 transition-colors rounded-xl p-4 text-center shadow-lg">
            <div className="text-3xl font-black text-white">12'</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Length</div>
          </div>
          <div className="bg-black border-2 border-gray-800 hover:border-[#FF9500]/50 transition-colors rounded-xl p-4 text-center shadow-lg">
            <div className="text-3xl font-black text-white">6'</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Width</div>
          </div>
          <div className="bg-black border-2 border-gray-800 hover:border-[#FF9500]/50 transition-colors rounded-xl p-4 text-center shadow-lg">
            <div className="text-3xl font-black text-white">7'</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Height</div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center bg-[#FF9500] rounded-xl p-6 relative z-10 shadow-[0_0_30px_rgba(255,149,0,0.3)]">
        <p className="text-black font-medium text-lg lg:text-xl leading-snug">
          Our trucks hold up to <strong className="font-black text-2xl tracking-tighter">18.6 cubic yards</strong> of junk. That's roughly equal to 7-8 standard pickup truck loads!
        </p>
      </div>
    </motion.div>
  );
};

export default TruckSpecsCard;
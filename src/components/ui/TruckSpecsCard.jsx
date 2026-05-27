import React from 'react';
import TruckLoadVisualSVG from '@/components/ui/TruckLoadVisualSVG.jsx';

const TruckSpecsCard = () => {
  return (
    <div className="bg-[#1a1a1a] shadow-[8px_8px_0_#000] border-4 border-[#FF9500] p-6 lg:p-10 flex flex-col h-full relative overflow-hidden rotate-[-0.4deg]">
      <div className="text-left mb-10 relative z-10">
        <p className="inline-block -rotate-1 bg-[#FF9500] text-black px-3 py-1 border-2 border-black font-black text-sm uppercase tracking-widest mb-4 shadow-[3px_3px_0_#fff]">
          18.6 cubic yards
        </p>
        <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 uppercase tracking-tight drop-shadow-md">Big box truck</h3>
        <p className="text-[#FF9500] text-lg font-bold">Way more room than a pickup bed or small dump trailer.</p>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-md mb-12 relative">
          {/* Dimension Lines */}
          <div className="absolute -top-8 left-0 right-0 flex items-center justify-center">
            <div className="h-px bg-gray-600 w-full absolute top-1/2"></div>
            <span className="bg-[#1a1a1a] px-4 py-1 border-2 border-gray-600 text-sm text-[#FF9500] font-black relative z-10 shadow-lg">12 FT LONG</span>
          </div>
          <div className="absolute top-0 bottom-0 -left-10 flex flex-col items-center justify-center">
            <div className="w-px bg-gray-600 h-full absolute left-1/2"></div>
            <span className="bg-[#1a1a1a] px-1 py-4 border-2 border-gray-600 text-sm text-[#FF9500] font-black relative z-10 shadow-lg" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>7 FT TALL</span>
          </div>
          
          <TruckLoadVisualSVG fillPercentage={100} />
        </div>

        <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
          <div className="bg-black border-2 border-gray-800 hover:border-[#FF9500]/50 transition-colors p-4 text-center shadow-lg">
            <div className="text-3xl font-black text-white">12'</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Length</div>
          </div>
          <div className="bg-black border-2 border-gray-800 hover:border-[#FF9500]/50 transition-colors p-4 text-center shadow-lg">
            <div className="text-3xl font-black text-white">6'</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Width</div>
          </div>
          <div className="bg-black border-2 border-gray-800 hover:border-[#FF9500]/50 transition-colors p-4 text-center shadow-lg">
            <div className="text-3xl font-black text-white">7'</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">Height</div>
          </div>
        </div>

        <div className="mt-6 w-full max-w-2xl border-2 border-white/15 bg-black p-4">
          <div className="mb-3 flex items-center justify-between gap-3 text-xs font-black uppercase tracking-wider text-gray-300">
            <span>6 ft pickup bed</span>
            <span>1.5-2.5 yd</span>
          </div>
          <div className="h-4 w-full border-2 border-gray-700 bg-[#111]">
            <div className="h-full w-[13%] bg-gray-600"></div>
          </div>
          <div className="mt-4 mb-3 flex items-center justify-between gap-3 text-xs font-black uppercase tracking-wider text-gray-300">
            <span>6x12 dump trailer</span>
            <span>5.3-8 yd</span>
          </div>
          <div className="h-5 w-full border-2 border-gray-700 bg-[#111]">
            <div className="h-full w-[42%] bg-gray-500"></div>
          </div>
          <div className="mt-4 mb-3 flex items-center justify-between gap-3 text-xs font-black uppercase tracking-wider text-[#FF9500]">
            <span>Our box truck</span>
            <span>18.6 yd</span>
          </div>
          <div className="h-7 w-full border-2 border-[#FF9500] bg-[#111]">
            <div className="h-full w-full bg-[#FF9500]"></div>
          </div>
          <p className="mt-3 text-xs font-bold leading-snug text-gray-400">
            A 6-foot pickup bed is usually around 1.5-2.5 yards. A 6x12 dump trailer is about 5.3-8 yards. Our box is 18.6 yards.
          </p>
        </div>
      </div>
      
      <div className="mt-10 text-center bg-[#FF9500] border-4 border-black p-6 relative z-10 shadow-[5px_5px_0_#000]">
        <p className="text-black font-medium text-lg lg:text-xl leading-snug">
          Holds <strong className="font-black text-2xl tracking-tighter">18.6 cubic yards</strong> of junk. Roughly 7-12 pickup bed loads, depending how high you stack it.
        </p>
      </div>
    </div>
  );
};

export default TruckSpecsCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DylanSection = () => {
  return (
    <section className="py-20 bg-black border-y-[12px] border-[#FFC107]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 relative group">
            {/* Bold offset background */}
            <div className="absolute inset-0 bg-[#FFC107] transform -rotate-3 translate-x-4 translate-y-4 opacity-100 group-hover:rotate-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
            <img 
              src="/images/dylan-in-truck.jpg"
              alt="Dylan in neon yellow beanie and black jacket inside junk removal truck"
              className="relative object-cover w-full h-[400px] md:h-[500px] shadow-[8px_8px_0_#FFC107] border-4 border-black transition-all duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <span className="inline-block -rotate-1 bg-[#FFC107] text-black font-black tracking-widest uppercase text-sm mb-4 px-3 py-1 border-2 border-black shadow-[3px_3px_0_#fff]">Kenmore Based</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">Fast junk removal. No hassle.</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
              <p className="font-medium text-xl text-white">
                Dylan is local to Kenmore. Fast response, fair prices, and the heavy stuff gets hauled.
              </p>
              <p>
                The box truck is bigger than a pickup or small dump trailer, so most jobs fit in one load. That helps keep the price fair, and yes, credit cards are accepted.
              </p>
              <div className="border-2 border-[#FFC107] bg-[#FFC107]/10 p-4 font-black text-white shadow-[4px_4px_0_rgba(255,193,7,0.25)]">
                Good for garage piles, furniture, yard waste, appliances, and random junk.
              </div>
            </div>
            <Link to="/services">
              <Button className="bg-[#FFC107] text-black hover:bg-white font-black px-8 py-6 rounded-md border-2 border-[#FFC107] text-lg shadow-[5px_5px_0_rgba(255,255,255,0.18)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none flex items-center gap-2 group">
                See What We Haul <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DylanSection;

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
              src="https://horizons-cdn.hostinger.com/043d3248-867c-48dc-bfa5-01141b7ae321/d6619328f055d718b42d19fef5138ee5.jpg"
              alt="Dylan in neon yellow beanie and black jacket inside junk removal truck"
              className="relative object-cover w-full h-[400px] md:h-[500px] shadow-[8px_8px_0_#FFC107] border-4 border-black transition-all duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <span className="inline-block -rotate-1 bg-[#FFC107] text-black font-black tracking-widest uppercase text-sm mb-4 px-3 py-1 border-2 border-black shadow-[3px_3px_0_#fff]">Kenmore Based</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">Fast junk removal. No hassle.</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
              <p className="font-medium text-xl text-white">
                Local to Kenmore. Fast response, fair prices, and we haul the heavy stuff.
              </p>
              <p>
                The box truck holds 18.6 cubic yards, so most jobs fit in one load. That keeps it simple, avoids extra trips, and yes, we take credit cards.
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

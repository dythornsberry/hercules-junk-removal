import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DylanSection = () => {
  return (
    <section className="py-24 bg-black border-y-8 border-[#FFC107]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 relative group">
            {/* Bold offset background */}
            <div className="absolute inset-0 bg-[#FFC107] rounded-3xl transform -rotate-3 translate-x-4 translate-y-4 opacity-100 group-hover:rotate-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
            <img 
              src="https://horizons-cdn.hostinger.com/043d3248-867c-48dc-bfa5-01141b7ae321/d6619328f055d718b42d19fef5138ee5.jpg"
              alt="Dylan in neon yellow beanie and black jacket inside junk removal truck"
              className="relative rounded-3xl object-cover w-full h-[400px] md:h-[500px] shadow-2xl border-4 border-black transition-all duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <span className="inline-block bg-[#FFC107] text-black font-black tracking-widest uppercase text-sm mb-4 px-3 py-1 rounded">Local Owner & Operator</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">Hi, I'm Dylan.</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
              <p className="font-medium text-xl text-white">
                I started this business right here in Kenmore to give my neighbors a simple, honest way to get rid of junk. 
              </p>
              <p>
                When you call, you get a local team that cares. We aren't a faceless national franchise. We respect your property and handle the heavy lifting so you don't have to.
              </p>
            </div>
            <Link to="/about">
              <Button className="bg-[#FFC107] text-black hover:bg-white font-black px-8 py-6 rounded-xl text-lg shadow-xl hover:shadow-[#FFC107]/20 transition-all hover:-translate-y-1 flex items-center gap-2 group">
                More About Us <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DylanSection;
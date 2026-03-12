import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DylanSection = () => {
  return (
    <section className="py-24 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-[#FFC107] rounded-3xl transform -rotate-3 translate-x-3 translate-y-3 opacity-80"></div>
            <img 
              src="https://horizons-cdn.hostinger.com/043d3248-867c-48dc-bfa5-01141b7ae321/d6619328f055d718b42d19fef5138ee5.jpg" 
              alt="Dylan in neon yellow beanie and black jacket inside junk removal truck" 
              className="relative rounded-3xl object-cover w-full h-[400px] md:h-[500px] shadow-2xl border-2 border-[#1A1A1A] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <span className="text-[#FFC107] font-bold tracking-wider uppercase text-sm mb-4 block">Local Owner & Operator</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Hi, I'm Dylan.</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
              <p>
                I started this business in Kenmore to give my neighbors a simple, honest way to get rid of junk. 
              </p>
              <p>
                When you call, you get a local team that cares. We respect your property and handle the heavy lifting so you don't have to.
              </p>
            </div>
            <Link to="/about">
              <Button className="bg-[#FFC107] text-black hover:bg-[#e6ae06] font-bold px-8 py-6 rounded-xl text-lg group">
                More About Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DylanSection;
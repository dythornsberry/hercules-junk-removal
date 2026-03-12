import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Phone, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const Hero = () => {
  const handleCalendlyClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
  };

  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#FFC107] overflow-hidden pt-16 pb-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-10">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-black text-white border border-black/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Same-Day Service Available
            </span>
            <span className="inline-flex items-center gap-1 bg-white/20 text-black border border-black/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              <Star className="w-3 h-3 fill-current" /> 5-Star Rated on Google
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-black leading-[1.1] mb-6 tracking-tight"
          >
            Book junk removal in <span className="text-white drop-shadow-md">60 seconds.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl text-black/80 font-medium mb-10 max-w-2xl mx-auto"
          >
            Fast, eco-friendly junk removal. Free estimates. Single items start at <span className="text-black font-bold border-b-2 border-black">$99</span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
          >
            <Button 
              onClick={handleCalendlyClick} 
              className="bg-black text-white w-full sm:w-auto hover:bg-gray-800 font-black text-xl px-10 py-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Book Now <ArrowRight className="w-6 h-6" />
            </Button>
            <a href="tel:4254063445" className="flex items-center w-full sm:w-auto justify-center gap-2 text-black font-bold px-8 py-6 rounded-xl border-2 border-black hover:bg-black/10 transition-all duration-300 hover:scale-105 active:scale-95">
              <Phone className="w-6 h-6 text-black" />
              (425) 406-3445
            </a>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-black/80">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> No Credit Card Required</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Licensed & Insured</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Eco-Friendly Disposal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
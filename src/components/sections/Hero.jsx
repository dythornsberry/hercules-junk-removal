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
    <section className="relative min-h-[75vh] flex items-center bg-[#FFC107] overflow-hidden">
      {/* Background Image for splitting on large screens */}
      <div className="absolute inset-0 z-0 hidden lg:block w-1/2 left-1/2 h-full">
        {/* Using a placeholder image of a moving/junk truck to simulate the actual truck */}
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Junk removal truck parked in a clean residential neighborhood" 
          className="w-full h-full object-cover object-center"
        />
        {/* Soft gradient to fade the yellow into the image smoothly without a hard line */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107] via-[#FFC107]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div> {/* Subtle darkening for contrast */}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20 lg:py-32">
        <div className="max-w-3xl mx-auto lg:mx-0 lg:w-[55%] text-center lg:text-left">
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-black text-white border border-black/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Same-Day Service Available
            </span>
            <span className="inline-flex items-center gap-1 bg-white/40 backdrop-blur-sm text-black border border-black/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
              <Star className="w-3 h-3 fill-current" /> 5-Star Rated on Google
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black leading-[1.05] mb-6 tracking-tight drop-shadow-sm"
          >
            Book junk removal in <span className="text-white drop-shadow-md relative inline-block">60 seconds.<span className="absolute -bottom-2 left-0 w-full h-2 bg-black opacity-20 rounded-full blur-[2px]"></span></span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl lg:text-3xl text-black/80 font-semibold mb-10 max-w-2xl mx-auto lg:mx-0 leading-snug"
          >
            Fast, eco-friendly junk removal. Free estimates. Single items start at <span className="text-black font-black border-b-4 border-black inline-block leading-none pb-1">$99</span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-10"
          >
            <Button 
              onClick={handleCalendlyClick} 
              className="bg-black text-white w-full sm:w-auto hover:bg-gray-800 font-black text-xl px-10 py-8 rounded-xl shadow-2xl hover:shadow-black/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              Book Now <ArrowRight className="w-6 h-6" />
            </Button>
            <a href="tel:4254063445" className="flex items-center w-full sm:w-auto justify-center gap-2 text-black bg-white/20 backdrop-blur-md font-bold px-8 py-6 rounded-xl border-4 border-black hover:bg-black hover:text-[#FFC107] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
              <Phone className="w-6 h-6 currentColor" />
              (425) 406-3445
            </a>
          </motion.div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm font-bold text-black/90 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-black/10 inline-flex shadow-sm">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> No Credit Card</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Licensed & Insured</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Eco-Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
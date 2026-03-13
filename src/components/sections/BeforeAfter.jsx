import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SatisfactionGuaranteeBadge from '@/components/ui/SatisfactionGuaranteeBadge';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const BeforeAfter = () => {
  const results = [
    {
      location: 'Kirkland Garage Cleanout',
      caption: 'Full double-car garage cleared in 2 hours',
      image: {
        alt: 'Side-by-side before and after of a garage cleanout in Kirkland, WA.',
        src: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Placeholder for empty garage
      }
    },
    {
      location: 'Bothell Yard Debris',
      caption: 'Removed 2 tons of overgrown brush & waste',
      image: {
        alt: 'Side-by-side before and after of yard debris removal in Bothell, WA.',
        src: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Placeholder for clean yard
      }
    }
  ];

  return (
    <section id="results" className="py-20 sm:py-24 px-4 bg-zinc-900 border-t-8 border-[#FFC107]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <SatisfactionGuaranteeBadge className="bg-white/5 border-white/10 text-[#FFC107]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">See Our Results</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium">
            From cluttered garages to overgrown yards, see the fast difference we can make for your space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-2 rounded-3xl shadow-2xl border-2 border-zinc-800 overflow-hidden flex flex-col group hover:border-[#FFC107] transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  alt={result.image.alt} 
                  src={result.image.src} 
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute top-4 left-4 bg-[#FFC107] text-black font-black uppercase text-xs px-3 py-1 rounded shadow-lg">Before & After</div>
              </div>
              <div className="p-8 text-center bg-black rounded-b-2xl">
                <h3 className="text-2xl font-black text-white mb-3">{result.location}</h3>
                <p className="text-[#FFC107] font-semibold text-lg">{result.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20 relative z-10">
          <Button
            onClick={() => openCalendlyPopup()}
            className="bg-[#FFC107] text-black hover:bg-white text-xl font-black py-8 px-12 rounded-xl shadow-2xl hover:-translate-y-1 transition-all"
          >
            Ready to Clear It Out?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
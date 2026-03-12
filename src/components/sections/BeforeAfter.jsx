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
        src: 'https://horizons-cdn.hostinger.com/043d3248-867c-48dc-bfa5-01141b7ae321/d30a8382aa673de9d6936e5f2d18efff.webp'
      }
    },
    {
      location: 'Bothell Yard Debris',
      caption: 'Removed 2 tons of overgrown brush & waste',
      image: {
        alt: 'Side-by-side before and after of yard debris removal in Bothell, WA.',
        src: 'https://horizons-cdn.hostinger.com/043d3248-867c-48dc-bfa5-01141b7ae321/4a4e4dd506c2ddcadb324f4c5f5d3b57.jpg'
      }
    }
  ];

  return (
    <section id="results" className="py-20 sm:py-24 px-4 bg-black border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <SatisfactionGuaranteeBadge className="bg-white/10 border-white/20 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">See Our Results</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From cluttered garages to overgrown yards, see the difference we can make.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-2 rounded-2xl shadow-md border border-gray-700 overflow-hidden flex flex-col group hover:border-yellow-400/50 transition-colors"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  alt={result.image.alt} 
                  src={result.image.src} 
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
              <div className="p-6 text-center bg-gray-800 rounded-b-xl">
                <h3 className="text-xl font-bold text-white mb-2">{result.location}</h3>
                <p className="text-yellow-400 font-medium">{result.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="cta"
            size="lg"
            onClick={() => openCalendlyPopup()}
          >
            Ready to Clear It Out?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
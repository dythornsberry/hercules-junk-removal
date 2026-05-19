import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import SatisfactionGuaranteeBadge from '@/components/ui/SatisfactionGuaranteeBadge';

const BeforeAfter = () => {
  const results = [
    {
      location: 'Kenmore Garage Cleanout',
      caption: 'Full garage cleared in under 2 hours',
      before: {
        alt: 'Dylan from Hercules Junk Removal pointing at garage full of junk before cleanup in Kenmore, WA.',
        src: '/images/jobs/dylan-before.webp'
      },
      after: {
        alt: 'Dylan from Hercules Junk Removal giving thumbs up in front of empty clean garage after cleanup in Kenmore, WA.',
        src: '/images/jobs/dylan-after.webp'
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Job Photos</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium">
            Before and after photos from local junk removal jobs.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative z-10">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border-4 border-black shadow-[8px_8px_0_rgba(255,193,7,0.3)] overflow-hidden flex flex-col group"
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-[250px] sm:h-[400px] md:h-[450px] object-cover"
                    alt={result.before.alt}
                    src={result.before.src}
                    loading="lazy"
                    width="400"
                    height="450"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white font-black uppercase text-sm px-4 py-1.5 border-2 border-black shadow-[3px_3px_0_#000]">Before</div>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-[250px] sm:h-[400px] md:h-[450px] object-cover"
                    alt={result.after.alt}
                    src={result.after.src}
                    loading="lazy"
                    width="400"
                    height="450"
                  />
                  <div className="absolute top-3 left-3 bg-green-600 text-white font-black uppercase text-sm px-4 py-1.5 border-2 border-black shadow-[3px_3px_0_#000]">After</div>
                </div>
              </div>
              <div className="p-8 text-center bg-black border-t-4 border-[#FFC107]">
                <h3 className="text-2xl font-black text-white mb-3">{result.location}</h3>
                <p className="text-[#FFC107] font-black text-lg">{result.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20 relative z-10 flex flex-col items-center gap-4">
          <Button
            asChild
            className="bg-[#FFC107] text-black hover:bg-white text-2xl font-black py-8 px-14 border-4 border-black shadow-[6px_6px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all w-full max-w-md"
          >
            <Link to="/quote">Ready to Clear It Out?</Link>
          </Button>
          <a
            href="tel:4254063445"
            className="flex items-center gap-2 text-base font-black text-white bg-white/10 border-2 border-white/20 px-6 py-3 shadow-[3px_3px_0_rgba(255,255,255,0.1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            <Phone className="w-5 h-5 text-[#FFC107]" />
            Call or text (425) 406-3445
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

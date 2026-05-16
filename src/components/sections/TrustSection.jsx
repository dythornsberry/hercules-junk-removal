import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Leaf } from 'lucide-react';

const TrustSection = () => {
  const trustPoints = [
    {
      icon: <Star className="h-10 w-10 text-black" />,
      title: '5-Star Google Rated',
      description: 'Real reviews from local jobs.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-black" />,
      title: 'Licensed & Insured',
      description: 'Covered for the heavy lifting.',
    },
    {
      icon: <Leaf className="h-10 w-10 text-black" />,
      title: 'Eco-Friendly Disposal',
      description: 'Donate or recycle when possible.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-yellow-400 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-yellow-300/70 p-8 border-4 border-black shadow-[6px_6px_0_#000] flex flex-col items-center text-center even:rotate-1 odd:-rotate-1"
            >
              <div className="bg-yellow-400 p-4 border-2 border-black mb-6 shadow-[3px_3px_0_rgba(0,0,0,0.35)]">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{point.title}</h3>
              <p className="text-lg text-gray-800">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

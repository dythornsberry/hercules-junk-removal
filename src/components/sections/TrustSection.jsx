import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Leaf } from 'lucide-react';

const TrustSection = () => {
  const trustPoints = [
    {
      icon: <Star className="h-10 w-10 text-black" />,
      title: '5-Star Google Rated',
      description: 'Trusted by your neighbors.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-black" />,
      title: 'Licensed & Insured',
      description: 'Your property is always protected.',
    },
    {
      icon: <Leaf className="h-10 w-10 text-black" />,
      title: 'Eco-Friendly Disposal',
      description: 'We recycle and donate items.',
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
              className="bg-yellow-300/50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="bg-yellow-400 p-4 rounded-full mb-6 shadow-md">
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
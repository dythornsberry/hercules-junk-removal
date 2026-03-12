import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Truck, Leaf } from 'lucide-react';

const Timeline = () => {
  const steps = [
    {
      icon: <PhoneCall className="h-10 w-10 text-black" />,
      title: '1. Call or Text Us',
      description: 'Get a fast, clear quote and pick a time that works for you.',
    },
    {
      icon: <Truck className="h-10 w-10 text-black" />,
      title: '2. We Arrive & Haul',
      description: 'On time, uniformed, friendly. You point, we do the lifting.',
    },
    {
      icon: <Leaf className="h-10 w-10 text-black" />,
      title: '3. Eco-Friendly Disposal',
      description: 'We donate and recycle whenever possible.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">How It Works</h2>
          <p className="text-lg sm:text-xl text-black/80">Junk removal in three simple steps.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="bg-yellow-400 p-4 rounded-full mb-6 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-lg text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
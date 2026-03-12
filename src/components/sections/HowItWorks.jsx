import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Truck, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const steps = [
  {
    icon: <CalendarCheck className="h-10 w-10 text-black" />,
    title: '1. Book a Time',
    description: 'Book online in 60 seconds. We can often come the same day.',
  },
  {
    icon: <Truck className="h-10 w-10 text-black" />,
    title: '2. We Haul It Away',
    description: 'We show up on time, give you a firm price, and load everything up.',
  },
  {
    icon: <Smile className="h-10 w-10 text-black" />,
    title: '3. Enjoy Your Space',
    description: 'We sweep up, take payment, and you get your space back fast.',
  },
];

const HowItWorks = () => {
  const handleCalendlyClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
  };

  return (
    <section className="py-20 px-4 bg-yellow-400 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl font-medium opacity-90 max-w-2xl mx-auto">
            We've made getting rid of junk easier than ordering a pizza.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-black/20 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="bg-white p-6 rounded-full shadow-lg mb-6 border-4 border-black transform transition-transform hover:scale-110 duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-lg leading-relaxed opacity-90 max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button onClick={handleCalendlyClick} className="bg-black text-white hover:bg-gray-800 text-xl font-bold py-8 px-12 rounded-xl shadow-xl hover:scale-105 transition-all">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
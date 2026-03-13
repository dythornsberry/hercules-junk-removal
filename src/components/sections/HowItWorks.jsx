import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Truck, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const steps = [
  {
    image: "https://images.unsplash.com/photo-1590481878368-abff041da6af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Phone/Booking context
    icon: <CalendarCheck className="h-6 w-6 text-black absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md" />,
    title: '1. Book a Time',
    description: 'Book online in 60 seconds. We can often come the same day.',
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Hauling/Team context (using another shot of truck/moving)
    icon: <Truck className="h-6 w-6 text-black absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md" />,
    title: '2. We Haul It Away',
    description: 'We show up on time, give you a firm price, and load everything up.',
  },
  {
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Clean space / Happy customer (empty room)
    icon: <Smile className="h-6 w-6 text-black absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md" />,
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
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">How It Works</h2>
          <p className="text-xl font-semibold opacity-90 max-w-2xl mx-auto">
            We've made getting rid of junk easier than ordering a pizza.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-1 bg-black/10 -z-0 rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Image Circle */}
              <div className="relative w-48 h-48 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-8 rounded-full shadow-2xl border-4 border-black overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:border-white">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Keep a tiny version of the original icon for visual flair */}
                <div className="absolute -bottom-2 -right-2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    {step.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:underline decoration-4 underline-offset-4">{step.title}</h3>
              <p className="text-lg leading-relaxed font-medium opacity-90 max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button onClick={handleCalendlyClick} className="bg-black text-white hover:bg-gray-800 text-xl font-black py-8 px-12 rounded-xl shadow-2xl hover:scale-105 transition-all">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
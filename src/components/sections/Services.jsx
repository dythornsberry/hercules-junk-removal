import React from 'react';
import { motion } from 'framer-motion';
import { Armchair, Trash2, Warehouse, Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Armchair className="h-8 w-8 text-black" />,
    title: 'Furniture Removal',
    description: 'We take old couches, mattresses, tables, and chairs. If it’s good, we donate it.',
    link: '/furniture-removal',
  },
  {
    icon: <Warehouse className="h-8 w-8 text-black" />,
    title: 'Garage Cleanouts',
    description: 'Get your parking spot back. We clear out boxes, old tools, and random junk.',
    link: '/garage-cleanouts',
  },
  {
    icon: <Trash2 className="h-8 w-8 text-black" />,
    title: 'Household Junk',
    description: 'Declutter your attic, basement, or spare room. We take almost anything.',
    link: '/household-junk-removal',
  },
  {
    icon: <Hammer className="h-8 w-8 text-black" />,
    title: 'Construction Debris',
    description: 'Wood, drywall, fencing, and remodeling leftovers. We keep your site clean.',
    link: '/construction-debris-removal',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-6">What We Haul</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From single item pickups to full property cleanouts, we handle the heavy lifting so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="bg-yellow-400 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <Link 
                to={service.link}
                className="inline-flex items-center text-sm font-bold text-black hover:text-yellow-600 transition-colors mt-auto group-hover:translate-x-1 duration-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="default" size="lg" className="bg-black text-white hover:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
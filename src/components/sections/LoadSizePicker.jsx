import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LoadSizePicker = () => {
  const loadOptions = [
    {
      id: 'quarter',
      title: 'Quarter Load',
      price: '$199',
      description: 'Small closet, corner of garage, or a few furniture items.',
      volume: 'approx. 4 cubic yards',
      gradient: 'from-blue-500 to-cyan-400',
      popular: false,
    },
    {
      id: 'half',
      title: 'Half Load',
      price: '$299',
      description: 'Bedroom furniture set, small garage cleanout, or patio set.',
      volume: 'approx. 8 cubic yards',
      gradient: 'from-green-500 to-emerald-400',
      popular: true,
    },
    {
      id: 'three-quarter',
      title: '3/4 Load',
      price: '$499',
      description: 'Multiple rooms, large garage cleanout, or shed removal.',
      volume: 'approx. 12 cubic yards',
      gradient: 'from-orange-500 to-amber-400',
      popular: false,
    },
    {
      id: 'full',
      title: 'Full Load',
      price: '$799',
      description: 'Entire house cleanout, hoarders, or major renovation debris.',
      volume: 'approx. 16 cubic yards',
      gradient: 'from-purple-600 to-indigo-500',
      popular: false,
    },
  ];

  const handleSelect = (option) => {
    // Redirect to Calendly booking link
    window.location.href = 'https://calendly.com/junk-removal-booking';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loadOptions.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative group h-full"
          >
            <div 
              onClick={() => handleSelect(option)}
              className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:ring-2 hover:ring-offset-2 hover:ring-black/5"
            >
              {/* Header with Gradient */}
              <div className={`h-36 bg-gradient-to-br ${option.gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden`}>
                <div className="absolute -bottom-4 -right-4 p-4 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                    <Truck className="w-24 h-24" />
                </div>
                <div className="relative z-10 flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-shadow-sm">{option.title}</h3>
                  {option.popular && (
                    <span className="bg-white text-black text-[10px] uppercase font-bold px-2 py-1 rounded-full shadow-md tracking-wider">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-4xl font-black relative z-10 tracking-tight text-shadow-sm">{option.price}</p>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col">
                 <div className="mb-4 pb-4 border-b border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Estimated Volume</p>
                    <p className="text-gray-900 font-bold flex items-center gap-2">
                       {option.volume}
                    </p>
                 </div>
                 <div className="mb-8 flex-grow">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Best For</p>
                    <p className="text-gray-600 leading-relaxed text-sm">{option.description}</p>
                 </div>
                 
                 <Button className={`w-full bg-black text-white hover:bg-gray-800 font-bold py-6 rounded-xl mt-auto shadow-md group-hover:shadow-lg transition-all`}>
                    Select & Book <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 text-gray-600 bg-yellow-50 py-3 px-6 rounded-full border border-yellow-200 shadow-sm max-w-2xl mx-auto">
          <Info className="w-5 h-5 text-yellow-600 flex-shrink-0" />
          <p className="text-sm font-medium">
              <span className="font-bold text-gray-900">Note:</span> We'll confirm the exact job scope and final price on-site before starting any work. No surprises.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadSizePicker;
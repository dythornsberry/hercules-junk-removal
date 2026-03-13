import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Truck, Box, Boxes, Package } from 'lucide-react';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const Pricing = () => {
  const tiers = [
    {
      icon: <Package className="h-8 w-8 text-yellow-400" />,
      title: 'Minimum',
      price: '$99',
      description: 'Great for a single item like a mattress or sofa.',
    },
    {
      icon: <Box className="h-8 w-8 text-yellow-400" />,
      title: '1/8 Truck',
      price: '$149',
      description: 'Small amount of items or 5-8 bags of trash.',
    },
    {
      icon: <Box className="h-8 w-8 text-yellow-400" />,
      title: '1/4 Truck',
      price: '$249',
      description: 'Good for a few small items or 10-15 bags of trash.',
    },
    {
      icon: <Boxes className="h-8 w-8 text-yellow-400" />,
      title: '1/2 Truck',
      price: '$399',
      description: 'Ideal for a small room cleanout or multiple furniture pieces.',
      popular: true,
    },
    {
      icon: <Truck className="h-8 w-8 text-yellow-400" />,
      title: '3/4 Truck',
      price: '$549',
      description: 'Usually enough for a garage cleanout or yard debris.',
    },
    {
      icon: <Truck className="h-8 w-8 text-yellow-400" />,
      title: 'Full Truck',
      price: '$649',
      description: 'Best value for big projects or whole room cleanouts.',
      bestValue: true,
    },
  ];

  const handleCalendlyClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
  };

  return (
    <section id="pricing" className="py-20 sm:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Clear, Upfront Pricing</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our volume-based pricing includes labor, disposal fees, and travel. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-2xl shadow-md border border-gray-700 flex flex-col text-center transition-all duration-300 hover:shadow-xl hover:border-yellow-400"
            >
              <div className="relative flex justify-center mb-4">
                <div className="bg-gray-800 p-3 rounded-lg inline-block">
                  {tier.icon}
                </div>
                {tier.popular && <span className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-full -translate-y-1/2 translate-x-1/4">MOST POPULAR</span>}
                {tier.bestValue && <span className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded-full -translate-y-1/2 translate-x-1/4">BEST VALUE</span>}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{tier.title}</h3>
              <p className="text-3xl font-bold text-white mb-2">{tier.price}<span className="text-sm font-normal text-gray-400"> + tax</span></p>
              <p className="text-sm text-gray-300 flex-grow mb-6">{tier.description}</p>
              
              <Button 
                onClick={handleCalendlyClick}
                className="w-full bg-[#FFC107] text-black hover:bg-[#e6ae06] font-bold mt-auto py-6"
              >
                Book Now
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                 <h3 className="text-xl font-bold text-gray-900 mb-4">What We Take</h3>
                 <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {["Household Junk", "Furniture", "Appliances", "Yard Waste", "Construction Debris", "Mattresses", "Hot Tubs", "Garage Junk"].map((item, i) => (
                        <span key={i} className="bg-white border border-gray-300 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                            {item}
                        </span>
                    ))}
                 </div>
                 <p className="text-sm text-gray-500">
                    *Heavy materials (concrete, dirt, tile) may cost extra by weight. No hazardous waste.
                 </p>
            </div>
        </div>
        
        <div className="text-center mt-12">
             <Button
                variant="cta"
                size="lg"
                onClick={handleCalendlyClick}
                className="py-6 px-10 text-lg"
              >
                Book Now
              </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
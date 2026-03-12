import React from 'react';
import { motion } from 'framer-motion';
import PricingTable from '@/components/ui/PricingTable.jsx';
import TruckSpecsCard from '@/components/ui/TruckSpecsCard.jsx';

const HercJunkPricingSection = () => {
  const tiers = [
    { size: "Minimum", price: "$99", fillPercentage: 10, desc: "Single item like a mattress or sofa." },
    { size: "1/8 Truck", price: "$179", fillPercentage: 12.5, desc: "A few items or 5-8 bags of trash." },
    { size: "1/4 Truck", price: "$279", fillPercentage: 25, desc: "Few small items or 10-15 bags of trash." },
    { size: "1/2 Truck", price: "$479", fillPercentage: 50, desc: "Small room cleanout or multiple furniture pieces." },
    { size: "3/4 Truck", price: "$639", fillPercentage: 75, desc: "Garage cleanout or yard debris." },
    { size: "Full Truck", price: "$729", fillPercentage: 100, desc: "Best value for big projects or whole room cleanouts." },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight"
          >
            Transparent <span className="text-[#FF9500]">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-medium"
          >
            You only pay for the space your items take up in our truck. No hidden fees, no surprises.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          <div className="w-full lg:w-3/5">
            <PricingTable tiers={tiers} />
          </div>
          <div className="w-full lg:w-2/5">
            <TruckSpecsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HercJunkPricingSection;
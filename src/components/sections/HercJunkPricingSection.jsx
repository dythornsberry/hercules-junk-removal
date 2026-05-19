import React from 'react';
import PricingTable from '@/components/ui/PricingTable.jsx';
import TruckSpecsCard from '@/components/ui/TruckSpecsCard.jsx';

const HercJunkPricingSection = () => {
  const tiers = [
    { size: "Minimum", price: "$99", fillPercentage: 10, desc: "Single item like a mattress or sofa." },
    { size: "1/8 Truck", price: "$149", fillPercentage: 12.5, desc: "A few items or 5-8 bags of trash." },
    { size: "1/4 Truck", price: "$249", fillPercentage: 25, desc: "Few small items or 10-15 bags of trash." },
    { size: "1/2 Truck", price: "$399", fillPercentage: 50, desc: "Small room cleanout or multiple furniture pieces." },
    { size: "3/4 Truck", price: "$549", fillPercentage: 75, desc: "Garage cleanout or yard debris." },
    { size: "Full Truck", price: "$649", fillPercentage: 100, desc: "Best value for big projects or whole room cleanouts." },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <span className="inline-block rotate-[-1deg] bg-black text-[#FF9500] font-black tracking-[0.2em] uppercase text-xs px-3 py-1 border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.25)] mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight rotate-[0.3deg]">
            Big Truck <span className="text-[#FF9500]">Value</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-bold">
            18.6 cubic yards. More room = fewer trips = better price.
          </p>
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

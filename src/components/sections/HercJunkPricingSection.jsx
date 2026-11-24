import React from 'react';
import PricingTable from '@/components/ui/PricingTable.jsx';
import TruckSpecsCard from '@/components/ui/TruckSpecsCard.jsx';

const HercJunkPricingSection = ({ compact = false, headingAs: Heading = 'h2' }) => {
  const tiers = [
    { size: "Minimum", price: "$99", fillPercentage: 10, desc: "Single-item pickup" },
    { size: "1/8 Truck", price: "$149", fillPercentage: 12.5, desc: "A few items or 5–8 bags" },
    { size: "1/4 Truck", price: "$249", fillPercentage: 25, desc: "Small items or 10–15 bags" },
    { size: "1/2 Truck", price: "$399", fillPercentage: 50, desc: "Small room cleanout" },
    { size: "3/4 Truck", price: "$549", fillPercentage: 75, desc: "Garage junk or yard debris" },
    { size: "Full Truck", price: "$649", fillPercentage: 100, desc: "Large cleanout · 18.6 cubic yards" },
  ];

  return (
    <section id="pricing" className="py-10 md:py-14 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Heading className="text-3xl md:text-4xl font-bold text-black">Junk removal pricing</Heading>
          <p className="mt-3 text-lg text-gray-700">Based on truck space. You approve the total before we load.</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full">
            <PricingTable tiers={tiers} showHeader={!compact} />
          </div>
          {!compact && <TruckSpecsCard />}
          {compact && (
            <p className="text-sm leading-relaxed text-gray-600">
              Starting rates shown. Mattresses, refrigerant appliances, tires, pianos, stairs, or difficult access may cost extra.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HercJunkPricingSection;

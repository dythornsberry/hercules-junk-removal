import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import QuickPickCard from '@/components/ui/QuickPickCard';
import PricingAccordion from '@/components/sections/PricingAccordion';

const QuickPickSection = () => {

  const mainTiers = [
    { title: "Single Item", price: "$99", desc: "A single item (mattress, TV) or a few bags", tag: "" },
    { title: "Small (1/4 Truck)", price: "$279", desc: "Bed frame + mattress + dresser", tag: "" },
    { title: "Medium (1/2 Truck)", price: "$479", desc: "A couple rooms of furniture + misc items", tag: "MOST POPULAR" },
    { title: "Large (Full Truck)", price: "$729", desc: "Packed garage or large cleanout", tag: "BEST VALUE" },
  ];

  return (
    <section className="py-16 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Choose Your Load Size</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Honest, volume-based pricing. Select the size that best matches your junk to lock in your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {mainTiers.map((tier, idx) => (
            <QuickPickCard
              key={idx}
              index={idx}
              title={tier.title}
              price={tier.price}
              description={tier.desc}
              tag={tier.tag}
            />
          ))}
        </div>

        <PricingAccordion />

        <div className="max-w-4xl mx-auto mt-16 bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-gray-800">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Not sure what size you need?</h3>
              <p className="text-gray-400">Call or text us with a photo and we'll help estimate your load size.</p>
            </div>
            <a 
              href="tel:4254063445" 
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-6 py-4 rounded-xl font-bold transition-colors border border-white/10 shrink-0 text-lg"
            >
              <Phone className="w-5 h-5 text-[#FFC107]" />
              425-406-3445
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#FFC107] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white mb-1">Clear Estimates</h4>
                <p className="text-sm text-gray-400">We confirm your exact price on-site before we start any work. No surprises.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#FFC107] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white mb-1">All-Inclusive Labor</h4>
                <p className="text-sm text-gray-400">Labor, disposal fees, and travel are all included in your volume quote.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#FFC107] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white mb-1">Heavy Materials</h4>
                <p className="text-sm text-gray-400">Dirt, concrete, and roofing shingles are priced by weight due to disposal limits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickPickSection;
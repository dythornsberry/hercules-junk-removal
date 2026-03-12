import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Phone, CheckCircle2 } from 'lucide-react';
import QuickPickCard from '@/components/ui/QuickPickCard';
import LoadSizeCard from '@/components/ui/LoadSizeCard';

const BookingSection = () => {
  const [showAllSizes, setShowAllSizes] = useState(false);

  const quickPicks = [
    { title: "Minimum Load", price: "$99", desc: "A single item (mattress, TV, fridge) or a few bags of trash.", tag: "" },
    { title: "1/2 Truck", price: "$479", desc: "A couple rooms of furniture + misc boxes and items.", tag: "MOST POPULAR" },
    { title: "Full Truck", price: "$729", desc: "Packed garage, full house cleanout, or large moving piles.", tag: "BEST VALUE" },
  ];

  const allSizes = [
    { title: "Minimum Load", price: "$99", desc: "Single item or few bags", tag: "" },
    { title: "1/8 Truck", price: "$179", desc: "Couch OR chair + small stack of boxes", tag: "" },
    { title: "1/4 Truck", price: "$279", desc: "Bed frame + mattress + dresser", tag: "" },
    { title: "3/8 Truck", price: "$379", desc: "Bedroom set + couch + some boxes", tag: "" },
    { title: "1/2 Truck", price: "$479", desc: "Couple rooms of furniture + misc items", tag: "MOST POPULAR" },
    { title: "5/8 Truck", price: "$559", desc: "Living room + bedroom set + boxes/clutter", tag: "" },
    { title: "3/4 Truck", price: "$639", desc: "Several rooms of furniture + bags (bigger cleanout)", tag: "" },
    { title: "Full Truck", price: "$729", desc: "Packed garage or large cleanout", tag: "BEST VALUE" },
  ];

  return (
    <section className="py-16 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Book a Pickup</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pick a starting price. We confirm your exact price before we start any work.
          </p>
        </div>

        {/* Quick Picks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {quickPicks.map((pick, idx) => (
            <QuickPickCard
              key={`quick-${idx}`}
              index={idx}
              title={pick.title}
              price={pick.price}
              description={pick.desc}
              tag={pick.tag}
            />
          ))}
        </div>

        <div className="text-center mb-10">
          <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
            Not sure what size you need? Call/text us a photo: <a href="tel:4254063445" className="text-white hover:text-[#FFC107] transition-colors font-bold">425-406-3445</a>
          </p>
        </div>

        {/* Expander Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowAllSizes(!showAllSizes)}
            className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-gray-900 border border-gray-800 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md group"
          >
            {showAllSizes ? (
              <>Hide load sizes <ChevronUp className="w-5 h-5 text-[#FFC107] group-hover:-translate-y-1 transition-transform" /></>
            ) : (
              <>See all load sizes <ChevronDown className="w-5 h-5 text-[#FFC107] group-hover:translate-y-1 transition-transform" /></>
            )}
          </button>
        </div>

        {/* Expanded Sizes Grid */}
        <AnimatePresence>
          {showAllSizes && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-12">
                <h3 className="text-2xl font-bold text-white text-center mb-8">All Load Sizes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                  {allSizes.map((size, idx) => (
                    <LoadSizeCard
                      key={`all-${idx}`}
                      index={idx}
                      title={size.title}
                      price={size.price}
                      description={size.desc}
                      tag={size.tag}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pricing Notes */}
        <div className="max-w-4xl mx-auto mt-8 bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8 shadow-xl">
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

export default BookingSection;
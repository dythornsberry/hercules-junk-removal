import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, MessageCircle, Phone, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: <MessageCircle className="h-10 w-10 text-black" />,
    title: '1. Call Or Text',
    description: 'Tell us what needs to go.',
  },
  {
    icon: <DollarSign className="h-10 w-10 text-black" />,
    title: '2. Get A Price',
    description: 'You know the cost before loading.',
  },
  {
    icon: <Truck className="h-10 w-10 text-black" />,
    title: '3. Junk Gets Hauled',
    description: 'The truck gets loaded and the junk goes away.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-yellow-400 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-4 border-black bg-white p-5 text-left shadow-[7px_7px_0_#000] md:p-7">
          <p className="mb-2 inline-block bg-black px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#FFC107]">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-3 tracking-[-0.04em]">Call, price, haul.</h2>
          <p className="text-xl font-black opacity-90 max-w-3xl">
            Simple junk removal from a Kenmore-based owner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-black/20 -z-0"></div>

          {steps.map((step, index) => {
            const tilts = ['rotate-[-0.8deg]', 'rotate-[0.5deg]', 'rotate-[-0.4deg]'];
            return (
            <div
              key={index}
              className={`relative z-10 flex flex-col items-start border-4 border-black bg-white p-6 text-left shadow-[6px_6px_0_#000] group ${tilts[index]} hover:rotate-0 transition-transform`}
            >
              <div className="bg-[#FFC107] p-4 shadow-lg mb-5 border-4 border-black transform transition-transform hover:translate-x-1 hover:translate-y-1 duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black mb-3 tracking-tight">{step.title}</h3>
              <p className="text-lg leading-relaxed font-medium opacity-90 max-w-xs">
                {step.description}
              </p>
            </div>
            );
          })}
        </div>

        <div className="text-center mt-12 flex flex-col items-center gap-4">
          <Button asChild className="bg-black text-white hover:bg-gray-800 text-2xl font-black py-8 px-14 rounded-md border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,0.35)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all w-full max-w-md">
            <Link to="/quote">Get A Quote</Link>
          </Button>
          <a
            href="tel:4254063445"
            className="flex items-center gap-2 text-base font-black text-black hover:text-black bg-white hover:bg-white/80 border-2 border-black px-6 py-3 shadow-[3px_3px_0_#000] transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            Call/text (425) 406-3445
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

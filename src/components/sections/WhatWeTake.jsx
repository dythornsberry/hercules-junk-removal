import React from 'react';
import { Check, X } from 'lucide-react';

const WhatWeTake = () => {
  const takes = [
    'Furniture (couches, beds, dressers)',
    'Appliances (fridges, washers, dryers)',
    'Mattresses & box springs',
    'TVs & electronics',
    'Garage & basement junk',
    'Yard waste & branches',
    'Construction debris',
    'Hot tubs & playsets',
    'Estate cleanouts',
    'Pretty much anything',
  ];

  const noTakes = [
    'Hazardous waste / chemicals',
    'Paint (dried is OK)',
    'Asbestos',
    'Medical waste',
    'Wet/leaking trash',
  ];

  return (
    <section className="bg-[#f4f0e6] border-y-4 border-black py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <span className="inline-block rotate-[-1deg] bg-black text-[#FFC107] font-black tracking-[0.2em] uppercase text-xs px-3 py-1 border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.25)] mb-4">
            What goes in the truck
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight rotate-[0.3deg]">
            If it's junk, it's gone.
          </h2>
          <p className="mt-3 text-lg text-gray-700 font-bold">
            Not sure if we take it? Just call. Odds are yes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] rotate-[-0.5deg]">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-black">
              <Check className="w-6 h-6 text-green-600" strokeWidth={3} />
              <h3 className="text-2xl font-black uppercase tracking-wide">We Haul</h3>
            </div>
            <ul className="space-y-2.5">
              {takes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-base font-bold text-black">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] rotate-[0.4deg]">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-black">
              <X className="w-6 h-6 text-red-600" strokeWidth={3} />
              <h3 className="text-2xl font-black uppercase tracking-wide">We Can't</h3>
            </div>
            <ul className="space-y-2.5">
              {noTakes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-base font-bold text-black">
                  <X className="w-5 h-5 text-red-600 mt-0.5 shrink-0" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 pt-4 border-t-2 border-dashed border-black text-sm text-gray-700 font-bold">
              City dump won't take this stuff either. Sorry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeTake;

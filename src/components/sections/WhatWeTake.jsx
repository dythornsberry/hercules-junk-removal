import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const WhatWeTake = () => (
  <section className="bg-white border-t border-gray-200 py-10 md:py-14">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">What we haul</h2>
      <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 text-base text-gray-800">
        {[
          'Furniture & mattresses',
          'Appliances & electronics',
          'Garage & house cleanouts',
          'Yard waste',
          'Construction debris',
          'Hot tubs & playsets',
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <Check className="w-5 h-5 shrink-0" aria-hidden="true" />{item}
          </li>
        ))}
      </ul>
      <details className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-600">
        <summary className="cursor-pointer font-semibold py-2">Items we can't take</summary>
        <p className="mt-2 leading-relaxed">Hazardous waste, chemicals, wet paint, asbestos, medical waste, and wet or leaking trash. Dried paint is OK.</p>
      </details>
      <Link to="/services" className="mt-4 inline-block py-2 text-sm font-bold underline underline-offset-4">View all services</Link>
    </div>
  </section>
);

export default WhatWeTake;

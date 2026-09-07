import React from 'react';
import { Link } from 'react-router-dom';

const DylanSection = () => (
  <section className="bg-white py-10 md:py-14">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
        <img src="/images/dylan-in-truck.jpg" alt="Dylan, owner of Hercules Junk Removal" className="w-36 h-36 sm:w-48 sm:h-48 object-cover shrink-0" loading="lazy" width="192" height="192" />
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Hi, I'm Dylan.</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">I own and operate Hercules in Kenmore. Call and you'll speak with me. I'll give you a price and handle the hauling.</p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">Serving Kenmore, Bothell, Kirkland, Lynnwood, Shoreline & nearby.</p>
          <Link to="/service-areas" className="mt-3 inline-block py-2 text-sm font-bold underline underline-offset-4">See all service areas</Link>
        </div>
      </div>
    </div>
  </section>
);

export default DylanSection;

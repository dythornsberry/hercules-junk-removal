import React from 'react';

const BeforeAfter = () => (
  <section id="results" className="bg-[#1A1A1A] py-10 md:py-14">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white">A garage cleanout in Kenmore</h2>
      <p className="mt-3 mb-6 text-lg text-gray-300">Cleared in under 2 hours.</p>
      <div className="grid grid-cols-2 gap-3 sm:gap-5">
        {[
          { label: 'Before', src: '/images/jobs/dylan-before.webp', alt: 'Dylan beside a garage full of junk before a cleanout in Kenmore' },
          { label: 'After', src: '/images/jobs/dylan-after.webp', alt: 'Dylan in the cleared garage after the Kenmore cleanout' },
        ].map((photo) => (
          <figure key={photo.label}>
            <img src={photo.src} alt={photo.alt} className="w-full aspect-[4/3] object-cover" loading="lazy" width="400" height="450" />
            <figcaption className="mt-3 text-sm font-bold text-white">{photo.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfter;

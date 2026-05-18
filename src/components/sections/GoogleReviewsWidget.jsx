import React from 'react';

const reviews = [
  {
    quote: 'Great communication, efficient, professional and punctual.',
    name: 'Rhonda M.',
    area: 'Kenmore',
  },
  {
    quote: 'Dylan did an amazing job and was super affordable.',
    name: 'Ryder A.',
    area: 'Bothell',
  },
  {
    quote: 'They took care of it fast and did a great job.',
    name: 'Owen A.',
    area: 'Kenmore',
  },
];

const GoogleReviewsWidget = () => {
  return (
    <section className="bg-[#f4f0e6] border-y-4 border-black py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 inline-block rotate-[-1deg] bg-black px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f5c400]">
            Local jobs
          </p>
          <h2 className="text-3xl font-black leading-tight text-black md:text-4xl">
            People call when they need the junk gone.
          </h2>
          <p className="mt-3 text-lg font-semibold text-gray-700">
            A few real notes from nearby jobs.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={`${review.name}-${review.area}`}
              className="border-4 border-black bg-white p-5 shadow-[6px_6px_0_#000]"
            >
              <blockquote className="text-lg font-bold leading-snug text-black">
                "{review.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t-2 border-black pt-3 text-sm font-black uppercase tracking-wide text-gray-800">
                {review.name} / {review.area}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;

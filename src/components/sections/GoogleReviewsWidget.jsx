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
    <section className="bg-gray-50 border-b border-gray-200 py-10 md:py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">What customers say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="border-l-4 border-[#FFC107] pl-5">
              <blockquote className="text-lg leading-relaxed text-black">“{review.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">{review.name} · {review.area}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;

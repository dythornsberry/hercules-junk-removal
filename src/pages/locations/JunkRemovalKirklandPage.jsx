import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalKirklandPage = () => {
  return (
    <LocationPageLayout
      city="Kirkland"
      h1="Garage Cleanouts in Kirkland from $99 – Same-Day" // Specific H1
      blurb="Serving all neighborhoods in Kirkland for efficient garage cleanouts. We're your local, fast, and friendly junk hauling solution. Get a free quote today!" // Specific Blurb
      metaDescription="Same-day garage cleanouts in Kirkland, WA from $99. We clear out old furniture, boxes, tools, and more. Call for a fast, free quote." // Specific Meta Description
      imageUrl="https://images.unsplash.com/photo-1616428456079-c55e92751f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyMHx8Z2FyYWdlJTIwY2xlYW5vdXR8ZW58MHx8fHwxNzA2Njg3Njg2fDA&ixlib=rb-4.0.3&q=80&w=1080" // New image for Kirkland Garage CleanOut
    />
  );
};

export default JunkRemovalKirklandPage;
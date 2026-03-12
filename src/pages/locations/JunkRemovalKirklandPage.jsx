import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalKirklandPage = () => {
  return (
    <LocationPageLayout
      city="Kirkland"
      slug="junk-removal-kirkland"
      h1="Junk Removal in Kirkland, WA from $99 – Same-Day"
      blurb="Professional junk removal across Kirkland — from the waterfront to Totem Lake. Book online in 60 seconds or call for a free estimate."
      metaDescription="Same-day junk removal in Kirkland, WA from $99. Furniture, garage cleanouts, appliances & more. Licensed & insured. Book online in 60 seconds."
      zipCodes={['98033', '98034']}
      neighborhoods={[
        'Downtown Kirkland', 'Juanita', 'Totem Lake',
        'Houghton', 'Kingsgate', 'Finn Hill',
        'Rose Hill', 'Norkirk', 'Market'
      ]}
      localContent={[
        {
          title: "Kirkland's Go-To Junk Removal Service",
          paragraphs: [
            "From the charming downtown waterfront to the family neighborhoods of Juanita and Finn Hill, Kirkland homeowners trust Hercules Junk Removal to handle their cleanouts quickly and professionally. We're a short drive from anywhere in Kirkland and offer same-day service most days of the week.",
            "Kirkland's mix of mid-century homes and newer construction means we see everything — basement cleanouts full of decades of storage, garage purges before a remodel, and post-move furniture that won't fit in the new place. No job is too small or too cluttered for our team.",
            "We price by the space your items take up in our truck, starting at $99 for a single item. You'll know your exact price before we start — no surprises, no hidden fees, no hourly charges that run up the bill."
          ]
        },
        {
          title: "Garage Cleanouts & Home Cleanups in Kirkland",
          paragraphs: [
            "Garage cleanouts are one of our most popular services in Kirkland. Many homes in Totem Lake, Kingsgate, and Rose Hill have two-car garages packed floor to ceiling with years of accumulated stuff. We sort through it all, haul away the junk, and sweep up when we're done.",
            "Whether it's old furniture, broken appliances, boxes of who-knows-what, or leftover renovation materials — point at it and we'll make it disappear. We donate usable items locally and recycle everything we can to minimize landfill waste."
          ]
        }
      ]}
      popularServices={[
        { name: "Garage Cleanouts", desc: "Full-service garage clearing", link: "/garage-cleanouts" },
        { name: "Household Junk Removal", desc: "Furniture, appliances, general clutter", link: "/household-junk-removal" },
        { name: "Furniture Removal", desc: "Couches, mattresses, heavy items", link: "/furniture-removal" },
        { name: "Construction Debris", desc: "Renovation & remodel cleanup", link: "/construction-debris-removal" },
      ]}
    />
  );
};

export default JunkRemovalKirklandPage;

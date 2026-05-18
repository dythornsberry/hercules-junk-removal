import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalBothellPage = () => {
  return (
    <LocationPageLayout
      city="Bothell"
      slug="junk-removal-bothell"
      h1="Junk Removal in Bothell, WA"
      blurb="Junk removal in Bothell from a Kenmore-based hauler right next door. Furniture, yard waste, appliances, garage junk, and cleanouts."
      metaDescription="Junk removal in Bothell, WA from a Kenmore-based hauler. Furniture, yard waste, appliances, garage cleanouts, same-day pickup, and quotes from $99."
      zipCodes={['98011', '98012', '98021']}
      neighborhoods={[
        'Canyon Park', 'North Creek', 'Country Village',
        'Bothell Landing', 'Westhill', 'Queensgate',
        'Fitzgerald', 'Norway Hill', 'Maywood'
      ]}
      localContent={[
        {
          title: "Bothell junk hauling from nearby Kenmore",
          paragraphs: [
            "Bothell is right next to Kenmore, so pickups in Canyon Park, North Creek, Bothell Landing, Westhill, and Norway Hill are normal service calls.",
            "Old couches, broken appliances, garage junk, hot tubs, yard debris, and move-out piles can all go in the truck. Pricing is based on how much room the load takes.",
            "Quotes start at $99 for small single-item jobs. The price is confirmed before anything gets loaded."
          ]
        },
        {
          title: "Yard waste, garage junk, and cleanouts",
          paragraphs: [
            "Bothell has plenty of mature trees, remodels, and packed garages. Branches, brush, dirt, sod, scrap wood, old furniture, and general clutter are common jobs.",
            "The box truck has more room than a pickup bed, which helps keep bigger loads simple. Green waste and metal get recycled when possible."
          ]
        }
      ]}
      popularServices={[
        { name: "Household Junk Removal", desc: "Furniture, appliances, general clutter", link: "/household-junk-removal" },
        { name: "Garage Cleanouts", desc: "Full-service garage clearing", link: "/garage-cleanouts" },
        { name: "Furniture Removal", desc: "Couches, mattresses, heavy items", link: "/furniture-removal" },
        { name: "Construction Debris", desc: "Renovation & remodel cleanup", link: "/construction-debris-removal" },
      ]}
    />
  );
};

export default JunkRemovalBothellPage;

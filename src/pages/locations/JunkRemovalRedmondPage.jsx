import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalRedmondPage = () => {
  return (
    <LocationPageLayout
      city="Redmond"
      slug="junk-removal-redmond"
      h1="Junk Removal in Redmond, WA from $99"
      blurb="Reliable junk removal in Redmond. We haul furniture, appliances, yard waste, and construction debris with same-day pickup available."
      metaDescription="Same-day junk removal in Redmond, WA from $99. Furniture, appliances, yard waste, and debris hauling. Licensed and insured. Book online in 60 seconds."
      zipCodes={['98052', '98053', '98073', '98074']}
      neighborhoods={[
        'Downtown Redmond', 'Education Hill', 'Overlake', 'Willows',
        'Bear Creek', 'Grass Lawn', 'Idylwood', 'Rose Hill',
        'Southeast Redmond', 'Redmond Ridge', 'Novelty Hill',
        'Marymoor', 'Avondale', 'Union Hill'
      ]}
      localContent={[
        {
          title: "Redmond's Local Junk Removal Experts",
          paragraphs: [
            "Hercules Junk Removal serves Redmond and the surrounding Eastside communities. From clearing out a cluttered garage on Education Hill to hauling away old furniture from a home near Marymoor Park, we handle all types of residential and light commercial junk removal.",
            "Redmond is growing fast, and with new builds and renovations come piles of construction debris, old appliances, and unwanted furniture. We are equipped to handle it all with volume-based pricing starting at just $99."
          ]
        },
        {
          title: "Why Redmond Residents Call Hercules",
          paragraphs: [
            "We are a small, locally owned operation -- not a franchise. That means lower overhead, better prices, and personal service. You will get a firm quote on-site before we start, and we sweep up the area when we are done.",
            "We prioritize recycling and donation over landfill disposal. Usable items go to local charities, metals and wood get recycled, and we only trash what cannot be reused. Fast, honest, and responsible -- that is how we do business."
          ]
        }
      ]}
      popularServices={[
        { name: "Household Junk Removal", desc: "Furniture, appliances, general clutter", link: "/household-junk-removal" },
        { name: "Garage Cleanouts", desc: "Full-service garage clearing", link: "/garage-cleanouts" },
        { name: "Furniture Removal", desc: "Couches, mattresses, heavy items", link: "/furniture-removal" },
        { name: "Yard Waste Removal", desc: "Branches, brush, storm debris", link: "/yard-waste-removal" },
      ]}
    />
  );
};

export default JunkRemovalRedmondPage;

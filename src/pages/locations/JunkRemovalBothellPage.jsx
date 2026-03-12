import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalBothellPage = () => {
  return (
    <LocationPageLayout
      city="Bothell"
      slug="junk-removal-bothell"
      h1="Junk Removal in Bothell, WA from $99 – Same-Day"
      blurb="Fast, reliable junk removal serving all of Bothell. From Canyon Park to downtown, we haul away your unwanted items the same day."
      metaDescription="Same-day junk removal in Bothell, WA from $99. Furniture, yard waste, appliances & more. Licensed & insured local team. Book online in 60 seconds."
      zipCodes={['98011', '98012', '98021']}
      neighborhoods={[
        'Canyon Park', 'North Creek', 'Country Village',
        'Bothell Landing', 'Westhill', 'Queensgate',
        'Fitzgerald', 'Norway Hill', 'Maywood'
      ]}
      localContent={[
        {
          title: "Bothell's Trusted Local Junk Hauling Team",
          paragraphs: [
            "Bothell is growing fast — new construction, home renovations, and families upgrading their spaces. That means a lot of junk that needs to go somewhere. Hercules Junk Removal serves all of Bothell from Canyon Park down to Bothell Landing, with same-day service available most days.",
            "We handle everything from single items like an old hot tub or a broken appliance to full-scale garage cleanouts and estate cleanups. Our crew is experienced with the narrow driveways and hillside properties that are common throughout Bothell's older neighborhoods.",
            "Our pricing is straightforward — we charge by volume, starting at $99 for a single item. We'll give you a firm price on-site before we lift a single thing, so you always know exactly what you're paying."
          ]
        },
        {
          title: "Yard Waste & Debris Removal in Bothell",
          paragraphs: [
            "With all the mature trees and lush landscaping in Bothell, yard waste is one of our most common calls. Branches, brush, dirt, sod, and storm debris — we haul it all. Unlike curbside pickup, we come to wherever the debris is in your yard and load it ourselves.",
            "Whether you're cleaning up after a landscaping project near North Creek or clearing out overgrown brush on a Norway Hill property, Hercules handles the heavy lifting so you don't have to. We recycle green waste and dispose of everything responsibly."
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

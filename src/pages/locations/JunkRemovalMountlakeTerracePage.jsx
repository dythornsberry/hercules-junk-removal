import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalMountlakeTerracePage = () => {
  return (
    <LocationPageLayout
      city="Mountlake Terrace"
      slug="junk-removal-mountlake-terrace"
      h1="Junk Removal in Mountlake Terrace, WA from $99 – Same-Day"
      blurb="Affordable, reliable junk removal in Mountlake Terrace. We haul away furniture, appliances, and more with same-day service."
      metaDescription="Same-day junk removal in Mountlake Terrace, WA from $99. Furniture, appliances, yard waste & more. Licensed & insured. Book online in 60 seconds."
      zipCodes={['98043']}
      neighborhoods={[
        'Town Center', 'Lakeview Trail', 'Gateway',
        'Ballinger', 'Mountlake Terrace Transit area',
        'Veterans Memorial Park area', 'Brier border', 'Lynnwood border'
      ]}
      localContent={[
        {
          title: "Fast Junk Removal for Mountlake Terrace Homes",
          paragraphs: [
            "Mountlake Terrace is a welcoming community with a strong neighborhood feel, and Hercules Junk Removal is proud to serve its residents. Whether you're in a home near Ballinger Park, a townhouse by the new transit station, or anywhere else in the 98043, we provide fast, friendly junk removal at fair prices.",
            "We see a lot of post-renovation debris, furniture replacement jobs, and garage cleanouts in Mountlake Terrace. The city's mid-century housing stock means many homeowners are updating their spaces, and that generates waste that doesn't fit in regular trash pickup.",
            "Our pricing is volume-based and starts at $99 for a single item. We confirm your exact total on-site before any work begins. No surprises, no hidden charges."
          ]
        },
        {
          title: "Eco-Friendly Disposal in Mountlake Terrace",
          paragraphs: [
            "We take our environmental responsibility seriously. Items in good condition are donated to local organizations. Metals, wood, and recyclable materials are separated and taken to appropriate recycling facilities. We only send items to the landfill as a last resort.",
            "For Mountlake Terrace residents who care about sustainability, Hercules offers a greener alternative to renting a dumpster and tossing everything in together. We do the sorting so you don't have to."
          ]
        }
      ]}
      popularServices={[
        { name: "Household Junk Removal", desc: "Furniture, appliances, general clutter", link: "/household-junk-removal" },
        { name: "Furniture Removal", desc: "Couches, mattresses, heavy items", link: "/furniture-removal" },
        { name: "Garage Cleanouts", desc: "Full-service garage clearing", link: "/garage-cleanouts" },
        { name: "Construction Debris", desc: "Renovation & remodel cleanup", link: "/construction-debris-removal" },
      ]}
    />
  );
};

export default JunkRemovalMountlakeTerracePage;

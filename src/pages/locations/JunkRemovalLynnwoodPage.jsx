import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalLynnwoodPage = () => {
  return (
    <LocationPageLayout
      city="Lynnwood"
      slug="junk-removal-lynnwood"
      h1="Junk Removal in Lynnwood, WA from $99 – Same-Day"
      blurb="Fast, affordable junk hauling across Lynnwood. From Alderwood to Highway 99 — we pick up and haul away your unwanted items."
      metaDescription="Same-day junk removal in Lynnwood, WA from $99. Furniture, appliances, yard waste & more. Licensed & insured local crew. Book online in 60 seconds."
      zipCodes={['98036', '98037', '98087']}
      neighborhoods={[
        'Alderwood Manor', 'Alderwood Mall area', 'Martha Lake',
        'Meadowdale', 'Lynnwood Bowl area', 'Highway 99 corridor',
        'North Lynnwood', 'South Lynnwood', 'Larch Way'
      ]}
      localContent={[
        {
          title: "Reliable Junk Removal Across Lynnwood",
          paragraphs: [
            "Lynnwood is one of the most diverse and fast-growing cities on the Eastside, and with all that growth comes junk that needs to go. Whether you're in an apartment near Alderwood Mall, a house in Martha Lake, or a condo along the Highway 99 corridor, Hercules Junk Removal is ready to help.",
            "We serve all of Lynnwood with same-day and next-day availability. Our volume-based pricing starts at $99 for a single item, and there are never hidden fees. We confirm your exact price before we start any work.",
            "From old furniture and busted appliances to full garage cleanouts and post-renovation debris, we handle it all. Our team does all the heavy lifting — you just point at what goes, and we make it disappear."
          ]
        },
        {
          title: "Apartment & Condo Cleanouts in Lynnwood",
          paragraphs: [
            "With the light rail expansion and new development throughout Lynnwood, we're seeing more and more apartment and condo cleanouts. Moving out of a unit near the Lynnwood City Center? Clearing out a rental property? We specialize in quick, efficient cleanouts that leave the space broom-clean.",
            "We're experienced with apartment complexes — navigating elevators, tight hallways, and parking restrictions. We'll work with your building's rules and timeline to get the job done without disruption."
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

export default JunkRemovalLynnwoodPage;

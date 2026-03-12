import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalShorelinePage = () => {
  return (
    <LocationPageLayout
      city="Shoreline"
      slug="junk-removal-shoreline"
      h1="Junk Removal in Shoreline, WA from $99 – Same-Day"
      blurb="Professional junk removal across Shoreline. From Richmond Beach to Ridgecrest, we haul it all with same-day service available."
      metaDescription="Same-day junk removal in Shoreline, WA from $99. Furniture, appliances, yard waste & more. Licensed & insured local team. Book online in 60 seconds."
      zipCodes={['98133', '98155', '98177']}
      neighborhoods={[
        'Richmond Beach', 'Ridgecrest', 'Hillwood',
        'Echo Lake', 'North City', 'Briarcrest',
        'Meridian Park', 'Innis Arden', 'Highland Terrace'
      ]}
      localContent={[
        {
          title: "Shoreline's Reliable Junk Removal Service",
          paragraphs: [
            "Shoreline sits right between Seattle and the Northshore communities, making it a popular area for families and professionals. With its established neighborhoods and mix of single-family homes and apartments, there's always junk that needs to go — from basement cleanouts in Ridgecrest to furniture removal in Richmond Beach.",
            "Hercules Junk Removal serves all of Shoreline with same-day availability. We're a local crew that treats your home with care, and we're familiar with the neighborhoods, street parking situations, and the types of jobs Shoreline residents need done.",
            "Our pricing starts at $99 for a single item and is based on the volume your stuff takes up in our truck. We always confirm your price before we start — no hourly rates, no hidden fees."
          ]
        },
        {
          title: "Full-Service Cleanouts for Shoreline Homes",
          paragraphs: [
            "Many Shoreline homes were built in the 1950s-1970s, and basements, attics, and garages tend to accumulate decades of stuff. We specialize in full cleanouts — we go through the space, haul everything away, and leave it broom-clean.",
            "Whether you're downsizing, handling an estate, preparing a rental unit for new tenants, or just finally tackling that cluttered garage, Hercules handles the entire process. We donate usable items, recycle what we can, and dispose of the rest responsibly."
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

export default JunkRemovalShorelinePage;

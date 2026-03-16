import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalBellevuePage = () => {
  return (
    <LocationPageLayout
      city="Bellevue"
      slug="junk-removal-bellevue"
      h1="Junk Removal in Bellevue, WA from $99"
      blurb="Fast, affordable junk removal across Bellevue. We haul furniture, appliances, yard waste, and construction debris with same-day availability."
      metaDescription="Affordable junk removal in Bellevue, WA from $99. Furniture, appliances, construction debris, and full cleanouts. Licensed and insured. Book online."
      zipCodes={['98004', '98005', '98006', '98007', '98008', '98009', '98015']}
      neighborhoods={[
        'Downtown Bellevue', 'Crossroads', 'Factoria', 'Newport',
        'Eastgate', 'West Bellevue', 'Bridle Trails', 'Woodridge',
        'Wilburton', 'Lake Hills', 'Somerset', 'Cougar Mountain',
        'Enatai', 'Beaux Arts Village', 'Lakemont'
      ]}
      localContent={[
        {
          title: "Bellevue's Trusted Local Hauling Team",
          paragraphs: [
            "Hercules Junk Removal provides fast, reliable junk hauling across Bellevue and the Eastside. Whether you are downsizing from a home in Somerset, clearing out a garage in Crossroads, or hauling renovation waste from a remodel in Bridle Trails, we get it done quickly and affordably.",
            "Bellevue homes tend to accumulate a lot -- years of tech upgrades, furniture swaps, and renovation projects add up. We handle everything from single-item pickups to full property cleanouts, and we confirm your exact price on-site before we touch anything."
          ]
        },
        {
          title: "Why Bellevue Homeowners Choose Hercules",
          paragraphs: [
            "We are not a franchise with corporate overhead baked into every quote. We are a small local crew that works hard to earn your business with honest pricing and real customer service. You will deal directly with the owner, not a call center.",
            "We donate usable furniture and household items to local charities, recycle what we can, and dispose of the rest responsibly. Our goal is to keep as much out of the landfill as possible while giving you back your space the same day."
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

export default JunkRemovalBellevuePage;

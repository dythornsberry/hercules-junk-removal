import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalEdmondsPage = () => {
  return (
    <LocationPageLayout
      city="Edmonds"
      slug="junk-removal-edmonds"
      h1="Junk Removal in Edmonds, WA from $99"
      blurb="Local junk removal in Edmonds. We haul furniture, appliances, yard waste, and construction debris with same-day pickup available."
      metaDescription="Same-day junk removal in Edmonds, WA from $99. Furniture, appliances, yard waste, and full cleanouts. Licensed and insured. Book online now."
      zipCodes={['98020', '98026']}
      neighborhoods={[
        'Downtown Edmonds', 'Perrinville', 'Meadowdale',
        'Esperance', 'Westgate', 'Firdale', 'Seaview',
        'Maplewood', 'Chase Lake', 'Edmonds Bowl',
        'Five Corners', 'Sherwood Forest'
      ]}
      localContent={[
        {
          title: "Edmonds Junk Removal You Can Count On",
          paragraphs: [
            "Hercules Junk Removal serves Edmonds and the surrounding South Snohomish County communities. From waterfront homes near the ferry terminal to neighborhoods up the hill in Meadowdale, we provide fast and affordable junk hauling across the entire city.",
            "Edmonds has a mix of older homes and newer construction, which means everything from estate cleanouts to renovation debris removal. We handle it all with volume-based pricing starting at $99, and we confirm your exact cost before any work begins."
          ]
        },
        {
          title: "Why Edmonds Locals Choose Hercules",
          paragraphs: [
            "We are a small, local crew -- not a franchise. You will deal directly with the owner, get an honest price with no hidden fees, and watch us sweep up the area before we leave. That personal touch is what sets us apart from the big guys.",
            "We donate usable items to local charities and recycle metals, wood, and other materials whenever possible. We believe in responsible disposal and keeping as much out of the landfill as we can. Fast service, fair prices, and doing the right thing -- that is our approach."
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

export default JunkRemovalEdmondsPage;

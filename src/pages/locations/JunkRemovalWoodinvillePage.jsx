import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalWoodinvillePage = () => {
  return (
    <LocationPageLayout
      city="Woodinville"
      slug="junk-removal-woodinville"
      h1="Junk Removal in Woodinville, WA from $99 – Same-Day"
      blurb="Serving Woodinville's wine country and surrounding neighborhoods. Fast, eco-friendly junk hauling with same-day availability."
      metaDescription="Same-day junk removal in Woodinville, WA from $99. Furniture, yard waste, appliances & more. Licensed & insured local team. Book online in 60 seconds."
      zipCodes={['98072', '98077']}
      neighborhoods={[
        'Woodinville Wine Country', 'Cottage Lake', 'Bear Creek',
        'Hollywood Hill', 'Wellington', 'Sammamish Valley',
        'Woodin Creek Village', 'NE Woodinville', 'Redmond Ridge border'
      ]}
      localContent={[
        {
          title: "Junk Removal for Woodinville Homes & Properties",
          paragraphs: [
            "Woodinville's rural feel, larger lots, and mature landscaping mean there's always junk to deal with — from old fencing and sheds to yard waste piling up after a weekend of property maintenance. Hercules Junk Removal serves all of Woodinville, from Hollywood Hill to Cottage Lake and everywhere in between.",
            "We're equipped to handle the unique challenges of Woodinville properties: long driveways, acreage cleanups, barn and shed cleanouts, and large-scale yard debris removal. Our truck holds up to 504 cubic feet, which is equivalent to about 7-8 pickup truck loads.",
            "Pricing starts at $99 for a single item and goes up based on volume. We always confirm your exact price before we start, and there are never hidden fees for labor, travel, or disposal."
          ]
        },
        {
          title: "Property & Estate Cleanouts in Woodinville",
          paragraphs: [
            "Many Woodinville properties have outbuildings, workshops, and storage areas that accumulate decades of stuff. Whether you're preparing a home for sale, managing an estate cleanout, or just reclaiming your space, our crew handles the entire process from start to finish.",
            "We sort through items carefully, set aside anything that can be donated or recycled, and haul the rest away. We leave the space clean and ready for whatever comes next."
          ]
        }
      ]}
      popularServices={[
        { name: "Household Junk Removal", desc: "Furniture, appliances, general clutter", link: "/household-junk-removal" },
        { name: "Garage Cleanouts", desc: "Full-service garage clearing", link: "/garage-cleanouts" },
        { name: "Construction Debris", desc: "Renovation & remodel cleanup", link: "/construction-debris-removal" },
        { name: "Furniture Removal", desc: "Couches, mattresses, heavy items", link: "/furniture-removal" },
      ]}
    />
  );
};

export default JunkRemovalWoodinvillePage;

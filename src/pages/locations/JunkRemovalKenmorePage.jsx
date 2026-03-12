import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalKenmorePage = () => {
  return (
    <LocationPageLayout
      city="Kenmore"
      slug="junk-removal-kenmore"
      h1="Junk Removal in Kenmore, WA from $99 – Same-Day"
      blurb="Your local junk removal team based right here in Kenmore. We haul furniture, appliances, yard waste, and more — with same-day availability."
      metaDescription="Same-day junk removal in Kenmore, WA from $99. We haul furniture, appliances, yard waste, and more. Licensed & insured. Book online in 60 seconds."
      zipCodes={['98028']}
      neighborhoods={[
        'Kenmore Downtown', 'Inglewood', 'Moorlands', 'Linwood',
        'Arrowhead', 'Lake Forest Park border', 'Bothell border',
        'Burke-Gilman Trail area', 'North end of Lake Washington'
      ]}
      localContent={[
        {
          title: "Your Neighbors in Kenmore Trust Hercules",
          paragraphs: [
            "Hercules Junk Removal is proud to call Kenmore home. As a locally owned and operated business based right here in the 98028, we know the neighborhoods, the tight driveways, and the specific challenges that come with junk removal in our lakeside community.",
            "Whether you're clearing out a garage near Inglewood, hauling old furniture from a home along the Burke-Gilman Trail, or tackling yard debris after a storm in Moorlands, we're just minutes away and ready to help.",
            "We handle everything from single-item pickups like a mattress or old couch to full property cleanouts. Our volume-based pricing starts at just $99, and we confirm your exact price on-site before we start any work — no surprises, no hidden fees."
          ]
        },
        {
          title: "Why Kenmore Residents Choose Hercules",
          paragraphs: [
            "Living near Lake Washington means enjoying the beauty of the Pacific Northwest, but it also means dealing with seasonal yard debris, renovation waste from aging homes, and the general clutter that accumulates over the years. We see it all — and we haul it all.",
            "Unlike the big national franchises, we're a small local crew that treats your property with respect. We donate usable items to local charities, recycle what we can, and only landfill what's truly trash. Our goal is to keep as much out of the landfill as possible while giving you back your space fast."
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

export default JunkRemovalKenmorePage;

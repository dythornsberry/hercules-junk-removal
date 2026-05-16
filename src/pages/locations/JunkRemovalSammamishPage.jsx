import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalSammamishPage = () => {
  return (
    <LocationPageLayout
      city="Sammamish"
      slug="junk-removal-sammamish"
      h1="Junk Removal in Sammamish, WA from $99"
      blurb="Professional junk removal in Sammamish. We haul furniture, appliances, yard waste, and construction debris with same-day service available."
      metaDescription="Fast junk removal in Sammamish, WA from $99. Furniture, appliances, yard waste, and full property cleanouts. Licensed and insured. Request a free quote."
      zipCodes={['98074', '98075']}
      neighborhoods={[
        'Pine Lake', 'Klahanie', 'Beaver Lake', 'Sahalee',
        'Trossachs', 'East Sammamish', 'Inglewood Hill',
        'Aldarra', 'Timberline', 'Northeast Sammamish',
        'Plateau', 'Issaquah Highlands border'
      ]}
      localContent={[
        {
          title: "Sammamish Junk Removal Done Right",
          paragraphs: [
            "Hercules Junk Removal provides fast, reliable hauling across the Sammamish Plateau. Whether you are cleaning out a garage in Pine Lake, hauling away old patio furniture from Klahanie, or clearing renovation debris from a home remodel in Sahalee, we get the job done.",
            "Sammamish properties tend to be larger, which means more space for junk to accumulate. Storage sheds, multi-car garages, and large yards all generate clutter over time. We handle everything from a single mattress to a full property cleanout."
          ]
        },
        {
          title: "Why Sammamish Homeowners Choose Hercules",
          paragraphs: [
            "We are locally owned and operated -- not a national franchise. That means you deal directly with the owner, get transparent pricing confirmed before we start, and pay only for the truck space your junk takes up.",
            "We take the responsible route with disposal. Usable furniture and household items go to local donation centers, recyclable materials get sorted, and we only send to the landfill what truly cannot be reused. Your junk gets a second chance whenever possible."
          ]
        }
      ]}
      popularServices={[
        { name: "Household Junk Removal", desc: "Furniture, appliances, general clutter", link: "/household-junk-removal" },
        { name: "Garage Cleanouts", desc: "Full-service garage clearing", link: "/garage-cleanouts" },
        { name: "Yard Waste Removal", desc: "Branches, brush, storm debris", link: "/yard-waste-removal" },
        { name: "Construction Debris", desc: "Renovation & remodel cleanup", link: "/construction-debris-removal" },
      ]}
    />
  );
};

export default JunkRemovalSammamishPage;

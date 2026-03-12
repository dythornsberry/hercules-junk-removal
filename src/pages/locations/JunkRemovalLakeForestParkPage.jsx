import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalLakeForestParkPage = () => {
  return (
    <LocationPageLayout
      city="Lake Forest Park"
      slug="junk-removal-lake-forest-park"
      h1="Junk Removal in Lake Forest Park, WA from $99 – Same-Day"
      blurb="Serving Lake Forest Park and the surrounding neighborhoods. Local, fast junk hauling with transparent pricing."
      metaDescription="Same-day junk removal in Lake Forest Park, WA from $99. Furniture, yard waste, appliances & more. Licensed & insured. Book online in 60 seconds."
      zipCodes={['98155']}
      neighborhoods={[
        'Town Center', 'Sheridan Beach', 'Horizon View',
        'Grace Cole Park area', 'Burke-Gilman Trail area',
        'Lyon Creek', 'Brookside', 'Kenmore border'
      ]}
      localContent={[
        {
          title: "Lake Forest Park's Local Junk Removal Crew",
          paragraphs: [
            "Lake Forest Park is a tight-knit, tree-filled community nestled between Kenmore and Shoreline along the north end of Lake Washington. The wooded lots and established homes here create unique junk removal needs — from storm debris and fallen branches to basement cleanouts in older homes.",
            "Hercules Junk Removal is based nearby in Kenmore, making us one of the closest and fastest junk removal services for Lake Forest Park residents. We know the winding residential streets and can navigate properties with limited access that bigger trucks can't reach.",
            "Our pricing is simple and transparent. We charge by the space your items take in our truck, starting at $99. No hourly rates, no surprise fees. We confirm your price before we start."
          ]
        },
        {
          title: "Yard Waste & Storm Debris in Lake Forest Park",
          paragraphs: [
            "The towering evergreens and mature deciduous trees that make Lake Forest Park so beautiful also produce a steady stream of yard waste. After windstorms, the debris can pile up fast. We haul away branches, brush, leaves, and storm damage quickly so you can get back to enjoying your property.",
            "Unlike curbside pickup services with size limits and scheduling restrictions, we come directly to where the debris is on your property and handle all the loading. Same-day service is available most days."
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

export default JunkRemovalLakeForestParkPage;

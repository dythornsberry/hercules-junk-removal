import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalKenmorePage = () => {
  return (
    <LocationPageLayout
      city="Kenmore"
      slug="junk-removal-kenmore"
      h1="Junk Removal in Kenmore, WA"
      blurb="Kenmore-based junk removal for furniture, garage junk, yard waste, appliances, and cleanouts. Same-day pickup is available."
      metaDescription="Junk removal in Kenmore, WA from a Kenmore-based hauler. Furniture, garage junk, yard waste, appliances, cleanouts, same-day pickup, and quotes from $99."
      zipCodes={['98028']}
      neighborhoods={[
        'Kenmore Downtown', 'Inglewood', 'Moorlands', 'Linwood',
        'Arrowhead', 'Lake Forest Park border', 'Bothell border',
        'Burke-Gilman Trail area', 'North end of Lake Washington'
      ]}
      localContent={[
        {
          title: "Kenmore-based junk removal",
          paragraphs: [
            "Hercules Junk Removal is based in Kenmore, WA, so 98028 is the home base. That helps for faster pickup around Inglewood, Moorlands, Arrowhead, downtown Kenmore, and the north end of Lake Washington.",
            "Garage cleanout near Inglewood, old furniture by the Burke-Gilman Trail, yard debris after a storm in Moorlands - the job is simple. Point at what needs to go and it gets loaded.",
            "Single items, garage piles, appliances, yard waste, move-out junk, and full cleanouts are priced by how much room the load takes in the truck. Quotes start at $99."
          ]
        },
        {
          title: "Fast pickup, big truck, fair price",
          paragraphs: [
            "Kenmore homes collect the usual stuff: garage boxes, old couches, broken appliances, brush piles, remodel debris, and random junk in the driveway.",
            "The box truck has more room than a pickup bed, which helps on bigger piles. Usable items get donated when possible, metal and green waste get recycled when possible, and the rest goes to the right place."
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

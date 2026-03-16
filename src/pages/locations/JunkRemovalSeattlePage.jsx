import React from 'react';
import LocationPageLayout from './LocationPageLayout';

const JunkRemovalSeattlePage = () => {
  return (
    <LocationPageLayout
      city="Seattle"
      slug="junk-removal-seattle"
      h1="Junk Removal in Seattle, WA from $99"
      blurb="Full-service junk removal across Seattle. We haul furniture, appliances, yard waste, construction debris, and more with same-day availability."
      metaDescription="Same-day junk removal in Seattle, WA from $99. Furniture, appliances, yard waste, and construction debris. Licensed and insured. Book online now."
      zipCodes={['98101', '98102', '98103', '98104', '98105', '98106', '98107', '98108', '98109', '98112', '98115', '98116', '98117', '98118', '98119', '98121', '98122', '98125', '98126', '98133', '98136', '98144', '98146', '98155', '98177', '98178', '98188', '98199']}
      neighborhoods={[
        'Capitol Hill', 'Ballard', 'Fremont', 'Wallingford', 'Green Lake',
        'University District', 'Ravenna', 'Wedgwood', 'Lake City',
        'Columbia City', 'Beacon Hill', 'Georgetown', 'SoDo',
        'West Seattle', 'Magnolia', 'Queen Anne', 'Central District',
        'Northgate', 'Greenwood', 'Phinney Ridge', 'Madison Park',
        'Rainier Valley', 'South Lake Union', 'Pioneer Square'
      ]}
      localContent={[
        {
          title: "Seattle's Go-To Junk Removal Crew",
          paragraphs: [
            "Hercules Junk Removal serves every corner of Seattle, from Capitol Hill to West Seattle, Ballard to Rainier Valley. Whether you are clearing out a basement in a Craftsman bungalow or hauling renovation debris from a downtown condo, we handle the heavy lifting so you do not have to.",
            "Seattle living means tight parking, steep driveways, and narrow stairwells. We have dealt with it all. Our crew navigates walk-ups, alley access, and tricky loading situations every day. No job is too awkward for us."
          ]
        },
        {
          title: "Why Seattle Residents Call Hercules",
          paragraphs: [
            "Big national franchises charge big national prices. We are a small, local operation that keeps costs low and service personal. You will talk directly to the owner, get honest pricing on-site before any work starts, and watch us sweep up before we leave.",
            "We donate usable items to local charities, recycle metals and wood, and only landfill what cannot be reused. Our volume-based pricing starts at $99 for a single item, and we can often get to you the same day you call."
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

export default JunkRemovalSeattlePage;

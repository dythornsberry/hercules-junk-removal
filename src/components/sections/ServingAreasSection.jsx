import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const locationLinks = [
  { name: 'Seattle', path: '/junk-removal-seattle' },
  { name: 'Bellevue', path: '/junk-removal-bellevue' },
  { name: 'Kirkland', path: '/junk-removal-kirkland' },
  { name: 'Redmond', path: '/junk-removal-redmond' },
  { name: 'Bothell', path: '/junk-removal-bothell' },
  { name: 'Kenmore', path: '/junk-removal-kenmore' },
  { name: 'Lynnwood', path: '/junk-removal-lynnwood' },
  { name: 'Edmonds', path: '/junk-removal-edmonds' },
  { name: 'Shoreline', path: '/junk-removal-shoreline' },
  { name: 'Sammamish', path: '/junk-removal-sammamish' },
  { name: 'Woodinville', path: '/junk-removal-woodinville' },
  { name: 'Lake Forest Park', path: '/junk-removal-lake-forest-park' },
  { name: 'Mountlake Terrace', path: '/junk-removal-mountlake-terrace' },
];

const ServingAreasSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8 text-center">Serving These Areas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {locationLinks.map((loc) => (
            <Link
              key={loc.path}
              to={loc.path}
              className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all group"
            >
              <MapPin className="w-4 h-4 text-yellow-500 shrink-0" />
              <span className="font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors text-sm">{loc.name}</span>
            </Link>
          ))}
        </div>
        <p className="text-center mt-6">
          <Link to="/service-areas" className="text-yellow-600 font-bold hover:text-yellow-700 underline underline-offset-4">
            View all service areas
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ServingAreasSection;

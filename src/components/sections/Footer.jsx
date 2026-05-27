import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

const Footer = () => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '(425) 406-3445';

  return (
    <footer className="bg-black text-white border-t-4 border-[#FFC107]">
      <div className="container mx-auto px-4 py-12">
        {/* Big CTA at top of footer */}
        <div className="mb-10 pb-10 border-b-2 border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-3">
              <Dumbbell className="h-8 w-8 text-[#FFC107]" />
              <span className="text-2xl font-black text-white tracking-tight">Hercules Junk</span>
            </Link>
            <p className="text-sm text-gray-400 font-bold max-w-md">
              Owner-operated junk removal out of Kenmore. Call or text Dylan direct.
            </p>
          </div>
          <a
            href={`tel:${businessPhoneNumber}`}
            className="inline-flex items-center gap-2 bg-[#FFC107] text-black font-black px-5 py-3 border-2 border-[#FFC107] shadow-[4px_4px_0_rgba(255,255,255,0.15)] text-lg hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all rotate-[-1deg]"
          >
            Call {businessPhoneNumberFormatted}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC107] mb-3">Service Areas</h3>
            <ul className="space-y-1.5">
              <li><Link to="/junk-removal-kenmore" className="text-sm text-gray-300 hover:text-white">Kenmore</Link></li>
              <li><Link to="/junk-removal-bothell" className="text-sm text-gray-300 hover:text-white">Bothell</Link></li>
              <li><Link to="/junk-removal-kirkland" className="text-sm text-gray-300 hover:text-white">Kirkland</Link></li>
              <li><Link to="/junk-removal-lynnwood" className="text-sm text-gray-300 hover:text-white">Lynnwood</Link></li>
              <li><Link to="/service-areas" className="text-sm text-[#FFC107] font-bold hover:text-yellow-300">See all areas →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC107] mb-3">Services</h3>
            <ul className="space-y-1.5">
              <li><Link to="/household-junk-removal" className="text-sm text-gray-300 hover:text-white">Junk Removal</Link></li>
              <li><Link to="/furniture-removal" className="text-sm text-gray-300 hover:text-white">Furniture</Link></li>
              <li><Link to="/garage-cleanouts" className="text-sm text-gray-300 hover:text-white">Garage Cleanouts</Link></li>
              <li><Link to="/construction-debris-removal" className="text-sm text-gray-300 hover:text-white">Construction Debris</Link></li>
              <li><Link to="/yard-waste-removal" className="text-sm text-gray-300 hover:text-white">Yard Waste</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC107] mb-3">The Basics</h3>
            <ul className="space-y-1.5">
              <li className="text-sm text-gray-300">Open 7 days</li>
              <li className="text-sm text-gray-300">Cash, card, Venmo, Zelle</li>
              <li className="text-sm text-gray-300">Licensed + insured</li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">About Dylan</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-300 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Hercules Junk Removal · Kenmore, WA · WA Licensed + Insured
          </p>
          <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

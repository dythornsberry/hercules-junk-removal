import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

const Footer = () => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '(425) 406-3445';
  
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1 mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-7 w-7 text-yellow-400" />
              <span className="text-xl font-bold text-white">
                Hercules Junk
              </span>
            </Link>
            <p className="text-sm text-gray-400">Your local, reliable junk removal service for Kenmore, Bothell, Lynnwood, Kirkland and surrounding areas.</p>
          </div>
          
          <div className="md:col-span-1">
             <h3 className="font-semibold text-white mb-4">Navigation</h3>
             <ul className="space-y-3">
               <li><a href="/#home-hero" onClick={e => scrollToSection(e, 'home-hero')} className="text-sm text-gray-300 hover:text-white">Home</a></li>
               <li><a href="/#pricing" onClick={e => scrollToSection(e, 'pricing')} className="text-sm text-gray-300 hover:text-white">Pricing</a></li>
               <li><a href="/#results" onClick={e => scrollToSection(e, 'results')} className="text-sm text-gray-300 hover:text-white">Work</a></li>
               <li><Link to="/faq" className="text-sm text-gray-300 hover:text-white">FAQ</Link></li>
             </ul>
          </div>
          
          <div className="md:col-span-1">
             <h3 className="font-semibold text-white mb-4">Services</h3>
             <ul className="space-y-3">
               <li><Link to="/services" className="text-sm text-gray-300 hover:text-white">All Services</Link></li>
               <li><Link to="/garage-cleanouts" className="text-sm text-gray-300 hover:text-white">Garage Cleanouts</Link></li>
               <li><Link to="/furniture-removal" className="text-sm text-gray-300 hover:text-white">Furniture Removal</Link></li>
               <li><Link to="/household-junk-removal" className="text-sm text-gray-300 hover:text-white">Junk Removal</Link></li>
             </ul>
          </div>

          <div className="md:col-span-1">
             <h3 className="font-semibold text-white mb-4">Contact</h3>
             <ul className="space-y-3">
               <li>
                 <a href={`tel:${businessPhoneNumber}`} className="text-sm text-gray-300 hover:text-white">
                   Call/Text: {businessPhoneNumberFormatted}
                 </a>
               </li>
                <li>
                 <Link to="/quote" className="text-sm text-yellow-400 font-bold hover:text-yellow-300">
                   Get a Free Quote Online
                 </Link>
               </li>
               <li className="text-sm text-gray-400 pt-2">
                 Hours: Mon-Sun: 8am - 8pm
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-6">
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} Hercules Junk Removal. All Rights Reserved. • Kenmore, WA
                </p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link to="/about" className="text-xs text-gray-500 hover:text-gray-300">About Us</Link>
                    <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300">Privacy Policy</Link>
                </div>
            </div>
            <div className="text-center space-y-4">
                <p className="text-xs text-gray-600 max-w-4xl mx-auto">
                    <strong>Serving the Greater Seattle Area:</strong> Kenmore (98028), Bothell (98011, 98012, 98021), Kirkland (98033, 98034), Lynnwood (98036, 98037, 98087), Lake Forest Park (98155), Woodinville (98072, 98077), Shoreline (98133, 98155), Mountlake Terrace (98043), Brier (98036), and Edmonds (98020, 98026).
                </p>
                <p className="text-xs text-gray-700 font-medium">
                  WA License #HERCUJR*** | Insured up to $1 million
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
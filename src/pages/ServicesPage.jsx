import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { Sofa, Home, TreePine, HardHat, Tv, Truck, Bed, HelpCircle, Check, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

// Updated services array with internal links where available
const services = [
  {
    icon: Sofa,
    title: 'Furniture Removal',
    description: 'Hassle-free removal of unwanted furniture with eco-friendly disposal.',
    link: '/furniture-removal'
  },
  {
    icon: Home,
    title: 'Garage Cleanouts',
    description: 'Reclaim your space from clutter, old tools, and forgotten items.',
    link: '/garage-cleanouts'
  },
  {
    icon: HardHat,
    title: 'Construction Debris',
    description: 'Quickly clear wood, drywall, and other job site materials.',
    link: '/construction-debris-removal'
  },
  {
    icon: Tv,
    title: 'Appliance & Electronics',
    description: 'Safe and responsible disposal of refrigerators, TVs, and more.',
    link: '/services'
  },
  {
    icon: Truck,
    title: 'Full Property Cleanouts',
    description: 'Perfect for estate cleanouts, rental turnovers, and downsizing.',
    link: '/services'
  },
  {
    icon: Bed,
    title: 'Mattress Disposal',
    description: 'Proper and eco-friendly disposal of old mattresses.',
    link: '/furniture-removal'
  },
  {
    icon: HelpCircle,
    title: 'Custom Junk Removal',
    description: 'Hot tubs, sheds, or anything else. If it has to go, we can help.',
    link: '/quote'
  },
  {
    icon: TreePine,
    title: 'Yard Waste',
    description: 'We also haul branches, clippings, and landscaping debris.',
    link: '/yard-waste-removal'
  },
];

const commonItems = [
  "Couches & Sofas", "Refrigerators & Freezers", "Mattresses & Box Springs",
  "Yard Debris", "Construction Materials", "Hot Tubs", "TVs & Computers",
  "Washers & Dryers", "Scrap Metal", "Old Tires", "Cardboard", "And Much More!"
];

const ServicesPage = () => {
  const businessPhoneNumber = '4254063445';
  const businessPhoneNumberFormatted = '425-406-3445';

  return (
    <>
      <Helmet>
        <title>Junk Removal Services in Kenmore & Greater Seattle | Hercules Junk Removal</title>
        <meta name="description" content="Furniture removal, garage cleanouts, appliance disposal, construction debris hauling & more in Kenmore, Bothell, Kirkland & Greater Seattle. Same-day service from $99." />
        <link rel="canonical" href="https://hercjunk.com/services" />
      </Helmet>
      <div className="flex-grow bg-yellow-400 text-black">
        <main className="container mx-auto px-4 py-16">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-black text-black mb-4">What We Haul</h1>
              <p className="text-lg sm:text-xl text-black/80 font-semibold max-w-2xl mx-auto">From single item pickups to full property cleanouts. If you don't want it, we can probably take it. Just point!</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-black text-white p-8 rounded-2xl shadow-lg flex flex-col group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                     <service.icon className="h-10 w-10 text-yellow-400" />
                     {service.link !== '/quote' && service.link !== '/services' && service.link !== '/yard-waste-removal' && (
                        <span className="text-xs font-bold bg-yellow-400 text-black px-2 py-1 rounded">SPECIALTY</span>
                     )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 flex-grow mb-6 leading-relaxed">{service.description}</p>
                   
                   {service.link === '/quote' ? (
                      <Button className="w-full bg-yellow-400 text-black font-bold hover:bg-white hover:text-black transition-colors" onClick={() => openCalendlyPopup()}>
                          Book Now
                      </Button>
                   ) : (
                      <Link to={service.link}>
                         <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800 hover:text-yellow-400 flex items-center justify-center gap-2">
                            Learn More <ArrowRight className="h-4 w-4" />
                         </Button>
                      </Link>
                   )}
                </motion.div>
              ))}
            </div>

             <div className="mt-16 bg-white text-black p-8 sm:p-12 rounded-3xl shadow-xl border-4 border-black">
                <h2 className="text-3xl font-black text-black mb-8 text-center uppercase tracking-tight">Common Items We Take</h2>
                <ul className="columns-1 sm:columns-2 md:columns-3 gap-x-12 space-y-4">
                    {commonItems.map((item, index) => (
                        <li key={index} className="flex items-center break-inside-avoid bg-gray-100 p-3 rounded-lg mb-4">
                            <Check className="h-6 w-6 mr-3 text-green-600 flex-shrink-0" />
                            <span className="font-semibold">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 text-center border-t border-gray-200 pt-8">
                    <p className="text-gray-600 italic">Note: We cannot accept hazardous waste, paint, or chemicals.</p>
                </div>
            </div>
            
            <div className="text-center mt-16">
              <a href={`tel:${businessPhoneNumber}`}>
                <Button
                  size="lg"
                  className="bg-black text-yellow-400 hover:bg-gray-800 text-xl font-bold py-8 px-12 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="mr-3 h-8 w-8" />
                  Call or Text Us Now: {businessPhoneNumberFormatted}
                </Button>
              </a>
            </div>
          </motion.div>
        </main>
        <Toaster />
      </div>
    </>
  );
};

export default ServicesPage;
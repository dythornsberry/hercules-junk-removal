import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, Hammer, HardHat, Truck } from 'lucide-react';
import ServiceHero from '@/components/sections/ServiceHero';
import Reviews from '@/components/sections/Reviews';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ConstructionDebrisRemovalPage = () => {
  return (
    <>
      <Helmet>
        <title>Construction Debris Removal Kenmore & Bothell | Job Site Cleanup</title>
        <meta name="description" content="Fast construction debris removal for contractors and homeowners in Kenmore, WA. We haul drywall, wood, tile, flooring, and renovation waste." />
      </Helmet>

      <ServiceHero 
        title="Construction Debris Removal"
        subtitle="Keep your job site clean and safe. We haul away drywall, lumber, tiles, and renovation waste so you can focus on the build."
        imageAlt="Construction debris being removed"
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">We Haul It All</h2>
            <p className="text-lg text-gray-600">
              Whether it's a DIY bathroom remodel or a full home renovation, we handle the heavy lifting and disposal of construction waste.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Drywall & Sheetrock", "Lumber & Scrap Wood", "Flooring & Carpet", 
              "Tiles & Ceramics", "Windows & Doors", "Roofing Materials",
              "Concrete & Brick", "Old Cabinets", "Sinks & Fixtures"
            ].map((item, i) => (
              <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="text-yellow-400 h-6 w-6 mr-3 flex-shrink-0" />
                <span className="font-bold text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-16 text-white">Contractor & Homeowner Friendly</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <HardHat className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Job Site Safety</h3>
              <p className="text-gray-400">A clean site is a safe site. We help prevent accidents by keeping your workspace clear of dangerous debris and clutter.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
              <p className="text-gray-400">We know schedules are tight. We offer flexible pickup times to keep your project moving forward without delays.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hammer className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Heavy Lifting Included</h3>
              <p className="text-gray-400">Don't waste your skilled labor on trash runs. Let our team handle the loading and hauling while your crew keeps working.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-black mb-6">Need a debris pickup?</h2>
           <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Call us for a quick estimate. We can often clear your site the same day.</p>
           <Link to="/quote">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-xl shadow-lg">
              Schedule Pickup
            </Button>
           </Link>
        </div>
      </section>

      <Reviews />
    </>
  );
};

export default ConstructionDebrisRemovalPage;
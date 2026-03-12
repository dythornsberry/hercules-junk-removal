import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, TreePine, Leaf, Sun } from 'lucide-react';
import ServiceHero from '@/components/sections/ServiceHero';
import Reviews from '@/components/sections/Reviews';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const YardWasteRemovalPage = () => {
  return (
    <>
      <Helmet>
        <title>Yard Waste Removal Kenmore & Bothell | Green Waste Hauling</title>
        <meta name="description" content="Fast yard waste removal in Kenmore, Bothell, and Kirkland. We haul branches, brush, stumps, leaves, and storm debris. Same-day service available." />
        <link rel="canonical" href="https://herculesjunkremoval.com/yard-waste-removal" />
      </Helmet>

      <ServiceHero
        title="Yard Waste Removal"
        subtitle="Branches piling up? Storm debris everywhere? We haul away yard waste of all sizes so you can enjoy your outdoor space again."
        imageAlt="Yard waste and branches being removed"
        imageSrc="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What We Haul Away</h2>
            <p className="text-lg text-gray-600">
              From weekend yard cleanups to post-storm disaster zones, we handle all types of green waste and outdoor debris.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Branches & Limbs", "Brush & Shrubs", "Leaves & Grass Clippings",
              "Stumps & Root Balls", "Old Fencing", "Dirt & Sod",
              "Storm Debris", "Patio Demolition Waste", "Landscaping Waste"
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
          <h2 className="text-3xl font-black text-center mb-16 text-white">Why Hercules for Yard Waste?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TreePine className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Size Limit</h3>
              <p className="text-gray-400">Whether it's a few bags of leaves or an entire backyard full of storm damage, we have the truck space and crew to handle it all in one trip.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eco-Friendly Disposal</h3>
              <p className="text-gray-400">We take your yard waste to composting and recycling facilities — not the landfill. Your green waste gets a second life as mulch or compost.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Storm Cleanup Ready</h3>
              <p className="text-gray-400">Pacific Northwest storms can hit hard. We offer fast-response service to clear fallen trees, branches, and debris from your property.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-black mb-6">Yard looking rough?</h2>
           <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Call us for a quick estimate. We can often clear your yard the same day — no need to bag it or drag it to the curb.</p>
           <Link to="/quote">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-xl shadow-lg">
              Get Your Free Quote
            </Button>
           </Link>
        </div>
      </section>

      <Reviews />
    </>
  );
};

export default YardWasteRemovalPage;

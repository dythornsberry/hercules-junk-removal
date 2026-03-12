import React from 'react';
import { Helmet } from 'react-helmet';
import { Check, Sparkles } from 'lucide-react';
import ServiceHero from '@/components/sections/ServiceHero';
import Reviews from '@/components/sections/Reviews';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GarageCleanoutsPage = () => {
  return (
    <>
      <Helmet>
        <title>Garage Cleanouts Kenmore & Kirkland | Garage Junk Removal</title>
        <meta name="description" content="Reclaim your parking space! Professional garage cleanout services in Kenmore, WA. We sort, load, haul, and sweep up afterwards. Local & Insured." />
      </Helmet>

      <ServiceHero 
        title="Reclaim Your Garage"
        subtitle="Can't park your car? Overwhelmed by clutter? We provide full-service garage cleanouts to help you take back your space."
        imageAlt="A clean, organized garage after junk removal"
        imageSrc="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">How It Works</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">You Point, We Guide</h3>
                    <p className="text-gray-600">Just show us what goes. You don't need to pile it up or drag it to the curb. We grab it from wherever it sits.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sorting & Hauling</h3>
                    <p className="text-gray-600">We separate recyclable metals, wood, and donatable items from the actual trash. We load everything onto our truck efficiently.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The Final Sweep</h3>
                    <p className="text-gray-600">We don't leave a mess behind. We sweep up the area we cleared so your garage is ready for your car immediately.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-3xl border-2 border-gray-200">
               <h3 className="text-2xl font-bold mb-6">Common Garage Junk We Take:</h3>
               <ul className="space-y-3">
                 {[
                   "Old Tools & Equipment", "Cardboard Boxes", "Broken Appliances", 
                   "Scrap Wood & Lumber", "Old Paint (Dry)", "Sports Gear",
                   "Broken Furniture", "Holiday Decorations", "Tires (w/o rims)"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center text-gray-700 font-medium">
                     <Check className="h-5 w-5 text-green-500 mr-3" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <Sparkles className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
           <h2 className="text-3xl font-bold mb-4">A Clean Start for Your Home</h2>
           <p className="text-xl text-gray-300 mb-8">
             A cluttered garage is often the biggest source of stress in a home. Let us handle the hard work in just a few hours, so you can breathe easier.
           </p>
           <Link to="/quote">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6 rounded-xl font-bold">
              Schedule Your Cleanout
            </Button>
           </Link>
        </div>
      </section>

      <Reviews />
    </>
  );
};

export default GarageCleanoutsPage;
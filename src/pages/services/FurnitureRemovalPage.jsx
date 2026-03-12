import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, Truck, Heart, Clock } from 'lucide-react';
import ServiceHero from '@/components/sections/ServiceHero';
import Reviews from '@/components/sections/Reviews';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FurnitureRemovalPage = () => {
  return (
    <>
      <Helmet>
        <title>Furniture Removal Kenmore & Bothell | Mattress & Couch Disposal</title>
        <meta name="description" content="Fast, affordable furniture removal in Kenmore, Bothell, and Kirkland. We haul away old couches, mattresses, tables, and more. We donate what we can!" />
        <link rel="canonical" href="https://herculesjunkremoval.com/furniture-removal" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Furniture Removal Service",
          "description": "Fast, affordable furniture removal in Kenmore, Bothell, and Kirkland. We haul away old couches, mattresses, tables, and more.",
          "provider": { "@type": "LocalBusiness", "name": "Hercules Junk Removal", "telephone": "+14254063445" },
          "areaServed": { "@type": "State", "name": "Washington" },
          "url": "https://herculesjunkremoval.com/furniture-removal"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does it cost to remove a couch?", "acceptedAnswer": { "@type": "Answer", "text": "A single item like a couch or mattress starts at our $99 minimum. Price depends on size — we confirm the price before we start." }},
            { "@type": "Question", "name": "Do you pick up furniture from upstairs?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We handle all the heavy lifting — upstairs, basement, tight corners. We're careful not to damage your walls or floors." }},
            { "@type": "Question", "name": "Do you donate old furniture?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! If your furniture is in usable condition, we try to donate it to local charities in the Kenmore and Seattle area before taking it to disposal." }}
          ]
        })}</script>
      </Helmet>

      <ServiceHero 
        title="Furniture Removal Made Easy"
        subtitle="Don't break your back lifting that old couch. We haul away sofas, mattresses, and heavy furniture from anywhere in your home—fast."
        imageAlt="Team member carrying a sofa out of a house"
        imageSrc="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What We Take</h2>
            <p className="text-lg text-gray-600">
              From single items to whole-house cleanouts, we handle all types of residential furniture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Couches & Sofas", "Mattresses & Box Springs", "Dining Tables & Chairs", 
              "Dressers & Wardrobes", "Recliners", "Bed Frames",
              "Desks & Office Chairs", "Patio Furniture", "Bookshelves"
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
          <h2 className="text-3xl font-black text-center mb-16 text-white">Why Choose Hercules for Furniture Disposal?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">We Do The Heavy Lifting</h3>
              <p className="text-gray-400">Upstairs, in the basement, or round a tight corner—our strong team handles the maneuvering so you don't damage your walls or your back.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Donation Focused</h3>
              <p className="text-gray-400">If your furniture is in good condition, we try to donate it to local Kenmore and Seattle charities first before taking it to the transfer station.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Same-Day Service</h3>
              <p className="text-gray-400">In a rush? We often have same-day or next-day appointments available for quick furniture pickups in the Kenmore area.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-black mb-6">Ready to get rid of that old junk?</h2>
           <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Call us now for a free estimate. We can often give you a firm price right over the phone for single items.</p>
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

export default FurnitureRemovalPage;
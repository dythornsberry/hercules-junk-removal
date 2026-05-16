import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, TreePine, Leaf, Sun, Phone, ArrowRight } from 'lucide-react';
import ServiceHero from '@/components/sections/ServiceHero';
import Reviews from '@/components/sections/Reviews';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ServingAreasSection from '@/components/sections/ServingAreasSection';

const YardWasteRemovalPage = () => {
  return (
    <>
      <Helmet>
        <title>Yard Waste Removal Kenmore & Bothell | Green Waste Hauling</title>
        <meta name="description" content="Fast yard waste removal in Kenmore, Bothell, and Kirkland. We haul branches, brush, stumps, leaves, and storm debris. Same-day service available." />
        <link rel="canonical" href="https://hercjunk.com/yard-waste-removal" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yard Waste Removal Kenmore & Bothell | Green Waste Hauling" />
        <meta property="og:description" content="Fast yard waste removal in Kenmore, Bothell, and Kirkland. We haul branches, brush, stumps, leaves, and storm debris. Same-day service available." />
        <meta property="og:url" content="https://hercjunk.com/yard-waste-removal" />
        <meta property="og:image" content="https://hercjunk.com/images/hercules-truck.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yard Waste Removal Kenmore & Bothell | Green Waste Hauling" />
        <meta name="twitter:description" content="Fast yard waste removal in Kenmore, Bothell, and Kirkland. We haul branches, brush, stumps, leaves, and storm debris. Same-day service available." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hercjunk.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://hercjunk.com/services" },
            { "@type": "ListItem", "position": 3, "name": "Yard Waste Removal", "item": "https://hercjunk.com/yard-waste-removal" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Yard Waste Removal",
          "description": "Fast yard waste removal in Kenmore, Bothell, and Kirkland. We haul branches, brush, stumps, leaves, and storm debris.",
          "provider": { "@id": "https://hercjunk.com" },
          "serviceType": "Yard Waste Removal",
          "areaServed": [
            { "@type": "City", "name": "Kenmore", "addressRegion": "WA" },
            { "@type": "City", "name": "Bothell", "addressRegion": "WA" },
            { "@type": "City", "name": "Kirkland", "addressRegion": "WA" },
            { "@type": "City", "name": "Seattle", "addressRegion": "WA" }
          ],
          "url": "https://hercjunk.com/yard-waste-removal"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Do I need to bag my yard waste first?", "acceptedAnswer": { "@type": "Answer", "text": "No — we handle loose branches, brush piles, leaves, and debris as-is. No need to bag, bundle, or drag anything to the curb." }},
            { "@type": "Question", "name": "Do you remove tree stumps?", "acceptedAnswer": { "@type": "Answer", "text": "We can haul away stumps and root balls that have already been cut or dug out. We don't do stump grinding, but we'll take the debris once it's ready." }},
            { "@type": "Question", "name": "Do you offer storm cleanup?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we respond quickly to storm damage in the Kenmore, Bothell, and Kirkland area. We can clear fallen branches, debris, and damaged materials from your property." }}
          ]
        })}</script>
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
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-xl shadow-lg">
              <Link to="/quote">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <a href="tel:4254063445">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white text-lg px-8 py-6 rounded-xl">
                <Phone className="mr-2 h-5 w-5" /> (425) 406-3445
              </Button>
            </a>
           </div>
        </div>
      </section>

      <ServingAreasSection />

      <Reviews />
    </>
  );
};

export default YardWasteRemovalPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import { ShieldCheck, Calendar, ArrowRight } from 'lucide-react';
import ServiceHero from '@/components/sections/ServiceHero';
import Reviews from '@/components/sections/Reviews';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HouseholdJunkRemovalPage = () => {
  return (
    <>
      <Helmet>
        <title>Junk Removal Service Kenmore WA | Residential Trash Hauling</title>
        <meta name="description" content="Local residential junk removal in Kenmore, WA. We clear out attics, basements, sheds, and whole homes. Licensed, insured, and 5-star rated." />
        <link rel="canonical" href="https://herculesjunkremoval.com/household-junk-removal" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Residential Junk Removal",
          "description": "Local residential junk removal in Kenmore, WA. We clear out attics, basements, sheds, and whole homes.",
          "provider": { "@type": "LocalBusiness", "name": "Hercules Junk Removal", "telephone": "+14254063445" },
          "areaServed": { "@type": "State", "name": "Washington" },
          "url": "https://herculesjunkremoval.com/household-junk-removal"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does junk removal cost?", "acceptedAnswer": { "@type": "Answer", "text": "Our pricing starts at $99 for a single item and is based on the volume your junk takes up in our truck. A full truck load is $729. We always confirm the price before we start loading." }},
            { "@type": "Question", "name": "Do you do whole house cleanouts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We handle attic cleanouts, basement cleanouts, estate cleanouts, shed removal, and full property clearings. We can usually complete a whole house in one day." }},
            { "@type": "Question", "name": "What happens to my junk after pickup?", "acceptedAnswer": { "@type": "Answer", "text": "We donate usable items to local charities, recycle metals and wood, and dispose of the rest responsibly at licensed facilities." }}
          ]
        })}</script>
      </Helmet>

      <ServiceHero 
        title="Residential Junk Removal"
        subtitle="The easiest way to get rid of unwanted clutter. From a single item to a whole house full of junk, our friendly local team handles it all."
        imageAlt="Pile of household junk being removed"
        imageSrc="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />

      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <span className="text-yellow-500 font-bold tracking-wider uppercase text-sm">Our Services</span>
               <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-4">Complete Home Cleanouts</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                 We are equipped to handle junk removal from every corner of your property.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 {
                   title: "Attic Cleanouts",
                   desc: "Don't risk climbing up and down ladders with heavy boxes. We'll safely clear out your attic space."
                 },
                 {
                   title: "Basement Cleanouts",
                   desc: "Transform your dark, cluttered storage space back into a usable part of your home."
                 },
                 {
                   title: "Estate Cleanouts",
                   desc: "We handle sensitive estate clearings with respect, patience, and efficiency during difficult times."
                 },
                 {
                   title: "Shed Removal",
                   desc: "We can dismantle and haul away old, rotting garden sheds and the junk inside them."
                 },
                 {
                   title: "Renovation Debris",
                   desc: "Leftover drywall, flooring, wood, and tiles from your latest home improvement project."
                 },
                 {
                   title: "Yard Waste",
                   desc: "Branches, clippings, old fencing, and other organic debris from your yard work."
                 }
               ].map((service, i) => (
                 <div key={i} className="p-8 rounded-2xl bg-gray-50 hover:bg-yellow-50 transition-colors border border-gray-100">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl font-black mb-6">Local, Licensed & Trusted</h2>
                <div className="space-y-6">
                   <div className="flex items-start">
                      <ShieldCheck className="h-8 w-8 text-yellow-400 mr-4 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold">Licensed & Insured</h4>
                        <p className="text-gray-400">We carry full liability insurance and are a registered business in WA state. You and your property are protected.</p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <Calendar className="h-8 w-8 text-yellow-400 mr-4 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold">Flexible Scheduling</h4>
                        <p className="text-gray-400">We work around your schedule, including weekends. We even offer a "courtesy call" 20 minutes before we arrive.</p>
                      </div>
                   </div>
                </div>
                
                <div className="mt-10">
                  <Link to="/about">
                    <Button variant="link" className="text-yellow-400 p-0 text-lg font-bold hover:text-white">
                      Learn more about our team <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
             </div>
             <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400">
                <img 
                  src="https://images.unsplash.com/photo-1581578731117-104f2a8d23e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team member giving thumbs up" 
                  className="object-cover w-full h-full scale-[1.15] contrast-[1.25] saturate-[1.3] brightness-[1.1]"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] mix-blend-multiply"></div>
             </div>
          </div>
        </div>
      </section>
      
      <Reviews />
    </>
  );
};

export default HouseholdJunkRemovalPage;
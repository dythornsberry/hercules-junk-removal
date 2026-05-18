import React from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How does pricing work?",
      answer: "Pricing is based on how much space your stuff takes up in the truck. Prices range from $99 for a single item to $649 for a full truck. The exact price is confirmed before loading."
    },
    {
      question: "Do you charge extra for anything?",
      answer: "Some items cost extra to dispose of (mattresses, appliances with refrigerant, tires, pianos). Stairs or difficult access may add a small labor fee. You get the total before the job starts."
    },
  {
    question: "Do I need to be home?",
      answer: "Not always. If the items are accessible, pickup can usually still happen. Mention it when you book."
  },
    {
      question: "How fast can you come?",
      answer: "Same-day or next-day pickups are often available. Send a quick quote request or call/text."
    },
    {
      question: "How can I pay?",
      answer: "Cash, credit/debit card, Venmo, or Zelle."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-[#1A1A1A]">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Quick answers before you book.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-black border border-gray-800 rounded-2xl overflow-hidden px-6"
            >
              <AccordionTrigger className="text-left text-white font-bold text-lg hover:text-[#FFC107] py-6 [&[data-state=open]]:text-[#FFC107]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

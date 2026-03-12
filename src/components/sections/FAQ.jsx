import React from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "How does pricing work?",
      answer: "We price by how much space your stuff takes up in our truck. Prices range from $99 for a single item to $729 for a full truck. We confirm your exact price before we start."
    },
    {
      question: "Do you charge extra for anything?",
      answer: "Some items cost extra to dispose of (mattresses, appliances with refrigerant, tires, pianos). Stairs or difficult access may add a small labor fee. We always tell you the total before we begin."
    },
    {
      question: "Do I need to be home?",
      answer: "Not always. As long as we can access the items, we can handle it. Just let us know when you book."
    },
    {
      question: "How fast can you come?",
      answer: "We can often do same-day or next-day pickups. Book online and pick the earliest slot that works for you."
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
          <p className="text-gray-400 text-lg">Everything you need to know about our service.</p>
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
import React from "react";

const faqs = [
  {
    q: "Who do you work with?",
    a: "We collaborate with a diverse range of brands, from agile startups to established enterprises, across industries like premium restaurants, bespoke clothing, and artisanal coffee shops.",
  },
  {
    q: "What is your pricing model?",
    a: "Our pricing is fully flexible and tailored to your specific needs. We design custom packages that fit your project scope, budget, and growth stage.",
  },
  {
    q: "How do you measure success?",
    a: "We define clear KPIs at the start of every project, such as lead generation, social media engagement, or brand awareness.",
  },
  {
    q: "Can you handle both strategy and execution?",
    a: "Yes, we do both. Our team works with you to develop a comprehensive strategy and then brings it to life through production and execution.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we do. Our team is set up to work across different time zones and geographies.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition cursor-pointer"
            >
              <summary className="flex justify-between items-center p-6 font-semibold cursor-pointer">
                {f.q}
                <span>⌄</span>
              </summary>
              <div className="p-6 border-t border-zinc-700 text-zinc-300">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

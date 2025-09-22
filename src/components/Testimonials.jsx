import React from "react";

const testimonials = [
  {
    text: `"Visevo completely transformed our brand's online presence. We've seen a significant increase in foot traffic and engagement."`,
    author: "Jane Doe, Brew & Bloom",
  },
  {
    text: `"They understood our vision for our luxury clothing brand and brought it to life with a stunning portfolio."`,
    author: "John Smith, LUXE Apparel",
  },
  {
    text: `"The team at Visevo created a beautiful, functional website for our restaurant. Highly recommended."`,
    author: "Sarah Connor, The Gourmet Table",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">What Our Clients Say</h2>
      </div>
      <div className="whitespace-nowrap flex animate-marquee">
        {testimonials.concat(testimonials).map((t, i) => (
          <div key={i} className="inline-block p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:scale-105 min-w-[300px] sm:min-w-[400px] md:min-w-[500px] mx-4">
            <p className="text-base italic text-zinc-300 mb-4 whitespace-normal">{t.text}</p>
            <p className="font-semibold text-right">{t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

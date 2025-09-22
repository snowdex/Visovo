import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:scale-105 transition">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-zinc-400 mb-4">
            A performance-driven digital agency helping brands grow through strategy,
            creativity, and data-led execution. Our team brings together experts in
            marketing, design, content, and analytics to craft tailored solutions that
            align with real business goals.
          </p>
          <p className="text-lg text-zinc-400 mb-4">
            What sets us apart is our ability to balance creative vision with analytical
            precision. Every project is grounded in insights, executed with purpose, and
            optimized for growth.
          </p>
          <p className="text-lg text-zinc-400">
            We’ve worked with clients across industries—e-commerce, SaaS, media, and more—
            adapting quickly to changing markets and evolving digital trends. Collaborative,
            flexible, and results-focused, we act as a true partner in your growth journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const services = [
  {
    title: "Cinematic Video Production",
    desc: "We capture the essence of your brand with stunning, high-quality cinematic videos that tell your unique story.",
  },
  {
    title: "Post-Production & Editing",
    desc: "Our expert editors refine raw footage into polished, engaging content that captivates your audience.",
  },
  {
    title: "Brand Portfolio Creation",
    desc: "We build stunning, professional portfolios that perfectly showcase your brand identity and achievements.",
  },
  {
    title: "Bespoke Website Development",
    desc: "From concept to launch, we design and build high-performance, visually appealing websites tailored to your brand.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:scale-105 shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-zinc-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

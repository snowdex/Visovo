import React from "react";

const projects = [
  {
    title: "AURA: A Culinary Journey",
    desc: "A cinematic portfolio showcasing the elegance and ambiance of a Michelin-starred restaurant.",
    img: "https://placehold.co/800x600/121212/E0E0E0?text=Premium+Restaurant",
  },
  {
    title: "Brew & Bloom: A Brand Story",
    desc: "A short film and website to highlight the artisanal process of a boutique coffee shop.",
    img: "https://placehold.co/800x600/121212/E0E0E0?text=Boutique+Coffee+Shop",
  },
  {
    title: "LUXE: The Fabric of Fashion",
    desc: "A visual campaign and digital lookbook for a premium clothing line, captured with a high-fashion aesthetic.",
    img: "https://placehold.co/800x600/121212/E0E0E0?text=Luxury+Clothing+Brand",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-zinc-300 text-sm mb-4">{p.desc}</p>
                <a href="#" className="inline-flex items-center font-medium hover:text-zinc-400 transition">
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

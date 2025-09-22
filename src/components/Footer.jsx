import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>© 2024 Visevo. All Rights Reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

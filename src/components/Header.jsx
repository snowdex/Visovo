import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
        <a href="#hero" className="text-3xl font-bold tracking-tight z-20">
          visevo.com
        </a>
        <div className="hidden md:flex space-x-8 z-20">
          {["About Us", "Services", "Projects", "FAQ", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:scale-105 hover:text-zinc-400 transition duration-200"
              >
                {item}
              </a>
            )
          )}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none z-20"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-black/75 backdrop-blur-md pb-4 pt-2">
          <div className="flex flex-col items-center space-y-4">
            {["About Us", "Services", "Projects", "FAQ", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block text-lg hover:text-zinc-400 transition duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

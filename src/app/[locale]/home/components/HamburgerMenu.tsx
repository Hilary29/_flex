import React, { useState } from 'react';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col items-center justify-center space-y-1 w-8 h-8 rounded-lg bg-gray-800 text-white"
      >
        <div
          className={`w-6 h-1 bg-white transition-transform ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-white transition-opacity ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-white transition-transform ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </button>

      {/* Navbar */}
      <div
        className={`lg:flex lg:space-x-6 flex-col lg:flex-row absolute left-0 top-0 w-full bg-gray-800 text-white lg:bg-transparent transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <ul className="space-y-4 lg:space-y-0 lg:flex lg:space-x-6 lg:items-center p-4 lg:p-0">
          {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact', 'FAQ'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleMenu}
          className="lg:hidden absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default HamburgerMenu;

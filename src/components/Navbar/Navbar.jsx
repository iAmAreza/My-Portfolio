import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [navbar, setnavbar] = useState(false);

  const links = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Portfolio' },
    { id: 4, text: 'Experience' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className="relative flex justify-between items-center h-20 w-full px-4 text-white bg-black z-50">
      {/* Logo */}
      <div>
        <h1 className="font-signature font-bold text-5xl ml-2">Ahmad Reza</h1>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
          >
            {link.text}
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div
        onClick={() => setnavbar(!navbar)}
        className="md:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Links */}
      {navbar && (
        <ul className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 py-6 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200 text-4xl"
            >
              {link.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;

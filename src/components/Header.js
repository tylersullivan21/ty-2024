// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for mobile menu toggle

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
  const location = useLocation(); // Hook to get the current path
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClass = (path) => {
    return `text-xl ${
      location.hash === path ? 'text-yellow-500 font-bold' : 'text-white'
    } hover:text-gray-400`;
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="text-xl font-semibold px-4">
          <Link to="/" className="flex items-center">
            <span>Ty Logo</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className={getLinkClass('#home')}>Home</a>
          <a href="#about" className={getLinkClass('#about')}>About</a>
          <a href="#projects" className={getLinkClass('#projects')}>Projects</a>
          <a href="#skills" className={getLinkClass('#skills')}>Skills</a>
        </div>
        <div className="md:hidden px-4">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-700 text-white mt-2 px-4`}>
        <a href="#home" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-600">Home</a>
        <a href="#about" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-600">About</a>
        <a href="#projects" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-600">Projects</a>
        <a href="#skills" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-600">Skills</a>
      </div>
    </header>
  );
};

export default Header;

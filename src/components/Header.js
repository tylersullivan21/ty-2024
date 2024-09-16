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
      location.pathname === path ? 'text-yellow-500 font-bold' : 'text-white'
    } hover:text-gray-400`;
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold">
          <Link to="/" className="flex items-center">
            <span>Ty Logo</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>About</Link>
          <Link to="#projects" className={getLinkClass('#projects')}>Projects</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-700 text-white mt-2`}>
        <Link to="/" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-600">Home</Link>
        <Link to="/about" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-600">About</Link>
        <Link to="#projects" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-600">Projects</Link>
      </div>
    </header>
  );
};

export default Header;

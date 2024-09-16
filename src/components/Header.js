// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold">
          Ty Logo
        </div>
        <nav className="space-x-6">
          <Link to="/" className="text-xl hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-xl hover:text-gray-400">About</Link>
          <Link to="#projects" className="text-xl hover:text-gray-400">Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

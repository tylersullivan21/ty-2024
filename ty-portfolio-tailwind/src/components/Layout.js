import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-teal-500 text-white p-4">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </header>

      {/* Cover Photo */}
      <section className="relative w-full h-64">
        <img
          src="https://via.placeholder.com/1920x400" // Replace with your cover photo URL
          alt="Cover Photo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative flex items-center justify-center w-full h-full bg-black bg-opacity-30 text-white">
          <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
        </div>
      </section>

      <main className="flex-grow p-4">
        {children}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Tyler Sullivan
      </footer>
    </div>
  );
};

export default Layout;

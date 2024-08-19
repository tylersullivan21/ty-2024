import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-teal-500 text-white p-4">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </header>

      {/* Cover Photo */}
     

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

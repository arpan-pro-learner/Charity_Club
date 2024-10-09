// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold text-blue-600"><a href="/">Charity Club</a> </h1>
        <div>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>

          <a href="/charities" className="text-gray-700 mx-3">
            Charities
          </a>
          <a href="/donate" className="text-gray-700 mx-3">
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

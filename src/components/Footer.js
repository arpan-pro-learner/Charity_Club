
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white p-4 text-center">
      <p className="text-gray-700">&copy; {new Date().getFullYear()} CharityApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

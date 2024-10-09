// src/app/about/page.js
import React from 'react';

const About = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        At CharityClub, we are dedicated to making a positive impact in our communities 
        through charitable initiatives and support. Our mission is to empower individuals 
        and organizations to come together to create meaningful change.
      </p>
      <h2 className="text-3xl font-bold mt-6 mb-2">Our Vision</h2>
      <p className="mb-4">
        We envision a world where everyone has access to essential resources and services 
        that improve their quality of life. Our goal is to support initiatives that pave 
        the way for a better future.
      </p>
      <h2 className="text-3xl font-bold mt-6 mb-2">Our Values</h2>
      <ul className="list-disc ml-6">
        <li className="mb-2">Integrity: We act with honesty and transparency.</li>
        <li className="mb-2">Compassion: We care about the people we serve.</li>
        <li className="mb-2">Collaboration: We work together with our partners and volunteers.</li>
      </ul>
    </div>
  );
};

export default About;

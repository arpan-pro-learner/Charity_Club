// src/app/donate/page.js
import React from 'react';

const Donate = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Donate Now</h1>
      <p className="mb-4">
        Your generosity makes a significant difference in the lives of those we serve. 
        Join us in our mission to create positive change by making a donation today.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-2">How to Donate</h2>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">Choose an amount that feels good to you.</li>
        <li className="mb-2">Decide whether your donation is a one-time gift or a recurring contribution.</li>
        <li className="mb-2">Fill out the donation form below.</li>
        <li className="mb-2">Share your impact with friends and family!</li>
      </ul>
      
      <h2 className="text-2xl font-bold mb-4">Donation Form</h2>
      <form className="flex flex-col max-w-lg">
        <label htmlFor="amount" className="mb-2">Donation Amount:</label>
        <input type="number" id="amount" className="border rounded-lg p-2 mb-4" />

        <label htmlFor="message" className="mb-2">Message (optional):</label>
        <textarea id="message" className="border rounded-lg p-2 mb-4" rows="3" />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Donate
        </button>
      </form>
    </div>
  );
};

export default Donate;

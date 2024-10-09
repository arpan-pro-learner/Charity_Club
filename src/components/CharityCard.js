// src/components/CharityCard.js
import React from 'react';

const CharityCard = ({ title, description, startDate, donated }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 h-64">
      <div className="p-6 h-full">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="mt-2 text-gray-700">{description}</p>
        <p className="mt-2 text-gray-600">{startDate}</p>
        <p className="mt-2 text-gray-600">{donated}</p>
      </div>
      <div className="p-4 bg-gray-100 text-center">
        <a href="#" className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-700">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CharityCard;

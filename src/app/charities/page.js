// src/app/charities/page.js
import React from 'react';

const charitiesData = [
  {
    id: 1,
    name: 'Support Education',
    description: 'Providing educational resources to children in need.',
  },
  {
    id: 2,
    name: 'Housing Assistance',
    description: 'Helping families find safe and affordable housing.',
  },
  {
    id: 3,
    name: 'Healthcare Support',
    description: 'Funding medical services and treatments for the underserved.',
  },
];

const Charities = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Our Charities</h1>
      <p className="mb-4">
        We partner with various charitable organizations to provide support and resources 
        where they are needed most. Here are some of the initiatives we currently support:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {charitiesData.map(charity => (
          <div key={charity.id} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="font-bold text-xl">{charity.name}</h2>
            <p className="text-gray-600">{charity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charities;

// src/components/Homepage.js

import React from 'react';
import CharityCard from './CharityCard';
import Image from 'next/image';

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-blue-600 flex items-center text-white text-left py-16 px-4">
        <Image
          src="https://picsum.photos/1920/1080?random=1" // Placeholder image URL
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-30"
        />

        <div className="relative left-44 z-10 max-w-md">
          <h1 className="text-5xl font-bold">Welcome to CharityClub</h1>
          <p className="mt-4 text-lg">Empowering change through giving and support.</p>
          <a href="#charities" className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded shadow-lg transition-transform transform hover:scale-105">
            Get Involved
          </a>
        </div>
      </section>

      {/* Featured Charities Section */}
      <section id="charities" className="container mx-auto p-8">
        <h2 className="text-4xl font-semibold text-center mb-10">Featured Charities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Charity Card Example */}
          <CharityCard
            title="Support Community Education"
            description="Help us provide books and learning resources to underprivileged children."
            startDate="Campaign Start Date: January 10, 2024"
            donated="People Who Donated: 150"
          />
          <CharityCard
            title="Help Provide Shelter"
            description="Join us in our mission to provide safe housing for the homeless."
            startDate="Campaign Start Date: February 15, 2024"
            donated="People Who Donated: 200"
          />
          <CharityCard
            title="Support Health Initiatives"
            description="Assist us in funding critical health research for diseases affecting our community."
            startDate="Campaign Start Date: March 1, 2024"
            donated="People Who Donated: 100"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="donate" className="bg-gray-200 p-20 text-center my-20 w-full">
        <h2 className="text-3xl font-semibold">Make a Difference Today!</h2>
        <p className="mt-3 text-lg">Your contribution can create change in people&apos;s lives. Join countless others who are making a difference.</p>
        <p className="mt-2">Every dollar counts and helps provide food, education, and healthcare.</p>
        <a href="#charities" className="mt-4 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
          Donate Now
        </a>
      </section>

    </div>
  );
};

export default Homepage;


import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white px-5">
    <div className="flex flex-col-reverse md:flex-row items-center">
      {/* Left side - Image */}
      <div className="md:flex-1 p-4 md:p-12">
        <img
          src='https://images.unsplash.com/photo-1482498081626-c0d36d9c5ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt="About Us"
          className="object-cover h-80 md:h-full w-full"
        />
      </div>
  
      {/* Right side - Content */}
      <div className="md:p-12 md:flex-1">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-2 md:mb-4">ABOUT US</h3>
        <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4 text-[#FF3C5D]">Welcome to GiftBotique!</h2>
        <p className="text-gray-700 w-full font-poppin">
          At GiftBotique, we believe that gift-giving should be easy, stress-free, and fun! That's why we've created an
          innovative online gift shop that leverages AI technology to provide personalized gift recommendations for every
          occasion. Simply input your preferences, and let our AI algorithms do the rest! We curate a selection of items
          based on the recipient's relationship, age, budget, and favorite things. With GiftBotique, the perfect gift is
          just a click away.
        </p>
      </div>
    </div>
  </section>
  
  );
};

export default AboutSection;

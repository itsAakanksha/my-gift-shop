import React from 'react';

import { useNavigate } from 'react-router-dom';

const ImageOverlayHeroSection = () => {
const navigate =useNavigate()

  const showideas = () => {
    navigate('/form')
  };


  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
        //   src="https://plus.unsplash.com/premium_photo-1674068280044-0e3b030109d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        src='https://images.unsplash.com/photo-1521478706270-f2e33c203d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="bg-black opacity-40 w-full h-full absolute inset-0"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 sm:px-8 lg:px-16">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Discover the Perfect Gift
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-8">
            Welcome to GiftBotique, your ultimate destination for finding unique and thoughtful gifts for every occasion.
          </p>
          <button
          className="bg-[#FF3C5D] hover:bg-[#993742] text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out"
          onClick={showideas}
        >
          Gift Ideas
        </button>
          
        </div>
      </div>

      
    </section>
  );
};

export default ImageOverlayHeroSection;

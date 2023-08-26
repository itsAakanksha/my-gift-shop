import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Nav() {
 const navigate = useNavigate();
  const showideas = () => {
    navigate('/form')
  };
  const home = () => {
    navigate('/')
  };
  return (
    <nav className="p-4 md:p-6 lg:px-10 flex flex-wrap md:flex-nowrap justify-between items-center bg-white">
    {/* Logo on the left */}
    <div className="flex items-center mb-2 md:mb-0">
      <span className="text-black font-poppin font-semibold text-xl md:text-3xl cursor-pointer" onClick={home}>GIFTBOTIQUE</span>
    </div>
  
  
    {/* Cart and Contact */}
    <div className="flex items-center space-x-6 md:space-x-10 mt-2 md:mt-0">
      <div className="relative" onClick={showideas}>
        <i className="fa-solid fa-gift text-xl md:text-3xl text-gold hover:text-[#FF3C5D] transition cursor-pointer"></i>
      </div>
    </div>
  </nav>
  

  );
}
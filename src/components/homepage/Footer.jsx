import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
 
    <footer className="bg-[#F2F7F6] py-10">
      <div className=" mx-auto text-center text-gray-400">
        <p className="mb-4 text-sm">&copy; 2017–2023 GIFTBOTIQUE. All rights reserved.</p>
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-300 transition duration-300">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-300 transition duration-300">
              Terms
            </Link>
          </li>
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-300 transition duration-300">
              Support
            </Link>
          </li>
        </ul>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

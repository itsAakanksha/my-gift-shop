import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
 
    <footer className="bg-[#F2F7F6] py-10">
      <div className=" mx-auto text-center text-gray-400">
        <p className="mb-4 text-sm">&copy; 2017–2023 Company Name. All rights reserved.</p>
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-300 transition duration-300">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-300 transition duration-300">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-300 transition duration-300">
              Support
            </a>
          </li>
        </ul>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

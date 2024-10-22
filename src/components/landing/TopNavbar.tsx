// src/components/TopNavbar.tsx
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';


const TopNavbar: React.FC = () => {
  return (
    <div className="bg-red-600 text-white p-2 fixed  z-10 top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="mr-4">Need Assistance? Call: +27641156101</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaPinterestP />
          </a>
        </div>
      </div>
     
    </div>
  );
};

export default TopNavbar;

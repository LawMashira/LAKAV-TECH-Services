import React, { useState } from 'react';
import { lakav } from '../../assets/images';
import CallButton from '../numbers/CallButton';


const BottomNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed  left-0 right-0 bg-blue-700 shadow-md z-50 mb-10 a">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Company Logo and Name */}
        <div className="flex items-center">
          <img
            src={lakav}// Replace with actual logo path
            alt="Company Logo"
            className="h-16 w-24 mr-2 rounded"
          />
          <span className="text-lg font-semibold text-white">LAKAV TECH Services</span>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-red-900 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Full Navigation Links for Larger Screens */}
        <div className="hidden md:flex justify-around flex-1 max-w-2xl">
          {/* Services */}
          <a href="#services" className="flex flex-col items-center  text-white hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M3 12h18M9 16.5L15 12 9 7.5v9z" />
            </svg>
            <span className="text-xs">Services</span>
          </a>

          {/* Contact */}
          <a href="#contact" className="flex flex-col items-center  text-white hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M21 16v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6M17 12v6M7 12v6" />
            </svg>
            <span className="text-xs">Contact</span>
          </a>

          {/* Portfolio */}
          <a href="#portfolio" className="flex flex-col items-center  text-white hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M3 7h18M3 12h18M6 17h12" />
            </svg>
            <span className="text-xs">Portfolio</span>
          </a>

          {/* About */}
          <a href="#about" className="flex flex-col items-center  text-white hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2a6 6 0 00-6 6h12a6 6 0 00-6-6z" />
            </svg>
            <span className="text-xs">About</span>
          </a>

          {/* Industries */}
          <a href="#industries" className="flex flex-col items-center  text-white hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
            <span className="text-xs">Industries</span>
          </a>

          {/* Tech Stack */}
          <a href="#techstack" className="flex flex-col items-center  text-white hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 4v16M8 8h8M8 16h8" />
            </svg>
            <span className="text-xs">Tech Stack</span>
          </a>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md mt-3">
          <div className="flex flex-col items-center space-y-2">
            <a href="#services" className="flex flex-col items-center  text-white hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M3 12h18M9 16.5L15 12 9 7.5v9z" />
              </svg>
              <span className="text-xs">Services</span>
            </a>
            <a href="#contact" className="flex flex-col items-center text-gray-500 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M21 16v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6M17 12v6M7 12v6" />
              </svg>
              <span className="text-xs">Contact</span>
            </a>
            <a href="#portfolio" className="flex flex-col items-center  text-white hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M3 7h18M3 12h18M6 17h12" />
              </svg>
              <span className="text-xs">Portfolio</span>
            </a>
            <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2a6 6 0 00-6 6h12a6 6 0 00-6-6z" />
              </svg>
              <span className="text-xs">About</span>
            </a>
            <a href="#industries" className="flex flex-col items-center  text-white hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <span className="text-xs">Industries</span>
            </a>
            <a href="#techstack" className="flex flex-col items-center  text-white hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 4v16M8 8h8M8 16h8" />
              </svg>
              <span className="text-xs">Tech Stack</span>
              
            </a>
            
          </div>
          
        </div>
      )}
     <CallButton/>
    </nav>
  );
};

export default BottomNavbar;

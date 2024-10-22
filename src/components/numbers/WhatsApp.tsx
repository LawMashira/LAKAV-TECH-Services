import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon
import { AiOutlineClose } from 'react-icons/ai'; // Close (X) icon

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage modal state
  const whatsappNumber = '+27641156101'; // Replace with your WhatsApp number
  const message = "Hello, I would like to know more about your courses!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={openModal}
        className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp className="w-8 h-8" />
      </button>

      {/* WhatsApp Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
            {/* Close Icon */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-300"
            >
              <AiOutlineClose className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Hello, how can we help you?</h2>
            <p className="mb-6 text-gray-600">Feel free to start a chat with us on WhatsApp.</p>
            
            {/* WhatsApp Chat Link */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white w-full inline-block text-center py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;

import React, { useState } from 'react';
import { AiOutlinePhone, AiOutlineClose } from 'react-icons/ai'; // Phone and Close icons

const CallButton: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const phoneNumber = '+27641156101'; // Replace with your phone number
  const telLink = `tel:${phoneNumber}`;

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      {/* Floating Call Button */}
      <button
        onClick={openDialog}
        className="fixed  right-4 bg-red-500 text-white rounded-full p-4 shadow-lg hover:bg-red-600 transition duration-300 "
      >
        <AiOutlinePhone className="w-6 h-6" />
      </button>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
            {/* Close Icon */}
            <button
              onClick={closeDialog}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-300"
            >
              <AiOutlineClose className="w-6 h-6" />
            </button>

            {/* Dialog Content */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Would you like to call us?</h2>
            <p className="mb-6 text-gray-600">Click "Call" to start the call or "Cancel" to close this dialog.</p>

            {/* Buttons for Call and Cancel */}
            <div className="flex justify-between">
              <a
                href={telLink}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Call
              </a>
              <button
                onClick={closeDialog}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CallButton;

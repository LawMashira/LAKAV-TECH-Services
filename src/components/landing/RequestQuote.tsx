import React from 'react';

const RequestQuoteForm = () => {
  return (
    <div className="p-10 bg-gray-100" id="quote">
      <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
        <input type="tel" placeholder="Phone" className="w-full p-2 border border-gray-300 rounded" />
        <textarea placeholder="Project Details" className="w-full p-2 border border-gray-300 rounded"></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default RequestQuoteForm;

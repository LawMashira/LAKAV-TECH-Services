import React from 'react';
import useAnimateOnScroll from './landing/useAnimateOnScroll';

const Contact: React.FC = () => {
  const { ref, classNames } = useAnimateOnScroll('opacity-0 translate-y-10', 'opacity-100 translate-y-0 transition-all duration-1000 ease-out');

  return (
    <section id="contact" className={`bg-green-100 py-12 ${classNames}`} ref={ref}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Email Us</h3>
            <p>lakav49@gmail.com</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Call Us</h3>
            <p>+27641156101</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
            <p>Phoenix,Durban</p>
          </div>
        </div>
        <div className="mt-8">
          <form className="max-w-xl mx-auto bg-white p-8 shadow-md">
            <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 border border-gray-300 rounded" required />
            <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 border border-gray-300 rounded" required />
            <textarea placeholder="Your Message" className="w-full mb-4 p-2 border border-gray-300 rounded" required></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

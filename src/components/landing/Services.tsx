import React from 'react';
import useAnimateOnScroll from './useAnimateOnScroll';

const Services: React.FC = () => {
  const { ref, classNames } = useAnimateOnScroll('opacity-0 translate-y-10', 'opacity-100 translate-y-0 transition-all duration-1000 ease-out');

  return (
    <section id="services" className={`bg-blue-100 py-12 ${classNames}`} ref={ref}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Services We Provide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
            <p>Explore AI-driven solutions to unlock your business potential.</p>
          </div>
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Cybersecurity Services</h3>
            <p>Protect your business from digital threats with our security solutions.</p>
          </div>
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">IT Infrastructure & Cloud</h3>
            <p>Build a scalable IT infrastructure and leverage cloud solutions.</p>
          </div>
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
            <p>Get cutting-edge mobile applications tailored to your business.</p>
          </div>
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Software Development</h3>
            <p>Custom software solutions that perfectly align with your goals.</p>
          </div>
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Website Development</h3>
            <p>Modern and responsive websites to help your business grow.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

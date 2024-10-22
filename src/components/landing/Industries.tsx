import React from 'react';
import useAnimateOnScroll from './useAnimateOnScroll';

const Industries: React.FC = () => {
  const { ref, classNames } = useAnimateOnScroll('opacity-0 translate-y-10', 'opacity-100 translate-y-0 transition-all duration-1000 ease-out');

  return (
    <section id="industries" className={`bg-blue-100 py-12 ${classNames}`} ref={ref}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
            <p>Providing innovative IT solutions to improve healthcare services.</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Finance</h3>
            <p>Empowering financial services with secure and scalable solutions.</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Retail</h3>
            <p>Enhancing customer experience through modern retail technologies.</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p>Bringing digital transformation to the education sector.</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Manufacturing</h3>
            <p>Optimizing production processes with innovative IT solutions.</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
            <p>Providing e-commerce platforms that drive online sales.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;

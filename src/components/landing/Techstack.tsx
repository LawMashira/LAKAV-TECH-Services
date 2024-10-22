import React from 'react';
import useAnimateOnScroll from './useAnimateOnScroll';

const TechStack: React.FC = () => {
  const { ref, classNames } = useAnimateOnScroll('opacity-0 translate-y-10', 'opacity-100 translate-y-0 transition-all duration-1000 ease-out');

  return (
    <section id="tech-stack" className={`bg-blue-100 py-12 ${classNames}`} ref={ref}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">React</h3>
            <p>Building interactive and dynamic web applications.</p>
          </div>
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Node.js</h3>
            <p>Server-side JavaScript runtime environment for scalable applications.</p>
          </div>
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Python</h3>
            <p>Powerful programming language for machine learning and automation.</p>
          </div>
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Java</h3>
            <p>Reliable and secure backend solutions for enterprise applications.</p>
          </div>
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">AWS</h3>
            <p>Cloud computing solutions for modern business applications.</p>
          </div>
          <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Docker</h3>
            <p>Containerization for scalable and efficient application deployment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

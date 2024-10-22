// Portfolio.tsx
import React from 'react';
import mockProjects, { Project } from './mockProjects'; // Import the mock data


const Portfolio: React.FC = () => {
  return (
    <section className="py-10 bg-blue-100" id="portfolio">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockProjects.map((project: Project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security feature
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react';
import useAnimateOnScroll from './useAnimateOnScroll';
import { lakav } from '../../assets/images';

const About: React.FC = () => {
  const { ref: missionRef, classNames: missionClassNames } = useAnimateOnScroll('opacity-0 translate-y-10', 'opacity-100 translate-y-0 transition-all duration-1000 ease-out');
  const { ref: valuesRef, classNames: valuesClassNames } = useAnimateOnScroll('opacity-0 translate-y-10', 'opacity-100 translate-y-0 transition-all duration-1000 ease-out');
  const { ref: teamRef, classNames: teamClassNames } = useAnimateOnScroll('opacity-0 translate-y-10', 'opacity-100 translate-y-0 transition-all duration-1000 ease-out');
  const { ref: historyRef, classNames: historyClassNames } = useAnimateOnScroll('opacity-0 translate-y-10', 'opacity-100 translate-y-0 transition-all duration-1000 ease-out');

  return (
    <section  id="about" className="bg-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mission Section */}
        <div className={`py-12 ${missionClassNames}`} ref={missionRef}>
          <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
          <p className="text-center text-lg text-gray-700">
            To deliver innovative and impactful solutions that empower businesses to reach their full potential.
          </p>
        </div>

        {/* Values Section */}
        <div className={`py-12 ${valuesClassNames}`} ref={valuesRef}>
          <h2 className="text-3xl font-bold text-center mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p>We uphold the highest standards of integrity in all our actions.</p>
            </div>
            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>We strive to innovate and continuously improve in all aspects of our work.</p>
            </div>
            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p>We believe in the power of working together to achieve shared goals.</p>
            </div>
            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p>We are committed to delivering exceptional quality in everything we do.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`py-12 ${teamClassNames}`} ref={teamRef}>
          <h2 className="text-3xl font-bold text-center mb-6">Meet Some Of Our Team Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <img src="https://avatars.githubusercontent.com/u/120568696?v=4" alt="Team Member 1" 
              className="w-full h-72 object-fit rounded mb-4 justify-center items-center" />
              <h3 className="text-xl font-semibold">Lawson Matutu</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <img src="https://profile-assets.showwcase.com/160x/1658406452260.jpg?type=webp" alt="Team Member 2" 
              className="w-full h-72 object-fit rounded mb-4" />
              <h3 className="text-xl font-semibold">Irvine Kwambana</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <img src="https://plus.unsplash.com/premium_photo-1704757142665-0e789647cba1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="Team Member 3" className="w-full h-72 object-fit rounded mb-4" />
              <h3 className="text-xl font-semibold">Emily Johnson</h3>
              <p className="text-gray-600">Head of Design</p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className={`py-12 ${historyClassNames}`} ref={historyRef}>
          <h2 className="text-3xl font-bold text-center mb-6">Our Journey</h2>
          <p className="text-center text-lg text-gray-700 mb-6">
            Founded in 2023, our company has grown from a small startup into a leading provider of web development services, trusted by clients worldwide.
          </p>
          <div className="flex justify-center items-center">
            <img src={lakav} alt="Company History" className="w-full lg:w-2/3 object-cover rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

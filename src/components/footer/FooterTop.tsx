import React from 'react';
import WhatsAppButton from '../numbers/WhatsApp';

const FooterTop: React.FC = () => {
  return (
    <section className="bg-blue-700 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>
            We are a company dedicated to delivering innovative solutions to help businesses grow and thrive in the digital age.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
            <li>Mobile App Development</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: lakav49@gmail.com</p>
          <p>Phone: +27641156101</p>
          <p>Address: Phoenix,Durban</p>
        </div>
        <WhatsAppButton/>
      </div>
    </section>
  );
};

export default FooterTop;

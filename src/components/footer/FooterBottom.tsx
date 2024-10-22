import React from 'react';

const FooterBottom: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} LAKAV TECH Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterBottom;

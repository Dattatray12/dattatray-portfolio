import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Dattatray Shendkar</h1>
        <h2 className="text-2xl mb-6">Senior Software Engineer</h2>
        
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:dshendkar12@gmail.com" className="hover:text-blue-200">
              dshendkar12@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <a href="tel:+917709401021" className="hover:text-blue-200">
              +91 7709401021
            </a>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span>Pune (IND)</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/your-instagram-account"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-4"
        >
          <FaInstagram className="text-4xl mr-2" />
          <span className="text-lg">Instagram</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/your-facebook-page"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mb-4"
        >
          <FaFacebook className="text-xl mr-2" />
          Facebook
        </a>

        {/* Contact Phone Number */}
        <p className="text-lg">Contact Captain Chris: +1 234 567 890</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/misssiennasportfishing/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-4"
        >
          <FaInstagram className="text-4xl mr-2" />
          <span className="text-lg">Instagram</span>
        </a>
        {/* Contact Phone Number */}
        <a href="tel:+19736990449" className="text-lg">
          Contact Captain Chris: +1 973-699-0449
        </a>
      </div>
    </footer>
  );
};

export default Footer;

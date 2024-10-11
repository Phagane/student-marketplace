import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Quick Links Section */}
        <div className="footer__section">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="text-white-400 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-white-400 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-white-400 hover:text-white">Contact</a></li>
            <li><a href="/faq" className="text-white-400 hover:text-white">FAQ</a></li>
            <li><a href="/terms" className="text-white-400 hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer__section">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="footer__icons flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="h-8 w-8 text-white hover:text-gray-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-8 w-8 text-white hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-8 w-8 text-white hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer__section">
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-white-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-1 p-2 rounded-l-md bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="p-2 bg-blue-600 rounded-r-md hover:bg-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer__bottom text-center mt-8">
        <p className="text-white-400">&copy; 2024 Romeo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

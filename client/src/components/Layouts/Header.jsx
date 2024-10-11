import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import FontAwesome Shopping Cart icon
import UserAccount from '../Homepage/UserAccount';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-blue-500 text-white">
      {/* Logo */}
      <div className="header__logo">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="h-20 w-38" /> {/* Increased the height */}
        </Link>
      </div>

      {/* Search Bar */}
      <div className="header__search-bar flex-1 mx-6">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full p-2 rounded bg-gray-700 text-white text-base focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
      </div>

      {/* Icons and Links */}
      <div className="header__icons flex space-x-4">
        {/* Cart Icon */}
        <div className="header__icon">
          <Link to="/cart" className="flex items-center">
            <FaShoppingCart className="h-6 w-6" /> {/* Slightly larger cart icon */}
          </Link>
        </div>

        {/* User Account Component */}
        <UserAccount />

        {/* Login Link */}
        <div className="header__icon">
          <Link to="/login" className="text-white text-base hover:text-gray-300">
            Login
          </Link>
        </div>

        {/* Register Link */}
        <div className="header__icon">
          <Link to="/register" className="text-white text-base hover:text-gray-300">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

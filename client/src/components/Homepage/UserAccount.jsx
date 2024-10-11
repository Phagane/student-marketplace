import React, { useState, useRef } from 'react';
import { FaUser } from 'react-icons/fa'; // Import a user icon from FontAwesome

const UserAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Adjust the delay as needed (200ms here)
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* User Icon - replaced image with a FontAwesome user icon */}
      <div className="cursor-pointer flex items-center space-x-2">
        <FaUser className="h-6 w-6 text-white" /> {/* FontAwesome user icon */}
        <span className="text-white">Account</span> {/* Optional text beside icon */}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul className="p-4">
            <li className="font-bold text-gray-700">Orders</li>
            <ul className="pl-4">
              <li><a href="/orders" className="text-blue-500 hover:underline">Orders</a></li>
              <li><a href="/invoices" className="text-blue-500 hover:underline">Invoices</a></li>
              <li><a href="/returns" className="text-blue-500 hover:underline">Returns</a></li>
              <li><a href="/reviews" className="text-blue-500 hover:underline">Product Reviews</a></li>
            </ul>
            <li className="font-bold text-gray-700 mt-4">Payment & Credit</li>
            <ul className="pl-4">
              <li><a href="/credits-refunds" className="text-blue-500 hover:underline">Credits & Refunds</a></li>
            </ul>
            <li className="font-bold text-gray-700 mt-4">Profile</li>
            <ul className="pl-4">
              <li><a href="/personal-details" className="text-blue-500 hover:underline">Personal Details</a></li>
              <li><a href="/security-settings" className="text-blue-500 hover:underline">Security Settings</a></li>
            </ul>
            <li className="font-bold text-gray-700 mt-4">My Lists</li>
            <ul className="pl-4">
              <li><a href="/my-lists" className="text-blue-500 hover:underline">My Lists</a></li>
              <li><a href="/create-list" className="text-blue-500 hover:underline">Create a List</a></li>
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAccount;

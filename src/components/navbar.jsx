import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-gray-200">E-Commerce</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/products" className="hover:text-gray-200">Products</Link>
          <Link to="/search" className="hover:text-gray-200">Search</Link>
          <Link to="/about-us" className="hover:text-gray-200">About Us</Link>
          <Link to="/contact-us" className="hover:text-gray-200">Contact</Link>
          <Link to="/cart" className="hover:text-gray-200">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

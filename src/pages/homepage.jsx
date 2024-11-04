// src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTopButton from '../components/scrolltotop';

const HomePage = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchLatestProducts();
    fetchCategories();
  }, []);

  const fetchLatestProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=4');
      setLatestProducts(response.data);
    } catch (error) {
      console.error('Error fetching latest products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    
    <>
    
    <div className="container mx-auto py-10">
       
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>
        <p className="mb-8">Discover the best products for all your needs</p>
        <Link to="/products" className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-100">
          Shop Now
        </Link>
      </section>

      {/* Shop by Category */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/products?category=${category}`} key={category} className="block bg-gray-100 p-4 rounded shadow hover:bg-gray-200 transition">
              <p className="text-center font-semibold capitalize">{category}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 border border-gray-200 rounded-lg shadow">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-blue-600 font-semibold">${product.price}</p>
              <Link to={`/products/${product.id}`} className="mt-4 block text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-10 px-5">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded bg-white shadow">
              <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
              <p>We only offer the highest quality products.</p>
            </div>
            <div className="p-4 rounded bg-white shadow">
              <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
              <p>Get your products quickly with our fast delivery options.</p>
            </div>
            <div className="p-4 rounded bg-white shadow">
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p>Our team is here to help anytime, day or night.</p>
            </div>
          </div>
        </div>
      </section>
         
    </div>
    
    </>
  );
};

export default HomePage;

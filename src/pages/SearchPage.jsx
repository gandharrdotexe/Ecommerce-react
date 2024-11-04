// src/pages/SearchPage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Example function to fetch products (replace this with your actual data fetching logic)
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Search Products</h1>

      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-6 border border-gray-300 rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 border border-gray-200 rounded-lg shadow">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-700">{product.category}</p>
                <p className="text-blue-600 font-semibold">${product.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found for "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

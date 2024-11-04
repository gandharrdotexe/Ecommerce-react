import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const location = useLocation();
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch products and categories on component mount
    fetchProducts();
    fetchCategories();

    // Get category from query parameters
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    if (category) setSelectedCategory(category);
  }, [location.search]);

  useEffect(() => {
    // Apply filters whenever the category or price range changes
    filterProducts();
  }, [selectedCategory, priceRange, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
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

  const filterProducts = () => {
    const filtered = products.filter((product) => {
      const inCategory = selectedCategory ? product.category === selectedCategory : true;
      const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      return inCategory && inPriceRange;
    });
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      {/* Category and Price Filters */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <label className="block font-semibold mb-2">Category</label>
          <select
            className="w-full border border-gray-300 p-2 rounded"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-2">Price Range: Up to ${priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange[1]}
            onChange={handlePriceRangeChange}
            className="w-full"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 border border-gray-200 rounded-lg shadow">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-700">{product.category}</p>
              <p className="text-blue-600 font-semibold">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

// src/pages/ProductViewPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductViewPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // Define the handleAddToCart function
  const handleAddToCart = () => {
    addToCart(product);
    toast.success('🛒 Item added to Cart!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-1/3 mx-auto my-4" />
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-semibold mt-4">Price: ${product.price}</p>
      <button
        onClick={handleAddToCart} // Make sure this function is defined
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductViewPage;

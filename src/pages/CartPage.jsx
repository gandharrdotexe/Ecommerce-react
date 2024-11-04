// src/pages/CartPage.jsx

import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) updateQuantity(id, quantity);
  };

  if (cart.length === 0) return <p className="p-4">Your cart is empty :( .</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded-lg flex justify-between items-center">
          <div className="flex items-center">
            <img src={item.image} alt={item.title} className="w-20 h-20 mr-4" />
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>${item.price}</p>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              className="w-16 p-1 border rounded mr-2 text-center"
            />
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4 text-xl font-semibold">
        Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </div>

      <button
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={() => navigate('/checkout')}
      >
            Place Order
      </button>

    </div>
  );
};

export default CartPage;

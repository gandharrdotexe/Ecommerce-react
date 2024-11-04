// src/pages/OrderConfirmationPage.jsx

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const { clearCart } = useCart();

  // Retrieve order details from location.state
  const { userDetails, orderId, cart } = location.state || {};

  useEffect(() => {
    // Clear the cart only after rendering the order details
    if (cart) {
      clearCart();
    }
  }, [clearCart, cart]);

  if (!orderId || !userDetails || !cart) {
    return <p>Error: Order details are missing. Please try again.</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
      <h2 className="text-xl font-semibold">Thank you for your order!</h2>
      <p>Your order ID: <span className="font-bold">{orderId}</span></p>

      <div className="mt-4">
        <h3 className="font-bold">Products:</h3>
        <ul className="list-disc pl-6">
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p className="font-bold mt-4">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-bold">Shipping Details:</h3>
        <p>Name: {userDetails.name || 'N/A'}</p>
        <p>Address: {userDetails.address || 'N/A'}</p>
        <p>Phone: {userDetails.phone || 'N/A'}</p>
        <p>Email: {userDetails.email || 'N/A'}</p>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;

// src/App.jsx

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollToTopButton from './components/scrolltotop';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import SearchPage from './pages/SearchPage';
import ProductViewPage from './pages/ProductViewPage';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <HomePage />
          <ScrollToTopButton/>
          <Footer />
        </>
      ),
    },
    {
      path: '/products',
      element: (
        <>
          <Navbar />
          <ProductsPage />
          <ScrollToTopButton/>
          <Footer />
        </>
      ),
    },
    {
      path: '/cart',
      element: (
        <>
          <Navbar />
          <CartPage />
          <ScrollToTopButton/>
          <Footer />
        </>
      ),
    },
    {
      path: '/checkout',
      element: (
        <>
          <Navbar />
          <CheckoutPage />
          <ScrollToTopButton/>
          <Footer />
        </>
      ),
    },
    {
      path: '/order-confirmation',
      element: (
        <>
          <Navbar />
          <OrderConfirmationPage />
          <ScrollToTopButton/>
          <Footer />
        </>
      ),
    },
    {
      path: '/about-us',
      element: (
        <>
          <Navbar />
          <AboutUsPage />
          <ScrollToTopButton/>
          <Footer />
        </>
      ),
    },
    {
      path: '/contact-us',
      element: (
        <>
          <Navbar />
          <ContactUsPage />
          <ScrollToTopButton/>
          <Footer />
        </>
      ),
    },
    {
      path: '/search',
      element: (
        <>
          <Navbar />
          <SearchPage />
          <ScrollToTopButton/>
          <Footer />
        </>
      ),
    },
    {
      path: '/products/:id', // Route with product ID parameter
      element: (
        <>
          <Navbar />
          <ProductViewPage />
          <ScrollToTopButton/>
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
         // Pass Bounce directly here
      />
    </CartProvider>
    
  );
}

export default App;

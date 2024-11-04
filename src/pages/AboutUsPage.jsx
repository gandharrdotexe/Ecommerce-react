// src/pages/AboutUs.jsx

import React from 'react';
import OurTeam from '../assets/team-members.jpg'

const AboutUs = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      {/* Images & Text */}
      <div className="flex flex-col items-center gap-6 mb-8">
        <img src={OurTeam} alt="Our Team" className="w-full md:w-1/2 rounded-lg" />
        <p className="text-lg">
          Our mission is to bring you the best products with top quality and customer service.
        </p>
      </div>

      {/* Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
        <ul className="space-y-3">
          <li>✔ High-quality products</li>
          <li>✔ Customer-focused service</li>
          <li>✔ Secure and fast delivery</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded shadow">
            <p>"Great experience, loved the quality and service!"</p>
            <p>- John Doe</p>
          </div>
          <div className="p-4 border rounded shadow">
            <p>"Highly recommend, fantastic products!"</p>
            <p>- Micheal B</p>
          </div>
          <div className="p-4 border rounded shadow">
            <p>"Highly recommend, fantastic products!"</p>
            <p>- Micheal B</p>
          </div>
          <div className="p-4 border rounded shadow">
            <p>"Highly recommend, fantastic products!"</p>
            <p>- Micheal B</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

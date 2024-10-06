import React from 'react';

function AboutScreen() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">About Us</h1>
      <div className="text-lg text-gray-700 leading-relaxed">
        <p className="mb-6">
          Welcome to <span className="font-semibold">Sri Aditya Enterprises</span>, your reliable partner for high-quality pipes and fittings. With years of experience in the industry, we have become a trusted name in providing durable and efficient piping solutions for a wide range of applications, from residential to industrial projects.
        </p>
        <p className="mb-6">
          Our mission is to deliver premium-quality products that meet and exceed our customers' expectations. We are committed to innovation and excellence, continuously improving our product offerings to provide the best solutions for modern infrastructure needs.
        </p>
        <p className="mb-6">
          At Sri Aditya Enterprises, we take pride in our customer-centric approach. Our team of dedicated professionals ensures that every client receives personalized service, from initial consultation to project completion. Whether you’re looking for durable pipes for construction, agriculture, or water management, we have the right solution for you.
        </p>
        <p className="mb-6">
          We value long-term relationships with our clients and believe in building trust through consistent product quality, timely delivery, and competitive pricing. We look forward to partnering with you on your next project and contributing to your success.
        </p>
        <p className="mb-6 font-semibold">
          Contact us today to learn more about our products and services!
        </p>
      </div>
    </div>
  );
}

export default AboutScreen;

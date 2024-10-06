import React from 'react';
import { useParams } from 'react-router-dom';
import HomeConfig from '../HomeConfig.json'; // Import the JSON file

const ProductDetail = () => {
  const { id } = useParams();
  const product = HomeConfig.products.find(p => p.id === parseInt(id)); // Fetch product from JSON

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hello, I'm interested in the PSD file: ${product.name}.`);
    window.open(`https://wa.me/9989387180?text=${message}`, '_blank');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-gray-600">Price: ₹{product.price}</p>
      
      <div className="mt-6">
        <button 
          className="bg-green-500 text-white px-6 py-2 rounded mr-4"
          onClick={handleWhatsAppClick}
        >
          Contact on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

import React from 'react';
import { useParams } from 'react-router-dom';
import HomeConfig from '../HomeConfig.json'; // Import homeConfig.json

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL parameters
  const { categories } = HomeConfig; // Extract categories from homeConfig

  // Find the product by ID within the categories
  let product;
  categories.forEach(category => {
    const foundProduct = category.products.find(p => p.id === parseInt(id));
    if (foundProduct) product = foundProduct;
  });

  // If the product is not found, handle it
  if (!product) {
    return <p>Product not found</p>;
  }

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

// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-gray-600">Price: ₹{product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500 mt-4 inline-block">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;

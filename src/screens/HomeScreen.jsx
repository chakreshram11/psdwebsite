import React from 'react';
import { Link } from 'react-router-dom';
import HomeConfig from '../HomeConfig.json'; // Import the JSON file

const HomeScreen = () => {
  const products = HomeConfig.products; // Load the products from the JSON file

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available PSD Files</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-gray-600">Price: ₹{product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-500 mt-4 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

// src/components/CategoryCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
      <p className="text-gray-600">Contains {category.products.length} products</p>
      <Link to={`/category/${category.id}`} className="text-blue-500 mt-4 inline-block">
        View Category
      </Link>
    </div>
  );
};

export default CategoryCard;

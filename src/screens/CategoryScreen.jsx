import React from 'react';
import { useParams } from 'react-router-dom';
import homeConfig from '../HomeConfig.json';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const CategoryScreen = () => {
  const { id } = useParams(); // Get the category ID from the URL
  const category = homeConfig.categories.find(cat => cat.id === parseInt(id)); // Find the category by ID
  const navigate = useNavigate(); 

  if (!category) {
    return <p className="text-center text-red-500 font-semibold text-2xl mt-10">Category not found</p>; // Handle invalid category ID with styling
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 text-left">
        <button 
          onClick={() => navigate(-1)} 
          className="border-4 border-sky-500 rounded-lg bg-white p-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Back
        </button>
      </div>

      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">{category.name}</h1>
      
      {/* Display products for this category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {category.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryScreen;

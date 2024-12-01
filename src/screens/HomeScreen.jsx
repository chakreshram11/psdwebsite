import React from 'react';
import homeConfig from '../HomeConfig.json';
import ProductCard from '../components/ProductCard'; // Import the ProductCard component

const HomeScreen = () => {
  const { categories } = homeConfig; // Get categories from the JSON

  // Flatten the product list from all categories
  const allProducts = categories.reduce((acc, category) => {
    return [...acc, ...category.products];
  }, []);

  return (
    <div className="container mx-auto p-8 mt-9">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Available PSD Files</h1>

      {/* Display All Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import HomeConfig from '../HomeConfig.json'; // Import homeConfig.json
import { useNavigate } from 'react-router-dom';


const ProductDetailScreen = () => {
  const { id } = useParams(); // Get product ID from URL parameters
  const { categories } = HomeConfig; // Extract categories from homeConfig
  const navigate = useNavigate(); 
  // State for the image modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find the product by ID within the categories
  let product;
  let similarProducts = [];
  categories.forEach(category => {
    const foundProduct = category.products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      product = foundProduct;
      similarProducts = category.products.filter(p => p.id !== product.id); // Find similar products in the same category
    }
  });

  // If the product is not found, handle it
  if (!product) {
    return <p className="text-red-500 text-center text-2xl mt-10">Product not found</p>;
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hello, I'm interested in the PSD file: ${product.name}.`);
    window.open(`https://wa.me/9989387180?text=${message}`, '_blank');
  };

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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

      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full rounded-lg shadow-lg cursor-pointer" 
            onClick={toggleModal} // Open modal on click
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-6">Price: ₹{product.price}</p>

          <div className="mt-6">
            <button 
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
              onClick={handleWhatsAppClick}
            >
              Contact on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Similar Designs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarProducts.map(similarProduct => (
            <div key={similarProduct.id} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={similarProduct.imageUrl} 
                alt={similarProduct.name} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{similarProduct.name}</h3>
                <p className="text-gray-700 mb-4">{similarProduct.description}</p>
                <p className="text-lg font-semibold text-green-600 mb-4">Price: ₹{similarProduct.price}</p>
                <Link to={`/product/${similarProduct.id}`} className="text-blue-500 font-semibold hover:underline">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={toggleModal}>
          <div className="relative">
            <img src={product.imageUrl} alt={product.name} className="max-w-full max-h-screen rounded-lg shadow-lg" />
            <button className="absolute top-4 right-4 text-white text-3xl" onClick={toggleModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailScreen;

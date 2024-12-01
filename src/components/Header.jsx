import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import homeConfig from '../HomeConfig.json'; // Import homeConfig

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Toggle for the mobile menu
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // Toggle for the categories in the mobile menu
  const categories = homeConfig.categories; // Get the categories

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-lg z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            GANESH DIGITAL WORKS
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-bold">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <div className="relative group">
            <span className="hover:text-gray-300 cursor-pointer">Categories</span>
            <div className="absolute hidden group-hover:block bg-gray-700">
              {categories.map(category => (
                <Link 
                  key={category.id} 
                  to={`/category/${category.id}`} 
                  className="block px-4 py-2 hover:bg-gray-600">
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg> /* Close Icon when open */
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg> /* Hamburger Icon */
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-800`}>
        <nav className="mt-4">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>

          {/* Categories Toggle in Mobile Mode */}
          <div className="cursor-pointer block px-4 py-2 hover:bg-gray-700" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
            Categories
          </div>
          
          {/* Nested Category Links */}
          {isCategoryOpen && (
            <div className="pl-4">
              {categories.map(category => (
                <Link 
                  key={category.id} 
                  to={`/category/${category.id}`} 
                  className="block px-4 py-2 hover:bg-gray-600">
                  {category.name}
                </Link>
              ))}
            </div>
          )}

          <Link to="/about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Ganesh Digital Works</h4>
            <p className="text-gray-400">
            Your trusted partner for high-quality PSD files from Digital Works.
            </p>
            <p className="mt-4 text-gray-400">123, Industrial Area, City, State, ZIP</p>
            <p className="text-gray-400">Phone: +91 9989387180</p>
            <p className="text-gray-400">Email: ganeshflexmmd@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-white">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://twitter.com" className="hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://linkedin.com" className="hover:text-white">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://instagram.com" className="hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h4>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full rounded bg-gray-700 text-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ganesh Digitals. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

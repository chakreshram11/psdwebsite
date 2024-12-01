import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProductDetail from './screens/ProductDetailScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutScreen from './screens/AboutScreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<HomeScreen />} />
        <Route path="/category/:id" element={<CategoryScreen />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutScreen />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

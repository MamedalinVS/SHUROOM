import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './layout/nav';
import Shawerma from './pages/shawerma';
import Drinks from './pages/drinks';
import Snacks from './pages/snacks';
import About from './pages/about';
import Cart from './pages/cart';

import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/shawerma" />} />
          <Route path="/shawerma" element={<Shawerma />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={< Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

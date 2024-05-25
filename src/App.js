import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CategoriesPage from './CategoriesPage';
import ProductsPage from './ProductsPage';
import Cart from './Cart';
import './App.css';

function App() {
  const cart = useSelector((state) => state.cart);
  const cartItemCount = cart.length;

  return (
    <Router>
      <div>
        <nav className="navbar custom-navbar">
          <div className="container">
            <Link className="navbar-brand" to="/">E-Commerce</Link>
            <div className="d-flex ms-auto">
              <Link className="nav-link position-relative" to="/cart">
                <i className="fas fa-shopping-cart"></i>
                {cartItemCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItemCount}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<CategoriesPage />} />
            <Route path="/category/:categoryId" element={<ProductsPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

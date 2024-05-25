import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './store';
import './App.css';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4 product-card">
        <div className="product-image-container">
          {product.image ? (
            <img src={product.image} alt={product.title} className="product-image" />
          ) : (
            <i className="fas fa-box-open fa-5x text-muted"></i>
          )}
        </div>
        <div className="card-body text-left flex-grow-1">
          <h6 className="card-title">{product.title}</h6>
          <p className="card-text">{product.description}</p>
        </div>
        <div className="price-add-to-cart-container">
          <div className="price">${product.price.toFixed(2)}</div>
          <div className="divider"></div>
          <button onClick={handleAddToCart} className="btn btn-link add-to-cart-btn">
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

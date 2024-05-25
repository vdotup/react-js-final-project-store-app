import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, decreaseQuantity } from './store';
import './App.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  const total = groupedCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container">
      <h2>Cart</h2>
      <ul className="list-group">
        {groupedCart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="cart-item-left">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <span>{item.title}</span>
            </div>
            <div className="cart-item-right">
              <button onClick={() => dispatch(decreaseQuantity(item.id))} className="btn quantity-btn">
                <i className="fas fa-minus-circle"></i>
              </button>
              <span className="quantity-label">{item.quantity}</span>
              <button onClick={() => dispatch(addToCart(item))} className="btn quantity-btn">
                <i className="fas fa-plus-circle"></i>
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="btn btn-link remove-btn">
                <i className="fas fa-trash-alt"></i>
              </button>
              <span className="price"><strong>${item.price.toFixed(2)}</strong></span>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total-payment">
        <h3 className="total">Total: ${total}</h3>
        <Link to="/" className="btn btn-black mt-3">Go to Payment</Link>
      </div>
    </div>
  );
};

export default Cart;

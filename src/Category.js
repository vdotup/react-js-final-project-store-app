import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const icons = {
  electronics: 'fas fa-tv',
  jewelery: 'fas fa-gem',
  "men's clothing": 'fas fa-male',
  "women's clothing": 'fas fa-female',
};

const Category = ({ category }) => {
  return (
    <div className="col-md-4">
      <Link to={`/category/${category}`} className="card mb-4 text-center category-card">
        <div className="card-body">
          <i className={`${icons[category]} fa-5x`} style={{ color: '#216869' }}></i>
          <h5 className="card-title mt-3">{category}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Category;

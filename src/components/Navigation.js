// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h1>Fridge-to-plate</h1>
    </nav>
  );
}

export default Navigation;

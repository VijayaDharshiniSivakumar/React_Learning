// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">SWEET TOOTH</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact"><button className='butn'>Contact us</button></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

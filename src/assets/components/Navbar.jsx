import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/MY LOGO.png" alt="Jeremie.C Logo" className="logo" />
      </div>
      <div className="scrolling-text-container">
        <p className="scrolling-text">Welcome to Jeremie.C's IP Address Tracker App. Where You Can Track Any IP Address You Want. </p>
      </div>
    </nav>
  );
}

export default Navbar;

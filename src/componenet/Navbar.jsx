
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
   <h1>focal-x</h1>
      </div>

      
      <div className="nav-links">
        <div></div>
        <a href="#home">Home</a>
        <a href="#Services">Services</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Clints">Clints & Partners</a>
        <a href="#X-Academey">X-Academey</a>
        <a href="#About">About Us</a>
        <a href="#let">let's talk</a>
       
      </div>
    </nav>
  );
}

export default Navbar;

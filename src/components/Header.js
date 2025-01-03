// components/Header.js
import React, { useState } from "react";
import "../style/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container-header">
        <div className="logo">Rumah YoTuBer</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <nav className={`nav ${isMenuOpen ? "open" : "web-view"}`}>
          {isMenuOpen && (
            <div className="close-menu" onClick={toggleMenu}>
              ✕
            </div>
          )}
          <ul className="nav-list">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn btn-login">Login</button>
          <button className="btn btn-signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

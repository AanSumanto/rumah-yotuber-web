import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link dari React Router
import "../style/Header.css";
import Logo from "../assets/logo2.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container-header">
        <div className="logo-container">
          <img src={Logo} alt="Logo Rumah YoTuBer" className="logo-image" />
          <div className="logo-text">Rumah YoTuBer</div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <nav className={`nav ${isMenuOpen ? "open" : "web-view"}`}>
          {isMenuOpen && (
            <div className="close-menu" onClick={closeMenu}>
              ✕
            </div>
          )}
          <ul className="nav-list">
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={closeMenu}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li>
              <Link to="/about-coaching" onClick={closeMenu}>
                About Coaching
              </Link>
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

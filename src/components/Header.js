import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link dari React Router
import "../style/Header.css";
import Logo from "../assets/logo2.png";
import { HashLink } from "react-router-hash-link";

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
              <HashLink to="/" onClick={closeMenu}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" onClick={closeMenu}>
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#testimonials" onClick={closeMenu}>
                Testimonials
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" onClick={closeMenu}>
                Contact
              </HashLink>
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

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/Footer.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="brand-name">Rumah YoTuBer</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/lintas_coaching/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <HashLink to="/">Home</HashLink>
            </li>
            <li>
              <Link to="/about-coaching">About Coaching</Link>
            </li>
            <li>
              <HashLink smooth to="/#testimonials">
                Testimonials
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="/vaccination">Kesehatan Mental</a>
            </li>
            <li>
              <a href="/ndd">Kesehatan Spiritual</a>
            </li>
            <li>
              <a href="/filled-prescription">Kesehatan Seksual</a>
            </li>
            <li>
              <a href="/patient-referral">Pengembangan Diri</a>
            </li>
            <li>
              <a href="/other-roofing">Pendidikan & Karir</a>
            </li>
          </ul>
        </div>
        <div className="footer-location">
          <h4>Location</h4>
          <address>
            Jl. Ade Irma Nasution no.1247 RT/RW. 22/08 Kelurahan Sei Pangeran,
            Kecamatan Ilir Timur Satu, Palembang Sumatera Selatan
            <p> Telp. 0896 5922 1893 </p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

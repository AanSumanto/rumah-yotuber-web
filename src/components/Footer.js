import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="brand-name">Rumah YoTuBer</h2>
          <p className="brand-description">
            Jl. Ade Irma Nasution no.1247 RT.22 RW.08 Kel Sei Pangeran,
            Kecamatan Ilir Timur Satu, Palembang Sumatera Selatan Telp. 0896
            5922 1893
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/doctors">Doctors</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="/vaccination">Vaccination</a>
            </li>
            <li>
              <a href="/ndd">NDD</a>
            </li>
            <li>
              <a href="/filled-prescription">Filled Prescription As Is</a>
            </li>
            <li>
              <a href="/patient-referral">Patient Referral</a>
            </li>
            <li>
              <a href="/other-roofing">Other roofing</a>
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

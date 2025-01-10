import React from "react";
import { Link } from "react-router-dom";
import "../style/Hero.css";
import heroImage from "../assets/hero-image3.png";
import heroImage2 from "../assets/hero-image4.png";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        {/* Bungkus konten hero */}
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              Bersama Melengkapi, Bersama Menguatkan
            </h1>
            <p className="hero-description">
              Bersama Kita Wujudkan Kepedulian dan Perubahan
            </p>
            <div className="hero-buttons">
              <button className="btn btn-appointment">Get Appointment</button>
              <Link
                to="/about-coaching"
                className="btn btn-specialist no-underline"
              >
                Learn About Coaching
              </Link>
            </div>
          </div>

          {/* Kontainer Gambar Hero dengan Efek Kartu */}
          <div className="hero-images-container">
            <div className="hero-image-item">
              <img
                src={heroImage2}
                alt="Doctor 1"
                className="hero-image-circle"
              />
              <div className="hero-image-caption">
                <h4 className="doctor-name">dr. Yuliarni, M.Kes, SpKKLP</h4>
              </div>
            </div>
            <div className="hero-image-item">
              <img
                src={heroImage}
                alt="Doctor 2"
                className="hero-image-circle"
              />
              <div className="hero-image-caption">
                <h4 className="doctor-name">
                  dr. Unita Magdalena, CET, CAPC, CEPC
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

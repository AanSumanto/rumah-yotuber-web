import React from "react";
import "../style/Hero.css";
import heroImage from "../assets/hero-image.png";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        {/* Bungkus konten hero */}
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              We Will Help You To Improve Your Mental Health
            </h1>
            <p className="hero-description">
              Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
              quis ullamcorper quis.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-appointment">Get Appointment</button>
              <button className="btn btn-specialist">Find Specialist</button>
            </div>
          </div>

          {/* Gambar hero */}
          <div className="hero-image">
            <img src={heroImage} alt="Doctor" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

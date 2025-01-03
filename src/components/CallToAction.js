// components/CallToAction.js
import React from "react";
import "../style/CallToAction.css";
import doctor1 from "../assets/doctor-1.png";
import doctor2 from "../assets/doctor-2.png";
import doctor3 from "../assets/doctor-3.png";

function CallToAction() {
  return (
    <section id="contact" className="call-to-action">
      <div className="cta-container">
        <div className="cta-content">
          <h4>Need a doctor's counseling?</h4>
          <h1>
            Request a Call Back
            <br />
            Today Now
          </h1>
          <p>
            Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
            quis ullamcorper quis. Quam enim tortor, id sed.
          </p>
          <div className="cta-doctors">
            <img src={doctor1} alt="Doctor 1" className="doctor-image" />
            <img src={doctor2} alt="Doctor 2" className="doctor-image" />
            <img src={doctor3} alt="Doctor 3" className="doctor-image" />
            <span>Our Doctors are waiting for your service.</span>
          </div>
        </div>
        <div className="cta-form">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input
            type="text"
            placeholder="Your Phone Number"
            className="form-input"
          />
          <input type="date" className="form-input" />
          <button className="form-button">Request Now</button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;

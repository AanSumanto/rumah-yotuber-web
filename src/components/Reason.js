import React from "react";
import "../style/Reason.css";
import group from "../assets/group2.jpeg";

function Reason() {
  return (
    <section className="reason-section">
      <div className="reason-container">
        <div className="reason-text">
          <h2>Why Should you take our services</h2>
          <p>
            Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
            quis ullamcorper quis. Quam enim tortor, id sed
          </p>
        </div>
        <div className="reason-content">
          <div className="reason-image">
            <img
              src={group} // Ganti dengan URL gambar Anda
              alt="Classroom Discussion"
            />
          </div>
          <div className="reason-items">
            <ReasonItem
              title="Experience"
              description="Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis ullamcorper quis. Quam enim tortor, id sed."
            />
            <ReasonItem
              title="Commitment"
              description="Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis ullamcorper quis. Quam enim tortor, id sed."
            />
            <ReasonItem
              title="Facilities"
              description="Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis ullamcorper quis. Quam enim tortor, id sed."
            />
            <ReasonItem
              title="Relationships"
              description="Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis ullamcorper quis. Quam enim tortor, id sed."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonItem({ title, description }) {
  return (
    <div className="reason-item">
      <h3>
        {title} <span>✔️</span>
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default Reason;

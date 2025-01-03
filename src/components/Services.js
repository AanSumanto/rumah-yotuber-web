// components/Services.js
import React from "react";
import "../style/Service.css";

function Services() {
  const services = [
    {
      title: "Counseling",
      description: "Personalized therapy sessions.",
      icon: "💬",
    },
    {
      title: "Support Groups",
      description: "Group discussions for support.",
      icon: "🤝",
    },
    {
      title: "Prescription Medicine",
      description: "Expert medication guidance.",
      icon: "💊",
    },
    {
      title: "Therapies",
      description: "Specialized treatment plans.",
      icon: "🛋️",
    },
    {
      title: "Brain Stimulation",
      description: "Advanced brain therapies.",
      icon: "⚡",
    },
    {
      title: "Eye Movement",
      description: "Effective EMDR sessions.",
      icon: "👁️",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container-service">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
            quis ullamcorper quis.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

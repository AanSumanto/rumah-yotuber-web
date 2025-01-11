import React from "react";
import "../style/Reason.css";
import group from "../assets/group2.png";

function Reason() {
  const reasons = [
    {
      title: "Kesehatan Spiritual",
      description:
        "Kami membantu Anda mencapai keseimbangan spiritual melalui pendekatan holistik.",
      icon: "🙏",
    },
    {
      title: "Kesehatan Mental",
      description:
        "Memberikan konseling dan terapi profesional untuk menjaga kesehatan mental Anda.",
      icon: "🧠",
    },
    {
      title: "Pendidikan & Karir",
      description:
        "Dukungan untuk membangun pendidikan dan karir yang lebih baik.",
      icon: "🎓",
    },
    {
      title: "Kemerdekaan Finansial",
      description:
        "Solusi dan strategi untuk membantu Anda mencapai kebebasan finansial.",
      icon: "💰",
    },
  ];

  return (
    <section className="reason-section">
      <div className="reason-container">
        <div className="reason-text">
          <h2>Kenapa Harus Memilih Layanan Kami?</h2>
          <p>
            Kami menyediakan layanan yang dirancang untuk mendukung
            kesejahteraan Anda di berbagai aspek kehidupan.
          </p>
        </div>
        <div className="reason-content">
          <div className="reason-image">
            <img src={group} alt="Group Activity" />
          </div>
          <div className="reason-items">
            {reasons.map((reason, index) => (
              <ReasonItem
                key={index}
                title={reason.title}
                description={reason.description}
                icon={reason.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonItem({ title, description, icon }) {
  return (
    <div className="reason-item">
      <h3>
        {icon} {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default Reason;

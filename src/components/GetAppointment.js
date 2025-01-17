import React from "react";
import "../style/GetAppointment.css";

function GetAppointment() {
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const storeLink = isIOS
    ? "https://apps.apple.com" // Ganti dengan tautan App Store
    : "https://play.google.com/store"; // Ganti dengan tautan Play Store

  return (
    <section className="appointment-section">
      <div className="appointment-container">
        <p className="appointment-subtitle">Perlu Konseling dari Dokter?</p>
        <h1 className="appointment-title">
          Cukup Buat Janji <br /> dan Dapatkan Motivasi.
        </h1>
        <a href={storeLink} target="_blank" rel="noopener noreferrer">
          <button className="appointment-button">Buat Janji</button>
        </a>
      </div>
    </section>
  );
}

export default GetAppointment;

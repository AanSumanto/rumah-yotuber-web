import React from "react";
import "../style/AboutCoaching.css";
import { FaCheckCircle } from "react-icons/fa";
import pyramidImage from "../assets/learning-pyramid.jpeg"; // Tambahkan gambar ke folder assets

function AboutCoaching() {
  return (
    <section className="about-coaching" id="about-coaching">
      <div className="container">
        <h1 className="about-title">Pengenalan Tentang Coaching</h1>

        {/* Definisi Coaching */}
        <div className="about-section">
          <h2 className="section-title">Definisi Coaching Menurut ICF</h2>
          <p className="about-paragraph">
            <strong>International Coaching Federation (ICF)</strong>{" "}
            mendefinisikan Coaching sebagai kemitraan dengan klien (coachee)
            dalam menstimulasi pikiran dan kreatifitas, sehingga dapat
            menginspirasi mereka untuk memaksimalkan potensinya dalam kehidupan
            pribadi maupun karier profesional.
          </p>
          <h3 className="about-subtitle">Coaching adalah:</h3>
          <ul className="about-list">
            <li>
              <FaCheckCircle className="icon" /> Percakapan yang memberdayakan
            </li>
            <li>
              <FaCheckCircle className="icon" /> Percakapan yang dapat membuat
              orang bergerak mencapai keinginannya
            </li>
            <li>
              <FaCheckCircle className="icon" /> Percakapan yang dapat membuat
              kesadaran baru dalam bersikap dan berperilaku
            </li>
            <li>
              <FaCheckCircle className="icon" /> Percakapan yang dapat membuat
              orang bergerak dengan kesadaran sendiri dengan memanfaatkan
              potensi diri
            </li>
          </ul>
          <p className="about-paragraph">
            Percakapan coaching adalah percakapan yang terstruktur dan
            mengandung unsur 3A:
          </p>
          <div className="about-cards">
            <div className="card">
              <h4>Agreement</h4>
              <p>
                Menyepakati tujuan sesi, dan menyadarkan pentingnya goal yang
                akan dicapai.
              </p>
            </div>
            <div className="card">
              <h4>Awareness</h4>
              <p>
                Menggali kesadaran diri melalui situasi dan kondisi sekarang,
                baik dari dalam maupun luar diri.
              </p>
            </div>
            <div className="card">
              <h4>Action</h4>
              <p>
                Langkah konkret yang dapat diambil untuk menindaklanjuti hasil
                sesi coaching.
              </p>
            </div>
          </div>
        </div>

        {/* Dampak Coaching */}
        <div className="about-section">
          <h2 className="section-title">Dampak/Manfaat Coaching</h2>
          <ul className="about-benefits">
            <li>
              <FaCheckCircle className="icon" /> Menjadi pribadi yang positif
            </li>
            <li>
              <FaCheckCircle className="icon" /> Komunikasi yang lebih efektif
            </li>
            <li>
              <FaCheckCircle className="icon" /> Peningkatan produktivitas
            </li>
            <li>
              <FaCheckCircle className="icon" /> Meringankan tugas pemimpin
            </li>
            <li>
              <FaCheckCircle className="icon" /> Optimalisasi pencapaian target
            </li>
            <li>
              <FaCheckCircle className="icon" /> SDM yang produktif dan bahagia
            </li>
            <li>
              <FaCheckCircle className="icon" /> Keterlibatan SDM tinggi
            </li>
            <li>
              <FaCheckCircle className="icon" /> Budaya kerja yang inovatif dan
              adaptif
            </li>
            <li>
              <FaCheckCircle className="icon" /> Rasio keuntungan dan kerugian
            </li>
          </ul>
        </div>

        {/* Tambahkan Learning Pyramid */}
        <div className="learning-pyramid-section">
          <h2 className="learning-pyramid-title">The Learning Pyramid</h2>
          <p className="learning-pyramid-description">
            Piramida pembelajaran ini menunjukkan tingkat retensi pengetahuan
            berdasarkan metode pembelajaran, dari ceramah hingga mengajar orang
            lain.
          </p>
          <img
            src={pyramidImage}
            alt="Learning Pyramid"
            className="learning-pyramid-image"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutCoaching;

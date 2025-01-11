import React from "react";
import "../style/CallToAction.css";
import doctor1 from "../assets/doctor-1.png";
import doctor2 from "../assets/doctor-2.png";

function CallToAction() {
  return (
    <section id="contact" className="call-to-action">
      <div className="cta-container">
        <div className="cta-content">
          <h4>Perlu Konseling dengan Dokter?</h4>
          <h1>
            Dapatkan Konsultasi Langsung
            <br />
            Hari Ini!
          </h1>
          <p>
            Kami menyediakan layanan konseling dari dokter ahli yang siap
            membantu Anda. Jadwalkan konsultasi Anda sekarang untuk mendapatkan
            solusi terbaik untuk kesehatan Anda.
          </p>
          <div className="cta-doctors">
            <img src={doctor1} alt="Doctor 1" className="doctor-image" />
            <img src={doctor2} alt="Doctor 2" className="doctor-image" />
            <span>Tim dokter kami siap membantu Anda kapan saja.</span>
          </div>
        </div>
        <div className="cta-form">
          <input type="text" placeholder="Nama Anda" className="form-input" />
          <input
            type="text"
            placeholder="Nomor Telepon Anda"
            className="form-input"
          />
          <input type="date" className="form-input" />
          <button className="form-button">Ajukan Sekarang</button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;

// import React, { useState } from "react";
// import "../style/CallToAction.css";
// import doctor1 from "../assets/doctor-1.png";
// import doctor2 from "../assets/doctor-2.png";

// function CallToAction() {
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({ name: "", phone: "", date: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setFormData({ name: "", phone: "", date: "" }); // Kosongkan form
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   return (
//     <section id="contact" className="call-to-action">
//       <div className="cta-container">
//         <div className="cta-content">
//           <h4>Perlu Konseling dengan Dokter?</h4>
//           <h1>
//             Dapatkan Konsultasi Langsung
//             <br />
//             Hari Ini!
//           </h1>
//           <p>
//             Kami menyediakan layanan konseling dari dokter ahli yang siap
//             membantu Anda. Jadwalkan konsultasi Anda sekarang untuk mendapatkan
//             solusi terbaik untuk kesehatan Anda.
//           </p>
//           <div className="cta-doctors">
//             <img src={doctor1} alt="Doctor 1" className="doctor-image" />
//             <img src={doctor2} alt="Doctor 2" className="doctor-image" />
//             <span>Tim dokter kami siap membantu Anda kapan saja.</span>
//           </div>
//         </div>
//         <div className="cta-form">
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Nama Anda"
//               className="form-input"
//               required
//             />
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Nomor Telepon Anda"
//               className="form-input"
//               required
//             />
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="form-input"
//               required
//             />
//             <button type="submit" className="form-button">
//               Ajukan Sekarang
//             </button>
//           </form>
//         </div>
//       </div>

//       {showModal && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h1>Terima Kasih!</h1>
//             <p>
//               Pengajuan konsultasi Anda telah diterima. Kami akan segera
//               menghubungi Anda untuk menjadwalkan konsultasi.
//             </p>
//             <p>
//               Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk
//               menghubungi kami.
//             </p>
//             <button className="modal-button" onClick={closeModal}>
//               Tutup
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default CallToAction;

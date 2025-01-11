// // components/Services.js
// import React from "react";
// import "../style/Service.css";

// function Services() {
//   const services = [
//     {
//       title: "Counseling",
//       description: "Personalized therapy sessions.",
//       icon: "💬",
//     },
//     {
//       title: "Support Groups",
//       description: "Group discussions for support.",
//       icon: "🤝",
//     },
//     {
//       title: "Prescription Medicine",
//       description: "Expert medication guidance.",
//       icon: "💊",
//     },
//     {
//       title: "Therapies",
//       description: "Specialized treatment plans.",
//       icon: "🛋️",
//     },
//     {
//       title: "Brain Stimulation",
//       description: "Advanced brain therapies.",
//       icon: "⚡",
//     },
//     {
//       title: "Eye Movement",
//       description: "Effective EMDR sessions.",
//       icon: "👁️",
//     },
//   ];

//   return (
//     <section className="services" id="services">
//       <div className="container-service">
//         <div className="services-header">
//           <h2 className="services-title">Our Services</h2>
//           <p className="services-description">
//             Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh
//             quis ullamcorper quis.
//           </p>
//         </div>
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div className="service-card" key={index}>
//               <div className="service-icon">{service.icon}</div>
//               <h3 className="service-title">{service.title}</h3>
//               <p className="service-description">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

// components/Services.js
import React from "react";
import "../style/Service.css";

function Services() {
  const services = [
    {
      title: "Kesehatan Spiritual",
      description:
        "Membantu mencapai keseimbangan spiritual untuk kehidupan yang lebih baik.",
      icon: "🙏",
    },
    {
      title: "Kesehatan Mental",
      description: "Layanan konseling dan terapi untuk kesehatan mental Anda.",
      icon: "🧠",
    },
    {
      title: "Kesehatan Seksual",
      description: "Edukasi dan solusi untuk kesehatan seksual yang optimal.",
      icon: "❤️",
    },
    {
      title: "Pendidikan & Karir",
      description:
        "Dukungan untuk pengembangan pendidikan dan jalur karir Anda.",
      icon: "🎓",
    },
    {
      title: "Pengembangan Diri",
      description: "Membantu Anda mengembangkan potensi diri.",
      icon: "🌱",
    },
    {
      title: "Kemerdekaan Finansial",
      description: "Strategi untuk mencapai kebebasan finansial.",
      icon: "💰",
    },
    {
      title: "Gizi & Kecantikan",
      description:
        "Panduan untuk hidup sehat dan cantik melalui gizi yang tepat.",
      icon: "🍎",
    },
    {
      title: "Kosmetik & Obat-Obatan",
      description: "Produk kosmetik dan obat-obatan terpercaya.",
      icon: "💄",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container-service">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            Kami menyediakan berbagai layanan untuk mendukung kesehatan dan
            kesejahteraan Anda.
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

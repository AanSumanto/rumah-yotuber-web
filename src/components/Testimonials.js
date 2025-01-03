import React, { useState, useEffect, useCallback } from "react";
import "../style/Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      date: "June 2023",
      stars: 5,
      feedback:
        "Yotuber has been a game-changer for my mental health! The therapists are amazing and truly understand their patients.",
      photo: "https://via.placeholder.com/80",
    },
    {
      name: "Jane Smith",
      date: "August 2023",
      stars: 4,
      feedback:
        "I found great support here. The sessions helped me manage my anxiety better.",
      photo: "https://via.placeholder.com/80",
    },
    {
      name: "Michael Brown",
      date: "December 2023",
      stars: 5,
      feedback:
        "Excellent service! The counseling and group sessions have been incredibly beneficial.",
      photo: "https://via.placeholder.com/80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Use useCallback for the handleNext function
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [handleNext]);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container-testimonial">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="carousel-wrapper">
          {/* Button for previous testimonial */}
          <button className="carousel-btn prev-btn" onClick={handlePrev}>
            &#8592;
          </button>

          {/* Current testimonial */}
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img
                src={testimonials[currentIndex].photo}
                alt={testimonials[currentIndex].name}
                className="testimonial-photo"
              />
              <div className="testimonial-info">
                <h4 className="testimonial-name">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="testimonial-date">
                  {testimonials[currentIndex].date}
                </p>
              </div>
              <div className="testimonial-stars">
                {"★".repeat(testimonials[currentIndex].stars)}
              </div>
            </div>
            <p className="testimonial-feedback">
              {testimonials[currentIndex].feedback}
            </p>
          </div>

          {/* Button for next testimonial */}
          <button className="carousel-btn next-btn" onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Reason from "./components/Reason";
import GetAppointment from "./components/GetAppointment";
import AboutCoaching from "./components/AboutCoaching"; // Tambahkan komponen ini

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Rute untuk halaman utama */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <GetAppointment />
                <Testimonials />
                <Reason />
                <CallToAction />
              </>
            }
          />
          {/* Rute untuk halaman About Coaching */}
          <Route path="/about-coaching" element={<AboutCoaching />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

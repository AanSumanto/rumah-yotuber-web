// App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Reason from "./components/Reason";
import GetAppointment from "./components/GetAppointment";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <GetAppointment />
      <Testimonials />
      <Reason />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;

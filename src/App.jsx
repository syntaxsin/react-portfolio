import { useState } from "react";
import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer.jsx";
import Hero from "/src/components/Hero.jsx";
import About from "/src/components/About.jsx";
import Exp from "/src/components/Exp.jsx";
import Skills from "/src/components/SKills.jsx";
import "@fontsource/inter";

function App() {
  return (
    <>
      <Navbar />
      <div className="inter relative flex flex-col min-h-screen swirling-bg scrollbar-hide">
        <main id="hero" className="h-screen flex-grow flex items-center justify-center">
          <Hero />
        </main>
        <div id="about" className="h-screen flex flex-grow items-center justify-center">
          <About />
        </div>
        <div id="expskills" className="h-screen flex flex-grow items-center justify-center">
          <Exp />
        </div>
        <div className="flex items-center justify-center">
          <Skills />
        </div>
        <div className="h-screen flex items-center justify-center">
          {/* <Skills /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
import { useState } from "react";
import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer.jsx";
import Hero from "/src/components/Hero.jsx";
import About from "/src/components/About.jsx";
import Exp from "/src/components/Exp.jsx";
import Skills from "/src/components/Skills.jsx";
import Projects from "/src/components/Projects.jsx";
import "@fontsource/inter";

function App() {
  return (
    <>
      <Navbar />
      <div className="inter relative flex flex-col min-h-screen scrollbar-hide overflow-x-hidden">
        <main id="hero" className="h-screen flex-grow flex items-center justify-center swirling-bg">
          <Hero />
        </main>
        <div id="about" className="h-screen flex flex-grow items-center justify-center bg-black">
          <About />
        </div>
        <div id="expskills" className="h-screen flex flex-grow items-center justify-center">
          <Exp />
        </div>
        <div className="flex items-center justify-center">
          <Skills />
        </div>
        <div id="projects" className=" flex items-center justify-center">
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
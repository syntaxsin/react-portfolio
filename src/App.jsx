import { useState } from "react";
import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer.jsx";
import Hero from "/src/components/Hero.jsx";
import About from "/src/components/About.jsx";
import Exp from "/src/components/Exp_Skills.jsx";
import "@fontsource/inter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <div className="inter relative flex flex-col min-h-screen swirling-bg scrollbar-hide overflow-x-hidden">
        <main id="hero" className="h-screen flex-grow flex items-center justify-center">
          <Hero />
        </main>
        <div id="about" className="h-screen flex flex-grow items-center justify-center">
          <About />
        </div>
        <div id="expskills" className="h-screen flex flex-grow items-center justify-center">
          <Exp />
        </div>
        {/* <div id="projects" className="h-screen flex flex-grow items-center justify-center">
          <Exp />
        </div>
        <div id="certifications" className="h-screen flex flex-grow items-center justify-center">
          <Exp />
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
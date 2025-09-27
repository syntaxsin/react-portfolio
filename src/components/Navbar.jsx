import React, { useState, useEffect } from "react";
import { FaUserAlt  } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { PiCertificateBold } from "react-icons/pi";
import { LuBriefcaseConveyorBelt } from "react-icons/lu";
import { MdMore } from "react-icons/md";



const sections = ["hero", "about", "expskills", "projects", "certifications"];
const sectionLabels = {
  hero: <FaUserAlt size={30} />,
  about: <MdMore size={30} />,
  expskills: <LuBriefcaseConveyorBelt size={30} />,
  projects: <GrProjects size={30} />,
  certifications: <PiCertificateBold size={30} />,
};

export default function Navbar() {
  const activeSection = useScrollSpy();

  return (
    <nav className="inter fixed top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-15 py-5 rounded-full shadow-xl z-50 backdrop-blur-md">
      <ul className="flex gap-12 font-inter text-md">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`navbar-btn ${
                activeSection === id ? "navbar-btn-active" : ""
              }`}
            >
              {sectionLabels[id]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function useScrollSpy() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}

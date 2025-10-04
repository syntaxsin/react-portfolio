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

  // Dynamic navbar color and icon color
  const isAbout = activeSection === "about";
  const navBg = isAbout ? "text-black" : "bg-black text-white";

  // Render icons with color: black only for about, else default
  const getIcon = (id) => {
    const color = isAbout ? "#000" : undefined;
    switch (id) {
      case "hero":
        return <FaUserAlt size={30} color={color} />;
      case "about":
        return <MdMore size={30} color={color} />;
      case "expskills":
        return <LuBriefcaseConveyorBelt size={30} color={color} />;
      case "projects":
        return <GrProjects size={30} color={color} />;
      case "certifications":
        return <PiCertificateBold size={30} color={color} />;
      default:
        return null;
    }
  };

  return (
    <nav
      className={`inter fixed top-6 left-1/2 transform -translate-x-1/2 px-15 py-5 rounded-full shadow-xl z-50 backdrop-blur-md transition-colors duration-500 ${navBg}`}
      style={isAbout ? { backgroundColor: '#777777' } : {}}
    >
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
              {getIcon(id)}
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

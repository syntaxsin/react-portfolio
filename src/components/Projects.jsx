import React from "react";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "/src/utilities/animation.js";

import codeigniterLogo from "/src/img/codeigniter.png";

// Array to store project information
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS.",
    image: codeigniterLogo,
    link: "#",
  },
  {
    title: "E-commerce App",
    description:
      "A full-stack e-commerce application with user authentication and payment integration.",
    image: codeigniterLogo,
    link: "#",
  },
  {
    title: "Blog Platform",
    description: codeigniterLogo,
    image: codeigniterLogo,
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A productivity app to manage daily tasks and to-dos.",
    image: codeigniterLogo,
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="inter grid grid-cols-1 gap-12 px-4 md:px-12 py-16 max-w-screen-xl mx-auto scrollbar-hide">
      {/* Section Title */}
      <motion.h1
        variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-5xl font-semibold lg:text-5xl leading-tight mb-12 text-center uppercase"
      >
        <span className="bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h1>
      {/* <motion.p
                variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="text-gray-400 uppercase font-semibold text-justify px-2 sm:px-0"
            >
                Here are some of the projects I've worked on, showcasing my skills in web development and design. Each project reflects my commitment to creating interactive and user-friendly experiences.
            </motion.p> */}

      {/* Projects Grid */}
      <motion.div
        variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-black rounded-xl shadow-lg p-6 flex flex-col items-center justify-between"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4 text-center">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition"
            >
              View Project
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "/src/utilities/animation.js";

// Array to store project information
const projects = [
  {
    title: "FitQuest: Gamified Fitness App",
    description:
      "A personal portfolio website built with React and Tailwind CSS. It showcases my skills, experience, and projects in a clean, responsive layout. The site is fully mobile-friendly and easy to update.",
    link: "#",
  },
  {
    title: "CSGlobal Time (UI Redesign)",
    description:
      "A full-stack e-commerce application with user authentication and payment integration. Features include product management, secure checkout, and order tracking for both users and admins.",
    link: "#",
  },
  {
    title: "FEU Capstone Repository",
    description:
      "A modern blog platform where users can create, edit, and delete posts. It supports markdown, comments, and user profiles, making content management simple and intuitive.",
    link: "#",
  },
  {
    title: "Task Manager",
    description:
      "A productivity app to manage daily tasks and to-dos. Users can create, update, and organize tasks with deadlines, priorities, and reminders for efficient workflow.",
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
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={idx % 2 === 0 ? SlideRight(0.5) : SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative group bg-black rounded-xl shadow-lg p-20 flex flex-col items-center justify-center min-h-[300px] overflow-hidden"
          >
            <h2 className="text-2xl font-bold text-white mb-2 text-center z-10">
              {project.title}
            </h2>
            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 z-20">
              <p className="text-gray-200 mb-4 text-center">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
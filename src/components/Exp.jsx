import React from "react";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "/src/utilities/animation.js";
import relx from "/src/img/RELX.png";
import hsi from "/src/img/HSI_Logo.png";
import foundever from "/src/img/foundever.jpg";

// Experience Card Template Component
function ExperienceCard({ exp, reverse }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } justify-center items-center gap-8 w-full`}
    >
      {/* Company Logo */}
      <motion.div
        variants={reverse ? SlideLeft(0.4) : SlideRight(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center items-center lg:h-full"
      >
        <img
          src={exp.image}
          alt={exp.alt}
          className="w-32 h-32 sm:w-40 md:w-120 md:h-60 object-contain p-2 bg-transparent"
          style={{ background: "transparent" }}
        />
      </motion.div>
      {/* Experience Card */}
      <motion.div
        variants={reverse ? SlideRight(0.6) : SlideLeft(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 bg-black rounded-3xl text-white p-8 shadow-lg flex flex-col justify-center items-start max-w-2xl"
      >
        <h3 className="text-2xl font-bold tracking-wide mb-2">{exp.title}</h3>
        <p className="text-base font-medium text-indigo-300 mb-1">
          {exp.company}
        </p>
        <p className="text-sm text-gray-400 italic mb-4">{exp.date}</p>
        <p className="text-[15px] leading-relaxed text-gray-200">
          {exp.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

const experiences = [
  {
    title: "Web Developer Intern",
    company: "RELX Reed Elsevier PH",
    date: "May 2025 – September 2025",
    description:
      "Developed new CSGlobal Time, a Time-off Tracking system and is official tracking tool for RELX Reed Elsevier. Created dynamic report for the Web Dev Team's Sprint with user stories from Azure DevOps using Power BI.",
    image: relx,
    alt: "RELX logo",
  },
  {
    title: "UI/UX Design Intern",
    company: "Highly Succeed Inc.",
    date: "January 2025 – April 2025",
    description:
      "Designed intuitive and responsive user interfaces using Figma, focusing on clarity, accessibility, and user engagement. Created wireframes, mockups, and interactive prototypes to visualize user flows and validate design concepts.",
    image: hsi,
    alt: "HSI logo",
  },
  // {
  //   title: "Technical Support Representative",
  //   company: "Foundever - OJV",
  //   date: "October 2025 – Present",
  //   description:
  //     "Provide technical assistance and support for incoming queries and issues related to computer systems, software, and hardware. Diagnose and resolve technical hardware and software issues involving internet connectivity, printers, and other peripherals.",
  //   image: foundever,
  //   alt: "Foundever logo",
  // }
];

export default function Exp() {
  return (
    <section className="relative py-16 px-4 md:px-12 max-w-screen-xl mx-auto">
      <motion.h1
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white uppercase tracking-wide"
      >
        <span className="bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent">
          Experiences
        </span>
      </motion.h1>
      <div className="flex flex-col gap-16">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

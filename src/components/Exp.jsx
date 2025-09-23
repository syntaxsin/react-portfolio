import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { SlideRight, SlideLeft } from "/src/utilities/animation.js";
import relx from "/src/img/RELX.png";
import hsi from "/src/img/HSI_Logo.png";

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
];

export default function Exp() {
  return (
    <>
      <div className="inter flex flex-col gap-12 px-4 md:px-12 py-16 sm:py-10 max-w-screen-xl mx-auto">
        {experiences.map((exp, index) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full"
            >
              {/* Company Logo */}
              <motion.div
                variants={SlideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center items-center lg:h-full"
              >
                <img
                  src={exp.image}
                  alt={exp.alt}
                  className="w-full sm:max-w-sm md:max-w-md lg:max-w-xl object-contain"
                />
              </motion.div>
              {/* Experience Card */}
              <motion.div
                variants={SlideLeft(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex-1 bg-black rounded-3xl text-white p-4 shadow-lg text-center flex flex-col justify-center items-center"
              >
                <h3 className="text-2xl font-bold tracking-wide text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-base font-medium text-gray-300 mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-400 italic mb-4">{exp.date}</p>
                <p className="text-[15px] leading-relaxed text-gray-200 max-w-[90%]">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

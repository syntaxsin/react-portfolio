import React from "react";
import AboutImg from "/src/img/about.jpg";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "/src/utilities/animation.js";

export default function About() {
  return (
    <motion.div className="inter grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 md:px-12 py-16 max-w-screen-xl mx-auto">
      {/* Left Section: Image */}
      <motion.div
        variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex justify-center items-center lg:justify-start"
      >
        <img
          src={AboutImg}
          alt="Jerome Ecubin"
          className="rounded-full w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg border-2 border-gray-200 object-cover"
        />
      </motion.div>

      {/* Right Section: Text */}
      <motion.div
        variants={SlideLeft(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex justify-center lg:justify-start uppercase"
      >
        <div className="text-center lg:text-left space-y-6 w-full max-w-2xl">
          <motion.h1
            variants={SlideLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-semibold leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 uppercase font-semibold text-justify px-2 sm:px-0"
          >
            Hello, <span className="text-white">Marc Jerome Ecubin</span>, I'm a
            4th year graduating student of Bachelor of Science in Information
            Technology with specialization in Web and Mobile Application at{" "}
            <span className="text-white">FEU Institute of Technology.</span>
            <br />
            <br />
            As a student deeply passionate about web development, I aspire to
            build interactive and meaningful websites that not only function
            seamlessly but also resonate with users on a personal level.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

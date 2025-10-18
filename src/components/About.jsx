import React from "react";
import HeroImg from "/src/img/hero_img.jpg";
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
          src={HeroImg}
          alt="Jerome Ecubin"
          className="rounded-full w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md border-2 border-gray-200 object-cover"
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
            className="text-gray-200 uppercase font-semibold text-justify px-2 sm:px-0"
          >
            I'm a graduate of BSIT specializing in Web and Mobile Application
            from FEU Institute of Technology. While passionate about web
            development, I'm primarily focused on software engineering —
            building scalable, maintainable systems — and exploring data
            analytics to uncover insights through visualization and analysis. My
            goal is to blend intuitive user experiences with data-driven
            solutions.
          </motion.p>
          <motion.div
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
          >
            {["Experiences", "Tech Stack", "Projects"].map((label, i) => (
              <motion.button
                key={label}
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-black shadow-lg transition-all duration-300 text-xl"
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

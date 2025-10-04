import React from "react";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "/src/utilities/animation.js";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <motion.div className="inter flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-12 py-24 max-w-screen-xl mx-auto relative z-10">
        <motion.h1
          variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl font-semibold lg:text-6xl leading-tight text-center text-gray-900 dark:text-white mb-6"
        >
          Hello! I'm
          <span className="bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent">
            {" "}
            Marc Jerome Ecubin
          </span>
        </motion.h1>
        <motion.p
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-200 font-medium text-center mb-3"
        >
          Bachelor of Science in Information Technology - Web and Mobile
          Application
        </motion.p>
        <motion.p
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium text-center mb-8"
        >
          <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
            Software Engineering | Data Analyst | Web Development
          </span>
        </motion.p>
        <div className="flex flex-row gap-6 justify-center items-center mt-8 flex-wrap">
          <a
            href="https://github.com/syntaxsin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:scale-115 hover:bg-clip-text text-3xl transition"
            aria-label="GitHub"
          >
            <motion.span
              variants={SlideLeft(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: "inline-block" }}
            >
              <FaGithub />
            </motion.span>
          </a>
          <a
            href="https://www.linkedin.com/in/marc-jerome-ecubin-623503337/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:scale-115 hover:bg-clip-text text-3xl transition-all duration-300"
            aria-label="LinkedIn"
          >
            <motion.span
              variants={SlideLeft(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: "inline-block" }}
            >
              <FaLinkedin />
            </motion.span>
          </a>
          <a
            href="https://www.facebook.com/ecubinn16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:scale-115 text-3xl transition-all duration-300"
            aria-label="Facebook"
          >
            <motion.span
              variants={SlideLeft(1.0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: "inline-block" }}
            >
              <FaFacebook />
            </motion.span>
          </a>
          <a
            href="https://instagram.com/_mrcjerome"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:scale-115 hover:bg-clip-text text-3xl transition-all duration-300"
            aria-label="Instagram"
          >
            <motion.span
              variants={SlideLeft(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: "inline-block" }}
            >
              <FaInstagram />
            </motion.span>
          </a>
          {/* Animated Resume Button */}
          <motion.a
            variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="https://drive.google.com/file/d/10csIJielKLy-kGiEDGacC7WkcKmhiSSy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 text-xl"
            aria-label="Resume"
          >
            <FiDownload />
            Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

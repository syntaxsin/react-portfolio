import React from "react";
import HeroImg from "/src/img/hero_img.jpg";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "/src/utilities/animation.js";

export default function Hero() {
  return (
    <motion.div className="inter grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 md:px-12 py-16 max-w-screen-xl mx-auto">
      {/* Right Section: Image */}
      <motion.div
        variants={SlideLeft(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex justify-center items-center md:justify-center lg:justify-start"
      >
        <img
          src={HeroImg}
          alt="Jerome Ecubin"
          className="rounded-full w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg object-cover"
        />
      </motion.div>
      {/* Left Section: Text */}
      <motion.div
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="flex justify-center lg:justify-end uppercase"
      >
        <div className="text-center lg:text-end space-y-6 w-full max-w-2xl">
          {/* <motion.p
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 uppercase font-semibold"
          >
            Aspiring Web Developer
          </motion.p> */}
          <motion.h1
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl font-semibold lg:text-6xl leading-tight"
          >
            Hello! I'm
            <span className="bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Marc Jerome Ecubin
            </span>
          </motion.h1>

          <motion.p
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-300 uppercase font-semibold"
          >
            Welcome to my portfolio!
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

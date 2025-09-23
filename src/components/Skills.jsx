import React from "react";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "/src/utilities/animation.js";

const skills = {
  frameworks: [
    "/img/react.png",
    "/img/angular.png",
    "/img/dotnetcore.png",
    "/img/laravel.png",
  ],
  web: ["/img/html.png", "/img/css.png", "/img/js.png", "/img/php.png"],
  mobile: ["/img/kotlin.png", "/img/swift.png"],
  database: ["/img/firebase.png", "/img/mysql.png"],
  others: ["/img/powerbi.png", "/img/git.png", "/img/figma.png"],
};

export default function Skills() {
  return (
    <div className="inter flex flex-col gap-12 px-4 md:px-12 py-12 scrollbar-hide overflow-x-hidden sm:overflow-y-hidden">
      {/* Section Title */}
      <motion.h1
        variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-5xl font-semibold lg:text-3xl leading-tight mb-12 text-center uppercase"
      >
        <span className="bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent">
          Skills (Tech Stack)
        </span>
      </motion.h1>

      {/* Skill Categories */}
      {Object.entries(skills).map(([category, images], i) => (
        <motion.div
          key={category}
          variants={i % 2 === 0 ? SlideLeft(0.5) : SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold capitalize mb-6 text-gray-800 dark:text-white">
            {category}
          </h2>
          <div className="flex flex-wrap gap-25">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${category} ${index + 1}`}
                className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

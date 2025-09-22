import React, { useEffect } from "react";
import HeroImg from "/src/img/hero_img.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SlideRight, SlideLeft } from "/src/utilities/animation.js";

export default function Hero() {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controlsText.start("visible");
      controlsImage.start("visible");
    } else {
      controlsText.start("hidden");
      controlsImage.start("hidden");
    }
  }, [inView, controlsText, controlsImage]);

  return (
    <motion.div
      ref={ref}
      className="inter grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 md:px-12 py-16 max-w-screen-xl mx-auto"
    >
      {/* Left Section: Text */}
      <motion.div
        variants={SlideRight(0.3)}
        initial="hidden"
        animate={controlsText}
        className="flex justify-center lg:justify-start uppercase"
      >
        <div className="text-center lg:text-left space-y-6 w-full max-w-2xl">
          <motion.p
            variants={SlideRight(0.5)}
            animate={controlsText}
            className="text-gray-400 uppercase font-semibold"
          >
            Aspiring Web Developer
          </motion.p>

          <motion.h1
            variants={SlideRight(0.6)}
            animate={controlsText}
            className="text-5xl font-semibold lg:text-6xl leading-tight"
          >
            Hello! I'm
            <span className="bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent">
              {" "}
              Marc Jerome Ecubin
            </span>
          </motion.h1>

          <motion.p
            variants={SlideRight(0.5)}
            animate={controlsText}
            className="text-gray-300 uppercase font-semibold"
          >
            Welcome to my portfolio!
          </motion.p>
        </div>
      </motion.div>

      {/* Right Section: Image */}
      <motion.div
        variants={SlideLeft(0.6)}
        initial="hidden"
        animate={controlsImage}
        className="flex justify-center items-center"
      >
        <img
          src={HeroImg}
          alt="Jerome Ecubin"
          className="rounded-full w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

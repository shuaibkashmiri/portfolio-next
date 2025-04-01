import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="scroll-mt-24 border-b border-gray-800 pb-10 bg-gray-900"
    >
      {/* Section Title */}
      <h1 className="my-16 text-center text-5xl font-bold text-white">
        About <span className="text-blue-400">Me</span>
      </h1>

      {/* Content Section */}
      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <Image
              className="w-80 rounded-2xl shadow-lg lg:w-96"
              src="https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_960_720.jpg"
              alt="About"
              width={960}
              height={720}
              priority
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-6 max-w-xl text-center text-gray-400 lg:text-left">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

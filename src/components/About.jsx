import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="scroll-mt-24 border-b border-gray-800 pb-10 bg-gray-900 w-full overflow-x-hidden"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl md:text-5xl font-bold text-white"
      >
        About <span className="text-cyan-400">Me</span>
      </motion.h1>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl transform rotate-3"></div>
              <div className="relative">
                <Image
                  className="w-full rounded-2xl shadow-lg"
                  src="https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_960_720.jpg"
                  alt="About"
                  width={960}
                  height={720}
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                {ABOUT_TEXT}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-cyan-400 font-semibold mb-2">
                    Experience
                  </h3>
                  <p className="text-gray-300">3+ Years</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-cyan-400 font-semibold mb-2">Projects</h3>
                  <p className="text-gray-300">20+ Completed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useEffect } from "react";
import profilePic from "../assets/home_profile.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    document.title = "Shoaib Mushtaq Bhat | Full-Stack Web Developer";
  }, []);

  return (
    <div
      id="hero"
      className="relative h-screen bg-black overflow-hidden pt-20"
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 h-[calc(100vh-5rem)] flex items-center pb-32 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-4 lg:gap-8 w-full items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 lg:order-1 relative z-30"
          >
            <div className="space-y-6">
              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-500">I'm a</span>
                </h1>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white whitespace-nowrap">
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      2000,
                      "Mobile Developer",
                      2000,
                      "DevOps Engineer",
                      2000,
                      "Coding Instructor",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-gray-400 text-base md:text-lg max-w-md relative z-30 bg-black/70 backdrop-blur-md p-3 rounded-lg lg:bg-transparent lg:backdrop-blur-none lg:p-0">
                Building scalable web, mobile & desktop applications with expertise in DevOps and teaching code.
              </p>

              {/* About Me Button */}
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors duration-300 w-fit group relative z-30"
              >
                <FaPlay className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                <span className="font-medium">about me</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-start justify-center order-1 lg:order-2 lg:-mt-40 relative z-10"
          >
            <div className="relative w-full lg:w-[120%]">
              <Image
                src={profilePic}
                alt="Shoaib Mushtaq Bhat"
                width={1200}
                height={1400}
                className="w-full h-auto grayscale"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

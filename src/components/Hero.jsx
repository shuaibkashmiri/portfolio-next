import React, { useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/home_profile.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  useEffect(() => {
    document.title = "Shoaib Mushtaq Bhat | Full-Stack Web Developer";
  }, []);

  return (
    <div
      id="hero"
      className="scroll-mt-24 border-b border-gray-800 pb-10 bg-gray-900"
    >
      {/* Section Title */}
      <h1 className="my-16 text-center text-5xl font-bold text-white">
        <span className="text-white">Shoaib</span>{" "}
        <span className="text-cyan-400">Mushtaq</span>{" "}
        <span className="text-cyan-500">Bhat</span>
      </h1>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-xl text-cyan-400 font-medium mb-4">
                Hello, I'm
              </h2>
              <div className="text-xl md:text-2xl text-gray-300 h-[40px] mb-4">
                <TypeAnimation
                  sequence={[
                    "Full-Stack Web Developer",
                    2000,
                    "React.js Expert",
                    2000,
                    "Next.js Developer",
                    2000,
                    "Mobile App Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <div className="space-y-4 mb-6">
                <p className="text-gray-400 max-w-xl text-center lg:text-left">
                  I build exceptional and accessible digital experiences for the
                  web and mobile platforms.
                </p>
                <p className="text-gray-400 max-w-xl text-center lg:text-left">
                  Specializing in creating robust web applications with modern
                  technologies like React, Next.js, and Node.js. With expertise
                  in both frontend and backend development, I deliver complete
                  solutions that drive business growth.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="bg-cyan-500 text-gray-900 px-6 py-2.5 rounded-full text-base font-semibold hover:bg-cyan-600 transition duration-300"
                >
                  Hire Me
                </a>
                <a
                  href="#services"
                  className="border border-cyan-500 text-cyan-500 px-6 py-2.5 rounded-full text-base font-semibold hover:bg-cyan-500/10 transition duration-300"
                >
                  View Services
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center justify-center">
              <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]">
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-pulse"></div>
                <Image
                  src={profilePic}
                  alt="Shoaib Mushtaq Bhat"
                  width={300}
                  height={300}
                  className="rounded-full p-2 relative z-10"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

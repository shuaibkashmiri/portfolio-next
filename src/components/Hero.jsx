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
      className="scroll-mt-24 min-h-[75vh] flex items-center justify-center bg-gray-900 py-4 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-base md:text-xl text-cyan-400 font-medium mb-1 md:mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 whitespace-nowrap">
              <span className="text-white">Shoaib</span>{" "}
              <span className="text-cyan-400">Mushtaq</span>{" "}
              <span className="text-cyan-500">Bhat</span>
            </h1>
            <div className="text-base md:text-lg text-gray-300 h-[40px] md:h-[50px] mb-2 md:mb-3">
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
            <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
              <p className="text-xs md:text-sm text-gray-400 max-w-lg mx-auto md:mx-0">
                I build exceptional and accessible digital experiences for the
                web and mobile platforms.
              </p>
              <p className="text-xs md:text-sm text-gray-400 max-w-lg mx-auto md:mx-0">
                Specializing in creating robust web applications with modern
                technologies like React, Next.js, and Node.js. With expertise in
                both frontend and backend development, I deliver complete
                solutions that drive business growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4">
              <a
                href="#contact"
                className="bg-cyan-500 text-gray-900 px-3 md:px-6 py-1.5 md:py-2.5 rounded-full text-xs md:text-base font-semibold hover:bg-cyan-600 transition duration-300"
              >
                Hire Me
              </a>
              <a
                href="#services"
                className="border border-cyan-500 text-cyan-500 px-3 md:px-6 py-1.5 md:py-2.5 rounded-full text-xs md:text-base font-semibold hover:bg-cyan-500/10 transition duration-300"
              >
                View Services
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="flex items-center justify-center">
              <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]">
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

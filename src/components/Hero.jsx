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
      className="min-h-[90vh] flex items-center justify-center bg-gray-900 py-12 md:py-20"
    >
      <div className="container mx-auto pt-4 md:pt-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left md:w-1/2 pt-4 md:pt-12"
          >
            <h2 className="text-lg md:text-xl text-cyan-400 font-medium mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 whitespace-nowrap">
              <span className="text-white">Shoaib</span>{" "}
              <span className="text-cyan-400">Mushtaq</span>{" "}
              <span className="text-cyan-500">Bhat</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 h-[60px] md:h-[80px] mb-4">
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
            <div className="space-y-3 mb-8">
              <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
                I build exceptional and accessible digital experiences for the
                web and mobile platforms.
              </p>
              <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
                Specializing in creating robust web applications with modern
                technologies like React, Next.js, and Node.js. With expertise in
                both frontend and backend development, I deliver complete
                solutions that drive business growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="bg-cyan-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition duration-300"
              >
                Hire Me
              </a>
              <a
                href="#services"
                className="border border-cyan-500 text-cyan-500 px-6 py-3 rounded-full font-semibold hover:bg-cyan-500/10 transition duration-300"
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
            className="md:w-1/2 relative"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-pulse"></div>
              <Image
                src={profilePic}
                alt="Shoaib Mushtaq Bhat"
                width={400}
                height={400}
                className="rounded-full p-2 relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

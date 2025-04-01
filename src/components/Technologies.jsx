import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const technologies = [
    { icon: FaNodeJs, color: "text-green-500", name: "Node.js", duration: 2.5 },
    { icon: RiReactjsLine, color: "text-cyan-400", name: "React", duration: 3 },
    { icon: SiNextdotjs, color: "text-white", name: "Next.js", duration: 4 },
    {
      icon: TbBrandReactNative,
      color: "text-blue-400",
      name: "React Native",
      duration: 3.5,
    },
    {
      icon: SiTypescript,
      color: "text-blue-600",
      name: "TypeScript",
      duration: 4.5,
    },
    {
      icon: FaJsSquare,
      color: "text-yellow-400",
      name: "JavaScript",
      duration: 2,
    },
    { icon: SiMongodb, color: "text-green-500", name: "MongoDB", duration: 5 },
    {
      icon: SiPostgresql,
      color: "text-blue-400",
      name: "PostgreSQL",
      duration: 3.8,
    },
    { icon: FaHtml5, color: "text-orange-500", name: "HTML5", duration: 6 },
    { icon: FaCss3Alt, color: "text-blue-500", name: "CSS3", duration: 4 },
  ];

  return (
    <div
      id="technologies"
      className="scroll-mt-24 border-b border-gray-800 pb-10 bg-gray-900"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl md:text-5xl font-bold text-white"
      >
        Technologies
      </motion.h1>

      {/* Technologies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={iconVariants(tech.duration)}
                initial="initial"
                animate="animate"
                className="group relative bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-xl transform rotate-3"></div>
                    <div className="relative p-4 bg-gray-900 rounded-xl">
                      <Icon className={`text-4xl md:text-5xl ${tech.color}`} />
                    </div>
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;

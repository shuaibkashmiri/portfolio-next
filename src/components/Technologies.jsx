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
    { icon: RiReactjsLine, color: "text-purple-400", name: "React", duration: 3 },
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
      className="scroll-mt-24 bg-black"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl md:text-5xl font-bold text-white"
      >
        Technologies
      </motion.h1>

      {/* Technologies Grid */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-4 sm:grid-cols-5 gap-3 md:gap-4 justify-items-center"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={iconVariants(tech.duration)}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-3 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/30 w-full max-w-[110px]"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative p-2.5 sm:p-2 bg-black/50 rounded-lg">
                      <Icon className={`text-4xl sm:text-3xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
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

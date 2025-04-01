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
  const firstRow = [
    { icon: FaNodeJs, color: "text-green-500", duration: 2.5 },
    { icon: RiReactjsLine, color: "text-cyan-400", duration: 3 },
    { icon: SiNextdotjs, color: "text-white", duration: 4 },
    { icon: TbBrandReactNative, color: "text-blue-400", duration: 3.5 },
    { icon: SiTypescript, color: "text-blue-600", duration: 4.5 },
  ];

  const secondRow = [
    { icon: FaJsSquare, color: "text-yellow-400", duration: 2 },
    { icon: SiMongodb, color: "text-green-500", duration: 5 },
    { icon: SiPostgresql, color: "text-blue-400", duration: 3.8 },
    { icon: FaHtml5, color: "text-orange-500", duration: 6 },
    { icon: FaCss3Alt, color: "text-blue-500", duration: 4 },
  ];

  const renderTechRow = (technologies) => (
    <div className="grid grid-cols-5 gap-2 sm:gap-4 w-full justify-items-center">
      {technologies.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-gray-800 p-2 sm:p-6 bg-gray-900 shadow-lg w-full max-w-[80px] sm:max-w-[120px] aspect-square flex items-center justify-center"
          >
            <Icon
              className={`text-3xl sm:text-5xl md:text-7xl ${tech.color}`}
            />
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div
      id="technologies"
      className="scroll-mt-24 border-b border-gray-800 pb-10 bg-gray-900"
    >
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-8 sm:my-16 text-center text-4xl sm:text-5xl font-bold text-white"
      >
        Technologies
      </motion.h1>

      {/* Technologies Grid */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col gap-4 sm:gap-8 px-2 sm:px-4 max-w-7xl mx-auto"
      >
        {renderTechRow(firstRow)}
        {renderTechRow(secondRow)}
      </motion.div>
    </div>
  );
};

export default Technologies;

import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="scroll-mt-24 border-b border-gray-800 pb-10 bg-gray-900"
    >
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl font-bold text-white"
      >
        Projects
      </motion.h2>

      {/* Content Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Project Cards */}
        {PROJECTS.map((project, index) => (
          <div key={index} className="w-full sm:w-[340px] px-3">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg h-full"
            >
              {/* Project Image */}
              <div className="flex justify-center mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={120}
                  height={120}
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Project Details */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <h6 className="mb-2 text-lg font-semibold text-white">
                  {project.title}
                </h6>
                <p className="mb-3 text-sm text-gray-300">
                  {project.description}
                </p>

                {/* Project Technologies */}
                <div className="flex flex-wrap justify-center gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-indigo-600 text-white px-2 py-0.5 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

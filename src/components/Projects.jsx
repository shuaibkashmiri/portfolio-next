import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="scroll-mt-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-3xl p-8 md:p-12 mb-2"
        >
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Projects
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Explore my recent work and creative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-purple-500/30"
              >
                {/* Project Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-purple-600/20 text-purple-400 px-2 py-0.5 text-xs font-medium border border-purple-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

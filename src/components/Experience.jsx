"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch("/api/experiences", { cache: 'no-store' });
        const data = await res.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div className="bg-black -mt-32 lg:mt-0 relative z-20" id="experience">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="bg-black rounded-3xl p-6 md:p-12 mb-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 lg:mb-12 text-center lg:text-left">Experience</h2>
            <div className="text-center text-gray-400">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black -mt-32 lg:mt-0 relative z-20" id="experience">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-3xl p-6 md:p-12 mb-2"
        >
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-8 lg:mb-12 text-center lg:text-left"
          >
            Experience
          </motion.h2>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience._id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-transparent hidden md:block" />
                )}
                
                <div className="flex flex-col md:flex-row gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/30">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-start">
                    <div className="w-12 h-12 rounded-full bg-purple-600/20 border-2 border-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                          {experience.role}
                        </h3>
                        <p className="text-purple-400 font-medium text-sm md:text-base">
                          {experience.company}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block px-4 py-1.5 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium border border-purple-600/30">
                          {experience.year}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-xs font-medium border border-white/10 hover:border-purple-500/30 hover:text-purple-400 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;

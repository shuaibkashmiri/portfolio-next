import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../constants";
import {
  FaSchool,
  FaStore,
  FaHospital,
  FaGraduationCap,
  FaCashRegister,
  FaPlus,
} from "react-icons/fa";

const iconComponents = {
  FaSchool,
  FaStore,
  FaHospital,
  FaGraduationCap,
  FaCashRegister,
  FaPlus,
};

const Services = () => {
  return (
    <div
      id="services"
      className="scroll-mt-24 border-b border-gray-800 pb-10 bg-gray-900"
    >
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl md:text-5xl font-bold text-white"
      >
        Services <span className="text-cyan-400">Offered</span>
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 px-2 max-w-7xl mx-auto">
        {SERVICES.map((service, index) => {
          const IconComponent = iconComponents[service.icon];
          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-3 md:p-4 hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-500/10 flex flex-col"
            >
              <div className="flex items-center mb-2">
                <div className="p-1.5 md:p-2 bg-cyan-500/10 rounded-lg">
                  <IconComponent className="text-xl md:text-2xl text-cyan-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold ml-2 text-white line-clamp-1">
                  {service.title}
                </h3>
              </div>

              <p className="text-xs md:text-sm text-gray-400 mb-2 line-clamp-2">
                {service.description}
              </p>

              <div className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                  >
                    <svg
                      className="w-2.5 h-2.5 md:w-3 md:h-3 text-cyan-400 mr-1.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-xs md:text-sm line-clamp-1">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

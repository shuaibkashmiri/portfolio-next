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
        className="my-8 md:my-10 text-center text-3xl md:text-4xl font-bold text-white"
      >
        Services <span className="text-cyan-400">Offered</span>
      </motion.h2>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            return (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-500/10 flex flex-col"
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <IconComponent className="text-xl md:text-2xl text-cyan-400" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold ml-2 text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-400 mb-3">
                  {service.description}
                </p>

                <div className="space-y-1.5 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start text-gray-300"
                    >
                      <svg
                        className="w-3 h-3 text-cyan-400 mr-1.5 flex-shrink-0 mt-0.5"
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
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;

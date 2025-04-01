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
      <h1 className="my-16 text-center text-5xl font-bold text-white">
        Services <span className="text-cyan-400">Offered</span>
      </h1>

      {/* Content Section */}
      <div className="flex flex-wrap items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const IconComponent = iconComponents[service.icon];
              return (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:shadow-cyan-500/10 flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                      <IconComponent className="text-2xl text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold ml-3 text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-4">{service.description}</p>

                  <div className="space-y-2 mt-auto">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start text-gray-300"
                      >
                        <svg
                          className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5"
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
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

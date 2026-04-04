"use client";

import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../constants";
import {
  FaStore,
  FaHospital,
  FaGraduationCap,
  FaPlus,
  FaUserTie,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const iconComponents = {
  FaStore,
  FaHospital,
  FaGraduationCap,
  FaPlus,
  FaUserTie,
};

const ServiceCard = ({ service, index }) => {
  const IconComponent = iconComponents[service.icon];
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 flex flex-col border border-white/10 hover:border-purple-500/30 h-full"
    >
      <div className="mb-3">
        <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-500/30">
          <IconComponent className="text-2xl text-purple-400" />
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-gray-400 mb-3 text-xs leading-relaxed">{service.description}</p>

      <div className="space-y-1.5 mt-auto">
        {service.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="flex items-start text-gray-300 text-xs"
          >
            <div className="w-4 h-4 rounded-full bg-purple-600/20 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 border border-purple-500/30">
              <svg
                className="w-2.5 h-2.5 text-purple-400"
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
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div
      id="services"
      className="scroll-mt-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Services Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-3xl p-8 md:p-12 mb-2"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Services
          </h2>

          {/* Mobile Slider */}
          <div className="block sm:hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="services-swiper"
            >
              {SERVICES.map((service, index) => (
                <SwiperSlide key={index}>
                  <ServiceCard service={service} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling past hero section (approximately 100vh)
      if (window.pageYOffset > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919541697271", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="fixed bottom-20 right-4 z-50 bg-green-500 text-white p-2.5 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;

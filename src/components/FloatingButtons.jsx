"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import ContactModal from "./ContactModal";

export default function FloatingButtons() {
  const [isContactOpen, setIsContactOpen] = useState(false);
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

  // Listen for auto-open event from first visit
  useEffect(() => {
    const handleOpenModal = () => {
      setIsContactOpen(true);
    };
    
    window.addEventListener('openContactModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('openContactModal', handleOpenModal);
    };
  }, []);

  return (
    <>
      {/* Contact Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsContactOpen(true)}
            className="fixed bottom-36 right-4 z-50 bg-purple-600 text-white p-2.5 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
            aria-label="Contact Me"
          >
            <FaEnvelope className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}

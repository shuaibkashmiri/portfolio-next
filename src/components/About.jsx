"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();
        setSettings(data);
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };
    fetchSettings();
  }, []);

  const aboutImageSrc = settings?.aboutImage || "/aboutme.png";
  const yearsOfExperience = settings?.yearsOfExperience || "3+";
  const projectsCompleted = settings?.projectsCompleted || "20+";
  const aboutText = settings?.aboutText || "I am a dedicated and versatile full stack developer...";
  const fullName = settings?.fullName || "Shoaib Mushtaq Bhat";

  // Function to highlight name in about text
  const renderAboutText = () => {
    if (!aboutText || !fullName) return aboutText;
    
    const parts = aboutText.split(fullName);
    if (parts.length === 1) return aboutText; // Name not found in text
    
    return (
      <>
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="text-purple-500 font-semibold">{fullName}</span>
            )}
          </span>
        ))}
      </>
    );
  };

  const handleDownloadCV = () => {
    const cvPath = settings?.cvPath && settings.cvPath.trim() !== '' ? settings.cvPath : '/cv_shoaib.pdf';
    
    // Check if it's an external URL
    if (cvPath.startsWith('http://') || cvPath.startsWith('https://')) {
      window.open(cvPath, '_blank');
    } else {
      // Local file - trigger download
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = 'Shoaib_Mushtaq_Bhat_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div
      id="about"
      className="scroll-mt-24 bg-black w-full overflow-x-hidden relative lg:-mt-0"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-3xl p-8 md:p-12 overflow-hidden relative mb-2"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Section - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8 z-10"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center lg:text-left">
                About Me
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {renderAboutText()}
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Years of Experience */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="mb-1">
                    <span className="text-3xl font-bold text-purple-500">
                      {yearsOfExperience}
                    </span>
                    <span className="text-white font-semibold text-sm ml-1">
                      Years of
                    </span>
                  </div>
                  <p className="text-white font-semibold text-sm">
                    Experience
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    In the web design industry
                  </p>
                </motion.div>

                {/* Projects Completed */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="mb-1">
                    <span className="text-3xl font-bold text-purple-500">
                      {projectsCompleted}
                    </span>
                    <span className="text-white font-semibold text-sm ml-1">
                      Projects
                    </span>
                  </div>
                  <p className="text-white font-semibold text-sm">
                    Completed
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    For various clients & industries
                  </p>
                </motion.div>

                {/* Freelance Available */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4"
                >
                  <p className="text-white font-semibold text-sm mb-1">
                    Freelance
                  </p>
                  <p className="text-white font-semibold text-sm mb-1">
                    Available
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Open to new opportunities
                  </p>
                </motion.div>
              </div>

              {/* Download CV Button */}
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors duration-300 w-fit group"
              >
                <FaDownload className="text-sm group-hover:translate-y-1 transition-transform duration-300" />
                <span className="font-medium">Download CV</span>
              </motion.button>
            </motion.div>

            {/* Image Section - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative flex items-center justify-center"
            >
              <div className="relative w-full">
                <Image
                  src={aboutImageSrc}
                  alt="About Me"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

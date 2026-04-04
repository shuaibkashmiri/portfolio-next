"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const [settings, setSettings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Shoaib Mushtaq Bhat | Full-Stack Web Developer";
    
    // Fetch settings from API
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();
        setSettings(data);
      } catch (error) {
        console.error("Error fetching settings:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSettings();
  }, []);

  // Create animation sequence from settings
  const getAnimationSequence = () => {
    if (!settings?.heroAnimatedTexts || settings.heroAnimatedTexts.length === 0) {
      // Default fallback
      return [
        "Full Stack Developer",
        2000,
        "Mobile Developer",
        2000,
        "DevOps Engineer",
        2000,
        "Coding Instructor",
        2000,
      ];
    }
    
    // Create sequence from settings: [text1, delay, text2, delay, ...]
    const sequence = [];
    settings.heroAnimatedTexts.forEach(text => {
      sequence.push(text);
      sequence.push(2000); // 2 second delay
    });
    return sequence;
  };

  // Show loading or default content while fetching
  const heroTitle = settings?.heroTitle || "Full Stack Developer";
  const heroPrefixText = settings?.heroPrefixText || "I'm";
  const heroName = settings?.heroName || "Shoaib";
  const heroSubtitle = settings?.heroSubtitle || "Building scalable web, mobile & desktop applications with expertise in DevOps and teaching code.";
  
  // Handle profile image - use default if settings not loaded or if profileImage is empty/not a string
  let profileImageSrc = "/home_profile.png";
  let isExternalImage = false;
  
  if (settings?.profileImage && typeof settings.profileImage === 'string' && settings.profileImage.trim() !== '') {
    profileImageSrc = settings.profileImage;
    isExternalImage = settings.profileImage.startsWith('http://') || settings.profileImage.startsWith('https://');
  }

  return (
    <div
      id="hero"
      className="relative h-screen bg-black overflow-hidden pt-16 lg:pt-20"
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-8 lg:px-20 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] flex items-center pb-0 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-2 lg:gap-8 w-full items-center -mt-8 lg:mt-0">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 lg:order-1 relative z-30 px-4 lg:px-0"
          >
            <div className="space-y-4 lg:space-y-6">
              {/* Main Heading */}
              <div className="space-y-1 lg:space-y-2">
                {/* Prefix and Name in one line */}
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-500">{heroPrefixText} </span>
                  <span className="text-purple-500">{heroName}</span>
                </h1>
                
                {/* Animated Text on next line */}
                <div className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-white whitespace-nowrap overflow-visible relative z-50">
                  {!isLoading && (
                    <TypeAnimation
                      sequence={getAnimationSequence()}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      style={{ display: 'inline-block' }}
                    />
                  )}
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-md relative z-30 bg-black/70 backdrop-blur-md p-2 rounded-lg lg:bg-transparent lg:backdrop-blur-none hidden lg:block">
                {heroSubtitle}
              </p>

              {/* About Me Button */}
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-md transition-colors duration-300 w-fit group relative z-30 text-sm lg:text-base"
              >
                <FaPlay className="text-xs lg:text-sm group-hover:translate-x-1 transition-transform duration-300" />
                <span className="font-medium">About Me</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-start justify-center order-1 lg:order-2 lg:-mt-40 relative z-10 -mt-20"
          >
            <div className="relative w-full lg:w-[120%]">
              {isExternalImage ? (
                <img
                  src={profileImageSrc}
                  alt="Shoaib Mushtaq Bhat"
                  className="w-full h-auto grayscale"
                />
              ) : (
                <Image
                  src={profileImageSrc}
                  alt="Shoaib Mushtaq Bhat"
                  width={1200}
                  height={1400}
                  className="w-full h-auto grayscale"
                  priority
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

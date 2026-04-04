"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function LoadingScreen() {
  const [profileImage, setProfileImage] = useState("/home_profile.png");

  useEffect(() => {
    // Try to fetch settings for profile image
    const fetchProfileImage = async () => {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();
        if (data?.profileImage) {
          setProfileImage(data.profileImage);
        }
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };
    fetchProfileImage();
  }, []);

  const isExternalImage = profileImage.startsWith('http://') || profileImage.startsWith('https://');

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="text-center space-y-8">
        {/* Animated Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-32 h-32"
        >
          {/* Spinning Border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 border-r-purple-600"
          />
          
          {/* Profile Image */}
          <div className="absolute inset-2 rounded-full overflow-hidden bg-black">
            {isExternalImage ? (
              <motion.img
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover grayscale"
              />
            ) : (
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative w-full h-full"
              >
                <Image
                  src={profileImage}
                  alt="Profile"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Loading Text */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            <TypeAnimation
              sequence={[
                "Loading Portfolio...",
                1000,
                "Preparing Experience...",
                1000,
                "Almost Ready...",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h2>

          {/* Loading Bar */}
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-purple-600 to-transparent"
            />
          </div>
        </div>

        {/* Dots Animation */}
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-purple-600 rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

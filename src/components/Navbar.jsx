"use client";

import React, { useState, useEffect } from "react";
import logo from "../assets/logodf.png";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#hero", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#technologies", text: "Technologies" },
    { href: "#services", text: "Services" },
    { href: "#blogs", text: "Blogs" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 w-full overflow-x-hidden">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-black hover:text-black-500 p-3 rounded-full bg-white hover:bg-white/90 focus:outline-none transition-all duration-300"
          >
            {isOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 flex justify-end">
          <div className="py-6 space-y-2 bg-white/10 backdrop-blur-xl rounded-2xl mt-4 border border-white/20 w-auto min-w-[250px]">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-white hover:text-purple-400 hover:bg-white/10 block px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 mx-3"
              >
                {link.text}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

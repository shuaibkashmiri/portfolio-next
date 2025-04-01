"use client";

import React, { useState, useEffect } from "react";
import logo from "../assets/logodf.png";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

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
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Logo"
              width={144}
              height={144}
              className="w-32 md:w-36"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-64 opacity-100 bg-gray-900/95 backdrop-blur-sm"
            : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

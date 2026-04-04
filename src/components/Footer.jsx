"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Card */}
        <div className="bg-black rounded-3xl p-8 md:p-12 mb-2">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's work together
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-purple-400 text-lg font-semibold mb-4">
                Contact Me
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:shoaibmushtaqbhat@gmail.com"
                  className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaEnvelope className="mr-3" />
                  <span className="text-sm">bhatshoaibmushtaq@gmail.com</span>
                </a>
                <p className="flex items-center text-gray-400">
                  <FaPhone className="mr-3" />
                  <span className="text-sm">+91 9541697271</span>
                </p>
                <p className="flex items-center text-gray-400">
                  <FaMapMarkerAlt className="mr-3" />
                  <span className="text-sm">Srinagar, J&K, India</span>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-purple-400 text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                <Link
                  href="#about"
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  About
                </Link>
                <Link
                  href="#services"
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Services
                </Link>
                <Link
                  href="#technologies"
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Technologies
                </Link>
                <Link
                  href="#contact"
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-purple-400 text-lg font-semibold mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/shuaibkashmiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shoaib-mushtaq-bhat-9a2666190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/shuaib_kashmiri_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/mohammadshuaib786/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Shoaib Mushtaq Bhat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

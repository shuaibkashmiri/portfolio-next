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

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-cyan-400 text-lg font-semibold mb-4">
              Contact Me
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:shoaibmushtaqbhat@gmail.com"
                className="flex items-center justify-center md:justify-start text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaEnvelope className="mr-2" />
                bhatshoaibmushtaq@gmail.com
              </a>
              <p className="flex items-center justify-center md:justify-start text-gray-400">
                <FaPhone className="mr-2" />
                +91 9541697271
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-400">
                <FaMapMarkerAlt className="mr-2" />
                Srinagar, Jammu & Kashmir, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-cyan-400 text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                href="#about"
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="#services"
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="#technologies"
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Technologies
              </Link>
              <Link
                href="#contact"
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-cyan-400 text-lg font-semibold mb-4">
              Connect With Me
            </h3>
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="https://github.com/shuaibkashmiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shoaib-mushtaq-bhat-9a2666190/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/shuaib_kashmiri_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/mohammadshuaib786/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Shoaib Mushtaq Bhat. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

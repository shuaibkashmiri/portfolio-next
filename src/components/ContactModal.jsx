"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    if (isOpen) {
      // Fetch settings for contact info
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
    }
  }, [isOpen]);

  // Auto-open modal on first visit after 10 seconds
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisited) {
      const timer = setTimeout(() => {
        onClose(); // Close any existing modal first
        // Use a small delay to ensure proper state management
        setTimeout(() => {
          const openEvent = new CustomEvent('openContactModal');
          window.dispatchEvent(openEvent);
        }, 100);
        localStorage.setItem('hasVisitedBefore', 'true');
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 2000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full border border-white/10 max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Form */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Send a Message</h4>
                    {success ? (
                      <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-lg mb-4">
                        Message sent successfully! We'll get back to you soon.
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-3">
                        {error && (
                          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-3 py-2 rounded-lg text-sm">
                            {error}
                          </div>
                        )}
                        
                        <input
                          type="text"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm"
                          required
                        />
                        
                        <input
                          type="email"
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm"
                          required
                        />
                        
                        <input
                          type="tel"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm"
                          required
                        />
                        
                        <input
                          type="text"
                          placeholder="Company (Optional)"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm"
                        />
                        
                        <textarea
                          placeholder="Your Message *"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 h-24 resize-none text-sm"
                          required
                        />
                        
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 text-sm"
                        >
                          <FaPaperPlane />
                          {loading ? "Sending..." : "Send Message"}
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaEnvelope className="text-purple-400 text-xl" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Email</p>
                          <a
                            href={`mailto:${settings?.contactEmail || ''}`}
                            className="text-white hover:text-purple-400 transition-colors"
                          >
                            {settings?.contactEmail || 'Loading...'}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaPhone className="text-purple-400 text-xl" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Phone</p>
                          <a
                            href={`tel:${settings?.contactPhone || ''}`}
                            className="text-white hover:text-purple-400 transition-colors"
                          >
                            {settings?.contactPhone || 'Loading...'}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaMapMarkerAlt className="text-purple-400 text-xl" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Location</p>
                          <p className="text-white">
                            {settings?.location || 'Loading...'}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-gray-400 text-sm">
                          I'm available for freelance projects and collaborations. Feel free to reach out!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

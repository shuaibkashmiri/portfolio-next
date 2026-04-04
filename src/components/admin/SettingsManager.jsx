"use client";

import { useState, useEffect } from "react";
import { FaSave } from "react-icons/fa";
import Modal from "./Modal";

export default function SettingsManager() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, type: "success", title: "", message: "" });
  const [formData, setFormData] = useState({
    aboutText: "",
    fullName: "",
    heroName: "",
    heroTitle: "",
    heroPrefixText: "",
    heroSubtitle: "",
    heroAnimatedTexts: "",
    profileImage: "",
    aboutImage: "",
    logo: "",
    cvPath: "",
    contactEmail: "",
    contactPhone: "",
    location: "",
    githubUrl: "",
    linkedinUrl: "",
    instagramUrl: "",
    facebookUrl: "",
    yearsOfExperience: "",
    projectsCompleted: "",
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      // Convert array to comma-separated string for the form
      if (data.heroAnimatedTexts && Array.isArray(data.heroAnimatedTexts)) {
        data.heroAnimatedTexts = data.heroAnimatedTexts.join(", ");
      }
      setFormData(data);
    } catch (error) {
      console.error("Error:", error);
      setModal({
        isOpen: true,
        type: "error",
        title: "Error",
        message: "Failed to load settings"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      // Convert comma-separated string to array
      const dataToSave = { ...formData };
      if (typeof dataToSave.heroAnimatedTexts === 'string') {
        dataToSave.heroAnimatedTexts = dataToSave.heroAnimatedTexts
          .split(',')
          .map(text => text.trim())
          .filter(text => text.length > 0);
      }
      
      await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSave),
      });
      setModal({
        isOpen: true,
        type: "success",
        title: "Success",
        message: "Settings saved successfully!"
      });
    } catch (error) {
      console.error("Error:", error);
      setModal({
        isOpen: true,
        type: "error",
        title: "Error",
        message: "Failed to save settings"
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <>
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h2 className="text-xl font-bold text-white mb-6">Site Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Logo */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">Logo & CV</h3>
            <div>
              <input
                type="text"
                placeholder="Logo URL or Path (e.g., /logodf.png or https://example.com/logo.png)"
                value={formData.logo}
                onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <p className="text-gray-400 text-xs mt-2">
                Use local path (e.g., /logodf.png) or external URL (e.g., https://example.com/logo.png)
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="CV Path or URL (e.g., /cv_shoaib.pdf or https://example.com/cv.pdf)"
                value={formData.cvPath}
                onChange={(e) => setFormData({ ...formData, cvPath: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <p className="text-gray-400 text-xs mt-2">
                Use local path (e.g., /cv_shoaib.pdf) or external URL (e.g., https://drive.google.com/...)
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">Hero Section</h3>
            <div>
              <input
                type="text"
                placeholder="Your Name (e.g., Shoaib Mushtaq Bhat)"
                value={formData.heroName}
                onChange={(e) => setFormData({ ...formData, heroName: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <p className="text-gray-400 text-xs mt-2">
                Your full name that will be displayed prominently in the hero section
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Hero Prefix Text (e.g., I'm a, I am a, Welcome, etc.)"
                value={formData.heroPrefixText}
                onChange={(e) => setFormData({ ...formData, heroPrefixText: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <p className="text-gray-400 text-xs mt-2">
                This text appears before the animated text (e.g., "I'm a" Full Stack Developer)
              </p>
            </div>
            <input
              type="text"
              placeholder="Hero Title (e.g., Full Stack Developer)"
              value={formData.heroTitle}
              onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
            <textarea
              placeholder="Hero Subtitle"
              value={formData.heroSubtitle}
              onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 h-24"
            />
            <div>
              <textarea
                placeholder="Animated Texts (comma separated, e.g., Full Stack Developer, Mobile Developer, DevOps Engineer)"
                value={formData.heroAnimatedTexts}
                onChange={(e) => setFormData({ ...formData, heroAnimatedTexts: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 h-24"
              />
              <p className="text-gray-400 text-xs mt-2">
                Enter animated texts separated by commas. These will appear in the typing animation on the hero section.
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Profile Image URL or Path (e.g., /home_profile.png or https://...)"
                value={formData.profileImage}
                onChange={(e) => setFormData({ ...formData, profileImage: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <p className="text-gray-400 text-xs mt-2">
                Use local path (e.g., /home_profile.png) or external URL (e.g., https://example.com/image.jpg)
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">About Section</h3>
            <div>
              <input
                type="text"
                placeholder="Full Name (e.g., Shoaib Mushtaq Bhat)"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <p className="text-gray-400 text-xs mt-2">
                Your full name will be highlighted in purple in the About section description
              </p>
            </div>
            <textarea
              placeholder="About Text"
              value={formData.aboutText}
              onChange={(e) => setFormData({ ...formData, aboutText: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 h-32"
            />
            <div>
              <input
                type="text"
                placeholder="About Image URL or Path (e.g., /aboutme.png or https://...)"
                value={formData.aboutImage}
                onChange={(e) => setFormData({ ...formData, aboutImage: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <p className="text-gray-400 text-xs mt-2">
                Use local path (e.g., /aboutme.png) or external URL (e.g., https://example.com/about.jpg)
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Years of Experience (e.g., 3+)"
                value={formData.yearsOfExperience}
                onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                placeholder="Projects Completed (e.g., 20+)"
                value={formData.projectsCompleted}
                onChange={(e) => setFormData({ ...formData, projectsCompleted: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Contact Email"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                placeholder="Contact Phone"
                value={formData.contactPhone}
                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
            </div>
            <input
              type="text"
              placeholder="Location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">Social Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="url"
                placeholder="GitHub URL"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <input
                type="url"
                placeholder="LinkedIn URL"
                value={formData.linkedinUrl}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <input
                type="url"
                placeholder="Instagram URL"
                value={formData.instagramUrl}
                onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <input
                type="url"
                placeholder="Facebook URL"
                value={formData.facebookUrl}
                onChange={(e) => setFormData({ ...formData, facebookUrl: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            <FaSave />
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </form>
      </div>

      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </>
  );
}

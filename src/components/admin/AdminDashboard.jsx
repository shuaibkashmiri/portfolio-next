"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { FaSignOutAlt, FaBriefcase, FaProjectDiagram, FaServicestack, FaBlog, FaCode, FaCog, FaBars, FaTimes, FaHome, FaEnvelope } from "react-icons/fa";
import ExperienceManager from "./ExperienceManager";
import ProjectManager from "./ProjectManager";
import ServiceManager from "./ServiceManager";
import BlogManager from "./BlogManager";
import TechnologyManager from "./TechnologyManager";
import SettingsManager from "./SettingsManager";
import ContactManager from "./ContactManager";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("experiences");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: "experiences", label: "Experiences", icon: FaBriefcase },
    { id: "projects", label: "Projects", icon: FaProjectDiagram },
    { id: "services", label: "Services", icon: FaServicestack },
    { id: "blogs", label: "Blogs", icon: FaBlog },
    { id: "technologies", label: "Technologies", icon: FaCode },
    { id: "contacts", label: "Contacts", icon: FaEnvelope },
    { id: "settings", label: "Settings", icon: FaCog },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "experiences":
        return <ExperienceManager />;
      case "projects":
        return <ProjectManager />;
      case "services":
        return <ServiceManager />;
      case "blogs":
        return <BlogManager />;
      case "technologies":
        return <TechnologyManager />;
      case "contacts":
        return <ContactManager />;
      case "settings":
        return <SettingsManager />;
      default:
        return <ExperienceManager />;
    }
  };

  return (
    <div className="h-screen bg-black flex overflow-hidden">
      {/* Sidebar - Fixed */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white/5 backdrop-blur-sm border-r border-white/10 transform transition-transform duration-300 ease-in-out flex flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo/Header */}
        <div className="p-4 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-white">Admin Panel</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <FaTimes size={18} />
            </button>
          </div>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm"
          >
            <FaHome size={16} />
            <span>Back to Site</span>
          </Link>

          <div className="pt-2 border-t border-white/10 mt-2 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                    activeTab === item.id
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Logout Button - Fixed at bottom */}
        <div className="p-3 border-t border-white/10 flex-shrink-0">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm"
          >
            <FaSignOutAlt size={16} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content - Scrollable */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden lg:ml-0">
        {/* Top Bar - Fixed */}
        <header className="bg-white/5 backdrop-blur-sm border-b border-white/10 flex-shrink-0">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-gray-400 hover:text-white"
                >
                  <FaBars size={24} />
                </button>
                <h2 className="text-xl font-bold text-white capitalize">
                  {menuItems.find((item) => item.id === activeTab)?.label || "Dashboard"}
                </h2>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area - Scrollable */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

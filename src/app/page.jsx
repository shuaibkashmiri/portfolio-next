"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState({
    settings: false,
    experiences: false,
    projects: false,
    services: false,
    blogs: false,
    technologies: false,
  });

  useEffect(() => {
    // Fetch all data in parallel
    const fetchAllData = async () => {
      try {
        const [settings, experiences, projects, services, blogs, technologies] =
          await Promise.all([
            fetch("/api/settings").then((res) => res.json()),
            fetch("/api/experiences").then((res) => res.json()),
            fetch("/api/projects").then((res) => res.json()),
            fetch("/api/services").then((res) => res.json()),
            fetch("/api/blogs").then((res) => res.json()),
            fetch("/api/technologies").then((res) => res.json()),
          ]);

        // Mark all data as loaded
        setDataLoaded({
          settings: true,
          experiences: true,
          projects: true,
          services: true,
          blogs: true,
          technologies: true,
        });

        // Small delay for smooth transition
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error loading the data:", error);
        // Still hide loading screen even if there's an error
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchAllData();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className="w-full">
        <Hero />
        <Experience />
        <About />
        <Technologies />
        <Services />
        <Projects />
        <Blogs />
      </div>
    </>
  );
}

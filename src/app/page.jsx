"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Experience />
      <About />
      <Technologies />
      <Services />
      <Projects />
      <Blogs />
    </div>
  );
}

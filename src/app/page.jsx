"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="container mx-auto px-8">
      <Hero />
      <About />
      <Technologies />
      <Services />
    </div>
  );
}

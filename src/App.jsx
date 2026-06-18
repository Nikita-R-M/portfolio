import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hold preloader until watermark text water-fill finish and shutter exits
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. Preloader Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* 2. Portfolio Web Page Content */}
      <div className="relative min-h-screen w-full bg-[#0b0b0b] text-[#f4f4f4] overflow-x-hidden selection:bg-brand-red selection:text-white">
        
        {/* Sticky floating navigation bar */}
        <Navbar />

        {/* Hero Section with video-pose play reel */}
        <Hero />

        {/* About Section with Lanyard Badge card */}
        <About />

        {/* Process Timeline Section (How We Work) */}
        <Services />

        {/* Projects Grid Section */}
        <Projects />

        {/* Premium Dark Footer */}
        <Footer />
        
      </div>
    </>
  );
}

export default App;

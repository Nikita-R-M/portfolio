import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Define",
    desc: "We align on your product vision, define target audiences, map user flows, and compile key product requirements to construct a rock-solid project scope.",
    position: "right", // side of timeline on desktop
    rotation: "rotate-3",
    hoverRotation: "hover:rotate-1"
  },
  {
    num: "02",
    title: "Design",
    desc: "We craft premium UI/UX designs, map out wireframes, and refine visual directions to create an outstanding, interactive, award-worthy look and feel.",
    position: "left",
    rotation: "rotate-[-2.5deg]",
    hoverRotation: "hover:rotate-[-0.5deg]"
  },
  {
    num: "03",
    title: "Build",
    desc: "We write clean, production-ready React & Node.js code, establish robust database architectures, and integrate animations with pixel-perfect accuracy.",
    position: "right",
    rotation: "rotate-[2.5deg]",
    hoverRotation: "hover:rotate-[0.5deg]"
  },
  {
    num: "04",
    title: "Launch",
    desc: "We perform thorough end-to-end testing, optimize lighthouse speeds, configure servers, and deploy the application to ensure a flawless public launch.",
    position: "left",
    rotation: "rotate-[-3deg]",
    hoverRotation: "hover:rotate-[-1deg]"
  }
];

export default function Services() {
  const containerRef = useRef(null);

  // Monitor scroll progress to draw the S-curve line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 15,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="relative w-full py-28 bg-white text-black overflow-hidden grid-bg-light"
    >
      
      {/* Header Badge & Title */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-zinc-50 shadow-sm mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-black/70">
            How we work
          </span>
        </motion.div>

        <div className="relative inline-block">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6 text-zinc-900"
          >
            Let us show you how we drive your brand to new heights
          </motion.h2>

          {/* Sketchy Arrow Illustration (absolute next to title) */}
          <div className="absolute -right-12 -top-16 hidden lg:block w-16 h-16 pointer-events-none opacity-30 select-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" className="w-full h-full">
              <path d="M3,3 C10,3 15,10 12,18 M12,18 L7,16 M12,18 L15,13" />
            </svg>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          A methodical, design-driven approach to engineering digital solutions. We transform complex concepts into simple, high-performing web apps.
        </motion.p>
      </div>

      {/* Main Process Timeline Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 min-h-[1600px] flex flex-col items-center">
        
        {/* DESKTOP TIMELINE PATH (S-curve) */}
        <div className="absolute inset-0 w-full h-full hidden md:block z-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 2000"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            {/* Background dashed path */}
            <path
              d="M 720,0 C 1050,250 1050,450 720,600 C 390,750 390,950 720,1100 C 1050,1250 1050,1450 720,1600 C 390,1750 390,1900 720,2000"
              fill="none"
              stroke="#e5e5e5"
              strokeWidth="3.5"
              strokeDasharray="10 10"
            />
            {/* Animated drawing path */}
            <motion.path
              d="M 720,0 C 1050,250 1050,450 720,600 C 390,750 390,950 720,1100 C 1050,1250 1050,1450 720,1600 C 390,1750 390,1900 720,2000"
              fill="none"
              stroke="#FF2A2A"
              strokeWidth="4"
              strokeDasharray="10 10"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* MOBILE TIMELINE PATH (Straight line) */}
        <div className="absolute inset-0 w-full h-full block md:hidden z-0 pointer-events-none">
          <svg
            viewBox="0 0 200 2000"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M 100,0 L 100,2000"
              fill="none"
              stroke="#e5e5e5"
              strokeWidth="3.5"
              strokeDasharray="8 8"
            />
            <motion.path
              d="M 100,0 L 100,2000"
              fill="none"
              stroke="#FF2A2A"
              strokeWidth="4"
              strokeDasharray="8 8"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* Cards container */}
        <div className="relative w-full flex flex-col gap-24 md:gap-36 md:py-16">
          {steps.map((step, idx) => {
            const isRight = step.position === "right";
            
            return (
              <div 
                key={step.title}
                className={`flex w-full ${
                  isRight ? "justify-center md:justify-end" : "justify-center md:justify-start"
                }`}
              >
                
                {/* Luggage Tag / Conference Pass Card */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView="active"
                  viewport={{ once: false, amount: 0.4 }}
                  variants={{
                    active: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.8, type: "spring", stiffness: 60 }
                    }
                  }}
                  className="w-full max-w-[420px]"
                >
                  <motion.div
                    // Interactive style triggers when the card enters the screen (whileInView)
                    // It changes to red #FF2A2A, glow shadow, white text
                    variants={{
                      active: {
                        backgroundColor: "#FF2A2A",
                        color: "#ffffff",
                        boxShadow: "0px 30px 60px rgba(255, 42, 42, 0.35)",
                        borderColor: "transparent",
                      }
                    }}
                    initial={{
                      backgroundColor: "#ffffff",
                      color: "#18181b",
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.04)",
                      borderColor: "rgba(0,0,0,0.08)",
                    }}
                    transition={{ duration: 0.4 }}
                    className={`relative p-8 md:p-10 rounded-[2rem] border ${step.rotation} ${step.hoverRotation} transition-transform duration-300 cursor-default select-none flex flex-col`}
                  >
                    {/* Hole Punch detail */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-zinc-100 border border-zinc-200/50 shadow-inner flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    </div>

                    {/* Active Background Overlay (to match "inner content receives darker red overlay") */}
                    <div className="absolute inset-0 rounded-[2rem] bg-black/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 flex flex-col">
                      {/* Step Number in Serif Italic */}
                      <span className="font-serif-italic text-5xl md:text-6xl italic opacity-30 font-bold mb-4">
                        {step.num}
                      </span>
                      
                      {/* Title */}
                      <h3 className="font-heading font-extrabold text-2xl md:text-3xl tracking-tight mb-4">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="font-sans text-sm md:text-[15px] leading-relaxed font-light opacity-90">
                        {step.desc}
                      </p>
                    </div>

                  </motion.div>
                </motion.div>
                
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom handwritten signature text */}
      <div className="mt-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block rotate-[-2deg]"
        >
          <span className="font-serif-italic italic text-4xl sm:text-5xl text-brand-red font-bold">
            Ready to be delivered!
          </span>
          {/* Handwritten accent arrow SVG */}
          <div className="w-12 h-6 mx-auto mt-2 text-brand-red opacity-80">
            <svg viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2,8 C12,18 28,18 38,10" />
              <path d="M30,12 L38,10 L34,4" />
            </svg>
          </div>
        </motion.div>
      </div>

    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full py-28 md:py-36 bg-brand-red text-white overflow-hidden">
      
      {/* Background Star Decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Pulsing Sparkle Star 1 */}
        <div className="absolute top-16 left-[10%] w-8 h-8 pulse-slow-star">
          <svg viewBox="0 0 24 24" fill="black" className="w-full h-full">
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
          </svg>
        </div>
        {/* Sparkle Star 2 */}
        <div className="absolute bottom-24 left-[45%] w-6 h-6 pulse-slow-star" style={{ animationDelay: "2s" }}>
          <svg viewBox="0 0 24 24" fill="black" className="w-full h-full">
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
          </svg>
        </div>
        {/* Sparkle Star 3 */}
        <div className="absolute top-32 right-[12%] w-10 h-10 pulse-slow-star" style={{ animationDelay: "4s" }}>
          <svg viewBox="0 0 24 24" fill="black" className="w-full h-full">
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Hanging ID Badge */}
        <div className="lg:col-span-5 flex flex-col items-center relative">
          
          {/* Lanyard Strap */}
          <div className="absolute -top-36 left-1/2 transform -translate-x-1/2 w-8 h-40 pointer-events-none z-10 flex flex-col items-center">
            {/* Fabric strap line */}
            <div className="w-[12px] h-32 bg-zinc-900 shadow-md rounded-b-sm border-x border-zinc-800" />
            {/* Metal Ring and Clip */}
            <div className="w-6 h-6 rounded-full border-[3.5px] border-zinc-500 bg-zinc-700 -mt-1 shadow-md" />
            <div className="w-4 h-6 bg-zinc-600 rounded-sm shadow border-t border-zinc-500 -mt-0.5 flex items-center justify-center">
              <div className="w-1.5 h-3 bg-zinc-800 rounded-full" />
            </div>
          </div>

          {/* ID Pass Card */}
          <motion.div
            initial={{ y: 80, rotate: 0, opacity: 0 }}
            whileInView={{ y: 0, rotate: -3, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ rotate: 1, scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="mt-16 w-full max-w-[320px] bg-[#1a1a1a] rounded-[24px] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] p-6 relative flex flex-col items-center text-center cursor-pointer group"
          >
            {/* Hologram Overlay element */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-400 to-yellow-300 opacity-60 mix-blend-screen animate-pulse filter blur-[1px] border border-white/20" />
            
            {/* Slot Punch */}
            <div className="w-10 h-3.5 bg-black/90 rounded-full border border-white/5 shadow-inner -mt-1 mb-6" />

            {/* Badge Header */}
            <span className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase mb-1">
              DEVELOPER CONFERENCE PASS
            </span>
            <span className="font-heading font-black text-sm text-brand-red tracking-wider mb-5">
              Nikita R // CORE
            </span>

            {/* Profile Picture */}
            <div className="w-44 h-44 rounded-2xl overflow-hidden border-2 border-white/10 shadow-inner bg-zinc-800 mb-5 relative">
              <img 
                src="/image_2.jpg" 
                alt="Nikita R. Portrait" 
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-all duration-500 pointer-events-none" />
            </div>

            {/* Details */}
            <span className="font-heading font-black text-2xl text-white tracking-tight uppercase">
              Nikita R
            </span>
            <span className="font-mono text-[11px] text-brand-red tracking-widest uppercase mt-0.5 mb-5 font-bold">
              FULL STACK ENGINEER
            </span>

            {/* Barcode Mock */}
            <div className="w-full h-10 bg-white/5 rounded border border-white/5 flex items-center justify-between px-4 py-2 font-mono text-[10px] text-white/55">
              <div className="flex gap-[2px] h-full items-center">
                <div className="w-[1px] h-full bg-white/70" />
                <div className="w-[3px] h-full bg-white/70" />
                <div className="w-[1px] h-full bg-white/70" />
                <div className="w-[2px] h-full bg-white/70" />
                <div className="w-[1px] h-full bg-white/70" />
                <div className="w-[4px] h-full bg-white/70" />
                <div className="w-[1px] h-full bg-white/70" />
                <div className="w-[2px] h-full bg-white/70" />
                <div className="w-[1px] h-full bg-white/70" />
                <div className="w-[3px] h-full bg-white/70" />
              </div>
              <span className="font-bold tracking-widest text-[9px]">ID: 0618-2026</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Copywriting and Skills */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-extrabold text-6xl sm:text-8xl text-black leading-none mb-6">
              Hello!
            </h2>
            
            <p className="font-sans text-white text-lg sm:text-xl font-light leading-relaxed mb-6">
              I'm <strong className="font-black text-black">Nikita R</strong>, a dedicated Full Stack Developer with a passion for designing elegant interfaces and building high-performance web systems. With deep expertise in frontend technologies like React and Tailwind CSS, and scalable backend configurations powered by Node.js and MongoDB, I craft digital products that balance modern aesthetics with robust functionality.
            </p>

            <p className="font-sans text-white/75 text-base sm:text-lg font-light leading-relaxed mb-12">
              Every pixel and query is built with scalability and responsiveness in mind. I believe in clean code, seamless animations, and user-centric architecture that helps brands grow and perform at their best.
            </p>

            {/* Skill Logos Section */}
            <div className="border-t border-white/10 pt-8">
              <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase block mb-6 font-bold">
                CORE TECHNOLOGIES
              </span>
              
              <div className="flex items-center gap-8 md:gap-12">
                {/* React Logo */}
                <motion.div
                  whileHover={{ scale: 1.15, y: -5 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.3 }
                  }}
                  className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center cursor-pointer"
                  title="React.js"
                >
                  <svg className="w-full h-full fill-none stroke-black stroke-[1.5] drop-shadow-xl" viewBox="-11.5 -10.23174 23 20.46348">
                    <circle cx="0" cy="0" r="2.05" fill="black" />
                    <g>
                      <ellipse rx="11" ry="4.2" />
                      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                  </svg>
                </motion.div>

                {/* Node.js Logo */}
                <motion.div
                  whileHover={{ scale: 1.15, y: -5 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    scale: { duration: 0.3 }
                  }}
                  className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center cursor-pointer"
                  title="Node.js"
                >
                  <svg className="w-full h-full fill-none stroke-black stroke-[1.5] drop-shadow-xl" viewBox="0 0 24 24">
                    <path fill="black" d="M12 2L3 7v10l9 5 9-5V7L12 2zm-1 14.5v-5H9v5H7.5v-6.5H9v.7c.4-.5 1-.8 1.8-.8.9 0 1.7.5 1.7 1.6v5H11zm5.5-2.2c0 1.3-1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3V11c0-1.3 1-2.3 2.3-2.3 1.3 0 2.3 1 2.3 2.3v3.3zm-1.5-3.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v3.3c0 .5.4.9.9.9s.9-.4.9-.9V11z" />
                  </svg>
                </motion.div>

                {/* MongoDB Logo */}
                <motion.div
                  whileHover={{ scale: 1.15, y: -5 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.0 },
                    scale: { duration: 0.3 }
                  }}
                  className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center cursor-pointer"
                  title="MongoDB"
                >
                  <svg className="w-full h-full fill-none stroke-black stroke-[1.5] drop-shadow-xl" viewBox="0 0 24 24">
                    <path fill="black" d="M12 2C8 6 6 10 6 13c0 3.3 2.7 6 6 6s6-2.7 6-6c0-3-2-7-6-11zm0 14.5c-1.4 0-2.5-1.1-2.5-2.5 0-2.3 2.5-5.5 2.5-5.5s2.5 3.2 2.5 5.5c0 1.4-1.1 2.5-2.5 2.5z" />
                  </svg>
                </motion.div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Ripped/Torn Paper Edge SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full z-20 translate-y-[2px]">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-12 md:h-16 fill-white pointer-events-none"
          preserveAspectRatio="none"
        >
          <path d="M0,30 Q30,22 60,32 T120,28 T180,34 T240,25 T300,35 T360,26 T420,34 T480,28 T540,33 T600,24 T660,36 T720,27 T780,33 T840,26 T900,35 T960,25 T1020,33 T1080,28 T1140,34 T1200,26 T1260,32 T1320,27 T1380,34 T1440,29 L1440,60 L0,60 Z" />
        </svg>
      </div>

    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-[#111111] text-[#F4F4F4] pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between min-h-[50vh]">
        
        {/* 1. Top Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16 border-b border-white/5">
          
          {/* Left Column: Services */}
          <div className="flex flex-col text-left">
            <span className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase mb-4 font-bold">
              SERVICES
            </span>
            <ul className="font-mono text-xs text-[#D4D4D4] space-y-3 uppercase tracking-wider">
              <li>Cinematic Production</li>
              <li>Motion Graphics</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Center Column: Experience */}
          {/* Center Column: Projects */}
          <div className="flex flex-col text-left">
            <span className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase mb-4 font-bold">
              PROJECTS
            </span>
            <p className="font-sans text-lg text-white font-light mb-3">
              Featured Case Studies
            </p>
            <a 
              href="#projects" 
              className="font-mono text-xs text-[#D4D4D4] hover:text-white uppercase tracking-wider underline underline-offset-4 transition-colors duration-300 w-fit"
            >
              View Projects
            </a>
          </div>

          {/* Right Column: Availability */}
          <div className="flex flex-col text-left md:text-right md:items-end">
            <span className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase mb-4 font-bold">
              STATUS
            </span>
            <p className="font-sans text-lg text-white font-light mb-2">
              Available Worldwide
            </p>
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
              © {new Date().getFullYear()} / Nikita R
            </span>
          </div>

        </div>

        {/* 2. Center Hero Branding: Giant Phone Number Link */}
        <div className="py-20 md:py-24 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-center select-none"
          >
            <a href="tel:6363154526" className="inline-block hover:scale-[1.02] transition-transform duration-300">
              <h2 className="font-heading font-black text-[10vw] sm:text-[12vw] leading-none text-[#F4F4F4]/5 tracking-tighter hover:text-white transition-colors duration-500 cursor-pointer">
                6363154526
              </h2>
            </a>
          </motion.div>
        </div>

        {/* 3. Bottom Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-8 border-t border-white/5">
          
          {/* Bottom Left: Copyright */}
          <div className="font-mono text-[11px] text-white/40 text-left">
            <p>© {new Date().getFullYear()} Nikita R. All rights reserved.</p>
            <p className="mt-1">Built with React, Tailwind CSS, & Framer Motion</p>
          </div>

          {/* Bottom Center: Email */}
          <div className="text-left md:text-center">
            <a 
              href="mailto:nikitarmalkhedkar@gmail.com" 
              className="font-mono text-sm sm:text-base text-[#D4D4D4] hover:text-white tracking-wider underline underline-offset-8 transition-colors duration-300"
            >
              nikitarmalkhedkar@gmail.com
            </a>
          </div>

          {/* Bottom Right: Privacy Policy */}
          <div className="font-mono text-[11px] text-white/40 text-left md:text-right">
            <a href="#privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 1.0, ease: [0.86, 0, 0.07, 1], delay: 0.2 }
      }}
      className="fixed inset-0 bg-brand-red z-[100000] flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background luxury pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      <motion.div 
        exit={{ 
          scale: 0.85, 
          opacity: 0, 
          transition: { duration: 0.7, ease: [0.86, 0, 0.07, 1] } 
        }}
        className="relative flex items-center justify-center"
      >
        {/* Background text: dark, semi-transparent */}
        <div className="text-black/15 select-none font-heading font-black text-6xl sm:text-7xl md:text-9xl tracking-tighter">
          Nikita R
        </div>
        
        {/* Foreground text: animated white water-fill */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white select-none font-heading font-black text-6xl sm:text-7xl md:text-9xl tracking-tighter"
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        >
          Nikita R
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

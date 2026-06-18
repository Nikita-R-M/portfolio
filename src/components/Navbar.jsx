import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-black/70 backdrop-blur-lg border-b border-white/5 shadow-2xl" 
            : "py-7 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-1 group">
            <span className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight">
              Nikita R
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block transform group-hover:scale-130 transition-transform duration-300" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group py-2 font-sans font-medium text-white/70 hover:text-white transition-colors duration-300 text-[15px] tracking-wide"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-350 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative px-6 py-2.5 rounded-full font-sans font-semibold text-white text-[14px] tracking-wider border border-white/10 overflow-hidden group inline-block"
            >
              {/* Blur Glass Overlay */}
              <span className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-white/15 transition-all duration-300" />
              {/* Glow accent */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial-gradient(circle_at_center,rgba(255,42,42,0.25)_0%,transparent_70%) pointer-events-none" />
              <span className="relative z-10">Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/95 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide-Down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }}
            className="fixed inset-0 w-full h-screen bg-brand-red z-40 flex flex-col justify-center px-8 sm:px-16 md:hidden"
          >
            {/* Background design accents */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
            
            <div className="flex flex-col gap-6 text-left">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading font-black text-4xl sm:text-5xl text-black hover:text-white transition-colors duration-300 tracking-tight"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-4 rounded-full border border-black/30 bg-black text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-sans font-bold text-lg"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

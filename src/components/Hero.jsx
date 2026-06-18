import React, { useState, useEffect, useRef } from "react";
import image2 from "../assets/image_2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ArrowDown } from "lucide-react";

const introductionText = [
  { text: "Hi, I'm Nikita R. I'm a Full Stack Developer passionate about creating modern web applications and digital experiences.", start: 0, end: 8 },
  { text: "I enjoy turning ideas into real products using technologies like HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js, and MongoDB.", start: 8, end: 16 },
  { text: "My journey in development started with curiosity, and over time it grew into a passion for building clean, responsive, and user-friendly applications.", start: 16, end: 26 },
  { text: "I love designing beautiful interfaces, developing scalable backend systems, and creating seamless user experiences.", start: 26, end: 36 },
  { text: "I'm constantly learning new technologies, improving my problem-solving skills, and working on exciting projects that challenge me to grow as a developer.", start: 36, end: 48 },
  { text: "My goal is to build innovative products that make a meaningful impact while continuing to evolve as a software engineer.", start: 48, end: 54 },
  { text: "Thank you for visiting my portfolio. I'm excited to connect, collaborate, and create something amazing together.", start: 54, end: 60 }
];

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const intervalRef = useRef(null);
  const speechUtteranceRef = useRef(null);

  // Sync animation time and subtitles
  useEffect(() => {
    if (isPlaying) {
      const startTime = Date.now() - time * 1000;
      intervalRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        if (elapsed >= 60) {
          setIsPlaying(false);
          setTime(0);
          setCurrentSubtitle("");
          if (window.speechSynthesis) window.speechSynthesis.cancel();
        } else {
          setTime(elapsed);
          
          // Find subtitle
          const sub = introductionText.find(s => elapsed >= s.start && elapsed < s.end);
          setCurrentSubtitle(sub ? sub.text : "");
        }
      }, 100);

      // Start text to speech narration
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel(); // Reset any ongoing speeches
        const fullSpeechText = introductionText.map(s => s.text).join(" ");
        // To prevent speech synthesis starting from scratch if toggled, we speak the current phrase or the full speech
        const utterance = new SpeechSynthesisUtterance(fullSpeechText);
        utterance.rate = 1.0;
        utterance.pitch = 1.05;
        // Select a natural female or male voice if possible
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang.startsWith("en") && (v.name.includes("Google") || v.name.includes("Natural")));
        if (preferredVoice) utterance.voice = preferredVoice;

        utterance.onend = () => {
          setIsPlaying(false);
          setTime(0);
          setCurrentSubtitle("");
        };
        speechUtteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. Full-Screen Simulated Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        
        {/* Sole Background Image: Pose 2 */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${image2})`,
            opacity: 1
          }}
          // Subtle organic breathing animation
          animate={{
            y: [0, -3, 0],
            scale: [1.01, 1.03, 1.01]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />

        {/* Black Vignette Overlay for readability */}
        <div className={`absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 md:to-transparent transition-opacity duration-700 ${isPlaying ? "opacity-75" : "opacity-85"}`} />
      </div>

      {/* 2. Content Layout Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full pt-20">
        
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-center text-left max-w-2xl pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-brand-red text-xs sm:text-sm uppercase tracking-widest block mb-4 font-bold">
              PORTFOLIO OF Nikita R
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tighter text-white mb-6">
              Hi, I'm a <br />
              <span className="text-stroke-white select-none">Full Stack Developer</span>
            </h1>
            
            <p className="font-sans text-white/70 text-base sm:text-lg mb-8 leading-relaxed font-light">
              Crafting premium digital experiences using React, Next.js, Node.js, and modern tech stacks. Focused on building high-performance, responsive, and scalable applications with beautifu[...]
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-white text-black font-sans font-bold text-sm tracking-wider rounded-full shadow-lg hover:scale-105 transition-all duration-300 inline-block"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full font-sans font-bold text-sm tracking-wider border border-white/20 glass-panel hover:bg-white/10 transition-all duration-300 inline-block text-w[...]
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Play Reel Button */}
        <div className="flex-1 flex flex-col items-center justify-center mt-12 md:mt-0 md:pl-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="flex flex-col items-center"
          >
            <button
              onClick={togglePlay}
              className="group relative w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center border border-white/15 bg-black/45 backdrop-blur-md shadow-2xl transition-all durat[...]
            >
              {/* Red Glow ring on hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 border border-brand-red/40 shadow-[0_0_25px_rgba(255,42,42,0.4)]" />
              
              {/* Spinning border */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke={isPlaying ? "#FF2A2A" : "rgba(255,255,255,0.1)"}
                  strokeWidth="1.5"
                  strokeDasharray={isPlaying ? "301.6" : "0"}
                  strokeDashoffset={isPlaying ? 301.6 - (301.6 * time) / 60 : "0"}
                  className="transition-all duration-100 ease-linear"
                />
              </svg>

              {isPlaying ? (
                <Pause className="w-8 h-8 md:w-10 md:h-10 text-white fill-white group-hover:text-brand-red group-hover:fill-brand-red transition-colors duration-300" />
              ) : (
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white translate-x-1 group-hover:text-brand-red group-hover:fill-brand-red transition-colors duration-300" />
              )}
            </button>

            <span className="mt-4 font-mono font-bold text-xs text-white/50 tracking-widest uppercase select-none">
              {isPlaying ? "PAUSE REEL" : "PLAY REEL"}
            </span>
          </motion.div>
        </div>

      </div>

      {/* 3. Subtitles Overlay (Displays during Playback) */}
      <AnimatePresence>
        {isPlaying && currentSubtitle && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-12 md:bottom-20 z-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-2xl px-6 py-3.5 rounded-2xl glass-panel-dark text-center border border-white/10"
          >
            <p className="font-sans font-light text-sm sm:text-base text-white/95 leading-relaxed">
              {currentSubtitle}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Scroll Indicator (Desktop only) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block select-none">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
          <span className="font-mono text-[10px] tracking-widest uppercase">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </div>

    </section>
  );
}

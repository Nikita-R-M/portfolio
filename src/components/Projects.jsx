import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projectsList = [
  {
    title: "Aura SaaS Platform",
    category: "Full Stack Development",
    desc: "A collaborative workspace and analytics tool for digital teams. Features real-time sockets, dynamic dashboard modules, and custom data visualization.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Nova eCommerce Studio",
    category: "Frontend Architecture",
    desc: "A headless editorial shopping experience featuring dynamic checkout flows, instant search indices, and WebGL image transit animations.",
    tech: ["React.js", "GraphQL", "Tailwind CSS", "Stripe API"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Synapse Web Workspace",
    category: "Real-time Systems",
    desc: "A real-time workspace application that enables team chat, board updates, and document sharing using low-latency WebSockets.",
    tech: ["React.js", "Express", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-28 bg-[#0b0b0b] text-white overflow-hidden border-t border-white/5">
      
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="text-left max-w-xl">
            <span className="font-mono text-[10px] text-brand-red tracking-[0.2em] uppercase mb-4 block font-bold">
              PORTFOLIO PROJECTS
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none mb-6">
              Selected Works
            </h2>
            <p className="font-sans text-white/60 text-base sm:text-lg font-light leading-relaxed">
              A curated showcase of recent full-stack applications, highlighting responsive interfaces, clean database schemas, and clean code.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0">
            <span className="font-serif-italic italic text-2xl text-white/50 block">
              Always building, always learning.
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col rounded-3xl bg-[#141414] border border-white/5 hover:border-white/10 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Image Frame */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Floating Category Tag */}
                <span className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white/80">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-8 flex flex-col flex-grow text-left">
                <h3 className="font-heading font-bold text-2xl text-white mb-3 group-hover:text-brand-red transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="font-sans text-[#D4D4D4] text-[14px] leading-relaxed font-light mb-6 flex-grow">
                  {project.desc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag}
                      className="font-mono text-[9px] text-[#A4A4A4] bg-white/5 border border-white/5 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-white hover:text-brand-red transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-white/50 hover:text-white transition-colors duration-300"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}

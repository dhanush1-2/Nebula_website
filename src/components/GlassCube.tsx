"use client";

import { motion } from "framer-motion";

export default function GlassCube() {
  return (
    <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center w-64 h-64 z-10 pointer-events-auto group perspective-1000">
      
      {/* Container for 3D rotation */}
      <motion.div 
        className="relative w-32 h-32 transform-style-3d group-hover:scale-110 transition-transform duration-700"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Core */}
        <div className="absolute inset-0 m-auto w-8 h-8 bg-cobalt rounded-full blur-md opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
        <div className="absolute inset-0 m-auto w-6 h-6 bg-white rounded-full group-hover:shadow-[0_0_20px_#2E5BFF] transition-shadow duration-500"></div>

        {/* Cube Faces */}
        <div className="cube-face front bg-white/10 border-2 border-cobalt/20 backdrop-blur-sm"></div>
        <div className="cube-face back bg-white/10 border-2 border-cobalt/20 backdrop-blur-sm"></div>
        <div className="cube-face right bg-white/10 border-2 border-cobalt/20 backdrop-blur-sm"></div>
        <div className="cube-face left bg-white/10 border-2 border-cobalt/20 backdrop-blur-sm"></div>
        <div className="cube-face top bg-white/10 border-2 border-cobalt/20 backdrop-blur-sm"></div>
        <div className="cube-face bottom bg-white/10 border-2 border-cobalt/20 backdrop-blur-sm"></div>
      </motion.div>

      {/* Floating Tags */}
      <motion.div 
        className="absolute -top-10 -left-10 bg-white border border-gray-200 shadow-sm px-2 py-1 rounded text-[10px] font-plex text-cobalt font-bold group-hover:translate-x-12 group-hover:translate-y-12 transition-transform duration-500"
      >
        [RAG]
      </motion.div>
      <motion.div 
        className="absolute -bottom-10 -right-10 bg-white border border-gray-200 shadow-sm px-2 py-1 rounded text-[10px] font-plex text-copper font-bold group-hover:-translate-x-12 group-hover:-translate-y-12 transition-transform duration-500"
      >
        [AGENTIC]
      </motion.div>
      <motion.div 
        className="absolute -bottom-5 -left-16 bg-white border border-gray-200 shadow-sm px-2 py-1 rounded text-[10px] font-plex text-slate-light font-bold group-hover:translate-x-16 group-hover:-translate-y-6 transition-transform duration-500"
      >
        [FINE-TUNED]
      </motion.div>

    </div>
  );
}

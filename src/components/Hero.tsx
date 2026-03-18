"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { User, Terminal } from "lucide-react";
import InteractiveLatentMap from "@/components/InteractiveLatentMap";
import GlassCube from "@/components/GlassCube";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const sectionY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const systemText = "AI/ML Engineer who ships, not just experiments.";

  return (
    <section ref={targetRef} id="hero" className="w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      
      {/* Background Interactions */}
      <motion.div style={{ opacity: sectionOpacity }} className="absolute inset-0 z-0 pointer-events-none">
        <InteractiveLatentMap />
        <GlassCube />
      </motion.div>
      
      {/* Central Chat Container */}
      <motion.div 
        style={{ opacity: sectionOpacity, scale: sectionScale, y: sectionY }}
        className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col relative z-20"
      >
        
        {/* Header Bar */}
        <div className="bg-gray-50/90 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-xs font-plex text-gray-400 uppercase tracking-widest hidden sm:block">
            System Prompt // v2.0
          </span>
          <span className="text-[10px] font-plex text-gray-400 uppercase tracking-widest sm:hidden">
            Press / to Search
          </span>
        </div>

        {/* Chat History */}
        <div className="p-6 md:p-10 flex flex-col gap-8">
          
          {/* User Message */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-4"
          >
            <div className="w-8 h-8 rounded-full bg-copper flex items-center justify-center flex-shrink-0 mt-1">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate mb-1">User</p>
              <p className="text-slate-light text-lg">Who is Dhanush Chandra Shekar?</p>
            </div>
          </motion.div>

          {/* Assistant Message */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-1 bg-cobalt">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-cobalt mb-1">System</p>
              
              <div className="text-slate text-lg leading-relaxed font-medium min-h-[80px]">
                <motion.span>
                  {systemText.split("").map((char, index) => (
                    <motion.span 
                      key={`sys-${index}`} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.05, delay: index * 0.03 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="mt-8 flex flex-wrap gap-4 items-center"
              >
                <MagneticButton intensity={0.4}>
                  <a 
                    href="#contact"
                    className="px-5 py-2.5 bg-slate text-white text-sm font-medium rounded-lg hover:bg-slate-light transition-colors block"
                  >
                    Initiate Project
                  </a>
                </MagneticButton>
                
                <MagneticButton intensity={0.2}>
                  <a 
                    href="https://drive.google.com/file/d/1u3SKlrpoRDxuh1-DSmf6dm13VwNGw6PO/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white border border-gray-200 text-slate text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors block"
                  >
                    View CV
                  </a>
                </MagneticButton>
                
                <MagneticButton intensity={0.15}>
                  <a 
                    href="#projects"
                    className="px-5 py-2.5 text-cobalt text-sm font-medium hover:underline block"
                  >
                    View Case Studies &rarr;
                  </a>
                </MagneticButton>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AgenticTracker() {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage (0 to 100)
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = (totalScroll / windowHeight) * 100;
      
      setScrollYProgress(scrollValue);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Init

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine signal state
  let signalText = "System Standby";
  let pulseSpeed = "animate-pulse";
  
  // Roughly: 
  // 0-25: Hero/About (Stable Narrative)
  // 25-75: Skills/Projects/Experience (High Density Eval)
  // 75-100: Contact (Standby)
  if (scrollYProgress > 20 && scrollYProgress < 80) {
    signalText = "High Density Signal [EVAL_ACTIVE]";
    pulseSpeed = "animate-[pulse_1s_ease-in-out_infinite]"; // faster pulse
  } else if (scrollYProgress <= 20) {
    signalText = "Stable Narrative";
    pulseSpeed = "animate-[pulse_3s_ease-in-out_infinite]"; // slow pulse
  }

  // Calculate height of the active "fill" line
  const fillHeight = Math.max(0, Math.min(100, scrollYProgress));

  return (
    <div className="fixed left-4 md:left-8 top-0 bottom-0 w-8 z-40 hidden sm:flex flex-col items-center justify-center pointer-events-none">
      
      {/* Readout label - rotated */}
      <div className="absolute top-32 -left-[4.5rem] -rotate-90 origin-top-right text-[10px] font-plex font-bold tracking-widest text-cobalt flex items-center gap-2 w-48 justify-end">
        {signalText}
        <div className={`w-1.5 h-1.5 rounded-full bg-cobalt ${pulseSpeed}`}></div>
      </div>

      {/* The Track Background */}
      <div className="relative w-[3px] h-[40vh] bg-gray-200/50 rounded-full overflow-hidden">
        
        {/* The Fill Line */}
        <motion.div 
          className="absolute top-0 w-full bg-gradient-to-b from-cobalt/50 to-cobalt rounded-full shadow-[0_0_15px_rgba(46,91,255,0.6)]"
          style={{ height: `${fillHeight}%` }}
        />
        
      </div>

      <div className="absolute bottom-32 -left-12 -rotate-90 origin-bottom-right text-[10px] font-plex font-medium text-gray-400 tracking-widest">
        SEMANTIC_HEATMAP // V1
      </div>

    </div>
  );
}

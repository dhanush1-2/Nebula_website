"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AgenticTracker() {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = (totalScroll / windowHeight) * 100;
      
      setScrollYProgress(scrollValue);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fillHeight = Math.max(0, Math.min(100, scrollYProgress));

  return (
    <div className="fixed left-4 md:left-8 top-0 bottom-0 w-8 z-40 hidden sm:flex flex-col items-center justify-center pointer-events-none">

      {/* The Track Background */}
      <div className="relative w-[3px] h-[40vh] bg-gray-200/50 rounded-full overflow-hidden">
        
        {/* The Fill Line */}
        <motion.div 
          className="absolute top-0 w-full bg-gradient-to-b from-cobalt/50 to-cobalt rounded-full shadow-[0_0_15px_rgba(46,91,255,0.6)]"
          style={{ height: `${fillHeight}%` }}
        />
        
      </div>

    </div>
  );
}


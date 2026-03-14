"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function OptimizingCard({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [status, setStatus] = useState<"idle" | "optimizing" | "optimized">("idle");
  const [message, setMessage] = useState("[Analysing_Query...]");

  const handleViewportEnter = () => {
    if (status !== "idle") return;
    // Delay the start slightly for staggered grid animations
    setTimeout(() => {
      setStatus("optimizing");
      setTimeout(() => setMessage("[Retrieving_Context...]"), 800);
      setTimeout(() => setMessage("[Verifying_Accuracy_98%]"), 1600);
      setTimeout(() => setStatus("optimized"), 2400);
    }, delay * 1000 + 200);
  };

  return (
    <motion.div 
      onViewportEnter={handleViewportEnter}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex flex-col h-full rounded-xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* The noisy overlay and dot */}
      {status !== "optimized" && (
        <div className="absolute inset-0 z-40 bg-white/50 backdrop-blur-sm flex flex-col items-center flex-start pt-8 border border-cobalt/20 transition-opacity duration-300">
          {status === "optimizing" && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg border border-cobalt/20"
            >
              <div className="w-2 h-2 rounded-full bg-cobalt animate-ping"></div>
              <span className="text-xs font-plex text-cobalt font-bold">{message}</span>
            </motion.div>
          )}
        </div>
      )}

      {/* The actual content */}
      <div className={`flex flex-col h-full transition-all duration-700 ${status !== "optimized" ? "blur-[3px] grayscale" : "blur-0 grayscale-0"}`}>
        {children}
      </div>
    </motion.div>
  );
}

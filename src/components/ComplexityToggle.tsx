"use client";

import { useXAI } from "@/context/XAIContext";
import { motion } from "framer-motion";

export default function ComplexityToggle() {
  const { mode, toggleMode, isHallucinating, toggleHallucination } = useXAI();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      
      {/* Mobile Search Trigger for Command Palette */}
      <button 
        className="bg-cobalt text-white shadow-md rounded px-3 py-2 text-xs font-bold font-plex uppercase tracking-wider w-48 flex justify-center items-center gap-2 sm:hidden mb-2"
        onClick={() => {
          document.dispatchEvent(new KeyboardEvent('keydown', {'key': '/'}));
        }}
      >
        / Search System
      </button>

      <div className="bg-white border border-gray-200 shadow-sm rounded-full p-1 flex items-center relative w-48 h-10 overflow-hidden">
        {/* Sliding Background */}
        <motion.div
          className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-slate-100 rounded-full shadow-inner border border-gray-200/50"
          initial={false}
          animate={{
            left: mode === "technical" ? "4px" : "calc(50% + 2px)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />

        {/* Technical Button */}
        <button
          onClick={(e) => mode !== "technical" && toggleMode(e)}
          className={`relative z-10 w-1/2 h-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
            mode === "technical" ? "text-cobalt" : "text-slate-light hover:text-slate"
          }`}
        >
          Technical
        </button>

        {/* Story Button */}
        <button
          onClick={(e) => mode !== "story" && toggleMode(e)}
          className={`relative z-10 w-1/2 h-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
            mode === "story" ? "text-copper" : "text-slate-light hover:text-slate"
          }`}
        >
          Story
        </button>
      </div>

      <div className="flex w-full justify-between items-center mt-1">
        <button 
          onClick={toggleHallucination}
          className={`flex items-center justify-center p-1.5 rounded outline-none flex-shrink-0 transition-colors ${
            isHallucinating ? "bg-red-500 text-white animate-pulse" : "bg-white border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-400"
          }`}
          title="Toggle Hallucinations"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
        </button>
        <p className="text-[10px] text-slate-light font-plex bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm border border-gray-100">
          XAI_COMPLEXITY_TARGET: {mode.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

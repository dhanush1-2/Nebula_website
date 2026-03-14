"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Mode = "technical" | "story";

interface XAIContextType {
  mode: Mode;
  toggleMode: (e?: React.MouseEvent) => void;
  isHallucinating: boolean;
  toggleHallucination: () => void;
}

const XAIContext = createContext<XAIContextType | undefined>(undefined);

export function XAIProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("technical");
  const [isHallucinating, setIsHallucinating] = useState(false);
  const [transition, setTransition] = useState<{ active: boolean; x: number; y: number; color: string } | null>(null);

  const toggleMode = (e?: React.MouseEvent) => {
    // If we're already transitioning, ignore clicks to prevent spam
    if (transition?.active) return;

    const nextMode = mode === "technical" ? "story" : "technical";
    let originX = window.innerWidth / 2;
    let originY = window.innerHeight / 2;
    
    if (e) {
      originX = e.clientX;
      originY = e.clientY;
    }

    // Set transition state to render the shockwave overlay
    setTransition({
      active: true,
      x: originX,
      y: originY,
      color: nextMode === "technical" ? "#2E5BFF" : "#D97757" // Cobalt or Copper
    });

    // Swap the actual mode halfway through the animation when screen is covered
    setTimeout(() => {
      setMode(nextMode);
    }, 400);

    // Clean up animation
    setTimeout(() => {
      setTransition(null);
    }, 1000);
  };

  const toggleHallucination = () => {
    setIsHallucinating((prev) => !prev);
  };

  return (
    <XAIContext.Provider value={{ mode, toggleMode, isHallucinating, toggleHallucination }}>
      {children}
      
      {/* Shockwave Overlay */}
      <AnimatePresence>
        {transition && (
          <motion.div
            initial={{ 
              clipPath: `circle(0px at ${transition.x}px ${transition.y}px)`,
              opacity: 1
            }}
            animate={{ 
              clipPath: `circle(3000px at ${transition.x}px ${transition.y}px)`,
              opacity: 1
            }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // smooth fast-out slow-in curve
            className="fixed inset-0 z-[90] pointer-events-none mix-blend-color"
            style={{ backgroundColor: transition.color }}
          />
        )}
      </AnimatePresence>
    </XAIContext.Provider>
  );
}

export function useXAI() {
  const context = useContext(XAIContext);
  if (context === undefined) {
    throw new Error("useXAI must be used within an XAIProvider");
  }
  return context;
}

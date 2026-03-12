"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth out the movement - Optimized for faster, snappier response
  const springConfig = { damping: 20, stiffness: 1500, mass: 0.01 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      if (
        // Check element and its parents for clickability
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-pulsar pointer-events-none z-[100] mix-blend-screen shadow-[0_0_10px_rgba(0,240,255,0.5)] flex items-center justify-center hidden md:flex"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(0, 240, 255, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-supernova rounded-full shadow-[0_0_8px_rgba(255,69,0,0.8)]"
          animate={{
            scale: isHovering ? 0 : 1,
          }}
        />
      </motion.div>
    </>
  );
}

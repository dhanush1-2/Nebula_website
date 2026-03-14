"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SemanticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if we are hovering over an element with a semantic tag
      const target = e.target as HTMLElement;
      const semanticElement = target.closest('[data-semantic-tag]');
      
      if (semanticElement) {
        setHoveredTag(semanticElement.getAttribute('data-semantic-tag'));
      } else {
        setHoveredTag(null);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!mounted) return null;
  if (window.matchMedia("(pointer: coarse)").matches) return null;
  if (!isVisible) return null;

  return (
    <>
      {/* The Lens Effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cobalt/30 pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: hoveredTag ? 1.5 : 1,
          backgroundColor: hoveredTag ? "rgba(46, 91, 255, 0.1)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      
      {/* The Central Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-cobalt pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />

      {/* The Semantic Tag Float */}
      <AnimatePresence>
        {hoveredTag && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 pointer-events-none z-[110] ml-6 mt-4 md:block hidden"
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
          >
            <div className="bg-slate/90 backdrop-blur text-white text-[10px] font-plex font-medium px-2 py-1 rounded shadow-lg border border-slate-light/30 whitespace-nowrap">
              {hoveredTag}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SemanticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [isHoveringAction, setIsHoveringAction] = useState(false);
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
        const tag = semanticElement.getAttribute('data-semantic-tag');
        setHoveredTag(tag);
        // Treat Action_Node slightly differently for cursor behavior
        if (tag === '[Action_Node]') setIsHoveringAction(true);
        else setIsHoveringAction(false);
      } else {
        setHoveredTag(null);
        
        // Also check standard clickable elements
        const clickable = target.closest('a, button');
        if (clickable) {
          setIsHoveringAction(true);
        } else {
          setIsHoveringAction(false);
        }
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
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - (isHoveringAction ? 24 : 16),
          y: mousePosition.y - (isHoveringAction ? 24 : 16),
          width: isHoveringAction ? 48 : 32,
          height: isHoveringAction ? 48 : 32,
          scale: (hoveredTag && !isHoveringAction) ? 1.5 : 1,
          backgroundColor: isHoveringAction ? "#ffffff" : "transparent",
          border: isHoveringAction ? "none" : "1px solid rgba(255,255,255,0.5)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
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

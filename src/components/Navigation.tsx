"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const nodes = [
  { id: "hero", label: "System_Prompt" },
  { id: "about", label: "Personnel" },
  { id: "projects", label: "Knowledge_Nodes" },
];

export default function Navigation() {
  const [activeNode, setActiveNode] = useState("hero");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Simple scroll spy
      const sections = nodes.map(n => document.getElementById(n.id));
      const scrollPos = window.scrollY + 200; // offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveNode(nodes[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <div className="relative flex items-center justify-between gap-16 px-8 py-3 bg-white/95 backdrop-blur-lg rounded-full border border-gray-200 shadow-md" data-semantic-tag="[Control: Root_Navigation]">
        
        {/* The Neural Connections (SVG Background) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
          {/* We know there are 3 nodes and we have roughly their centers based on flex gap-16. Let's just draw lines between them relative to percentage. */}
          <motion.line 
            x1="20%" y1="50%" x2="50%" y2="50%" 
            stroke="#2E5BFF" // cobalt
            strokeOpacity={0.3}
            animate={{
              strokeWidth: hoveredNode === "hero" || hoveredNode === "about" ? 3 : 1
            }}
          />
          <motion.line 
            x1="50%" y1="50%" x2="80%" y2="50%" 
            stroke="#2E5BFF" 
            strokeOpacity={0.3}
            animate={{
              strokeWidth: hoveredNode === "about" || hoveredNode === "projects" ? 3 : 1
            }}
          />
        </svg>

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          const isHovered = hoveredNode === node.id;
          
          // "Weight" physical tilt/shift logic:
          // If a node is active, it gets slightly larger. Others get slightly smaller.
          let scale = 1;
          if (isActive) scale = 1.1;
          else if (isHovered) scale = 1.05;
          else scale = 0.95;

          return (
            <motion.button
              key={node.id}
              className="relative flex items-center justify-center p-2 rounded-full outline-none focus:outline-none"
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => scrollToSection(node.id)}
              animate={{ scale }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div 
                className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${isActive ? 'bg-cobalt border-cobalt shadow-[0_0_10px_rgba(46,91,255,0.5)]' : 'bg-white border-gray-400'}`}
              />
              {/* Tooltip Label */}
              <div className="absolute top-10 whitespace-nowrap bg-white/95 backdrop-blur-md px-2.5 py-1 rounded shadow-sm border border-gray-100 pointer-events-none">
                <span className={`text-[10px] font-plex uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-cobalt font-bold' : 'text-slate-light'}`}>
                  {node.label}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

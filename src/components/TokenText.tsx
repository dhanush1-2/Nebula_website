"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TokenTextProps {
  children: string;
}

export default function TokenText({ children }: TokenTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Split text into words (tokens)
  const tokens = children.split(/(\s+)/);

  return (
    <span 
      className="inline-block relative cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {tokens.map((token, i) => {
        // Don't animate pure whitespace
        if (!token.trim()) {
          return <span key={i}>{token}</span>;
        }

        return (
          <motion.span
            key={i}
            className={`inline-block transition-colors duration-200 ${
              isHovered ? "bg-cobalt/10 text-cobalt outline outline-1 outline-cobalt/30 rounded-[2px] px-0.5 mx-[1px]" : ""
            }`}
            animate={
              isHovered
                ? {
                    y: [0, -2, 0],
                    opacity: [1, 0.8, 1],
                  }
                : { y: 0, opacity: 1 }
            }
            transition={{
              duration: 0.2,
              delay: i * 0.015, // Stagger effect
              ease: "easeInOut",
            }}
          >
            {token}
          </motion.span>
        );
      })}
    </span>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface NeuralDecryptProps {
  text: string;
  className?: string;
  speed?: number; // ms delay between character reveals
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

export default function NeuralDecrypt({ text, className = "", speed = 40 }: NeuralDecryptProps) {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let interval: NodeJS.Timeout;

    // Start scrambling after a tiny delay
    interval = setInterval(() => {
      setDisplayText((prev) => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            // If the current character position is less than the current iteration, show the real character
            if (index < iteration) {
              return char;
            }
            // Otherwise, show a random character
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("");
      });

      // Advance the iteration smoothly
      setIteration((prev) => prev + 1 / 3);

      if (iteration >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, iteration, text, speed]);

  // Initial state before view
  useEffect(() => {
    if (!isInView) {
      setDisplayText(text.replace(/[a-zA-Z0-9]/g, "0"));
    }
  }, [isInView, text]);

  return (
    <motion.span 
      ref={ref} 
      className={`inline-block font-plex tracking-wider ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.span>
  );
}

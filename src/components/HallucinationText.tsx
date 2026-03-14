"use client";

import { useXAI } from "@/context/XAIContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface HallucinationTextProps {
  realText: string;
  fakeText: string;
  className?: string;
}

export default function HallucinationText({ realText, fakeText, className = "" }: HallucinationTextProps) {
  const { isHallucinating } = useXAI();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <span className={className}>{realText}</span>;

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="popLayout">
        {!isHallucinating ? (
          <motion.span
            key="real"
            initial={{ opacity: 0, filter: "blur(4px)", y: 5 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(4px)", y: -5 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            {realText}
          </motion.span>
        ) : (
          <motion.span
            key="fake"
            initial={{ opacity: 0, filter: "blur(4px)", y: 5 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(4px)", y: -5 }}
            transition={{ duration: 0.3 }}
            className="inline-block text-red-500 font-medium font-plex tracking-tight"
            style={{ textShadow: "0 0 8px rgba(239, 68, 68, 0.4)" }}
          >
            {fakeText}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

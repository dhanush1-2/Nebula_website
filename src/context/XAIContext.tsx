"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Mode = "technical" | "story";

interface XAIContextType {
  mode: Mode;
  toggleMode: () => void;
  isHallucinating: boolean;
  toggleHallucination: () => void;
}

const XAIContext = createContext<XAIContextType | undefined>(undefined);

export function XAIProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("technical");
  const [isHallucinating, setIsHallucinating] = useState(false);

  const toggleMode = () => {
    setMode((prev) => (prev === "technical" ? "story" : "technical"));
  };

  const toggleHallucination = () => {
    setIsHallucinating((prev) => !prev);
  };

  return (
    <XAIContext.Provider value={{ mode, toggleMode, isHallucinating, toggleHallucination }}>
      {children}
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

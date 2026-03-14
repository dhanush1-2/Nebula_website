"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Use an animation frame to process the scroll updates continuously
    const handleRaf = (time: number) => {
      raf(time);
    };
    
    requestAnimationFrame(handleRaf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function InferenceProgress({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("Retrieving Context...");

  useEffect(() => {
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      // Simulate non-linear probabilistic loading
      const jump = Math.random() * 15;
      currentProgress = Math.min(100, currentProgress + jump);
      
      setProgress(Math.floor(currentProgress));

      if (currentProgress < 30) setStage("Retrieving Context...");
      else if (currentProgress < 70) setStage("Reranking Documents...");
      else if (currentProgress < 99) setStage("Finalizing Output...");
      else setStage("Inference Complete");

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 200); // Small pause at 100%
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="w-full flex items-center justify-between py-6 px-4 bg-gray-50/50 rounded-lg border border-gray-100 mb-6">
      <div className="flex items-center gap-3">
        <motion.div 
          className="w-4 h-4 rounded-sm border-2 border-cobalt border-t-transparent flex-shrink-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <span className="text-xs font-plex text-slate-light font-medium tracking-wide">
          {stage}
        </span>
      </div>
      <span className="text-xs font-plex text-cobalt font-bold">
        {progress}%
      </span>
    </div>
  );
}

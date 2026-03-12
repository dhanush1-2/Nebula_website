"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

// The simulated "knowledge base" vectors
const dataStars = [
  { id: 1, keyword: "AWS", snippet: "AWS Certified AI Practitioner.", type: "skill" },
  { id: 2, keyword: "Kelley", snippet: "Research Assistant at Indiana University, Kelley School of Business.", type: "experience" },
  { id: 3, keyword: "LangChain", snippet: "Expertise in LangChain and Agentic AI workflows.", type: "skill" },
  { id: 4, keyword: "RAG", snippet: "Built a hybrid GraphRAG pipeline ingesting 1,605 SEC filings.", type: "project" },
  { id: 5, keyword: "FAISS", snippet: "Implemented FAISS vector search for 87% QA accuracy.", type: "skill" },
  { id: 6, keyword: "PyTorch", snippet: "Fine-tuned a base LLM with LoRA/PEFT using PyTorch.", type: "skill" },
  { id: 7, keyword: "LodeAI", snippet: "LodeAI: An end-to-end agentic AI platform.", type: "project" },
  { id: 8, keyword: "Neo4j", snippet: "Extracted 3,422 entities into a Neo4j knowledge graph.", type: "project" },
  { id: 9, keyword: "Data Science", snippet: "M.S. Data Science from Indiana University (3.71 GPA).", type: "education" },
];

export default function BlackHoleDataVis() {
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [isQuerying, setIsQuerying] = useState(false);
  const [result, setResult] = useState<typeof dataStars | null>(null);
  
  // To scatter nodes when not querying
  const [nodes, setNodes] = useState(() => 
    Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      // Random position on a circle for the orbit
      angle: Math.random() * Math.PI * 2,
      radius: 150 + Math.random() * 200,
      speed: 0.001 + Math.random() * 0.003,
      size: Math.random() > 0.8 ? 3 : 1.5,
      isDataStar: i < dataStars.length
    }))
  );

  useEffect(() => {
    setMounted(true);
    // Animation loop for orbiting
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      setNodes(prevNodes => 
        prevNodes.map(node => {
          // Accelerate if querying to simulate "gravity well pull"
          const multiplier = isQuerying ? 5 : 1; 
          
          return {
            ...node,
            angle: node.angle + (node.speed * multiplier * delta),
            // If querying, slowly pull everything in slightly
            radius: isQuerying ? Math.max(50, node.radius * 0.98) : (node.radius < 150 ? node.radius * 1.05 : node.radius)
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isQuerying]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsQuerying(true);
    
    // Simulate RAG retrieval delay
    setTimeout(() => {
      const q = query.toLowerCase();
      // Simple keyword matching for the simulation
      const matched = dataStars.filter(ds => 
        ds.snippet.toLowerCase().includes(q) || ds.keyword.toLowerCase().includes(q)
      );
      
      setResult(matched.length > 0 ? matched : [{ id: 0, keyword: "404", snippet: "Archive query returned no exact vectors. Broadening search parameters recommended.", type: "system" }]);
      setIsQuerying(false);
    }, 1500); // 1.5s delay to show the black hole "pulsing" and winding up
  };

  const clearResult = () => {
    setResult(null);
    setQuery("");
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center pt-20">
      
      {/* The Black Hole Visualization Container */}
      <div className="relative w-full max-w-[600px] h-[300px] md:h-[400px] flex items-center justify-center mb-8 md:mb-12 overflow-hidden md:overflow-visible">
        
        {/* The Singularity / Event Horizon */}
        <motion.div 
          className="absolute w-32 h-32 rounded-full bg-black shadow-[0_0_100px_rgba(0,240,255,0.8),inset_0_0_20px_rgba(0,0,0,1)] border border-pulsar/20 z-10"
          animate={{
            scale: isQuerying ? [1, 1.2, 0.9, 1.3] : [1, 1.05, 1],
            boxShadow: isQuerying 
              ? ["0 0 100px rgba(0,240,255,0.8)", "0 0 200px rgba(255,69,0,0.6)", "0 0 50px rgba(0,240,255,0.8)"]
              : ["0 0 100px rgba(0,240,255,0.6)", "0 0 120px rgba(0,240,255,0.8)", "0 0 100px rgba(0,240,255,0.6)"]
          }}
          transition={{ duration: isQuerying ? 1.5 : 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbiting Data Stars */}
        {mounted && nodes.map((node, i) => {
          const x = Math.cos(node.angle) * node.radius;
          const y = Math.sin(node.angle) * node.radius;
          // Apply a perspective squeeze to make it look like a 3D accretion disk
          const squeezedY = y * 0.4; 
          
          return (
            <motion.div
              key={node.id}
              className={`absolute rounded-full z-0 ${node.isDataStar ? 'bg-supernova shadow-[0_0_10px_#FF4500]' : 'bg-pulsar opacity-40 shadow-[0_0_5px_#00F0FF]'}`}
              style={{
                width: node.size,
                height: node.size,
                x: x,
                y: squeezedY,
              }}
              animate={{
                opacity: isQuerying ? (node.isDataStar ? 1 : 0.1) : (node.isDataStar ? 0.8 : 0.4)
              }}
            />
          );
        })}
      </div>

      {/* RAG Results Data Card (Assembled from stars) */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px) drop-shadow(0 0 0px #00F0FF)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px) drop-shadow(0 0 30px #00F0FF)" }}
            /* "Spaghettification" exit animation: stretch vertically, compress horizontally, fade, blur */
            exit={{ 
              opacity: 0, 
              scaleY: 3, 
              scaleX: 0.1, 
              y: -150, 
              filter: "blur(20px)",
              transition: { duration: 0.6, ease: "easeIn" }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg bg-obsidian/90 backdrop-blur-xl border border-pulsar/50 p-6 rounded-xl shadow-[0_0_50px_rgba(0,240,255,0.2)]"
          >
            <div className="flex justify-between items-center mb-4 border-b border-pulsar/30 pb-2">
              <div className="font-mono text-xs text-pulsar flex items-center gap-2">
                <Search className="w-4 h-4" /> RAG_RETRIEVAL_SUCCESS
              </div>
              <button onClick={clearResult} className="text-neutron/50 hover:text-supernova transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {result.map((r, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-1 h-full bg-gradient-to-b from-supernova to-pulsar rounded-full" />
                  <div>
                    <span className="text-xs uppercase font-bold text-supernova mr-2 tracking-wider">[{r.keyword}]</span>
                    <span className="text-neutron/90 text-sm leading-relaxed">{r.snippet}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Query Input Bar */}
      <motion.div 
        className="z-20 w-full max-w-md relative mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <form onSubmit={handleSearch} className="relative group">
          <div className="absolute inset-0 bg-pulsar/20 rounded-full blur-xl group-hover:bg-pulsar/40 transition-colors" />
          <div className="relative flex items-center bg-obsidian border py-3 px-6 rounded-full border-pulsar/40 shadow-[0_0_20px_rgba(0,240,255,0.1)] focus-within:border-pulsar focus-within:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all">
            <Search className="w-5 h-5 text-pulsar/60 mr-3" />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Query the Archive (e.g., 'AWS', 'Kelley')..."
              className="bg-transparent border-none outline-none text-neutron text-sm w-full placeholder-neutron/40 font-mono"
            />
          </div>
        </form>

        <div className="flex justify-between items-center mt-6 text-xs font-mono text-neutron/40">
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-supernova animate-pulse" /> RAG System Active
          </span>
          <a href="#projects" className="hover:text-pulsar transition-colors decoration-pulsar underline-offset-4 hover:underline">
            Manual Override ↓
          </a>
        </div>
      </motion.div>

    </div>
  );
}

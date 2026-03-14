"use client";

import { useXAI } from "@/context/XAIContext";
import { MapPin, Network, Code2, FileCode2, Cpu } from "lucide-react";
import HallucinationText from "@/components/HallucinationText";
import NeuralDecrypt from "@/components/NeuralDecrypt";
import OptimizingCard from "@/components/OptimizingCard";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.4 } 
  }
};

export default function About() {
  const { mode } = useXAI();

  return (
    <section id="about" className="w-full py-24 px-4 bg-white border-t border-gray-100 scroll-mt-24">
      <motion.div 
        className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Left Column: Bio */}
        <div className="md:w-2/3">
          <div className="mb-8">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate tracking-tight mb-2">
              <NeuralDecrypt text="Personnel Profile" speed={30} />
            </motion.h2>
            <motion.div variants={itemVariants} className="w-12 h-1 bg-cobalt rounded-full"></motion.div>
          </div>

          <div className="space-y-6 text-slate-light leading-relaxed text-lg">
            <motion.p variants={itemVariants}>
              Originating from the <span className="underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[Cluster: Origin_Node | Coordinates: 12.97, 77.59]">tech hub of Bangalore</span>, I established a rigorous structural foundation in <span className="underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[Vector: CS_Fundamentals | Trust_Score: 0.99]">Computer Science, graduating with an 8.51 CGPA</span> before transitioning to advanced machine learning architecture.
            </motion.p>
            <motion.p variants={itemVariants}>
              Currently, my primary research node is at the <strong className="text-slate font-semibold underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[Institution_ID: 0xIU | Sub-Cluster: Kelley_Data]">Indiana University, Kelley School of Business</strong>, pursuing an <span className="underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[Vector: Academic_Goal | State: In_Progress]">
                <HallucinationText realText="M.S. in Data Science (3.71 GPA)" fakeText="Professional Astronaut (Moon Unit)" />
              </span>. Here, I orchestrate and deploy <span className="underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[Pipeline: End_to_End | Architecture: RAG_Agentic]">
                <HallucinationText realText="end-to-end LLM pipelines" fakeText="quantum warp engines" />
              </span> utilized daily by faculty for complex data evaluation.
            </motion.p>
            <motion.p variants={itemVariants} className="underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[System_Objective: Reliability_Engineering]">
              {mode === "technical" 
                ? "I specialize in combining deep prompt engineering with robust software engineering to deliver reliable, evaluated AI systems at scale. By reducing hallucinations and creating rigorous evaluation benchmarks, I turn chaotic language models into structured, mission-critical assets."
                : "I specialize in making AI systems trustworthy. Instead of just building chatbots that hallucinate, I build structured environments that test, evaluate, and verify AI responses so businesses can actually rely on them."}
            </motion.p>
          </div>
        </div>

        {/* Right Column: Key Data Specs */}
        <motion.div variants={slideInRight} className="md:w-1/3">
          <OptimizingCard delay={0.4} className="sticky top-24 flex flex-col bg-white transition-colors">
            
            {/* Card Header matching Projects.tsx */}
            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-slate leading-tight">
                  Entity Telemetry
                </h3>
                <div className="w-8 h-8 rounded border border-cobalt/20 bg-cobalt/10 flex items-center justify-center text-cobalt flex-shrink-0">
                  <FileCode2 className="w-4 h-4" />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-plex text-slate-light">
                  Active Connection
                </span>
                <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-plex text-slate-light">
                  Live
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 bg-white">
              <ul className="space-y-5">
                <li>
                  <div className="flex items-center gap-2 mb-1">
                    <Cpu className="w-4 h-4 text-copper" />
                    <span className="text-xs font-plex uppercase text-gray-500 font-medium">System Architecture</span>
                  </div>
                  <p className="text-sm font-semibold text-slate pl-6">M.S. Data Science // PyTorch // AWS</p>
                </li>
                <li>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-copper" />
                    <span className="text-xs font-plex uppercase text-gray-500 font-medium">Deployment Cluster</span>
                  </div>
                  <p className="text-sm font-semibold text-slate pl-6">Bloomington, IN // Kelley School</p>
                </li>
                <li>
                  <div className="flex items-center gap-2 mb-1">
                    <Network className="w-4 h-4 text-copper" />
                    <span className="text-xs font-plex uppercase text-gray-500 font-medium">Inference Throughput</span>
                  </div>
                  <p className="text-sm font-semibold text-slate pl-6">
                    <HallucinationText realText="High Efficiency Output" fakeText="Asleep at the keyboard" />
                  </p>
                </li>
                <li>
                  <div className="flex items-center gap-2 mb-1">
                    <Code2 className="w-4 h-4 text-copper" />
                    <span className="text-xs font-plex uppercase text-gray-500 font-medium">Primary Directive</span>
                  </div>
                  <p className="text-sm font-semibold text-slate pl-6">
                    <HallucinationText realText="Research Asst. Building RAGs" fakeText="Training models on memes" />
                  </p>
                </li>
              </ul>
            </div>
            
          </OptimizingCard>
        </motion.div>

      </motion.div>
    </section>
  );
}

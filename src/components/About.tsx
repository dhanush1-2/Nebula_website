"use client";

import { useRef } from "react";
import { useXAI } from "@/context/XAIContext";
import { MapPin, Network, Code2, FileCode2, Cpu } from "lucide-react";
import HallucinationText from "@/components/HallucinationText";
import { motion, useScroll, useTransform } from "framer-motion";

const facts = [
  { icon: Cpu, label: "Education", value: "M.S. Data Science // PyTorch // AWS" },
  { icon: MapPin, label: "Location", value: "Bloomington, IN // Kelley School" },
];

export default function About() {
  const { mode } = useXAI();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Bio: invisible → slide in from left → visible in section → slide out left when scrolling past
  const bioX = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [-80, 0, 0, -80]);
  const bioOpacity = useTransform(scrollYProgress, [0, 0.2, 0.75, 1], [0, 1, 1, 0]);

  // Card: invisible → slide in from right → visible → slide out right
  const cardX = useTransform(scrollYProgress, [0.05, 0.3, 0.7, 0.95], [100, 0, 0, 100]);
  const cardOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="about" className="w-full py-24 px-4 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left Column: Bio — slides from left */}
        <motion.div 
          className="md:w-3/5"
          style={{ x: bioX, opacity: bioOpacity }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate tracking-tight mb-3">
              Personnel Profile
            </h2>
            <div className="w-12 h-1 bg-cobalt rounded-full"></div>
          </div>

          <div className="space-y-5 text-slate-light leading-relaxed text-[17px]">
            <p>
              Originating from the <span>tech hub of Bangalore</span>, I established a rigorous structural foundation in <span>Computer Science, graduating with an 8.51 CGPA</span> before transitioning to advanced machine learning architecture.
            </p>
            <p>
              Currently, my primary research node is at the <strong className="text-slate font-semibold">Indiana University, Kelley School of Business</strong>, pursuing an <span>
                <HallucinationText realText="M.S. in Data Science (3.71 GPA)" fakeText="Professional Astronaut (Moon Unit)" />
              </span>. Here, I orchestrate and deploy <span>
                <HallucinationText realText="end-to-end LLM pipelines" fakeText="quantum warp engines" />
              </span> utilized daily by faculty for complex data evaluation.
            </p>
            <p>
              {mode === "technical" 
                ? "I specialize in combining deep prompt engineering with robust software engineering to deliver reliable, evaluated AI systems at scale. By reducing hallucinations and creating rigorous evaluation benchmarks, I turn chaotic language models into structured, mission-critical assets."
                : "I specialize in making AI systems trustworthy. Instead of just building chatbots that hallucinate, I build structured environments that test, evaluate, and verify AI responses so businesses can actually rely on them."}
            </p>
          </div>
        </motion.div>

        {/* Right Column: Quick Facts Card — slides from right */}
        <motion.div 
          className="md:w-2/5"
          style={{ x: cardX, opacity: cardOpacity }}
        >
          <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-500 overflow-hidden">
            
            {/* Card Header */}
            <div className="px-6 pt-6 pb-5 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate">Quick Facts</h3>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-cobalt">
                  <FileCode2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 space-y-6">
              {facts.map((fact, i) => {
                const Icon = fact.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-copper" />
                    </div>
                    <div>
                      <span className="text-[11px] font-plex uppercase text-gray-400 font-medium tracking-wider">{fact.label}</span>
                      <p className="text-sm font-semibold text-slate mt-0.5">{fact.value}</p>
                    </div>
                  </div>
                );
              })}

              {/* Work Ethic */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Network className="w-4 h-4 text-copper" />
                </div>
                <div>
                  <span className="text-[11px] font-plex uppercase text-gray-400 font-medium tracking-wider">Work Ethic</span>
                  <p className="text-sm font-semibold text-slate mt-0.5">
                    <HallucinationText realText="High Efficiency Output" fakeText="Asleep at the keyboard" />
                  </p>
                </div>
              </div>

              {/* Current Role */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4 text-copper" />
                </div>
                <div>
                  <span className="text-[11px] font-plex uppercase text-gray-400 font-medium tracking-wider">Current Role</span>
                  <p className="text-sm font-semibold text-slate mt-0.5">
                    <HallucinationText realText="Research Asst. Building RAGs" fakeText="Training models on memes" />
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

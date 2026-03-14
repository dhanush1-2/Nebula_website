"use client";

import { useXAI } from "@/context/XAIContext";
import { MapPin, GraduationCap, Briefcase, FileCode2 } from "lucide-react";
import HallucinationText from "@/components/HallucinationText";

export default function About() {
  const { mode } = useXAI();

  return (
    <section id="about" className="w-full py-24 px-4 bg-white border-t border-gray-100 scroll-mt-24">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left Column: Bio */}
        <div className="md:w-2/3">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate tracking-tight mb-2">
              Personnel Profile
            </h2>
            <div className="w-12 h-1 bg-cobalt rounded-full"></div>
          </div>

          <div className="space-y-6 text-slate-light leading-relaxed text-lg">
            <p>
              Originating from the <span className="underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[Cluster: Origin_Node | Coordinates: 12.97, 77.59]">tech hub of Bangalore</span>, I established a rigorous structural foundation in <span className="underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[Vector: CS_Fundamentals | Trust_Score: 0.99]">Computer Science, graduating with an 8.51 CGPA</span> before transitioning to advanced machine learning architecture.
            </p>
            <p>
              Currently, my primary research node is at the <strong className="text-slate font-semibold underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[Institution_ID: 0xIU | Sub-Cluster: Kelley_Data]">Indiana University, Kelley School of Business</strong>, pursuing an <span className="underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[Vector: Academic_Goal | State: In_Progress]">
                <HallucinationText realText="M.S. in Data Science (3.71 GPA)" fakeText="Professional Astronaut (Moon Unit)" />
              </span>. Here, I orchestrate and deploy <span className="underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[Pipeline: End_to_End | Architecture: RAG_Agentic]">
                <HallucinationText realText="end-to-end LLM pipelines" fakeText="quantum warp engines" />
              </span> utilized daily by faculty for complex data evaluation.
            </p>
            <p className="underline decoration-cobalt/30 decoration-dashed hover:text-cobalt cursor-none transition-colors" data-semantic-tag="[System_Objective: Reliability_Engineering]">
              {mode === "technical" 
                ? "I specialize in combining deep prompt engineering with robust software engineering to deliver reliable, evaluated AI systems at scale. By reducing hallucinations and creating rigorous evaluation benchmarks, I turn chaotic language models into structured, mission-critical assets."
                : "I specialize in making AI systems trustworthy. Instead of just building chatbots that hallucinate, I build structured environments that test, evaluate, and verify AI responses so businesses can actually rely on them."}
            </p>
          </div>
        </div>

        {/* Right Column: Key Data Specs */}
        <div className="md:w-1/3">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
            
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <div className="w-10 h-10 bg-cobalt/10 rounded-lg flex items-center justify-center text-cobalt">
                <FileCode2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-plex text-gray-400 uppercase tracking-widest">Node ID</p>
                <p className="font-bold text-slate">DHANUSH C.</p>
              </div>
            </div>

            <ul className="space-y-5">
              <li>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-copper" />
                  <span className="text-xs font-plex uppercase text-gray-500 font-medium">Server Region</span>
                </div>
                <p className="text-sm font-semibold text-slate pl-6">[Geo_Node: BLR] &rarr; [Geo_Node: Bloomington, IN]</p>
              </li>
              <li>
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="w-4 h-4 text-copper" />
                  <span className="text-xs font-plex uppercase text-gray-500 font-medium">Knowledge Weights</span>
                </div>
                <p className="text-sm font-semibold text-slate pl-6">
                  <HallucinationText realText="M.S. Data Science (3.71)" fakeText="Galactic Navigation (9.99)" />
                </p>
              </li>
              <li>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="w-4 h-4 text-copper" />
                  <span className="text-xs font-plex uppercase text-gray-500 font-medium">Active Operation</span>
                </div>
                <p className="text-sm font-semibold text-slate pl-6">
                  <HallucinationText realText="Research Asst. @ Kelley" fakeText="Chief Starfleet Officer" />
                </p>
              </li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
}

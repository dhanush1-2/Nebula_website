"use client";

import { useRef } from "react";
import { Database, Network, Code2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const skills = [
  {
    title: "Neural AI & LLM Core",
    meta: "Inference Engine",
    icon: Code2,
    items: [
      "LangChain",
      "FAISS Vector DB",
      "RAG Pipelines",
      "LLM Fine-tuning",
      "Prompt Engineering",
      "Agentic Workflows",
    ],
    color: "cobalt" as const
  },
  {
    title: "Algorithmic Models",
    meta: "Pattern Recognition",
    icon: Database,
    items: [
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "SentenceTransformers",
      "Model Evaluation",
    ],
    color: "copper" as const
  },
  {
    title: "Data Orchestration",
    meta: "MLOps & Infrastructure",
    icon: Network,
    items: [
      "Python",
      "FastAPI",
      "Docker",
      "AWS",
      "Neo4j",
      "PostgreSQL",
      "CI/CD Pipelines",
    ],
    color: "slate" as const
  },
];

const colorMap = {
  cobalt: { circle: "bg-cobalt/10 text-cobalt", dot: "bg-cobalt" },
  copper: { circle: "bg-copper/10 text-copper", dot: "bg-copper" },
  slate: { circle: "bg-slate/10 text-slate", dot: "bg-slate" },
};

function SkillCard({ group, index }: { group: typeof skills[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = group.icon;
  const colors = colorMap[group.color];

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Staggered start per card
  const s = index * 0.05;
  // invisible → slide in from right → visible → slide out right
  const x = useTransform(scrollYProgress, [s, 0.2 + s, 0.7, 0.95], [120, 0, 0, 120]);
  const opacity = useTransform(scrollYProgress, [s, 0.15 + s, 0.75, 0.95], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ x, opacity }}
      className="group"
    >
      <TiltCard className="h-full">
        <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-400 overflow-hidden flex flex-col">
          
          {/* Card Header */}
          <div className="p-6 pb-5">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-full ${colors.circle} flex items-center justify-center`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[11px] font-plex text-slate-light font-medium">
                {group.meta}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate leading-tight">
              {group.title}
            </h3>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-gray-100"></div>

          {/* Card Body */}
          <div className="p-6 pt-5 flex-1">
            <ul className="space-y-3.5">
              {group.items.map((item, i) => (
                <li key={i} className="flex items-center text-slate-light">
                  <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mr-3 flex-shrink-0`}></span>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Heading: invisible → slide from left → visible → slide out left
  const headingX = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [-60, 0, 0, -60]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.15, 0.75, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="tech-skills" className="w-full py-24 px-4 bg-gallery scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          className="mb-16"
          style={{ x: headingX, opacity: headingOpacity }}
        >
          <h2 className="text-3xl font-bold text-slate tracking-tight mb-3">
            Technical Architecture
          </h2>
          <p className="text-slate-light font-plex text-sm max-w-2xl mt-4">
            The core infrastructure, frameworks, and methodologies utilized across my deployments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <SkillCard key={index} group={group} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

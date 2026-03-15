"use client";

import { useRef } from "react";
import { useXAI } from "@/context/XAIContext";
import { Building2, Award } from "lucide-react";
import TokenText from "@/components/TokenText";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  {
    role: "Research Assistant – AI & LLM Engineering",
    company: "Indiana University, Kelley School of Business",
    date: "June 2024 – Present",
    isActive: true,
    icon: Building2,
    technicalDetails: [
      "Designed and deployed an end-to-end LLM pipeline adopted daily by faculty, combining RAG, information retrieval, and automated evaluation.",
      "Reduced AI output inaccuracies 30–40% by iterating on retrieval configurations and prompt engineering strategies.",
      "Defined KPI thresholds and success metrics for AI model outputs, enabling reproducible benchmarking."
    ],
    storyDetails: [
      "Built a secure AI system used daily by professors to process complex academic data much faster than manual methods.",
      "Identified why the AI was giving wrong answers and fixed the underlying logic, making the tool 40% more accurate.",
      "Created a standardized testing system so the university can confidently trust the AI's output before using it in classrooms."
    ]
  },
  {
    role: "AWS Certified AI Practitioner",
    company: "Amazon Web Services",
    date: "2024",
    isActive: false,
    icon: Award,
    technicalDetails: [
      "Official credential validating overall understanding of AI, ML, and generative AI concepts and use cases on AWS."
    ],
    storyDetails: [
      "Certified by Amazon in the foundational principles of building, securing, and deploying Artificial Intelligence securely in the cloud."
    ]
  }
];

function ExperienceCard({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { mode } = useXAI();
  const Icon = milestone.icon;
  const details = mode === "technical" ? milestone.technicalDetails : milestone.storyDetails;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Alternate: even cards from left, odd cards from right
  // Full cycle: invisible → slide in → visible → slide out
  const direction = index % 2 === 0 ? -1 : 1;
  const x = useTransform(scrollYProgress, [0, 0.25, 0.7, 0.95], [100 * direction, 0, 0, 100 * direction]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.75, 0.95], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ x, opacity }}
    >
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-400 overflow-hidden">
        
        {/* Card Header */}
        <div className="p-6 pb-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-cobalt/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-cobalt" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate mb-1">
                {milestone.role}
              </h3>
              <p className="text-sm text-copper font-medium font-plex">
                {milestone.company}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:flex-shrink-0">
            {milestone.isActive && (
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            )}
            <span className={`text-xs font-plex font-semibold px-3 py-1 rounded-full ${
              milestone.isActive 
                ? 'bg-green-50 text-green-600 border border-green-200' 
                : 'bg-gray-50 text-slate-light border border-gray-200'
            }`}>
              {milestone.date}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-gray-100"></div>

        {/* Card Body */}
        <div className="p-6 pt-5">
          <ul className="space-y-4">
            {details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cobalt flex-shrink-0"></span>
                <p className="text-slate-light leading-relaxed text-sm">
                  <TokenText>{detail}</TokenText>
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Heading: invisible → slide from right → visible → slide out right
  const headingX = useTransform(scrollYProgress, [0, 0.15, 0.7, 1], [60, 0, 0, 60]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1, 0.75, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="experience" className="w-full py-24 px-4 bg-gallery relative scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          className="mb-16"
          style={{ x: headingX, opacity: headingOpacity }}
        >
          <h2 className="text-3xl font-bold text-slate tracking-tight mb-3">
            Experience Log
          </h2>
          <p className="text-slate-light font-plex text-sm max-w-2xl mt-4">
            A chronological record of engineering environments, system integrations, and professional certifications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <ExperienceCard key={index} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

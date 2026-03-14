"use client";

import { useXAI } from "@/context/XAIContext";
import { Building2, Award } from "lucide-react";
import TokenText from "@/components/TokenText";

const milestones = [
  {
    role: "Research Assistant – AI & LLM Engineering",
    company: "Indiana University, Kelley School of Business",
    date: "June 2024 – Present",
    status: "ACTIVE",
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
    status: "ACHIEVED",
    icon: Award,
    technicalDetails: [
      "Official credential validating overall understanding of AI, ML, and generative AI concepts and use cases on AWS."
    ],
    storyDetails: [
      "Certified by Amazon in the foundational principles of building, securing, and deploying Artificial Intelligence securely in the cloud."
    ]
  }
];

export default function Experience() {
  const { mode } = useXAI();

  return (
    <section id="experience" className="w-full py-24 px-4 bg-white border-t border-gray-100 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate tracking-tight mb-2">
            Experience
          </h2>
          <p className="text-slate-light font-plex text-sm max-w-2xl">
            A chronological record of engineering environments, system integrations, and professional certifications.
          </p>
        </div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const details = mode === "technical" ? milestone.technicalDetails : milestone.storyDetails;
            
            return (
              <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 group">
                
                {/* Left side: Meta Info */}
                <div className="md:w-1/3 flex flex-col md:items-end md:text-right pt-1">
                  <div className="flex items-center md:justify-end gap-2 mb-2">
                    {milestone.status === "ACTIVE" && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                    )}
                    <span className="text-xs font-plex font-bold tracking-widest text-slate-light">
                      [STATUS: {milestone.status}]
                    </span>
                  </div>
                  <div className="text-slate-light text-sm font-semibold mb-1">{milestone.date}</div>
                  <div className="flex items-center md:items-start md:justify-end gap-2 text-copper">
                    <Icon className="w-4 h-4 md:hidden" />
                    <span className="text-sm font-medium font-plex tracking-wider">[Entity: {milestone.company}]</span>
                    <Icon className="w-4 h-4 hidden md:block" />
                  </div>
                </div>

                {/* Vertical Divider (Desktop) */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-cobalt bg-white z-10"></div>
                  <div className="w-px h-full bg-gray-200 -mt-1 group-last:bg-transparent"></div>
                </div>

                {/* Right side: Content */}
                <div className="md:w-2/3 pb-8 md:pb-12 group-last:pb-0">
                  <h3 className="text-xl font-bold text-slate mb-4">
                    {milestone.role}
                  </h3>
                  
                  <ul className="space-y-4">
                    {details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-sm bg-cobalt flex-shrink-0"></span>
                        <p className="text-slate-light leading-relaxed">
                          <TokenText>{detail}</TokenText>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

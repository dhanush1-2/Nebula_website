"use client";

import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const milestones = [
  {
    role: "Research Assistant – AI & LLM Engineering",
    company: "Indiana University, Kelley School of Business",
    date: "June 2025 – Present",
    type: "experience",
    icon: Briefcase,
    color: "pulsar",
    details: [
      "Designed and deployed an end-to-end LLM pipeline adopted daily by faculty, combining RAG, information retrieval, and automated evaluation.",
      "Reduced AI output inaccuracies 30–40% by iterating on retrieval configurations and prompt engineering strategies.",
      "Defined KPI thresholds and success metrics for AI model outputs, enabling reproducible benchmarking."
    ]
  },
  {
    role: "AWS Certified AI Practitioner",
    company: "Amazon Web Services",
    date: "2024",
    type: "certification",
    icon: Award,
    color: "supernova",
    details: [
      "Official credential validating overall understanding of AI, ML, and generative AI concepts and use cases on AWS."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-20 px-4 bg-obsidian border-t border-pulsar/10 overflow-hidden">
      <div className="max-w-4xl mx-auto z-10 relative flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-neutron uppercase tracking-wide">
            The <span className="text-pulsar text-glow-pulsar">Flight Log</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Trajectory Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-pulsar/20 transform md:-translate-x-1/2 rounded-full hidden sm:block">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-pulsar via-pulsar to-transparent shadow-[0_0_10px_#00F0FF]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const Icon = milestone.icon;
              const accentColor = milestone.color === "pulsar" ? "text-pulsar border-pulsar/50 shadow-[0_0_15px_rgba(0,240,255,0.2)]" : "text-supernova border-supernova/50 shadow-[0_0_15px_rgba(255,69,0,0.2)]";
              const glowColor = milestone.color === "pulsar" ? "bg-pulsar" : "bg-supernova";

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                  
                  {/* Timeline Node */}
                  <div className={`absolute left-[15px] sm:left-[39px] md:left-1/2 w-12 h-12 rounded-full border-2 bg-obsidian flex items-center justify-center transform -translate-x-1/2 z-20 ${accentColor}`}>
                    <Icon className={`w-5 h-5 ${milestone.color === "pulsar" ? "text-pulsar" : "text-supernova"}`} />
                    {/* Pulsing ring */}
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute w-full h-full rounded-full ${glowColor} opacity-20`}
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="ml-16 sm:ml-24 md:ml-0 md:w-1/2"
                  >
                    <div className="p-6 md:p-8 rounded-xl bg-pulsar/5 border border-pulsar/10 hover:border-pulsar/30 transition-colors relative backdrop-blur-sm">
                      <div className={`text-xs font-mono mb-2 ${milestone.color === "pulsar" ? "text-pulsar" : "text-supernova"}`}>
                        {milestone.date}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-neutron mb-1">
                        {milestone.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-neutron/70 mb-4 tracking-wide uppercase">
                        {milestone.company}
                      </h4>
                      <ul className="space-y-3">
                        {milestone.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-neutron/60 text-sm leading-relaxed">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${glowColor}`} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const skills = {
  core: [
    "LangChain", "FAISS", "RAG Pipelines", "LLM Fine-tuning", "Prompt Eng.", "Agentic Workflows"
  ],
  middle: [
    "PyTorch", "scikit-learn", "XGBoost", "SentenceTransformers", "Model Eval"
  ],
  outer: [
    "Python", "FastAPI", "Docker", "AWS", "Neo4j", "SQL", "CI/CD"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 bg-obsidian overflow-hidden border-t border-pulsar/10">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pulsar/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between z-10 gap-16">
        
        {/* Left: Text & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-neutron uppercase tracking-wide">
              Tech <span className="text-pulsar text-glow-pulsar">Specs</span>
            </h2>
          </div>
          <p className="text-neutron/60 leading-relaxed mb-8">
            My technology stack is visualized as an orbital system. The inner core consists of 
            cutting-edge AI & LLM Engineering, expanding into Machine Learning, and supported by a robust 
            gravitational field of Data Engineering and MLOps.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-pulsar mb-2">
                <span className="w-2 h-2 rounded-full bg-pulsar" /> Core
              </h4>
              <p className="text-sm text-neutron/80">{skills.core.join(" • ")}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-bold text-supernova mb-2">
                <span className="w-2 h-2 rounded-full bg-supernova" /> Middle
              </h4>
              <p className="text-sm text-neutron/80">{skills.middle.join(" • ")}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-bold text-neutron mb-2">
                <span className="w-2 h-2 rounded-full bg-neutron" /> Outer
              </h4>
              <p className="text-sm text-neutron/80">{skills.outer.join(" • ")}</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Orbital Rings */}
        <div className="w-full md:w-2/3 relative flex items-center justify-center min-h-[500px]">
          
          {/* Inner Core (AI & LLM) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full border border-pulsar/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.1)] group/ring"
          >
             {skills.core.map((skill, i) => {
               const angle = (360 / skills.core.length) * i;
               return (
                 <div
                   key={skill}
                   className="absolute"
                   style={{ transform: `rotate(${angle}deg) translateY(calc(-1 * clamp(90px, 15vw, 100px)))` }}
                 >
                   <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                     className="whitespace-nowrap text-xs font-mono text-pulsar bg-obsidian px-3 py-1.5 border border-pulsar/50 rounded-md cursor-pointer hover:bg-pulsar hover:text-obsidian hover:scale-110 transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                   >
                     {skill}
                   </motion.div>
                 </div>
               )
             })}
          </motion.div>

          {/* Middle Ring (Machine Learning) */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-supernova/30 flex items-center justify-center group/ring"
          >
             {skills.middle.map((skill, i) => {
               const angle = (360 / skills.middle.length) * i;
               return (
                 <div
                   key={skill}
                   className="absolute"
                   style={{ transform: `rotate(${angle}deg) translateY(calc(-1 * clamp(140px, 25vw, 175px)))` }}
                 >
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                     className="whitespace-nowrap text-xs font-mono text-supernova bg-obsidian px-3 py-1.5 border border-supernova/50 rounded-md cursor-pointer hover:bg-supernova hover:text-obsidian hover:scale-110 transition-all shadow-[0_0_10px_rgba(255,69,0,0.2)]"
                   >
                     {skill}
                   </motion.div>
                 </div>
               )
             })}
          </motion.div>

          {/* Outer Ring (MLOps & Data) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full border border-neutron/20 flex items-center justify-center border-dashed group/ring"
          >
             {skills.outer.map((skill, i) => {
               const angle = (360 / skills.outer.length) * i;
               return (
                 <div
                   key={skill}
                   className="absolute"
                   style={{ transform: `rotate(${angle}deg) translateY(calc(-1 * clamp(190px, 35vw, 250px)))` }}
                 >
                   <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                     className="whitespace-nowrap text-xs font-mono text-neutron bg-obsidian px-3 py-1.5 border border-neutron/30 rounded-md cursor-pointer hover:bg-neutron hover:text-obsidian hover:scale-110 transition-all shadow-[0_0_10px_rgba(224,230,237,0.1)]"
                   >
                     {skill}
                   </motion.div>
                 </div>
               )
             })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

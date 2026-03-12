"use client";

import { motion } from "framer-motion";
import { ScanFace, MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 bg-obsidian border-t border-pulsar/10">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Column - Bioscan */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 relative flex flex-col items-center justify-center"
        >
          <div className="relative p-1 rounded-2xl bg-gradient-to-b from-pulsar/40 to-obsidian border border-pulsar/20">
            <div className="absolute inset-0 bg-pulsar/5 blur-xl rounded-2xl" />
            
            <div className="relative bg-obsidian rounded-xl p-8 border border-pulsar/30 flex flex-col items-center text-center shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              {/* Animated Scanner Line */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-pulsar/50 shadow-[0_0_8px_#00F0FF] z-20 pointer-events-none"
              />
              
              <ScanFace className="w-16 h-16 text-pulsar mb-6" />
              
              <h3 className="text-xl font-bold text-neutron tracking-widest uppercase mb-1">Subject</h3>
              <p className="text-pulsar font-mono text-sm tracking-widest mb-6">DHANUSH C.</p>
              
              <div className="w-full space-y-4 text-left font-mono text-sm">
                <div className="flex justify-between border-b border-pulsar/20 pb-2">
                  <span className="text-neutron/60">STATUS:</span>
                  <span className="text-pulsar">ACTIVE</span>
                </div>
                <div className="flex justify-between border-b border-pulsar/20 pb-2">
                  <span className="text-neutron/60">CLASS:</span>
                  <span className="text-neutron">AI ENGINEER</span>
                </div>
                <div className="flex justify-between border-b border-pulsar/20 pb-2">
                  <span className="text-neutron/60">RANK:</span>
                  <span className="text-supernova">MASTER</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Mission Profile */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-neutron uppercase tracking-wide">
              Mission <span className="text-pulsar text-glow-pulsar">Profile</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-pulsar/50 to-transparent" />
          </div>

          <div className="space-y-6 text-neutron/80 leading-relaxed text-lg">
            <p>
              My journey began in the tech capital of India, Bangalore, where I established a rigid foundation in Computer Science, graduating with an 8.51 CGPA.
            </p>
            <p>
              Currently, my primary deployment is at the <span className="text-pulsar font-semibold">Indiana University, Kelley School of Business</span>, pursuing an M.S. in Data Science (3.71 GPA). Here, I architect and deploy end-to-end LLM pipelines adopted daily by faculty.
            </p>
            <p>
              I specialize in combining deep prompt engineering with robust software engineering to deliver reliable, evaluated AI systems at scale. By reducing hallucinations and creating rigorous evaluation benchmarks, I turn chaotic language models into structured, mission-critical assets.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
             <div className="p-4 border border-pulsar/20 rounded-lg bg-pulsar/5 flex flex-col items-start hover:border-pulsar/50 transition-colors">
               <MapPin className="w-6 h-6 text-pulsar mb-2" />
               <h4 className="text-sm font-bold text-neutron uppercase">Origin/Base</h4>
               <p className="text-xs text-neutron/60 mt-1">Bangalore → Bloomington, IN</p>
             </div>
             <div className="p-4 border border-pulsar/20 rounded-lg bg-pulsar/5 flex flex-col items-start hover:border-pulsar/50 transition-colors">
               <GraduationCap className="w-6 h-6 text-pulsar mb-2" />
               <h4 className="text-sm font-bold text-neutron uppercase">Academics</h4>
               <p className="text-xs text-neutron/60 mt-1">M.S. Data Science (3.71 GPA)</p>
             </div>
             <div className="p-4 border border-supernova/20 rounded-lg bg-supernova/5 flex flex-col items-start hover:border-supernova/50 transition-colors">
               <Briefcase className="w-6 h-6 text-supernova mb-2" />
               <h4 className="text-sm font-bold text-neutron uppercase">Current Deployment</h4>
               <p className="text-xs text-neutron/60 mt-1">Research Asst. @ Kelley</p>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

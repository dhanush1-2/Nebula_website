"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Terminal, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-32 px-4 bg-obsidian border-t border-pulsar/20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-pulsar/50 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-supernova/10 border border-supernova/30 mb-6 shadow-[0_0_20px_rgba(255,69,0,0.2)]">
            <Terminal className="w-6 h-6 text-supernova" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutron uppercase tracking-wide">
            Open <span className="text-supernova text-glow-supernova">Frequency</span>
          </h2>
          <p className="text-neutron/60 mt-4 max-w-2xl mx-auto leading-relaxed">
            Ready to deploy enterprise-grade AI solutions? Open a comm channel. Provide your coordinates or transmit a direct message below.
          </p>
        </motion.div>

        {/* Uplink Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-2xl bg-[#080d14] rounded-2xl border border-pulsar/30 shadow-[0_0_50px_rgba(0,240,255,0.05)] overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-obsidian border-b border-pulsar/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-supernova/80" />
              <div className="w-3 h-3 rounded-full bg-supernova/40" />
              <div className="w-3 h-3 rounded-full bg-supernova/20" />
            </div>
            <div className="text-xs font-mono text-pulsar/60">UPLINK_TERMINAL_v1.0</div>
          </div>

          <div className="p-8 md:p-12 flex flex-col gap-6">
            
            <a 
              href="mailto:dchandr@iu.edu"
              className="group relative flex items-center justify-center gap-3 w-full py-4 rounded-lg bg-pulsar/10 border border-pulsar/30 hover:bg-pulsar hover:border-pulsar hover:text-obsidian transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              <Mail className="w-5 h-5 text-pulsar group-hover:text-obsidian transition-colors" />
              <span className="font-mono font-bold text-neutron group-hover:text-obsidian transition-colors tracking-widest">
                TRANSMIT SECURE EMAIL (dchandr@iu.edu)
              </span>
            </a>

            <div className="flex items-center gap-4 text-neutron/40 text-xs font-mono uppercase w-full my-2">
              <div className="flex-1 h-px bg-pulsar/20" />
              <div className="flex-1 h-px bg-pulsar/20" />
            </div>

            <a 
              href="https://www.linkedin.com/in/dhanush-chandra-shekar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full py-4 rounded-lg bg-obsidian border border-neutron/20 hover:border-pulsar/60 hover:bg-pulsar/5 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-neutron/80 group-hover:text-pulsar transition-colors" />
              <span className="font-mono font-bold text-neutron/80 group-hover:text-pulsar transition-colors tracking-widest">
                CONNECT TO PROFESSIONAL GRID (LINKEDIN)
              </span>
            </a>

          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <p className="text-xs text-neutron/40 font-mono tracking-widest">
            © {new Date().getFullYear()} DHANUSH C. || NEURAL NEBULA SYSTEM
          </p>
        </div>

      </div>
    </section>
  );
}

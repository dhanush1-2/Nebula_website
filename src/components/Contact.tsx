"use client";

import { Terminal, Download, Mail } from "lucide-react";
import NeuralFooter from "@/components/NeuralFooter";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-4 bg-white relative overflow-hidden scroll-mt-24">
      
      {/* Grid Pattern specific to footer */}
      <div className="absolute inset-0 max-w-4xl mx-auto opacity-50 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Terminal Header */}
        <div className="w-full bg-slate text-white text-[10px] font-plex px-4 py-2 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3" />
            <span>SYSTEM_MESSAGE // 0xFINAL</span>
          </div>
          <span className="opacity-50 text-green-400 animate-pulse">Connection: Secure</span>
        </div>

        {/* Message Body */}
        <div className="w-full bg-white border-x border-b border-gray-200 rounded-b-lg p-8 md:p-12 shadow-sm text-center">
          <p className="text-slate-light leading-relaxed mb-8">
            <span className="text-copper font-plex font-bold mr-2">[SYS]:</span>
            End of Dhanush&#39;s Archive. The system is standing by to initiate deployment or transmit further documentation. Would you like to proceed?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:dhanush12232002@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 group bg-cobalt text-white px-6 py-3 rounded hover:bg-cobalt/90 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              <span className="font-plex text-sm font-bold">[Execute_Contact]</span>
            </a>
            
            <a 
              href="/Dhanush_AI_Engineer.pdf"
              download="Dhanush_AI_Engineer.pdf"
              className="w-full sm:w-auto flex items-center justify-center gap-2 group bg-white text-slate border border-gray-200 px-6 py-3 rounded hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-copper group-hover:-translate-y-1 transition-transform" />
              <span className="font-plex text-sm font-bold">[Download_Weights]</span>
            </a>
          </div>
        </div>

        {/* Neural Graph Footer */}
        <NeuralFooter />
        <p className="text-gray-400 font-plex text-[10px] uppercase tracking-widest mt-8 text-center pb-8 border-t border-gray-200 pt-8 w-full max-w-4xl mx-auto">
          © {new Date().getFullYear()} Dhanush Chandra Shekar // ALL SYSTEMS NOMINAL
        </p>

      </div>
    </section>
  );
}

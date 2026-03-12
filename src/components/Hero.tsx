"use client";

import { motion } from "framer-motion";
import BlackHoleDataVis from "./BlackHoleDataVis";
import { Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden bg-obsidian pt-16">
      <div className="absolute inset-0 z-0">
        <BlackHoleDataVis />
      </div>
      
      <div className="z-10 text-center md:text-left px-4 sm:px-8 max-w-2xl md:ml-12 pointer-events-none mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-full border border-pulsar/30 bg-black/40 backdrop-blur-md">
            <Terminal className="w-6 h-6 md:w-8 md:h-8 text-pulsar" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-neutron mb-2 md:mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            Dhanush <span className="text-pulsar text-glow-pulsar block md:inline mt-2 md:mt-0">Chandra Shekar</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-neutron/80 font-light mb-4 md:mb-6 tracking-wide drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            Navigating the AI Frontier
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutron/70 mb-8 md:mb-10 leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] max-w-md md:max-w-full">
            Building RAG pipelines, Agentic workflows, and Fine-tuned models to turn the chaos of data into organized intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto w-full sm:w-auto mt-2 px-4 sm:px-0">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 69, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 rounded-md bg-supernova text-obsidian font-semibold transition-all relative overflow-hidden group text-center"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              <span className="relative z-10">Initiate Contact</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Dhanush_Resume.docx"
              download="Dhanush_Chandra_Shekar_Resume.docx"
              className="w-full sm:w-auto px-8 py-3 rounded-md border border-pulsar text-pulsar hover:bg-pulsar/10 transition-all backdrop-blur-sm text-center flex items-center justify-center gap-2"
            >
               Download Resume ↓
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 rounded-md border border-neutron/30 text-neutron/80 hover:bg-white/5 transition-all backdrop-blur-sm text-center"
            >
              View Star Map
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

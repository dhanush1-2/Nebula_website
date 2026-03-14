"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, Code2, Briefcase, User, Mail, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "/") {
        // Prevent default only if we aren't already typing in an input
        if (
          document.activeElement?.tagName !== "INPUT" &&
          document.activeElement?.tagName !== "TEXTAREA"
        ) {
          e.preventDefault();
          setOpen(true);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate/20 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              <Command 
                className="w-full h-full flex flex-col"
                loop
              >
                <div className="flex items-center border-b border-gray-100 px-4 py-3 gap-3">
                  <Search className="w-5 h-5 text-cobalt" />
                  <Command.Input 
                    autoFocus
                    placeholder="Query system (e.g., 'Skills', 'Education', 'Projects')" 
                    className="flex-1 bg-transparent text-slate placeholder:text-gray-400 outline-none font-plex text-sm"
                  />
                  <div className="flex items-center gap-1">
                    <kbd className="bg-gray-100 text-gray-500 rounded px-1.5 py-0.5 text-[10px] font-bold font-plex shadow-sm border border-gray-200">
                      ESC
                    </kbd>
                  </div>
                </div>

                <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-200">
                  <Command.Empty className="py-6 text-center text-sm text-slate-light font-plex">
                    No results found in latent space.
                  </Command.Empty>

                  <Command.Group heading="Navigation Nodes" className="text-xs font-bold text-gray-400 font-plex uppercase tracking-wider px-2 py-2">
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollToSection("hero"))}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer text-sm text-slate hover:bg-gray-50 aria-selected:bg-cobalt/10 aria-selected:text-cobalt transition-colors"
                    >
                      <User className="w-4 h-4" />
                      System Prompt (Hero)
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollToSection("about"))}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer text-sm text-slate hover:bg-gray-50 aria-selected:bg-cobalt/10 aria-selected:text-cobalt transition-colors"
                    >
                      <Briefcase className="w-4 h-4" />
                      Personnel Profile (About & Education)
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollToSection("tech-skills"))}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer text-sm text-slate hover:bg-gray-50 aria-selected:bg-cobalt/10 aria-selected:text-cobalt transition-colors"
                    >
                      <Code2 className="w-4 h-4" />
                      Technical Architecture (Skills)
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollToSection("projects"))}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer text-sm text-slate hover:bg-gray-50 aria-selected:bg-cobalt/10 aria-selected:text-cobalt transition-colors"
                    >
                      <Database className="w-4 h-4" />
                      Knowledge Nodes (Projects)
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollToSection("experience"))}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer text-sm text-slate hover:bg-gray-50 aria-selected:bg-cobalt/10 aria-selected:text-cobalt transition-colors"
                    >
                      <Briefcase className="w-4 h-4" />
                      Deployment Log (Experience)
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => runCommand(() => scrollToSection("contact"))}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer text-sm text-slate hover:bg-gray-50 aria-selected:bg-cobalt/10 aria-selected:text-cobalt transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Initiate Deployment (Contact)
                    </Command.Item>
                  </Command.Group>

                  <Command.Group heading="External Links" className="text-xs font-bold text-gray-400 font-plex uppercase tracking-wider px-2 py-2 mt-2">
                    <Command.Item 
                      onSelect={() => runCommand(() => window.open("/Dhanush_Resume.docx", "_blank"))}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer text-sm text-slate hover:bg-gray-50 aria-selected:bg-copper/10 aria-selected:text-copper transition-colors"
                    >
                      <Database className="w-4 h-4" />
                      Download Model Weights (Resume)
                    </Command.Item>
                  </Command.Group>

                </Command.List>

                {/* Footer bar */}
                <div className="bg-gray-50 border-t border-gray-100 flex items-center justify-between px-4 py-2">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 opacity-50">
                      <kbd className="bg-white border border-gray-200 rounded px-1 py-0.5 text-[10px]">&uarr;</kbd>
                      <kbd className="bg-white border border-gray-200 rounded px-1 py-0.5 text-[10px]">&darr;</kbd>
                      <span className="text-[10px] text-gray-500 font-plex">Navigate</span>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-50">
                      <kbd className="bg-white border border-gray-200 rounded px-1 py-0.5 text-[10px] font-plex">ENTER</kbd>
                      <span className="text-[10px] text-gray-500 font-plex">Execute</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-cobalt font-bold font-plex uppercase tracking-widest">
                    Agnentic CMD Interface
                  </span>
                </div>
              </Command>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

type Message = {
  id: string;
  text: string;
  isCommand: boolean;
};

const COMMANDS: Record<string, string> = {
  help: "AVAILABLE COMMANDS:\n- about     : Load mission profile\n- skills    : Access technical specifications\n- projects  : View Star Map systems\n- contact   : Open communications frequency\n- clear     : Purge terminal history",
  about: "SUBJECT: Dhanush C. [AI Engineer]\nSTATUS: ACTIVE\nDEPLOYMENT: Indiana University (M.S. Data Science) & Kelley School of Business (Research Assistant). Building RAG pipelines & Agentic workflows.",
  skills: "CORE: LangChain, FAISS, RAG Pipelines, LLM Fine-tuning, Prompt Eng.\nMIDDLE: PyTorch, scikit-learn, XGBoost.\nOUTER: Python, FastAPI, Docker, AWS, Neo4j.",
  projects: "NOTABLE SYSTEMS:\n1. GraphRAG Financial Knowledge Navigator\n2. LodeAI - Agentic AI Platform\n3. Fine-Tuned LLM System (65% Hallucination Reduction)",
  contact: "UPLINK PROTCOLS:\nEmail: dchandr@iu.edu\nLinkedIn: https://www.linkedin.com/in/dhanush-chandra-shekar/",
  sudo: "ACCESS DENIED. This incident will be reported.",
  whoami: "guest@neural-nebula"
};

export default function TerminalWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "init", text: "NEURAL NEBULA OS v1.0.0\nType 'help' to see available commands.", isCommand: false }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    
    // Add command to history
    const newMessages = [...messages, { id: Date.now().toString(), text: `guest@nebula:~$ ${cmd}`, isCommand: true }];
    
    if (cmd === "clear") {
      setMessages([{ id: Date.now().toString(), text: "Terminal cleared.", isCommand: false }]);
      setInput("");
      return;
    }

    const response = COMMANDS[cmd] || `bash: ${cmd}: command not found`;
    
    // Add response
    newMessages.push({ id: (Date.now() + 1).toString(), text: response, isCommand: false });
    
    setMessages(newMessages);
    setInput("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-obsidian border border-pulsar/50 flex items-center justify-center text-pulsar shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-pulsar hover:text-obsidian transition-colors"
          >
            <TerminalIcon className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[500px] h-[400px] bg-[#05050A]/95 backdrop-blur-md rounded-xl border border-pulsar/40 shadow-[0_0_40px_rgba(0,240,255,0.15)] flex flex-col overflow-hidden"
          >
            {/* Header bar */}
            <div className="h-10 bg-[#0a0f18] border-b border-pulsar/20 flex items-center justify-between px-4">
              <div className="flex items-center gap-2 text-pulsar/60 text-xs font-mono">
                <TerminalIcon className="w-4 h-4" />
                NEURAL_UPLINK.exe
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => setIsOpen(false)} className="text-neutron/40 hover:text-supernova transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <div className="text-neutron/40 hover:text-neutron transition-colors">
                  <Square className="w-3 h-3" />
                </div>
                <button onClick={() => setIsOpen(false)} className="text-neutron/40 hover:text-supernova transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-3 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`whitespace-pre-wrap ${msg.isCommand ? "text-pulsar font-bold" : "text-neutron/80"}`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Line */}
            <form onSubmit={handleCommand} className="border-t border-pulsar/20 p-4 bg-[#05050A] flex items-center gap-2 font-mono text-sm">
              <span className="text-supernova font-bold">guest@nebula:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-neutron placeholder-neutron/30"
                placeholder="type a command..."
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 240, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 240, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 240, 255, 0.4);
        }
      `}</style>
    </>
  );
}

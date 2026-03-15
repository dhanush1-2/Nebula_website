"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Database } from "lucide-react";

export default function NeuralFooter() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Nodes for the graph. Positioned relatively using percentages.
  const nodes = [
    { id: "dhanush", x: 50, y: 50, label: "[Entity: Dhanush]", type: "core", icon: null, href: null },
    { id: "linkedin", x: 20, y: 20, label: "LinkedIn", type: "social", icon: Linkedin, href: "https://www.linkedin.com/in/dhanush-chandra-shekar-85a2101b0/" },
    { id: "github", x: 80, y: 20, label: "GitHub", type: "social", icon: Github, href: "https://github.com/dhanush1-2" },
    { id: "email", x: 50, y: 85, label: "dhanush12232002@gmail.com", type: "social", icon: Mail, href: "mailto:dhanush12232002@gmail.com" },
    { id: "skill_rag", x: 20, y: 70, label: "RAG & Agents", type: "skill", icon: Code2, href: null },
    { id: "skill_data", x: 80, y: 70, label: "Data Pipelines", type: "skill", icon: Database, href: null },
  ];

  // Connections between nodes
  const links = [
    { source: "dhanush", target: "linkedin" },
    { source: "dhanush", target: "github" },
    { source: "dhanush", target: "email" },
    { source: "dhanush", target: "skill_rag" },
    { source: "dhanush", target: "skill_data" },
    { source: "linkedin", target: "skill_rag" }, // Highlight linked skills
    { source: "github", target: "skill_data" },
  ];

  const isConnected = (source: string, target: string) => {
    if (!hoveredNode) return false;
    return (hoveredNode === source || hoveredNode === target);
  };

  return (
      <div className="w-full h-80 relative mt-16 max-w-4xl mx-auto" data-semantic-tag="[Graph: Contact_Nodes]">
        
        <p className="absolute top-0 left-4 text-[10px] font-plex text-gray-400 uppercase tracking-widest">
          Knowledge Graph Output:
        </p>

        {/* Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none mt-4">
          {links.map((link, i) => {
            const sourceNode = nodes.find(n => n.id === link.source)!;
            const targetNode = nodes.find(n => n.id === link.target)!;
            const active = isConnected(link.source, link.target);

            return (
              <motion.line
                key={i}
                x1={`${sourceNode.x}%`} y1={`${sourceNode.y}%`}
                x2={`${targetNode.x}%`} y2={`${targetNode.y}%`}
                stroke={active ? "#2E5BFF" : "#E5E7EB"}
                strokeWidth={active ? 2 : 1}
                animate={{
                  stroke: active ? "#2E5BFF" : "#E5E7EB",
                  strokeWidth: active ? 2 : 1
                }}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0 mt-4">
          {nodes.map(node => {
            const Icon = node.icon;
            const isHovered = hoveredNode === node.id;
            return (
              <motion.a
                key={node.id}
                href={node.href || undefined}
                target={node.href?.startsWith("http") ? "_blank" : undefined}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group ${node.href ? 'cursor-pointer' : 'cursor-default'}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                animate={{ scale: isHovered ? 1.1 : 1 }}
              >
                <div 
                  className={`flex items-center justify-center rounded-full border transition-colors ${
                    node.type === "core" ? "w-4 h-4 bg-cobalt border-cobalt shadow-[0_0_10px_rgba(46,91,255,0.4)]" :
                    node.type === "social" ? "w-12 h-12 bg-white border-gray-200 text-slate hover:border-cobalt hover:text-cobalt shadow-sm" :
                    "w-10 h-10 bg-gray-50 border-gray-100 text-gray-400"
                  } ${isHovered && node.type !== "core" ? "border-cobalt text-cobalt bg-blue-50/50" : ""}`}
                >
                  {Icon && <Icon className={node.type === "social" ? "w-5 h-5" : "w-4 h-4"} />}
                </div>
                
                {/* Tooltip */}
                <div className="absolute top-full mt-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <span className="text-[10px] font-plex bg-slate/90 text-white px-2.5 py-1.5 rounded shadow-sm">
                    {node.label}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
  );
}

import { Database, Network, Code2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import NeuralDecrypt from "@/components/NeuralDecrypt";
import OptimizingCard from "@/components/OptimizingCard";

// We don't need cardVariants for Skills anymore since OptimizingCard handles the scroll-in animation

const skills = [
  {
    title: "Neural AI & LLM Core",
    meta: "Inference Engine",
    icon: Code2,
    items: [
      "LangChain",
      "FAISS Vector DB",
      "RAG Pipelines",
      "LLM Fine-tuning",
      "Prompt Engineering",
      "Agentic Workflows",
    ],
    color: "cobalt"
  },
  {
    title: "Algorithmic Models",
    meta: "Pattern Recognition",
    icon: Database,
    items: [
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "SentenceTransformers",
      "Model Evaluation",
    ],
    color: "copper"
  },
  {
    title: "Data Orchestration",
    meta: "MLOps & Infrastructure",
    icon: Network,
    items: [
      "Python",
      "FastAPI",
      "Docker",
      "AWS",
      "Neo4j",
      "PostgreSQL",
      "CI/CD Pipelines",
    ],
    color: "slate"
  },
];

export default function Skills() {
  return (
    <section id="tech-skills" className="w-full py-24 px-4 bg-white border-t border-gray-100 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate tracking-tight mb-2">
            <NeuralDecrypt text="Technical Architecture" speed={20} />
          </h2>
          <p className="text-slate-light font-plex text-sm max-w-2xl mt-4">
            The core infrastructure, frameworks, and methodologies utilized across my deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, index) => {
            const Icon = group.icon;
            // Map the semantic color names to tailwind classes for the icon container
            const iconBgClass = 
              group.color === "cobalt" ? "bg-cobalt/10 text-cobalt border-cobalt/20" :
              group.color === "copper" ? "bg-copper/10 text-copper border-copper/20" :
              "bg-slate/10 text-slate border-slate/20";
            
            return (
              <OptimizingCard
                key={index}
                delay={index * 0.15}
                whileHover={{ rotateX: 2, rotateY: -2, zIndex: 10, scale: 1.02 }}
                className="transform-gpu perspective-1000 flex flex-col h-full bg-white transition-colors"
              >
                {/* Card Header matching Projects.tsx */}
                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-slate leading-tight">
                      {group.title}
                    </h3>
                    <div className={`w-8 h-8 rounded mb-1 flex items-center justify-center ${iconBgClass}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Meta Tag */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-plex text-slate-light">
                      {group.meta}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 bg-white">
                  <ul className="space-y-4">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-center text-slate-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper mr-3 flex-shrink-0 relative overflow-hidden">
                           <span className="absolute inset-0 bg-copper animate-ping opacity-50"></span>
                        </span>
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </OptimizingCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}

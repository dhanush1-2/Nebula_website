"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitMerge, FileText, Database, Network } from "lucide-react";
import { useXAI } from "@/context/XAIContext";
import TokenText from "@/components/TokenText";
import InferenceProgress from "@/components/InferenceProgress";
import OptimizingCard from "@/components/OptimizingCard";

const customProjects = [
  {
    id: 1,
    name: "GraphRAG Financial Knowledge Navigator",
    technicalDescription: "Hybrid RAG pipeline combining Neo4j (3,422 entities) and ChromaDB vector search to ingest 1,605 SEC filings. Achieved superior performance vs baselines with a 46-benchmark evaluation suite.",
    storyDescription: "Built a financial search engine that connects over 3,400 data points from SEC documents, making it incredibly easy for users to find the exact financial details they are looking for.",
    html_url: "https://github.com/dhanush1-2/GraphRAG",
    topics: ["Python", "Neo4j", "ChromaDB", "Claude API", "SEC EDGAR API"],
    telemetry: { signal: "Superiority via 46-Bench", latency: "<1.2s Graph Path" },
    logicFlow: [
      { icon: FileText, label: "SEC EDGAR" },
      { icon: Network, label: "Neo4j Graph" },
      { icon: Database, label: "ChromaDB" }
    ]
  },
  {
    id: 2,
    name: "RAG-Based LLM System",
    technicalDescription: "Orchestrated LangChain and FAISS vector search system boasting 87% context-aware accuracy. Reduced hallucinations by 65% via LoRA/PEFT fine-tuning on base LLMs.",
    storyDescription: "Created an AI question-answering system that actually studies your documents before answering. fine-tuned the model so it stops making up fake information (hallucinating) 65% of the time.",
    html_url: "https://github.com/dhanush1-2/Finance-Article-Question-Answer-Application",
    topics: ["LangChain", "FAISS", "Hugging Face", "OpenAI", "LoRA/PEFT"],
    telemetry: { signal: "87% Context Accuracy", latency: "<800ms Retrieval" },
    logicFlow: [
      { icon: FileText, label: "PDF Docs" },
      { icon: Database, label: "FAISS Index" },
      { icon: GitMerge, label: "LangChain" }
    ]
  },
  {
    id: 3,
    name: "LodeAI",
    technicalDescription: "Zero-to-one agentic AI platform featuring multi-step LLM orchestration and automated evaluation gates. Deployed to production using Docker, PostgreSQL, and full CI/CD deployment pipelines.",
    storyDescription: "Launched a fully working AI software platform from scratch. It acts like an intelligent agent capable of evaluating technical answers automatically and is built to scale in real-world servers.",
    html_url: "https://github.com/dhanush1-2/AI-Technical-Assessment-Generator",
    topics: ["FastAPI", "OpenAI", "LangChain", "Docker", "PostgreSQL"],
    telemetry: { signal: "100% Eval Pass", latency: "<2s Agent Route" },
    logicFlow: [
      { icon: User, label: "Prompt" },
      { icon: GitMerge, label: "Agent" },
      { icon: Network, label: "Evaluator" }
    ]
  },
  {
    id: 4,
    name: "Demand Forecasting",
    technicalDescription: "Built robust demand forecasting models benchmarking XGBoost and LightGBM with MLflow experiment tracking (MAE: 0.2575). Monitored for drift using Evidently AI.",
    storyDescription: "Developed machine learning models to accurately predict future demand based on past data, allowing for highly optimized inventory and resource planning without guesswork.",
    html_url: "https://github.com/dhanush1-2/Demand-Forecasting.git",
    topics: ["XGBoost", "LightGBM", "MLflow", "Evidently AI", "AWS SageMaker"],
    telemetry: { signal: "0.2575 MAE Precision", latency: "<200ms Inference" },
    logicFlow: [
      { icon: Database, label: "Data Source" },
      { icon: Network, label: "XGBoost" },
      { icon: FileText, label: "Forecast" }
    ]
  },
  {
    id: 5,
    name: "InsightFlow",
    technicalDescription: "Automated a multi-source ELT pipeline using Apache Airflow and dbt, reducing data processing time by 65% with zero manual intervention.",
    storyDescription: "Built a fully automated data pipeline that gathers information from multiple sources and processes it instantly, saving significant manual work hours and reducing human error.",
    html_url: "https://github.com/dhanush1-2/InsightFlow",
    topics: ["SQL", "PostgreSQL", "dbt", "Airflow", "Tableau"],
    telemetry: { signal: "65% Time Reduced", latency: "Cron Automation" },
    logicFlow: [
      { icon: Database, label: "Raw Data" },
      { icon: GitMerge, label: "Airflow/dbt" },
      { icon: Network, label: "Tableau" }
    ]
  },
  {
    id: 6,
    name: "Pricing Optimizer",
    technicalDescription: "Developed an OLS regression demand model evaluating 676 datasets to identify profit-maximizing pricing. Implemented interactive Plotly curves.",
    storyDescription: "Created an interactive tool that analyzes hundreds of historical sales datasets to calculate and identify the exact price point that maximizes overall profit for a product.",
    html_url: "https://github.com/dhanush1-2/Pricing-Stratergy",
    topics: ["statsmodels", "pandas", "NumPy", "Plotly", "Streamlit"],
    telemetry: { signal: "676 Sets Evaluated", latency: "Real-time Plots" },
    logicFlow: [
      { icon: FileText, label: "Sales Data" },
      { icon: Network, label: "OLS Model" },
      { icon: ExternalLink, label: "Streamlit" }
    ]
  }
];

// Re-using User icon explicitly for the flow
import { User } from "lucide-react";

export default function Projects() {
  const { mode } = useXAI();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [loadingFlowId, setLoadingFlowId] = useState<number | null>(null);

  const toggleLogicFlow = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
      setLoadingFlowId(null);
    } else {
      setExpandedId(id);
      setLoadingFlowId(id); // Start loading state
    }
  };

  return (
    <section id="projects" className="w-full py-24 px-4 bg-gallery relative overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto z-10 relative">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate tracking-tight mb-2">
            Projects
          </h2>
          <p className="text-slate-light font-plex text-sm max-w-2xl">
            Selected case studies demonstrating production-grade AI implementations and data pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {customProjects.map((project, index) => {
            const description = mode === "technical" ? project.technicalDescription : project.storyDescription;
            const isExpanded = expandedId === project.id;
            
            return (
              <OptimizingCard key={project.id} delay={index * 0.1}>
                {/* Card Header */}
                <div className="p-6 border-b border-gray-100 bg-gray-50/50" data-semantic-tag={`[Model: ${project.name}]`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate leading-tight">
                      {project.name}
                    </h3>
                    <a 
                      href={project.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cobalt transition-colors p-1"
                      aria-label="View Source"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  {/* Topics Grid */}
                  <div className="flex flex-wrap gap-2">
                    {project.topics.slice(0,3).map(topic => (
                      <span key={topic} className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-plex text-slate-light">
                        {topic}
                      </span>
                    ))}
                    {project.topics.length > 3 && (
                      <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-plex text-slate-light">
                        +{project.topics.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body - Dual Mode Text */}
                <div className="p-6 flex-1">
                  <div className="text-slate-light text-sm leading-relaxed mb-6 min-h-[80px]">
                    <TokenText>{description}</TokenText>
                  </div>

                  <div className="flex justify-between items-end mt-auto">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Telemetry</span>
                      <span className="text-xs font-plex text-copper font-medium">{project.telemetry.signal}</span>
                      <span className="text-xs font-plex text-cobalt font-medium">{project.telemetry.latency}</span>
                    </div>

                    <button 
                      onClick={() => toggleLogicFlow(project.id)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded transition-colors ${
                        isExpanded ? 'bg-cobalt text-white' : 'bg-gray-100 text-slate hover:bg-gray-200'
                      }`}
                    >
                      {isExpanded ? 'Close Flow' : 'Logic Flow'}
                    </button>
                  </div>
                </div>

                {/* Expansion: Logic Flow Diagram */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100 bg-cobalt-light overflow-hidden"
                    >
                      <div className="p-6">
                        {loadingFlowId === project.id ? (
                           <div className="py-2">
                             <InferenceProgress onComplete={() => setLoadingFlowId(null)} />
                           </div>
                        ) : (
                          <>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-cobalt mb-4 border-b border-cobalt/20 pb-2">
                              System Architecture Flow
                            </p>
                            <div className="flex items-center justify-between relative mt-4">
                              {/* Background Connecting Line */}
                              <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-px bg-cobalt/30 z-0 hidden md:block"></div>
                              
                              {project.logicFlow.map((step, i) => {
                                const StepIcon = step.icon;
                                return (
                                  <div key={i} className="flex flex-col items-center flex-1 relative z-10">
                                    <div className="w-10 h-10 bg-white rounded-full border-2 border-cobalt/30 flex items-center justify-center text-cobalt mb-2 shadow-sm">
                                      <StepIcon className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-plex text-center text-slate font-medium bg-gray-50/50 px-2 py-0.5 rounded">
                                      {step.label}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </OptimizingCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}

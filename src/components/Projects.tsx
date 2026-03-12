"use client";

import { motion } from "framer-motion";
import { Github, Code, ExternalLink } from "lucide-react";

const customProjects = [
  {
    id: 1,
    name: "GraphRAG Financial Knowledge Navigator",
    description: "Hybrid RAG pipeline combining Neo4j (3,422 entities) and ChromaDB vector search to ingest 1,605 SEC filings. Achieved superior performance vs baselines with a 46-benchmark evaluation suite.",
    html_url: "https://github.com/dhanush1-2/GraphRAG",
    topics: ["Python", "Neo4j", "ChromaDB", "Claude API", "SEC EDGAR API"],
    language: "Python",
  },
  {
    id: 2,
    name: "RAG-Based LLM System",
    description: "Orchestrated LangChain and FAISS vector search system boasting 87% context-aware accuracy. Reduced hallucinations by 65% via LoRA/PEFT fine-tuning on base LLMs alongside a structured evaluation framework.",
    html_url: "https://github.com/dhanush1-2/Finance-Article-Question-Answer-Application",
    topics: ["LangChain", "FAISS", "Hugging Face", "OpenAI", "LoRA/PEFT"],
    language: "Python",
  },
  {
    id: 3,
    name: "LodeAI",
    description: "Zero-to-one agentic AI platform featuring multi-step LLM orchestration and automated evaluation gates. Deployed to production using Docker, PostgreSQL, and full CI/CD deployment pipelines.",
    html_url: "https://github.com/dhanush1-2/AI-Technical-Assessment-Generator",
    topics: ["FastAPI", "OpenAI", "LangChain", "Docker", "PostgreSQL"],
    language: "Python",
  },
  {
    id: 4,
    name: "Demand Forecasting",
    description: "Built robust demand forecasting models benchmarking XGBoost and LightGBM with MLflow experiment tracking (MAE: 0.2575). Monitored for drift using Evidently AI and deployed to production on AWS SageMaker.",
    html_url: "https://github.com/dhanush1-2/Demand-Forecasting.git",
    topics: ["XGBoost", "LightGBM", "MLflow", "Evidently AI", "AWS SageMaker"],
    language: "Python",
  },
  {
    id: 5,
    name: "InsightFlow",
    description: "Automated a multi-source ELT pipeline using Apache Airflow and dbt, reducing data processing time by 65% with zero manual intervention. Delivered self-serve KPI tracking through Power BI & Tableau dashboards.",
    html_url: "https://github.com/dhanush1-2/InsightFlow",
    topics: ["SQL", "PostgreSQL", "dbt", "Airflow", "Tableau"],
    language: "Python",
  },
  {
    id: 6,
    name: "Pricing Optimizer",
    description: "Developed an OLS regression demand model evaluating 676 datasets to identify profit-maximizing pricing. Implemented interactive Plotly curves and a 300-point simulation grid to define price elasticity.",
    html_url: "https://github.com/dhanush1-2/Pricing-Stratergy",
    topics: ["statsmodels", "pandas", "NumPy", "Plotly", "Streamlit"],
    language: "Python",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full min-h-screen py-20 px-4 bg-obsidian border-t border-pulsar/10">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neutron uppercase tracking-wide text-center">
            The <span className="text-pulsar text-glow-pulsar">Star Map</span>
          </h2>
          <p className="text-neutron/60 mt-4 text-center max-w-2xl">
            Live neural net synchronization showcasing primary data science & AI deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customProjects.map((repo, index) => {
            // Determine thematic colors based on index
            const isPrimary = index % 3 === 0;
            const isSecondary = index % 3 === 1;
            const themeColor = isPrimary ? "pulsar" : isSecondary ? "supernova" : "neutron";
            
            const borderColor = themeColor === "pulsar" ? "border-pulsar/30" : themeColor === "supernova" ? "border-supernova/30" : "border-neutron/30";
            const hoverBorderColor = themeColor === "pulsar" ? "hover:border-pulsar/80" : themeColor === "supernova" ? "hover:border-supernova/80" : "hover:border-neutron/80";
            const textColor = themeColor === "pulsar" ? "text-pulsar" : themeColor === "supernova" ? "text-supernova" : "text-neutron";
            const shadowColor = themeColor === "pulsar" ? "hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]" : themeColor === "supernova" ? "hover:shadow-[0_0_30px_rgba(255,69,0,0.15)]" : "hover:shadow-[0_0_30px_rgba(224,230,237,0.15)]";

            return (
              <motion.a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col p-8 rounded-xl bg-gradient-to-br from-obsidian to-[#0a0f18] border ${borderColor} ${hoverBorderColor} transition-all duration-300 ${shadowColor} cursor-pointer hover:-translate-y-2`}
              >
                <div className={`absolute inset-0 bg-${themeColor}/5 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full border border-current flex items-center justify-center bg-obsidian ${textColor} shadow-[0_0_15px_currentColor]`}>
                      <Code className="w-5 h-5" />
                    </div>
                    <div className="p-2 rounded-full bg-obsidian/50 group-hover:bg-white/10 text-neutron/60 group-hover:text-neutron transition-colors z-20">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutron mb-3 flex items-center gap-2 break-words line-clamp-2">
                    {repo.name}
                  </h3>
                  
                  <p className="text-neutron/70 text-sm leading-relaxed mb-6 flex-grow">
                    {repo.description}
                  </p>

                  {/* Topics / Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutron/10">
                    <span className={`px-2 py-1 text-xs border border-${themeColor}/30 ${textColor} rounded bg-${themeColor}/10`}>
                      {repo.language}
                    </span>
                    {repo.topics.map((topic, i) => (
                      <span key={i} className="px-2 py-1 text-xs border border-neutron/20 text-neutron/60 rounded bg-obsidian">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  );
}

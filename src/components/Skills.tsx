import { Database, Network, Code2 } from "lucide-react";

const skills = [
  {
    category: "AI & LLM Engineering",
    icon: Network,
    items: ["LangChain", "FAISS", "RAG Pipelines", "LLM Fine-tuning", "Prompt Engineering", "Agentic Workflows"],
    color: "cobalt"
  },
  {
    category: "Machine Learning / Analytics",
    icon: Code2,
    items: ["PyTorch", "scikit-learn", "XGBoost", "LightGBM", "SentenceTransformers", "Model Evaluation"],
    color: "copper"
  },
  {
    category: "MLOps & Data Engineering",
    icon: Database,
    items: ["Python", "FastAPI", "Docker", "AWS", "Neo4j", "PostgreSQL", "CI/CD"],
    color: "slate"
  }
];

export default function Skills() {
  return (
    <section id="tech-skills" className="w-full py-24 px-4 bg-white border-t border-gray-100 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate tracking-tight mb-2">
            Technical Architecture
          </h2>
          <p className="text-slate-light font-plex text-sm max-w-2xl">
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
              <div 
                key={index} 
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg border flex items-center justify-center ${iconBgClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate text-lg leading-tight">
                    {group.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 group/item">
                      <div className="w-4 h-px bg-gray-300 group-hover/item:bg-cobalt transition-colors"></div>
                      <span className="font-plex text-sm text-slate-light group-hover/item:text-slate transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

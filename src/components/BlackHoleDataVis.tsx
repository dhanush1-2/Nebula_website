const dataStars = [
  { id: 1, keyword: "AWS", snippet: "AWS Certified AI Practitioner.", type: "skill" },
  { id: 2, keyword: "Kelley", snippet: "Research Assistant at Indiana University, Kelley School of Business.", type: "experience" },
  { id: 3, keyword: "LangChain", snippet: "Expertise in LangChain and Agentic AI workflows.", type: "skill" },
  { id: 4, keyword: "RAG", snippet: "Built a hybrid GraphRAG pipeline ingesting 1,605 SEC filings.", type: "project" },
  { id: 5, keyword: "FAISS", snippet: "Implemented FAISS vector search for 87% QA accuracy.", type: "skill" },
  { id: 6, keyword: "PyTorch", snippet: "Fine-tuned a base LLM with LoRA/PEFT using PyTorch.", type: "skill" },
  { id: 7, keyword: "LodeAI", snippet: "LodeAI: An end-to-end agentic AI platform.", type: "project" },
  { id: 8, keyword: "Neo4j", snippet: "Extracted 3,422 entities into a Neo4j knowledge graph.", type: "project" },
  { id: 9, keyword: "Data Science", snippet: "M.S. Data Science from Indiana University (3.71 GPA).", type: "education" },
];

export default function BlackHoleDataVis() {
  return (
    <section id="skills" style={{ padding: '2rem', borderBottom: '1px solid #ccc' }}>
      <h2>Skills & Experience Vector Data</h2>
      <ul>
        {dataStars.map((item) => (
          <li key={item.id} style={{ marginBottom: '0.5rem' }}>
            <strong>{item.keyword}</strong> ({item.type}): {item.snippet}
          </li>
        ))}
      </ul>
    </section>
  );
}

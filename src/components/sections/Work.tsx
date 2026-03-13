import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Direct Deposit & Payment Switch",
    category: "Backend Engineering · SoFi",
    description: "Designed and developed backend services for direct deposit switch and payment method switch using Python, REST APIs, and AWS services, streamlining account management processes.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["Python", "REST APIs", "AWS", "Temporal"],
  },
  {
    title: "External Account Linking & ACH Flows",
    category: "FinTech · SoFi",
    description: "Integrated secure external bank account linking using Finicity APIs and engineered ACH micro-deposit flows for ownership verification, enabling compliant fund transfers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Finicity", "ACH", "Temporal", "Kubernetes"],
  },
  {
    title: "RAG Pipeline & Retrieval QA System",
    category: "AI/ML · Research Project",
    description: "Integrated RAG pipeline with OpenAI and LLaMA models to develop a Retrieval QA system across multiple files, leveraging Langchain and ChromaDB to reduce hallucination.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Langchain", "OpenAI", "LLaMA", "ChromaDB"],
  },
  {
    title: "Customer Lifetime Value Modeling",
    category: "AI/ML · TCS",
    description: "Implemented end-to-end CLV modeling solutions using advanced Machine Learning, Survival analysis, and MLFlow to elevate customer lifetime value for client Wiley.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["ML", "MLFlow", "Survival Analysis", "Python"],
  },
  {
    title: "NLP & Transformer Projects",
    category: "AI/ML · Research",
    description: "Executed multiple NLP projects including Transformer-based Machine Translation, BERT-powered Classification, and LSTM-based character-level Language Modeling.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    tags: ["BERT", "Transformers", "LSTM", "NLP"],
  },
  {
    title: "Inverse Reward Design Research",
    category: "Reinforcement Learning · University of Utah",
    description: "Conducted research on Inverse Reward Design utilizing AWS DeepRacer and SageMaker, targeting significant improvements in reward function development efficiency.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    tags: ["AWS DeepRacer", "SageMaker", "RL", "Python"],
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              Featured Projects
            </h2>
          </div>
          <a 
            href="https://github.com/poojith18" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors link-underline"
          >
            View GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-primary text-sm tracking-wider uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl font-medium mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-6 left-6 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full">
                <p className="text-sm font-medium">{project.category.split(' · ')[1]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

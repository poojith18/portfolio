import { Code, Brain, Cloud, Database } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Backend Engineering",
    description: "Building robust, scalable backend services with Python, REST APIs, and event-driven architectures using Temporal.",
    technologies: ["Python", "Java", "FastAPI", "Flask", "Django", "Spring Boot"],
  },
  {
    icon: Brain,
    title: "AI / Machine Learning",
    description: "Developing ML models, NLP pipelines, and reinforcement learning systems for real-world applications.",
    technologies: ["PyTorch", "Langchain", "MLFlow", "NLP", "Computer Vision"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Provisioning infrastructure with Terraform, deploying with Kubernetes, and monitoring with Datadog & Splunk.",
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "Argo CD"],
  },
  {
    icon: Database,
    title: "Data & Databases",
    description: "Designing data architectures across SQL and NoSQL databases, warehouses, and analytics platforms.",
    technologies: ["PostgreSQL", "DynamoDB", "MongoDB", "Snowflake", "Redshift", "BigQuery"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            What I Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Services & Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive skill set spanning backend engineering, AI/ML, cloud infrastructure, and data systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group p-8 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ background: 'var(--gradient-card)' }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <skill.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-medium mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

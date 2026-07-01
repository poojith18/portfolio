import { Brain, Cloud, Code, Database } from "lucide-react";
import type { SkillCategory } from "./types";

export const skillsSection = {
  eyebrow: "What I Do",
  title: "Services & Skills",
  description:
    "A comprehensive skill set spanning backend engineering, AI/ML, cloud infrastructure, and data systems.",
};

export const skills: SkillCategory[] = [
  {
    icon: Code,
    title: "Backend Engineering",
    description:
      "Building robust, scalable backend services with Python, REST APIs, and event-driven architectures using Temporal.",
    technologies: ["Python", "Java", "FastAPI", "Flask", "Django", "Spring Boot"],
  },
  {
    icon: Brain,
    title: "AI / Machine Learning",
    description:
      "Developing ML models, NLP pipelines, and reinforcement learning systems for real-world applications.",
    technologies: ["PyTorch", "Langchain", "MLFlow", "NLP", "Computer Vision"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Provisioning infrastructure with Terraform, deploying with Kubernetes, and monitoring with Datadog & Splunk.",
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "Argo CD"],
  },
  {
    icon: Database,
    title: "Data & Databases",
    description:
      "Designing data architectures across SQL and NoSQL databases, warehouses, and analytics platforms.",
    technologies: ["PostgreSQL", "DynamoDB", "MongoDB", "Snowflake", "Redshift", "BigQuery"],
  },
];

import {
  Banknote,
  Bot,
  LineChart,
  MessageSquareText,
  Trophy,
} from "lucide-react";
import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "direct-deposit",
    title: "Direct Deposit & Payment Switch",
    category: "Backend Engineering",
    company: "SoFi",
    description:
      "Designed and developed backend services for direct deposit switch and payment method switch using Python, REST APIs, and AWS services, streamlining account management processes.",
    tags: ["Python", "REST APIs", "AWS", "Temporal"],
    gradient: "linear-gradient(135deg, hsl(24 85% 60% / 0.25), hsl(220 18% 14%))",
    icon: Banknote,
  },
  {
    id: "external-account-linking",
    title: "External Account Linking & ACH Flows",
    category: "FinTech",
    company: "SoFi",
    description:
      "Integrated secure external bank account linking using Finicity APIs and engineered ACH micro-deposit flows for ownership verification, enabling compliant fund transfers.",
    tags: ["Finicity", "ACH", "Temporal", "Kubernetes"],
    gradient: "linear-gradient(135deg, hsl(200 70% 50% / 0.2), hsl(220 18% 14%))",
    icon: Banknote,
  },
  {
    id: "rag-pipeline",
    title: "RAG Pipeline & Retrieval QA System",
    category: "AI/ML",
    company: "Research Project",
    description:
      "Integrated RAG pipeline with OpenAI and LLaMA models to develop a Retrieval QA system across multiple files, leveraging Langchain and ChromaDB to reduce hallucination.",
    tags: ["Langchain", "OpenAI", "LLaMA", "ChromaDB"],
    gradient: "linear-gradient(135deg, hsl(280 60% 55% / 0.2), hsl(220 18% 14%))",
    icon: Bot,
    url: "https://github.com/poojith18",
  },
  {
    id: "clv-modeling",
    title: "Customer Lifetime Value Modeling",
    category: "AI/ML",
    company: "TCS",
    description:
      "Implemented end-to-end CLV modeling solutions using advanced Machine Learning, Survival analysis, and MLFlow to elevate customer lifetime value for client Wiley.",
    tags: ["ML", "MLFlow", "Survival Analysis", "Python"],
    gradient: "linear-gradient(135deg, hsl(150 50% 45% / 0.2), hsl(220 18% 14%))",
    icon: LineChart,
  },
  {
    id: "nlp-transformers",
    title: "NLP & Transformer Projects",
    category: "AI/ML",
    company: "Research",
    description:
      "Executed multiple NLP projects including Transformer-based Machine Translation, BERT-powered Classification, and LSTM-based character-level Language Modeling.",
    tags: ["BERT", "Transformers", "LSTM", "NLP"],
    gradient: "linear-gradient(135deg, hsl(45 80% 55% / 0.2), hsl(220 18% 14%))",
    icon: MessageSquareText,
    url: "https://github.com/poojith18",
  },
  {
    id: "inverse-reward-design",
    title: "Inverse Reward Design Research",
    category: "Reinforcement Learning",
    company: "University of Utah",
    description:
      "Conducted research on Inverse Reward Design utilizing AWS DeepRacer and SageMaker, targeting significant improvements in reward function development efficiency.",
    tags: ["AWS DeepRacer", "SageMaker", "RL", "Python"],
    gradient: "linear-gradient(135deg, hsl(24 85% 60% / 0.15), hsl(260 40% 40% / 0.2))",
    icon: Trophy,
  },
];

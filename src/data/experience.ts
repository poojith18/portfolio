import type { Education, Job } from "./types";

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "SoFi",
    location: "Utah, USA",
    period: "Aug 2024 – Present",
    highlights: [
      "Designed backend services for direct deposit switch and payment method switch using Python, REST APIs, and AWS",
      "Integrated secure external bank account linking using Finicity APIs",
      "Built resilient event-driven workflows using Temporal with automated retries and fault-tolerant execution",
      "Provisioned cloud infrastructure using Terraform; deployed with Argo CD and Kubernetes",
      "Built observability dashboards with Splunk, Coralogix, and Datadog",
    ],
  },
  {
    role: "AI/ML Researcher",
    company: "University of Utah",
    location: "Salt Lake City, USA",
    period: "Aug 2022 – Jul 2024",
    highlights: [
      "Researched Inverse Reward Design in Reinforcement Learning using AWS DeepRacer and SageMaker",
      "Innovated evolutionary algorithms for Rashomon Set generation, targeting 40% efficiency improvement",
    ],
  },
  {
    role: "Software Engineer – AI/ML",
    company: "Tata Consultancy Services",
    location: "Hyderabad, India",
    period: "Jul 2019 – Jul 2022",
    highlights: [
      "Implemented Customer Lifetime Value modeling using ML, Survival analysis, and MLFlow",
      "Developed Marketing Mix Modeling (MMM) solutions with notable ROI increase",
      "Applied NLP techniques for medical and financial data analysis using Topic Modeling",
      "Built computer vision pipeline for pizza topping verification during shipment",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Utah",
    location: "Salt Lake City, USA",
    period: "Aug 2022 – May 2024",
  },
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    school: "IIT Bhubaneswar",
    location: "Odisha, India",
    period: "Jul 2015 – Jun 2019",
  },
];

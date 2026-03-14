import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
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

const education = [
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

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-5xl mx-auto">
        {/* Work Experience */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-5 h-5 text-primary" />
            <p className="text-primary font-medium tracking-wider uppercase text-sm">
              Work Experience
            </p>
          </div>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-medium">{job.role}</h3>
                    <p className="text-primary font-medium">{job.company} <span className="text-muted-foreground font-normal">· {job.location}</span></p>
                  </div>
                  <span className="text-muted-foreground text-sm mt-1 md:mt-0">{job.period}</span>
                </div>
                
                <ul className="space-y-2">
                  {job.highlights.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-5 h-5 text-primary" />
            <p className="text-primary font-medium tracking-wider uppercase text-sm">
              Education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
                style={{ background: 'var(--gradient-card)' }}
              >
                <h3 className="font-display text-xl font-medium mb-2">{edu.degree}</h3>
                <p className="text-primary font-medium mb-1">{edu.school}</p>
                <p className="text-muted-foreground text-sm">{edu.location} · {edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/data/experience";
import Reveal from "@/components/Reveal";

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <Reveal>
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-5 h-5 text-primary" aria-hidden="true" />
              <p className="text-primary font-medium tracking-wider uppercase text-sm">
                Work Experience
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <Reveal key={`${job.company}-${job.period}`} delay={index * 80}>
                <div className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300">
                  <div
                    className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary"
                    aria-hidden="true"
                  />

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-medium">{job.role}</h3>
                      <p className="text-primary font-medium">
                        {job.company}{" "}
                        <span className="text-muted-foreground font-normal">· {job.location}</span>
                      </p>
                    </div>
                    <time className="text-muted-foreground text-sm mt-1 md:mt-0">{job.period}</time>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0" aria-hidden="true">
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="w-5 h-5 text-primary" aria-hidden="true" />
              <p className="text-primary font-medium tracking-wider uppercase text-sm">
                Education
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Reveal key={`${edu.school}-${edu.period}`} delay={index * 100}>
                <div
                  className="p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover-lift h-full"
                  style={{ background: "var(--gradient-card)" }}
                >
                  <h3 className="font-display text-xl font-medium mb-2">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-1">{edu.school}</p>
                  <p className="text-muted-foreground text-sm">
                    {edu.location} · {edu.period}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

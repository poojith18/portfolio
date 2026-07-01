import { skills, skillsSection } from "@/data/skills";
import Reveal from "@/components/Reveal";

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              {skillsSection.eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">{skillsSection.title}</h2>
            <p className="text-muted-foreground text-lg">{skillsSection.description}</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 80}>
              <div
                className="group p-8 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 hover-lift h-full"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <skill.icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-medium mb-3">{skill.title}</h3>
                    <p className="text-muted-foreground mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

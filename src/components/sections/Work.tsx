import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { workSection } from "@/data/content";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const categories = ["All", ...new Set(projects.map((p) => p.category))];
const panelId = "work-projects-panel";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % categories.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + categories.length) % categories.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = categories.length - 1;
    else return;

    event.preventDefault();
    const nextTab = tabRefs.current[nextIndex];
    nextTab?.focus();
    setActiveFilter(categories[nextIndex]);
  };

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, categories.length);
  }, []);

  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                {workSection.eyebrow}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium">{workSection.title}</h2>
            </div>
            <a
              href={workSection.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              View GitHub
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="flex flex-wrap gap-2 mb-12"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`work-tab-${category.replace(/\s+/g, "-").toLowerCase()}`}
                aria-selected={activeFilter === category}
                aria-controls={panelId}
                tabIndex={activeFilter === category ? 0 : -1}
                onClick={() => setActiveFilter(category)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={cn(
                  "px-4 py-2 text-sm rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  activeFilter === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          id={panelId}
          role="tabpanel"
          aria-label={`${activeFilter} projects`}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const cardContent = (
              <>
                <div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={{ background: project.gradient }}
                >
                  <Icon
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-primary/25"
                    aria-hidden="true"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full">
                    <p className="text-sm font-medium">{project.company}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-primary text-sm tracking-wider uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <p className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium">
                      View project
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </p>
                  )}
                </div>
              </>
            );

            const wrapper = project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {cardContent}
              </a>
            ) : (
              <article
                className="overflow-hidden rounded-lg border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {cardContent}
              </article>
            );

            return (
              <Reveal key={project.id} delay={index * 80}>
                {wrapper}
              </Reveal>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground py-12" role="status">
            No projects in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Work;

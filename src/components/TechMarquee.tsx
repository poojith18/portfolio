import { techStack } from "@/data/site";

const TechMarquee = () => {
  const items = [...techStack, ...techStack];

  return (
    <div className="relative mt-16 overflow-hidden border-y border-border py-4" aria-hidden="true">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="mx-6 text-sm text-muted-foreground tracking-wider uppercase"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;

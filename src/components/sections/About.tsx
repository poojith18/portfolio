import { type RefObject } from "react";
import { aboutStats } from "@/data/site";
import { aboutContent } from "@/data/content";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import Reveal from "@/components/Reveal";

const StatItem = ({ stat }: { stat: (typeof aboutStats)[number] }) => {
  const { ref, inView } = useInView({ threshold: 0.5, once: true });
  const numericValue = stat.value ?? 0;
  const count = useCountUp(numericValue, 1200, inView && stat.value !== null);

  const display = "display" in stat ? stat.display : `${count}${stat.suffix}`;

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className="text-center md:text-left">
      <p className="font-display text-4xl md:text-5xl text-primary mb-2 tabular-nums">{display}</p>
      <p className="text-muted-foreground text-sm tracking-wider uppercase">{stat.label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              {aboutContent.eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-8">
              {aboutContent.title[0]}
              <br />
              {aboutContent.title[1]}
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6 text-muted-foreground text-lg">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
            {aboutStats.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;

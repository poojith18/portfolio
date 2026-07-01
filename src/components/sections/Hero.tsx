import { ArrowDown, FileText } from "lucide-react";
import { availability, resumeUrl } from "@/data/site";
import { heroContent } from "@/data/content";
import { scrollToSection } from "@/lib/scroll";
import TechMarquee from "@/components/TechMarquee";
import ProfileAvatar from "@/components/ProfileAvatar";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <div>
            {availability.open && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6 animate-fade-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                {availability.status}
              </div>
            )}

            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-6 animate-fade-up">
              {heroContent.eyebrow}
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] mb-8 animate-fade-up-delay-1">
              {heroContent.name[0]}
              <br />
              <span className="text-gradient">{heroContent.name[1]}</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-12 animate-fade-up-delay-2">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <button
                type="button"
                onClick={() => scrollToSection("work")}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View My Work
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full font-medium hover:border-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Get In Touch
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full font-medium hover:border-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Resume
              </a>
            </div>
          </div>

          <ProfileAvatar
            size="lg"
            priority
            className="mx-auto lg:mx-0 animate-fade-up-delay-2 lg:mt-4"
          />
        </div>
      </div>

      <TechMarquee />

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to about section"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full px-2 py-1"
      >
        <span className="text-sm tracking-wider">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;

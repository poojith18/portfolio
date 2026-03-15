import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24">
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      <div className="relative z-10 max-w-5xl">
        <p className="text-primary font-medium tracking-wider uppercase text-sm mb-6 animate-fade-up">
          Software Engineer at SoFi
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 animate-fade-up-delay-1">
          Poojith Reddy
          <br />
          <span className="text-gradient">Maligireddy</span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-12 animate-fade-up-delay-2">
          Building scalable backend services, AI/ML solutions, and cloud infrastructure. 
          MS in Computer Science from the University of Utah.
        </p>
        
        <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover-lift cursor-pointer"
          >
            View My Work
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full font-medium hover:border-primary transition-colors duration-300 cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </div>
      
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm tracking-wider">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </Link>
    </section>
  );
};

export default Hero;
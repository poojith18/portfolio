const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-8">
              Engineer, Researcher
              <br />
              & Problem Solver
            </h2>
          </div>
          
          <div className="space-y-6 text-muted-foreground text-lg">
            <p>
              I'm a Software Engineer at SoFi with 5+ years of experience building 
              backend services, AI/ML systems, and cloud-native applications. I specialize 
              in Python, AWS, and distributed systems that power financial products at scale.
            </p>
            <p>
              Previously, I worked as an AI/ML Researcher at the University of Utah 
              and as a Software Engineer at Tata Consultancy Services, where I delivered 
              machine learning solutions for enterprise clients.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {[
            { number: "5+", label: "Years Experience" },
            { number: "3", label: "Companies" },
            { number: "MS", label: "Computer Science" },
            { number: "2", label: "Degrees" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <p className="font-display text-4xl md:text-5xl text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

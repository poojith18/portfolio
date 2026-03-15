import { Mail, MapPin, Phone, ArrowUpRight, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-8">
              Let's work
              <br />
              together
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Interested in collaborating or have an opportunity to discuss? 
              I'd love to connect.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:mpr10@iitbbs.ac.in" 
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    mpr10@iitbbs.ac.in
                  </p>
                </div>
              </a>
              
              <a href="tel:+13853716302" className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    +1 (385) 371-6302
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Utah, USA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <h3 className="text-muted-foreground text-sm tracking-wider uppercase mb-6">
                Connect With Me
              </h3>
              
              {[
                { name: "LinkedIn", url: "https://linkedin.com/in/poojith18" },
                { name: "GitHub", url: "https://github.com/poojith18" },
                { name: "Portfolio", url: "https://poojith18.github.io/portfolio/" },
                { name: "Resume", url: "https://drive.google.com/file/d/1Z5PrTVI_OWIHeOB_D_q0TA7LT2_mCbRM/view" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 border-b border-border group hover:border-primary transition-colors"
                >
                  <span className="font-display text-2xl group-hover:text-primary transition-colors flex items-center gap-3">
                    {social.name}
                    {social.name === "Resume" && <FileText className="w-5 h-5" />}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Mail, MapPin, Phone, ArrowUpRight, FileText } from "lucide-react";
import { contact, socialLinks } from "@/data/site";
import ContactForm from "@/components/ContactForm";
import CopyButton from "@/components/CopyButton";
import Reveal from "@/components/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                Get In Touch
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium mb-8">
                Let's work
                <br />
                together
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Interested in collaborating or have an opportunity to discuss? Send a message or
                reach out directly.
              </p>

              <ContactForm />

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-muted-foreground text-sm tracking-wider uppercase mb-6">
                  Or reach me directly
                </h3>
                <address className="not-italic space-y-6">
                  <div className="flex items-center gap-4 group">
                    <a href={`mailto:${contact.email}`} className="flex items-center gap-4 flex-1">
                      <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Mail className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {contact.email}
                        </p>
                      </div>
                    </a>
                    <CopyButton value={contact.email} label="Copy email" />
                  </div>

                  <a href={contact.phoneHref} className="flex items-center gap-4 group">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {contact.phone}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{contact.location}</p>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <h3 className="text-muted-foreground text-sm tracking-wider uppercase mb-6">
                  Connect With Me
                </h3>

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-4 border-b border-border group hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    <span className="font-display text-2xl group-hover:text-primary transition-colors flex items-center gap-3">
                      {social.name}
                      {social.name === "Resume" && (
                        <FileText className="w-5 h-5" aria-hidden="true" />
                      )}
                    </span>
                    <ArrowUpRight
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

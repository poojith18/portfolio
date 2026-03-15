import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "work" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-display text-2xl font-medium"
        >
          Poojith<span className="text-primary">.</span>
        </button>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-foreground transition-colors link-underline"
              >
                {link.name}
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover-lift"
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="block py-2 text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}

            <li className="pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
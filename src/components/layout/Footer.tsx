const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-medium">
            Poojith<span className="text-primary">.</span>
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm">
          © {currentYear} Poojith Reddy Maligireddy. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/poojith18" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            LinkedIn
          </a>
          <a href="https://github.com/poojith18" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 section-padding"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-slide-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium">
              Software Developer
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              I build exceptional and accessible digital experiences for the web.
              Focused on creating clean, user-friendly applications.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
              >
                View Work
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-primary/60 absolute -z-10 blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Developer Portrait"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="animate-bounce p-2 bg-secondary rounded-full text-secondary-foreground"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

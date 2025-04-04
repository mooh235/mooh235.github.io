import { ExternalLink, Github } from "lucide-react";
const Projects = () => {
  const projects = [{
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with product catalog, cart functionality, user authentication, and payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    github: "https://github.com",
    liveDemo: "https://example.com",
    image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
  }, {
    title: "Task Management App",
    description: "A productivity app that helps users organize tasks with features like categories, priorities, due dates, and notifications.",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    github: "https://github.com",
    liveDemo: "https://example.com",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
  }, {
    title: "Weather Dashboard",
    description: "An interactive weather application that displays current conditions and forecasts for any location, with beautiful visualizations.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "HTML/CSS"],
    github: "https://github.com",
    liveDemo: "https://example.com",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
  }];
  return <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Since I am only a beginner in software development, my projects are still under construction. My projects will appear here in the near future.</p>
        </div>

        
      </div>
    </section>;
};
export default Projects;
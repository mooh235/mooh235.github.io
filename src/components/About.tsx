import { Code, CodepenIcon, Coffee, Heart } from "lucide-react";
const About = () => {
  return <section id="about" className="section-padding relative" style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=60')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-4">
              My Journey in Software Development
            </h3>
            <p className="text-muted-foreground mb-4">I'm a passionate software developer with over 2 months of experience building web applications. My journey started when I wanted to build a website for my business.</p>
            <p className="text-muted-foreground mb-4">
              Throughout my early career, I've worked with various technologies and frameworks,
              always striving to write clean, maintainable code that solves real problems.
              I believe in continuous learning and staying up-to-date with the latest industry trends.
            </p>
            <p className="text-muted-foreground">When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects. I'm always open to new opportunities and collaborations!
I am also a law student at the University of Embu</p>
          </div>

          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-md text-primary mr-4">
                    <Code size={24} />
                  </div>
                  <h4 className="text-xl font-semibold">Clean Code</h4>
                </div>
                <p className="text-muted-foreground">
                  I write code that is readable, maintainable, and follows best practices.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-md text-primary mr-4">
                    <Heart size={24} />
                  </div>
                  <h4 className="text-xl font-semibold">Passion</h4>
                </div>
                <p className="text-muted-foreground">
                  I'm deeply passionate about creating excellent software solutions.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-md text-primary mr-4">
                    <Coffee size={24} />
                  </div>
                  <h4 className="text-xl font-semibold">Dedication</h4>
                </div>
                <p className="text-muted-foreground">
                  I'm committed to delivering high-quality work and meeting deadlines.
                </p>
              </div>

              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-md text-primary mr-4">
                    <CodepenIcon size={24} />
                  </div>
                  <h4 className="text-xl font-semibold">Creativity</h4>
                </div>
                <p className="text-muted-foreground">
                  I enjoy finding innovative solutions to complex problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
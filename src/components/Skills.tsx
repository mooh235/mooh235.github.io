
const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    },
    {
      name: "Tools & Others",
      skills: ["Git", "GitHub", "Docker", "AWS", "CI/CD", "Agile", "Jest", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the technologies and tools I've worked with
          </p>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

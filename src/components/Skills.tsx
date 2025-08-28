import { Code, Database, Wrench, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      description: "Proficient in HTML, CSS, JavaScript, and React.js for building interactive, responsive user interfaces.",
      skills: ["C","Java","HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      title: "Software Applications & Tools",
      icon: Wrench,
      description: "Experienced with VS Code, IntelliJ, Spring Boot, Postman, SQL Workbench for efficient development workflows.",
      skills: ["VS Code", "IntelliJ", "Spring Boot", "Postman", "SQL Workbench"]
    },
    {
      title: "Creative & Analytical",
      icon: Palette,
      description: "Strong in problem-solving, logical reasoning, teamwork, and delivering visually engaging content.",
      skills: ["Adobe Illustrator", "Blender", "DaVinci Resolve"," Figma", "Canva","Capcut"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">My Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="portfolio-card text-center skill-card transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div className="mb-6">
                <category.icon className="skill-icon transform transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium transform transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    data-aos="fade-up"
                    data-aos-delay={(index * 100) + (skillIndex * 50)}
                  >
                    {skill}
                  </span>
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
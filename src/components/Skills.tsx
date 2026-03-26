import { Code, Wrench, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    description: "Proficient in HTML, CSS, JavaScript, and React.js for building interactive, responsive UIs.",
    skills: ["C", "Java", "HTML", "CSS", "JavaScript", "React.js"],
    proficiency: 85,
    color: "hsl(var(--primary))",
  },
  {
    title: "Software Applications & Tools",
    icon: Wrench,
    description: "Experienced with VS Code, IntelliJ, Spring Boot, Postman, SQL Workbench for efficient development.",
    skills: ["VS Code", "IntelliJ", "Spring Boot", "Postman", "SQL Workbench"],
    proficiency: 75,
    color: "hsl(25 80% 50%)",
  },
  {
    title: "Creative & Analytical",
    icon: Palette,
    description: "Strong in problem-solving, teamwork, and delivering visually engaging content.",
    skills: ["Adobe Illustrator", "Blender", "DaVinci Resolve", "Figma", "Canva", "CapCut"],
    proficiency: 70,
    color: "hsl(280 60% 55%)",
  },
];

const currentlyLearning = [
  { label: "Docker", color: "bg-blue-500/20 text-blue-600 dark:text-blue-400" },
  { label: "DevOps Pipelines", color: "bg-orange-500/20 text-orange-600 dark:text-orange-400" },
  { label: "Android Development", color: "bg-green-500/20 text-green-600 dark:text-green-400" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">My Expertise</h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="portfolio-card text-center skill-card transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div className="mb-4">
                <category.icon className="skill-icon transform transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
              </div>

              {/* Proficiency bar */}
              <div className="mb-4 text-left">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-muted-foreground">Proficiency</span>
                  <span className="text-xs font-bold" style={{ color: category.color }}>{category.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${category.proficiency}%`, background: category.color }}
                    data-aos="slide-right"
                    data-aos-delay={index * 150 + 200}
                  />
                </div>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium transform transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + skillIndex * 50}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {currentlyLearning.map((item, i) => (
              <span
                key={item.label}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border border-current/20 ${item.color}`}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                {/* Pulsing dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-current" />
                </span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
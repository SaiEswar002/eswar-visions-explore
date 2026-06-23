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

/* Tech icon grid using devicon CDN */
const techStack = [
  { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Java",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Docker",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Linux",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "VS Code",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Postman",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Blender",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background dark:bg-background">
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
                <div className="w-full h-2 bg-secondary dark:bg-secondary rounded-full overflow-hidden">
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
                    className="px-3 py-1 bg-secondary dark:bg-secondary text-secondary-foreground dark:text-secondary-foreground rounded-full text-xs font-medium transform transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
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

        {/* ── Tech Stack Icon Grid ── */}
        <div className="mt-20" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-bold text-center mb-3 text-foreground">Tech Stack</h3>
          <p className="text-center text-muted-foreground text-sm mb-10">Technologies I work with</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 justify-items-center">
            {techStack.map((tech, i) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-2 cursor-default"
                data-aos="zoom-in"
                data-aos-delay={i * 40}
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary dark:bg-secondary flex items-center justify-center shadow-sm border border-border group-hover:shadow-md group-hover:scale-110 transition-all duration-300 group-hover:border-primary/40">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <span className="text-[10px] font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200 text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
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
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Virtual Mouse",
    description: "An innovative hands-free computer control system using computer vision and gesture recognition.",
    techStack: ["Python", "Mediapipe", "OpenCV", "Computer Vision"],
    category: "Diploma Final Year Project",
    gradient: "from-[#9B1C1C] to-[#c0392b]",
    link: "https://github.com/SaiEswar002/NTTF-Final-Project",
    github: "https://github.com/SaiEswar002/NTTF-Final-Project",
    isPrivate: false,
  },
  {
    title: "Hospital Management System",
    description: "A comprehensive web app for managing hospital operations, patient records, and administrative tasks.",
    techStack: ["React.js", "Node.js", "MongoDB", "CSS"],
    category: "B.Tech Hackathon Project",
    gradient: "from-[#1a3a6b] to-[#2563eb]",
    link: "https://github.com/SaiEswar002/cicd-hms-docker/tree/main",
    github: "https://github.com/SaiEswar002/cicd-hms-docker/tree/main",
    isPrivate: false,
  },
  {
    title: "Browser-use AI Agent",
    description: "An AI-powered automated browser agent that performs web tasks autonomously using machine learning.",
    techStack: ["AI/ML", "Python", "Selenium", "NLP"],
    category: "Personal Project",
    gradient: "from-[#1a1a2e] to-[#16213e]",
    link: "#",
    github: "#",
    isPrivate: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="beige-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="portfolio-card group project-card overflow-hidden flex flex-col transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:translate-y-[-8px]"
              style={{
                transition: "transform 0.4s, box-shadow 0.4s",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 28px 4px hsl(var(--primary)/0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
              }}
            >
              {/* Gradient banner header */}
              <div className={`bg-gradient-to-r ${project.gradient} h-28 -mx-6 -mt-6 mb-4 flex items-end px-4 pb-3 relative`}>
                {/* Badge */}
                {project.isPrivate ? (
                  <span className="absolute top-3 right-3 text-xs font-bold bg-yellow-400/90 text-yellow-900 px-2 py-0.5 rounded-full">
                    🔒 Private Repo
                  </span>
                ) : project.link !== "#" ? (
                  <span className="absolute top-3 right-3 text-xs font-bold bg-green-400/90 text-green-900 px-2 py-0.5 rounded-full">
                    ✓ Live Demo
                  </span>
                ) : (
                  <span className="absolute top-3 right-3 text-xs font-bold bg-gray-400/90 text-gray-900 px-2 py-0.5 rounded-full">
                    🚧 Coming Soon
                  </span>
                )}
                <span className="text-xs font-semibold text-white/80 bg-white/10 px-2 py-0.5 rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      data-aos="fade-up"
                      data-aos-delay={index * 200 + techIndex * 80}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.isPrivate ? (
                    <Button
                      size="sm"
                      className="btn-primary flex-1 flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
                      disabled
                    >
                      <span>🔒</span> Private Repo
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="btn-primary flex-1 flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </Button>
                  )}
                  {!project.isPrivate && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://github.com/SaiEswar002"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
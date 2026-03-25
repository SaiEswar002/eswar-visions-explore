import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Virtual Mouse",
      description: "An innovative hands-free computer control system using computer vision and gesture recognition.",
      techStack: ["Python", "Mediapipe", "OpenCV", "Computer Vision"],
      category: "Diploma Final Year Project",
      link: "https://github.com/SaiEswar002/NTTF-Final-Project",
      github: "https://github.com/SaiEswar002/NTTF-Final-Project"
    },
    {
      title: "Hospital Management System",
      description: "A comprehensive web application for managing hospital operations, patient records, and administrative tasks.",
      techStack: ["React.js", "Node.js", "MongoDB", "CSS"],
      category: "B.Tech Hackathon Project",
      link: "https://github.com/SaiEswar002/cicd-hms-docker/tree/main",
      github: "https://github.com/SaiEswar002/cicd-hms-docker/tree/main"
    },
    {
      title: "Browser-use AI Agent",
      description: "An AI-powered automated browser agent that can perform web tasks autonomously using machine learning.",
      techStack: ["AI/ML", "Python", "Selenium", "Natural Language Processing"],
      category: "Personal Project",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="beige-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="portfolio-card group project-card transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:translate-y-[-8px]"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
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
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium transform transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    data-aos="fade-up"
                    data-aos-delay={(index * 200) + (techIndex * 100)}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button
                  size="sm"
                  className="btn-primary flex-1 flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

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
    badge: null as string | null,
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
    badge: null as string | null,
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
    badge: null as string | null,
  },
  {
    title: "Trust Voting System",
    description: "A cryptographically secured decentralized electronic voting platform demonstrating homomorphic encryption, zero-knowledge proofs, and blockchain consensus for auditable elections.",
    techStack: ["Python", "Cryptography", "Blockchain", "ZK-Proofs", "Homomorphic Encryption"],
    category: "Personal Project",
    gradient: "from-[#1e1040] to-[#3b0764]",
    link: "https://github.com/SaiEswar002/Trust_Voting_System",
    github: "https://github.com/SaiEswar002/Trust_Voting_System",
    isPrivate: false,
    badge: null as string | null,
  },
  {
    title: "LexAudit",
    description: "A production-ready OpenEnv AI agent built for the Meta × Scaler Hackathon. Acts as a legal contract auditor — identifying risks, missing sections, contradictions, and rewriting unfair clauses using LLMs.",
    techStack: ["Python", "FastAPI", "Gradio", "HuggingFace", "LLM", "LangChain"],
    category: "Hackathon Project",
    gradient: "from-[#052e16] to-[#166534]",
    link: "https://github.com/SaiEswar002/lexaudit",
    github: "https://github.com/SaiEswar002/lexaudit",
    isPrivate: false,
    badge: "🏆 Hackathon" as string | null,
  },
];

const Projects = () => {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    setTimeout(updateArrows, 100);
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });

  return (
    <section id="projects" className="beige-section py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>

        {/* ── Carousel wrapper ── */}
        <div className="relative">
          {/* Left fade + arrow */}
          <div
            className="absolute left-0 top-0 bottom-4 w-20 z-20 pointer-events-none flex items-center justify-start pl-1"
            style={{
              opacity: canLeft ? 1 : 0,
              transition: "opacity 300ms ease",
              background: "linear-gradient(to right, hsl(var(--secondary)) 0%, hsl(var(--secondary) / 0.7) 50%, transparent 100%)",
            }}
          >
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="pointer-events-auto w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Right fade + arrow */}
          <div
            className="absolute right-0 top-0 bottom-4 w-20 z-20 pointer-events-none flex items-center justify-end pr-1"
            style={{
              opacity: canRight ? 1 : 0,
              transition: "opacity 300ms ease",
              background: "linear-gradient(to left, hsl(var(--secondary)) 0%, hsl(var(--secondary) / 0.7) 50%, transparent 100%)",
            }}
          >
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="pointer-events-auto w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                background: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Scroll track */}
          <div
            ref={scrollRef}
            className="horizontal-scroll-container px-3"
          >
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="portfolio-card group project-card overflow-hidden flex flex-col transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:translate-y-[-8px] flex-shrink-0"
                style={{
                  minWidth: "300px",
                  width: "360px",
                  transition: "transform 0.4s, box-shadow 0.4s",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
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
                  {/* Status Badge */}
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
                  {/* Extra badge (e.g., Hackathon) */}
                  {project.badge && (
                    <span className="absolute top-3 left-3 text-xs font-bold bg-amber-400/90 text-amber-900 px-2 py-0.5 rounded-full">
                      {project.badge}
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
                        data-aos-delay={index * 100 + techIndex * 80}
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
        </div>

        {/* View All Projects */}
        <div className="flex justify-center mt-10" data-aos="fade-up" data-aos-delay="400">
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
import { GraduationCap, Award, Users, Brain, MessageCircle, Target } from "lucide-react";
import { useRef, useState } from "react";
import { useAboutAnimations } from "@/hooks/useAnimations";

const skills = [
  { name: "Adaptability", icon: Target },
  { name: "Observation", icon: Brain },
  { name: "Problem-solving", icon: Award },
  { name: "Communication", icon: MessageCircle },
  { name: "Teamwork", icon: Users },
];

const education = [
  {
    degree: "Bachelor of Technology",
    period: "2024 - 2027",
    field: "Computer Science and Engineering with DevOps Specialization",
    institution: "KL University, Vaddeswaram, Vijayawada",
    link: "https://kluniversity.in",
  },
  {
    degree: "Diploma",
    period: "2021 - 2024",
    field: "Computer Science and Engineering",
    institution: "NTTF, Electronic City, Bangalore",
    link: "#",
  },
  {
    degree: "SSC (10th Grade)",
    period: "2021",
    field: "Secondary School Certificate",
    institution: "Sri Chaitanya High School, Gosala, Vijayawada",
    link: "#",
  },
];

const About = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [imgLoaded, setImgLoaded] = useState(false);

  const { initAboutAnimations } = useAboutAnimations();
  initAboutAnimations(headingRef, imageRef, descriptionRef, skillRefs.current);

  return (
    <section id="about" className="beige-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={headingRef} className="section-title">About Me</h2>

        {/* Status badge */}
        <div className="flex justify-center mb-10" data-aos="fade-up" data-aos-delay="100">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 text-green-700 dark:text-green-400 text-sm font-semibold border border-green-400/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Open to internships &amp; collaborations
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column – Photo + Soft Skills */}
          <div className="space-y-8">
            {/* Photo with blur placeholder */}
            <div className="relative">
              <div className="w-full max-w-md">
                <div className="relative">
                  <div
                    className={`absolute inset-0 rounded-2xl transition-opacity duration-700 ${imgLoaded ? "opacity-0" : "opacity-100"}`}
                    style={{ background: "hsl(60 56% 85%)", filter: "blur(8px)" }}
                  />
                  <img
                    ref={imageRef}
                    src="/src/assets/mydp-2.jpg"
                    alt="E.N.V.B. Sai Eswar - Frontend Developer"
                    loading="lazy"
                    onLoad={() => setImgLoaded(true)}
                    className={`w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-all duration-700 hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                  />
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Strengths &amp; Soft Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    ref={(el) => (skillRefs.current[index] = el)}
                    className="flex flex-col items-center p-4 rounded-lg bg-card shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 about-animate"
                  >
                    <skill.icon className="w-8 h-8 text-primary mb-2 transform transition-transform duration-300 hover:scale-110" />
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column – Bio + Education */}
          <div className="space-y-8">
            <div>
              <p ref={descriptionRef} className="text-lg leading-relaxed text-muted-foreground mb-8">
                I'm a passionate developer focused on creating impactful and visually engaging solutions.
                Skilled in HTML, CSS, JavaScript, React.js, and tools like VS Code, IntelliJ, and Spring Boot,
                I enjoy blending creativity with problem-solving. My journey includes hands-on experience in
                academic projects, freelancing, and internships, driven by a constant urge to learn and adapt.
              </p>
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education Timeline
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-primary font-medium">{edu.period}</p>
                        <p className="text-sm text-muted-foreground mt-1">{edu.field}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors duration-300"
                        >
                          {edu.institution}
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

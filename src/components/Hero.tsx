import { Download, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { heroAnimations } from "@/hooks/useAnimations";

const techBadges = [
  { label: "HTML", color: "#e34f26" },
  { label: "CSS", color: "#264de4" },
  { label: "React", color: "#61dafb" },
  { label: "TypeScript", color: "#3178c6" },
  { label: "Python", color: "#306998" },
  { label: "Git", color: "#f05032" },
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  heroAnimations(heroRef);

  return (
    <section id="home" className="hero-section flex items-center min-h-screen" ref={heroRef}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/30 to-background/50 animate-gradient"></div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* LEFT — Profile image with floating badges */}
          <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-delay="300">
            <div className="relative flex items-center justify-center">
              {/* Floating tech badges */}
              {techBadges.map((badge, i) => {
                const angle = (i / techBadges.length) * 2 * Math.PI;
                const rx = 52; // % from center horizontally
                const ry = 42; // % from center vertically
                const left = 50 + rx * Math.cos(angle);
                const top = 50 + ry * Math.sin(angle);
                return (
                  <span
                    key={badge.label}
                    className="absolute z-20 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg select-none"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      transform: "translate(-50%, -50%)",
                      background: badge.color,
                      animation: `floatBadge ${3 + i * 0.4}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    {badge.label}
                  </span>
                );
              })}

              {/* Profile image with blur-placeholder */}
              <div className="w-full max-w-md mx-auto relative">
                {/* Blurred placeholder shown while image loads */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-700 ${imgLoaded ? "opacity-0" : "opacity-100"}`}
                  style={{ background: "hsl(60 56% 85%)", filter: "blur(8px)" }}
                />
                <img
                  src="/src/assets/sai-eswar-photo.jpg"
                  alt="E.N.V.B. Sai Eswar - Frontend Developer"
                  loading="lazy"
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-auto rounded-2xl shadow-2xl object-cover hero-image transform transition-all duration-700 hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left hero-content">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider hero-heading">
              <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                SAI ESWAR
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
              Frontend Developer
            </h2>

            <p className="text-lg mb-6 text-muted-foreground max-w-xl" data-aos="fade-up" data-aos-delay="300">
              "Building fast, beautiful UIs with React &amp; TypeScript — one component at a time."
            </p>

            <div className="text-sm mb-8 text-muted-foreground" data-aos="fade-up" data-aos-delay="400">
              <p>Pursuing BTech in Computer Science and Engineering with DevOps Specialization</p>
              <p>at KL University (2024-2027)</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="500">
              <Button
                className="btn-primary flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => window.open("/Eswar_Resume.pdf", "_blank")}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                onClick={scrollToContact}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import { heroAnimations } from "@/hooks/useAnimations";
import profileImage from "@/assets/sai-eswar-photo.jpg";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "Frontend Developer",
  "DevOps Engineer",
  "Full-Stack Dev",
  "Linux Enthusiast",
  "Networking & Cloud",
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  heroAnimations(heroRef);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section flex items-center min-h-screen overflow-hidden" ref={heroRef}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/30 to-background/50 animate-gradient"></div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* LEFT — Profile image with animated rings */}
          <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-delay="300">
            <div className="relative flex items-center justify-center">
              {/* Animated concentric ring pulses */}
              <span className="hero-ring hero-ring-1" aria-hidden="true" />
              <span className="hero-ring hero-ring-2" aria-hidden="true" />
              <span className="hero-ring hero-ring-3" aria-hidden="true" />

              {/* Profile image with blur-placeholder */}
              <div className="w-full max-w-md mx-auto relative z-10">
                {/* Blurred placeholder shown while image loads */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-700 ${imgLoaded ? "opacity-0" : "opacity-100"}`}
                  style={{ background: "hsl(60 56% 85%)", filter: "blur(8px)" }}
                />
                <img
                  src={profileImage}
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

            {/* Animated role cycling */}
            <div className="h-10 md:h-12 overflow-hidden mb-4" data-aos="fade-up" data-aos-delay="200">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-2xl md:text-3xl font-semibold text-muted-foreground"
                >
                  {roles[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className="text-lg mb-6 text-muted-foreground max-w-xl" data-aos="fade-up" data-aos-delay="300">
              abouFull-Stack Developer & DevOps Enthusiast passionate about building modern web applications, automating workflows, and exploring Linux and networking technologies.
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
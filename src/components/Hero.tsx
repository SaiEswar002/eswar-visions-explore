import { Download, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/sai-eswar-photo.jpg";
import { useEffect, useRef } from "react";
import { heroAnimations } from "@/hooks/useAnimations";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Apply hero animations
  heroAnimations(heroRef);

  return (
    <section id="home" className="hero-section flex items-center" ref={heroRef}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/30 to-background/50 animate-gradient"></div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-delay="300">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <img
                  src={profileImage}
                  alt="E.N.V.B. Sai Eswar - Frontend Developer"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover hero-image transform transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
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
              "Explorer of possibilities | Passionate towards work"
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
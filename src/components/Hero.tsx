import { Download, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/sai-eswar-photo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <img
                  src={profileImage}
                  alt="E.N.V.B. Sai Eswar - Frontend Developer"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left animate-slide-in-right">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
              <span className="text-primary">SAI ESWAR</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
              Frontend Developer
            </h2>
            
            <p className="text-lg mb-6 text-muted-foreground max-w-xl">
              "Explorer of possibilities | Passionate towards work"
            </p>
            
            <div className="text-sm mb-8 text-muted-foreground">
              <p>Pursuing BTech in Computer Science and Engineering with DevOps Specialization</p>
              <p>at KL University (2024-2027)</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="btn-primary flex items-center gap-2"
                onClick={() => window.open("#", "_blank")}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
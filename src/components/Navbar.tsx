import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "hobbies", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    // { name: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-primary transform transition-transform duration-300 hover:scale-110">
            ESWAR
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`navbar-link relative ${
                  activeSection === link.id 
                    ? "text-primary font-semibold" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-all duration-300"></span>
                )}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden bg-background/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg animate-fade-in"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left py-2 transition-colors duration-300 ${
                  activeSection === link.id 
                    ? "text-primary font-semibold" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary w-full mt-4 flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
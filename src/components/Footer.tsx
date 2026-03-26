import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/SaiEswar002"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/sai-eswar-b04240286/"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/sai._.eswar/"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:saieswar2k5@gmail.com"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="red-section py-12 border-t border-primary-foreground/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: branding + copyright */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-1">
              "Building fast, beautiful UIs — one component at a time."
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Copyright ©2026 All rights reserved | Made with ❤️ by Sai Eswar
            </p>
          </div>

          {/* Right: social icons + back-to-top */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center hover:bg-secondary/90 hover:scale-110 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center hover:bg-secondary/90 hover:scale-110 transition-all duration-300 ml-2"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
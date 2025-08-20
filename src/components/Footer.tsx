import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:saieswar2k5@gmail.com"
    }
  ];

  return (
    <footer className="red-section py-12 border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold mb-2">
              "Explorer of possibilities"
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Copyright ©2025 All rights reserved | This template is made with ❤️ by Sai Eswar
            </p>
          </div>
          
          {/* <div className="flex gap-4">
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
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
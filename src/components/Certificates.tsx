import { useState } from "react";
import { Info, ExternalLink } from "lucide-react";

const certificatesData = [
  {
    id: 1,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    category: "Cloud",
    grade: null,
    file: new URL("../assets/Certfications/Azure-AZ-900.pdf", import.meta.url).href,
    description: "Foundational cloud concepts, Azure services, security, privacy, compliance, and pricing. Covers core Azure architecture and services.",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Build a CI/CD Pipeline with Docker",
    issuer: "Coursera",
    category: "DevOps",
    grade: "100%",
    file: new URL("../assets/Certfications/Build a CI-CD Pipeline with Docker From Code to Deployment.pdf", import.meta.url).href,
    description: "Hands-on pipeline creation using Docker containers, from source code to automated deployment in production environments.",
    color: "bg-orange-500"
  },
  {
    id: 3,
    title: "CCNAv7: Enterprise Networking, Security & Automation",
    issuer: "Cisco",
    category: "Networking",
    grade: null,
    file: new URL("../assets/Certfications/CCNAv7_Enterprise Networking, Security, and Automation.pdf", import.meta.url).href,
    description: "Advanced enterprise networking concepts including WAN technologies, network security, and automation using Python and Ansible.",
    color: "bg-teal-500"
  },
  {
    id: 4,
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco",
    category: "Networking",
    grade: null,
    file: new URL("../assets/Certfications/CCNAv7_Introduction to Networks.pdf", import.meta.url).href,
    description: "Fundamentals of networking including network protocols, IP addressing, Ethernet, and basic router and switch configuration.",
    color: "bg-teal-500"
  },
  {
    id: 5,
    title: "CCNAv7: Switching, Routing & Wireless Essentials",
    issuer: "Cisco",
    category: "Networking",
    grade: null,
    file: new URL("../assets/Certfications/CCNAv7_Switching, Routing, and Wireless Essentials.pdf", import.meta.url).href,
    description: "VLANs, inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, HSRP, and wireless LAN configuration and troubleshooting.",
    color: "bg-teal-500"
  },
  {
    id: 6,
    title: "CI/CD with Jenkins",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: "100%",
    file: new URL("../assets/Certfications/Continuous Integration & Continuous Deployment with Jenkins.pdf", import.meta.url).href,
    description: "Complete Jenkins pipeline setup, automated builds, testing integration, and continuous deployment workflows.",
    color: "bg-red-500"
  },
  {
    id: 7,
    title: "Continuous Monitoring with Jenkins",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: "83.33%",
    file: new URL("../assets/Certfications/Continuous Monitoring with Jenkins & Best Practices.pdf", import.meta.url).href,
    description: "Jenkins monitoring strategies, build health tracking, alerting, log management, and DevOps best practices.",
    color: "bg-red-500"
  },
  {
    id: 8,
    title: "DevOps and Jenkins Fundamentals",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: "100%",
    file: new URL("../assets/Certfications/DevOps and Jenkins Fundamentals.pdf", import.meta.url).href,
    description: "Core DevOps principles, culture, and practices combined with Jenkins fundamentals for automated software delivery.",
    color: "bg-red-500"
  },
  {
    id: 9,
    title: "Dynamic Programming & Greedy Algorithms",
    issuer: "University of Colorado Boulder",
    category: "DSA",
    grade: "99.37%",
    file: new URL("../assets/Certfications/Dynamic Programming, Greedy Algorithm.pdf", import.meta.url).href,
    description: "Advanced algorithm design techniques including memoization, tabulation, greedy strategies, and complexity analysis.",
    color: "bg-purple-500"
  },
  {
    id: 10,
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    category: "Frontend",
    grade: "92.50%",
    file: new URL("../assets/Certfications/Front-End Apps with React.pdf", import.meta.url).href,
    description: "React fundamentals, hooks, state management, component lifecycle, Redux, and building production-ready web applications.",
    color: "bg-cyan-500"
  },
  {
    id: 11,
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM",
    category: "AI/ML",
    grade: "98%",
    file: new URL("../assets/Certfications/Introduction to Artificial Intelligence (AI).pdf", import.meta.url).href,
    description: "AI concepts, machine learning fundamentals, neural networks, natural language processing, and real-world AI applications.",
    color: "bg-yellow-500"
  },
  {
    id: 12,
    title: "Jenkins - From Zero to Hero",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: null,
    file: new URL("../assets/Certfications/Jenkins - From Zero to Hero.pdf", import.meta.url).href,
    description: "Complete Jenkins mastery from installation to advanced pipeline creation, plugins, and enterprise-grade CI/CD setup.",
    color: "bg-red-500"
  },
  {
    id: 13,
    title: "Oracle Cloud Infrastructure 2025",
    issuer: "Oracle",
    category: "Cloud",
    grade: null,
    file: new URL("../assets/Certfications/OCI25CAA.jpg", import.meta.url).href,
    description: "Oracle Cloud Infrastructure fundamentals, compute, storage, networking, security, and cloud-native services.",
    color: "bg-red-600"
  },
  {
    id: 14,
    title: "Oracle Associate",
    issuer: "Oracle",
    category: "Cloud",
    grade: null,
    file: new URL("../assets/Certfications/Oracle Associate.pdf", import.meta.url).href,
    description: "Oracle technology fundamentals covering database concepts, cloud services, and Oracle ecosystem architecture.",
    color: "bg-red-600"
  },
  {
    id: 15,
    title: "Spring - Ecosystem and Core",
    issuer: "LearnQuest",
    category: "Backend",
    grade: "86.60%",
    file: new URL("../assets/Certfications/Spring - Ecosystem and Core.pdf", import.meta.url).href,
    description: "Spring Framework core concepts, dependency injection, Spring Boot, Spring MVC, REST APIs, and enterprise Java development.",
    color: "bg-green-500"
  }
];

const categories = ["All", "Cloud", "DevOps", "Networking", "Frontend", "Backend", "AI/ML", "DSA"];

const Certificates = () => {
  const [filter, setFilter] = useState("All");
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [hoverId, setHoverId] = useState<number | null>(null);

  const filteredCerts = filter === "All" 
    ? certificatesData 
    : certificatesData.filter(c => c.category === filter);

  return (
    <section id="certificates" className="py-20 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground m-0" data-aos="fade-up">
              Certificates & Achievements
            </h2>
            <span 
              className="bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              15 Certifications & Counting
            </span>
          </div>
          
          {/* Filters */}
          <div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  filter === category
                    ? "bg-primary text-white border-primary shadow-md scale-105"
                    : "bg-secondary text-foreground hover:bg-secondary/80 border-transparent hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert, index) => (
            <div 
              key={cert.id}
              className="group relative z-10 hover:z-50 h-full flex flex-col"
              data-aos="zoom-in-up"
              data-aos-delay={(index % 3) * 100}
              onMouseEnter={() => setHoverId(cert.id)}
              onMouseLeave={() => setHoverId(null)}
            >
              
              {/* Tooltip Hover/Click Popover */}
              <div 
                className={`absolute bottom-[calc(100%+12px)] left-0 right-0 z-50 transition-all duration-300 origin-bottom pointer-events-none
                  ${(hoverId === cert.id || activeTooltip === cert.id) ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
                `}
              >
                <div className="bg-slate-900 dark:bg-slate-800 text-slate-100 p-4 rounded-xl shadow-2xl text-sm leading-relaxed border border-slate-700/50">
                  {cert.description}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 dark:bg-slate-800 border-b border-r border-slate-700/50 rotate-45"></div>
                </div>
              </div>

              {/* Card Surface */}
              <div className="portfolio-card flex flex-col bg-card rounded-2xl border border-border shadow-md hover:shadow-2xl transition-all duration-300 h-full overflow-hidden shrink-0">
                
                {/* Colored Top Banner */}
                <div className={`relative h-28 ${cert.color} p-5 flex justify-between items-start shrink-0 overflow-hidden`}>
                  
                  {/* Glowing/Decorative overlay */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-black/10 rounded-full blur-xl"></div>
                  
                  {/* Category Badge */}
                  <span className="bg-white/20 text-white backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm z-10 border border-white/10">
                    {cert.category}
                  </span>
                  
                  {/* Grade Badge */}
                  {cert.grade && (
                    <span className="bg-green-500/90 text-white backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold shadow-sm z-10 border border-green-400/20">
                      Grade: {cert.grade}
                    </span>
                  )}
                  
                  {/* Info Icon */}
                  <button 
                    className="absolute bottom-3 right-3 text-white/90 hover:text-white bg-black/10 hover:bg-black/30 p-2 rounded-full transition-all duration-300 backdrop-blur-md z-10 active:scale-95"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTooltip(activeTooltip === cert.id ? null : cert.id);
                    }}
                    aria-label="Show description"
                  >
                    <Info className="w-5 h-5 pointer-events-none" />
                  </button>
                </div>
                
                {/* Card Content details */}
                <div className="p-6 flex flex-col flex-grow bg-card z-10">
                  <h3 className="text-[1.1rem] font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-6">
                    {cert.issuer}
                  </p>
                  
                  {/* Action Area */}
                  <div className="mt-auto pt-5 border-t border-border/80">
                    <a 
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-white text-sm font-bold rounded-xl transition-all duration-300 w-full justify-center group/btn shadow-sm hover:shadow-md"
                    >
                      View Certificate 
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

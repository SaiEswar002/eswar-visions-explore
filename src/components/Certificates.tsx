import { useState, useEffect, useRef } from "react";
import { Info, ExternalLink, SearchX } from "lucide-react";

const certificatesData = [
  {
    id: 1,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    category: "Cloud",
    grade: null,
    file: new URL("../assets/Certfications/Azure-AZ-900.pdf", import.meta.url).href,
    description: "Foundational cloud concepts, Azure services, security, privacy, compliance, and pricing. Covers core Azure architecture and services.",
    gradient: "from-blue-500 to-blue-700",
    glow: "hover:shadow-blue-500/30"
  },
  {
    id: 2,
    title: "Build a CI/CD Pipeline with Docker",
    issuer: "Coursera",
    category: "DevOps",
    grade: "100%",
    file: new URL("../assets/Certfications/Build a CI-CD Pipeline with Docker From Code to Deployment.pdf", import.meta.url).href,
    description: "Hands-on pipeline creation using Docker containers, from source code to automated deployment in production environments.",
    gradient: "from-orange-500 to-orange-700",
    glow: "hover:shadow-orange-500/30"
  },
  {
    id: 3,
    title: "CCNAv7: Enterprise Networking, Security & Automation",
    issuer: "Cisco",
    category: "Networking",
    grade: null,
    file: new URL("../assets/Certfications/CCNAv7_Enterprise Networking, Security, and Automation.pdf", import.meta.url).href,
    description: "Advanced enterprise networking concepts including WAN technologies, network security, and automation using Python and Ansible.",
    gradient: "from-teal-500 to-teal-700",
    glow: "hover:shadow-teal-500/30"
  },
  {
    id: 4,
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco",
    category: "Networking",
    grade: null,
    file: new URL("../assets/Certfications/CCNAv7_Introduction to Networks.pdf", import.meta.url).href,
    description: "Fundamentals of networking including network protocols, IP addressing, Ethernet, and basic router and switch configuration.",
    gradient: "from-teal-500 to-teal-700",
    glow: "hover:shadow-teal-500/30"
  },
  {
    id: 5,
    title: "CCNAv7: Switching, Routing & Wireless Essentials",
    issuer: "Cisco",
    category: "Networking",
    grade: null,
    file: new URL("../assets/Certfications/CCNAv7_Switching, Routing, and Wireless Essentials.pdf", import.meta.url).href,
    description: "VLANs, inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, HSRP, and wireless LAN configuration and troubleshooting.",
    gradient: "from-teal-500 to-teal-700",
    glow: "hover:shadow-teal-500/30"
  },
  {
    id: 6,
    title: "CI/CD with Jenkins",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: "100%",
    file: new URL("../assets/Certfications/Continuous Integration & Continuous Deployment with Jenkins.pdf", import.meta.url).href,
    description: "Complete Jenkins pipeline setup, automated builds, testing integration, and continuous deployment workflows.",
    gradient: "from-red-500 to-red-700",
    glow: "hover:shadow-red-500/30"
  },
  {
    id: 7,
    title: "Continuous Monitoring with Jenkins",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: "83.33%",
    file: new URL("../assets/Certfications/Continuous Monitoring with Jenkins & Best Practices.pdf", import.meta.url).href,
    description: "Jenkins monitoring strategies, build health tracking, alerting, log management, and DevOps best practices.",
    gradient: "from-red-500 to-red-700",
    glow: "hover:shadow-red-500/30"
  },
  {
    id: 8,
    title: "DevOps and Jenkins Fundamentals",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: "100%",
    file: new URL("../assets/Certfications/DevOps and Jenkins Fundamentals.pdf", import.meta.url).href,
    description: "Core DevOps principles, culture, and practices combined with Jenkins fundamentals for automated software delivery.",
    gradient: "from-red-500 to-red-700",
    glow: "hover:shadow-red-500/30"
  },
  {
    id: 9,
    title: "Dynamic Programming & Greedy Algorithms",
    issuer: "University of Colorado Boulder",
    category: "DSA",
    grade: "99.37%",
    file: new URL("../assets/Certfications/Dynamic Programming, Greedy Algorithm.pdf", import.meta.url).href,
    description: "Advanced algorithm design techniques including memoization, tabulation, greedy strategies, and complexity analysis.",
    gradient: "from-purple-500 to-purple-700",
    glow: "hover:shadow-purple-500/30"
  },
  {
    id: 10,
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    category: "Frontend",
    grade: "92.50%",
    file: new URL("../assets/Certfications/Front-End Apps with React.pdf", import.meta.url).href,
    description: "React fundamentals, hooks, state management, component lifecycle, Redux, and building production-ready web applications.",
    gradient: "from-cyan-500 to-cyan-700",
    glow: "hover:shadow-cyan-500/30"
  },
  {
    id: 11,
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM",
    category: "AI/ML",
    grade: "98%",
    file: new URL("../assets/Certfications/Introduction to Artificial Intelligence (AI).pdf", import.meta.url).href,
    description: "AI concepts, machine learning fundamentals, neural networks, natural language processing, and real-world AI applications.",
    gradient: "from-yellow-500 to-yellow-700",
    glow: "hover:shadow-yellow-500/30"
  },
  {
    id: 12,
    title: "Jenkins - From Zero to Hero",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: null,
    file: new URL("../assets/Certfications/Jenkins - From Zero to Hero.pdf", import.meta.url).href,
    description: "Complete Jenkins mastery from installation to advanced pipeline creation, plugins, and enterprise-grade CI/CD setup.",
    gradient: "from-red-500 to-red-700",
    glow: "hover:shadow-red-500/30"
  },
  {
    id: 13,
    title: "Oracle Cloud Infrastructure 2025",
    issuer: "Oracle",
    category: "Cloud",
    grade: null,
    file: new URL("../assets/Certfications/OCI25CAA.jpg", import.meta.url).href,
    description: "Oracle Cloud Infrastructure fundamentals, compute, storage, networking, security, and cloud-native services.",
    gradient: "from-red-600 to-red-800",
    glow: "hover:shadow-red-600/30"
  },
  {
    id: 14,
    title: "Oracle Associate",
    issuer: "Oracle",
    category: "Cloud",
    grade: null,
    file: new URL("../assets/Certfications/Oracle Associate.pdf", import.meta.url).href,
    description: "Oracle technology fundamentals covering database concepts, cloud services, and Oracle ecosystem architecture.",
    gradient: "from-red-600 to-red-800",
    glow: "hover:shadow-red-600/30"
  },
  {
    id: 15,
    title: "Spring - Ecosystem and Core",
    issuer: "LearnQuest",
    category: "Backend",
    grade: "86.60%",
    file: new URL("../assets/Certfications/Spring - Ecosystem and Core.pdf", import.meta.url).href,
    description: "Spring Framework core concepts, dependency injection, Spring Boot, Spring MVC, REST APIs, and enterprise Java development.",
    gradient: "from-green-500 to-green-700",
    glow: "hover:shadow-green-500/30"
  }
];

const categories = ["All", "Cloud", "DevOps", "Networking", "Frontend", "Backend", "AI/ML", "DSA"];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Cloud": return "bg-blue-500";
    case "DevOps": return "bg-orange-500";
    case "Networking": return "bg-teal-500";
    case "Frontend": return "bg-cyan-500";
    case "Backend": return "bg-green-500";
    case "AI/ML": return "bg-yellow-500";
    case "DSA": return "bg-purple-500";
    default: return "bg-red-500";
  }
};

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openTooltip, setOpenTooltip] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedCerts, setDisplayedCerts] = useState(certificatesData);
  const sectionRef = useRef<HTMLElement>(null);

  // Close tooltip on outside click
  useEffect(() => {
    const handleClickOutside = () => setOpenTooltip(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleFilterChange = (category: string) => {
    if (category === activeFilter) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveFilter(category);
      setDisplayedCerts(
        category === "All" 
          ? certificatesData 
          : certificatesData.filter(c => c.category === category)
      );
      // Small delay for clean DOM insertion before animating opacity back
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  // Pre-calculate filter counts
  const counts = categories.reduce((acc, cat) => {
    acc[cat] = cat === "All" 
      ? certificatesData.length 
      : certificatesData.filter(c => c.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="certificates" ref={sectionRef} className="py-24 bg-background relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center mb-14 text-center" data-aos="fade-up">
          <div className="inline-flex items-center justify-center space-x-2 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-6 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <span className="text-red-500 font-bold text-[13px] tracking-wide uppercase">
              15 Certifications & Counting 🚀
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Certificates & Achievements
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Verified certifications from Microsoft, IBM, Cisco, Oracle & more
          </p>
        </div>

        {/* CATEGORY FILTER BAR */}
        <div 
          className="flex overflow-x-auto hide-scrollbar pb-6 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 justify-start sm:justify-center gap-2 sm:gap-3" 
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {categories.map(category => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 border ${
                  isActive
                    ? "bg-red-600 text-white border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)] scale-[1.03]"
                    : "bg-transparent text-secondary-foreground border-border hover:border-zinc-500 dark:hover:border-zinc-400 hover:text-foreground"
                }`}
              >
                {category}
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                  isActive ? "bg-white/25 text-white" : "bg-secondary text-secondary-foreground"
                }`}>
                  {counts[category]}
                </span>
              </button>
            );
          })}
        </div>

        {/* GRID LAYOUT */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-400 transform ease-out ${
            isAnimating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
          }`}
        >
          {displayedCerts.length > 0 ? (
            displayedCerts.map((cert, index) => (
              <div 
                key={cert.id}
                className={`group relative flex flex-col bg-[#0f1117] dark:bg-[#0f1117] rounded-2xl border border-[#1f222e] dark:border-[#1f222e] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-2xl ${cert.glow} z-10 hover:z-40`}
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 100, 300)}
              >
                
                {/* TOP BANNER */}
                <div className={`relative h-28 bg-gradient-to-r ${cert.gradient} p-5 flex justify-between items-start rounded-t-2xl shrink-0 overflow-hidden`}>
                  {/* Subtle decorative glow inside banner */}
                  <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                  
                  {/* Category Badge */}
                  <span className="bg-black/30 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-white/10 shadow-sm z-10">
                    {cert.category}
                  </span>
                  
                  {/* Grade Badge */}
                  {cert.grade && (
                    <span className="bg-green-500/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-[0_0_15px_rgba(34,197,94,0.5)] border border-green-400/30 z-10">
                      Score: {cert.grade}
                    </span>
                  )}
                  
                  {/* Info Icon Button */}
                  <button 
                    className="absolute -bottom-4 right-5 bg-[#1a1d27] border border-[#2a2d39] text-gray-300 hover:text-white p-2.5 rounded-full transition-all duration-300 shadow-xl active:scale-95 z-20 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenTooltip(openTooltip === cert.id ? null : cert.id);
                    }}
                    aria-label="View description"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                </div>
                
                {/* TOOLTIP (Appears below the banner header, overlapping card body) */}
                <div 
                  className={`absolute right-4 top-24 z-50 w-[85%] transition-all duration-300 pointer-events-none origin-top-right ${
                    openTooltip === cert.id ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <div className="bg-[#1a1d27]/95 backdrop-blur-xl border border-white/10 text-gray-200 p-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] text-sm leading-relaxed">
                    {cert.description}
                    {/* Up Arrow tip */}
                    <div className="absolute -top-2 right-4 w-4 h-4 bg-[#1a1d27]/95 border-t border-l border-white/10 transform rotate-45"></div>
                  </div>
                </div>

                {/* CARD BODY */}
                <div className="p-6 pt-8 flex flex-col flex-grow relative bg-[#0f1117] rounded-b-2xl z-10">
                  <h3 className="text-white text-[16px] font-bold leading-snug mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className={`w-1.5 h-1.5 rounded-full ${getCategoryColor(cert.category)} shadow-[0_0_8px_currentColor] opacity-80`} />
                    <p className="text-[#888c99] text-[13px] font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                  
                  {/* ACTION BUTTON */}
                  <div className="mt-auto pt-3">
                    <button 
                      onClick={() => window.open(cert.file, "_blank")}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-red-600/50 text-red-500 font-semibold text-sm transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-sm hover:shadow-[0_0_20px_rgba(220,38,38,0.35)] group/btn"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:-translate-y-[2px] group-hover/btn:translate-x-[2px]" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* EMPTY STATE */
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-24 text-center border-2 border-dashed border-[#1f222e] rounded-3xl bg-[#0f1117]/50" data-aos="fade-in">
              <div className="w-16 h-16 bg-[#1a1d27] rounded-full flex items-center justify-center mb-5 border border-[#2a2d39] shadow-inner">
                <SearchX className="w-8 h-8 text-zinc-500" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2 tracking-tight">No certificates found</h3>
              <p className="text-zinc-400 text-sm max-w-sm">
                There are currently no certificates assigned to the <span className="text-red-400 font-semibold">"{activeFilter}"</span> category.
              </p>
            </div>
          )}
        </div>
        
      </div>
      
      {/* Hide filter scrollbar utility */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Certificates;

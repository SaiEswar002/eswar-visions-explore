import { useState, useEffect, useRef } from "react";
import { Info, ExternalLink, SearchX, Award, ChevronLeft, ChevronRight } from "lucide-react";

// Certificate thumbnail images
const imgAzure = new URL("../assets/Certfications/certificate-imgs/Azure-AZ-900.jpg", import.meta.url).href;
const imgDockerCICD = new URL("../assets/Certfications/certificate-imgs/Build a CI-CD Pipeline with Docker From Code to Deployment.jpg", import.meta.url).href;
const imgCCNAEnterprise = new URL("../assets/Certfications/certificate-imgs/CCNAv7_Enterprise Networking, Security, and Automation.jpg", import.meta.url).href;
const imgCCNAIntro = new URL("../assets/Certfications/certificate-imgs/CCNAv7_Introduction to Networks.jpg", import.meta.url).href;
const imgCCNASwitching = new URL("../assets/Certfications/certificate-imgs/CCNAv7_Switching, Routing, and Wireless Essentials.jpg", import.meta.url).href;
const imgJenkinsCICD = new URL("../assets/Certfications/certificate-imgs/Continuous Integration & Continuous Deployment with Jenkins.jpg", import.meta.url).href;
const imgJenkinsMonitoring = new URL("../assets/Certfications/certificate-imgs/Continuous Monitoring with Jenkins & Best Practices.jpg", import.meta.url).href;
const imgDevOpsJenkins = new URL("../assets/Certfications/certificate-imgs/DevOps and Jenkins Fundamentals.jpg", import.meta.url).href;
const imgDynamicProgramming = new URL("../assets/Certfications/certificate-imgs/Dynamic Programming, Greedy Algorithm.jpg", import.meta.url).href;
const imgReact = new URL("../assets/Certfications/certificate-imgs/Front-End Apps with React.jpg", import.meta.url).href;
const imgAI = new URL("../assets/Certfications/certificate-imgs/Introduction to Artificial Intelligence (AI).jpg", import.meta.url).href;
const imgJenkinsHero = new URL("../assets/Certfications/certificate-imgs/Jenkins - From Zero to Hero.jpg", import.meta.url).href;
const imgOracleAssociate = new URL("../assets/Certfications/certificate-imgs/Oracle Associate.jpg", import.meta.url).href;
const imgSpring = new URL("../assets/Certfications/certificate-imgs/Spring - Ecosystem and Core.jpg", import.meta.url).href;

const certificatesData = [
  {
    id: 1,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    category: "Cloud",
    grade: null as string | null,
    file: new URL("../assets/Certfications/Azure-AZ-900.pdf", import.meta.url).href,
    description: "Foundational cloud concepts, Azure services, security, privacy, compliance, and pricing. Covers core Azure architecture and services.",
    gradient: "from-blue-500 to-blue-700",
    accentColor: "#3b82f6",
    image: imgAzure as string | null,
  },
  {
    id: 2,
    title: "Build a CI/CD Pipeline with Docker",
    issuer: "Coursera",
    category: "DevOps",
    grade: "100%" as string | null,
    file: new URL("../assets/Certfications/Build a CI-CD Pipeline with Docker From Code to Deployment.pdf", import.meta.url).href,
    description: "Hands-on pipeline creation using Docker containers, from source code to automated deployment in production environments.",
    gradient: "from-orange-500 to-orange-700",
    accentColor: "#f97316",
    image: imgDockerCICD as string | null,
  },
  {
    id: 3,
    title: "CCNAv7: Enterprise Networking, Security & Automation",
    issuer: "Cisco",
    category: "Networking",
    grade: null as string | null,
    file: new URL("../assets/Certfications/CCNAv7_Enterprise Networking, Security, and Automation.pdf", import.meta.url).href,
    description: "Advanced enterprise networking concepts including WAN technologies, network security, and automation using Python and Ansible.",
    gradient: "from-teal-500 to-teal-700",
    accentColor: "#14b8a6",
    image: imgCCNAEnterprise as string | null,
  },
  {
    id: 4,
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco",
    category: "Networking",
    grade: null as string | null,
    file: new URL("../assets/Certfications/CCNAv7_Introduction to Networks.pdf", import.meta.url).href,
    description: "Fundamentals of networking including network protocols, IP addressing, Ethernet, and basic router and switch configuration.",
    gradient: "from-teal-500 to-teal-700",
    accentColor: "#14b8a6",
    image: imgCCNAIntro as string | null,
  },
  {
    id: 5,
    title: "CCNAv7: Switching, Routing & Wireless Essentials",
    issuer: "Cisco",
    category: "Networking",
    grade: null as string | null,
    file: new URL("../assets/Certfications/CCNAv7_Switching, Routing, and Wireless Essentials.pdf", import.meta.url).href,
    description: "VLANs, inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, HSRP, and wireless LAN configuration and troubleshooting.",
    gradient: "from-teal-500 to-teal-700",
    accentColor: "#14b8a6",
    image: imgCCNASwitching as string | null,
  },
  {
    id: 6,
    title: "CI/CD with Jenkins",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: "100%" as string | null,
    file: new URL("../assets/Certfications/Continuous Integration & Continuous Deployment with Jenkins.pdf", import.meta.url).href,
    description: "Complete Jenkins pipeline setup, automated builds, testing integration, and continuous deployment workflows.",
    gradient: "from-red-500 to-red-700",
    accentColor: "#ef4444",
    image: imgJenkinsCICD as string | null,
  },
  {
    id: 7,
    title: "Continuous Monitoring with Jenkins",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: "83.33%" as string | null,
    file: new URL("../assets/Certfications/Continuous Monitoring with Jenkins & Best Practices.pdf", import.meta.url).href,
    description: "Jenkins monitoring strategies, build health tracking, alerting, log management, and DevOps best practices.",
    gradient: "from-red-500 to-red-700",
    accentColor: "#ef4444",
    image: imgJenkinsMonitoring as string | null,
  },
  {
    id: 8,
    title: "DevOps and Jenkins Fundamentals",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: "100%" as string | null,
    file: new URL("../assets/Certfications/DevOps and Jenkins Fundamentals.pdf", import.meta.url).href,
    description: "Core DevOps principles, culture, and practices combined with Jenkins fundamentals for automated software delivery.",
    gradient: "from-red-500 to-red-700",
    accentColor: "#ef4444",
    image: imgDevOpsJenkins as string | null,
  },
  {
    id: 9,
    title: "Dynamic Programming & Greedy Algorithms",
    issuer: "University of Colorado Boulder",
    category: "DSA",
    grade: "99.37%" as string | null,
    file: new URL("../assets/Certfications/Dynamic Programming, Greedy Algorithm.pdf", import.meta.url).href,
    description: "Advanced algorithm design techniques including memoization, tabulation, greedy strategies, and complexity analysis.",
    gradient: "from-purple-500 to-purple-700",
    accentColor: "#a855f7",
    image: imgDynamicProgramming as string | null,
  },
  {
    id: 10,
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    category: "Frontend",
    grade: "92.50%" as string | null,
    file: new URL("../assets/Certfications/Front-End Apps with React.pdf", import.meta.url).href,
    description: "React fundamentals, hooks, state management, component lifecycle, Redux, and building production-ready web applications.",
    gradient: "from-cyan-500 to-cyan-700",
    accentColor: "#06b6d4",
    image: imgReact as string | null,
  },
  {
    id: 11,
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM",
    category: "AI/ML",
    grade: "98%" as string | null,
    file: new URL("../assets/Certfications/Introduction to Artificial Intelligence (AI).pdf", import.meta.url).href,
    description: "AI concepts, machine learning fundamentals, neural networks, natural language processing, and real-world AI applications.",
    gradient: "from-yellow-500 to-yellow-600",
    accentColor: "#eab308",
    image: imgAI as string | null,
  },
  {
    id: 12,
    title: "Jenkins - From Zero to Hero",
    issuer: "LearnKartS",
    category: "DevOps",
    grade: null as string | null,
    file: new URL("../assets/Certfications/Jenkins - From Zero to Hero.pdf", import.meta.url).href,
    description: "Complete Jenkins mastery from installation to advanced pipeline creation, plugins, and enterprise-grade CI/CD setup.",
    gradient: "from-red-500 to-red-700",
    accentColor: "#ef4444",
    image: imgJenkinsHero as string | null,
  },
  {
    id: 13,
    title: "Oracle Cloud Infrastructure 2025",
    issuer: "Oracle",
    category: "Cloud",
    grade: null as string | null,
    file: new URL("../assets/Certfications/OCI25CAA.jpg", import.meta.url).href,
    description: "Oracle Cloud Infrastructure fundamentals, compute, storage, networking, security, and cloud-native services.",
    gradient: "from-rose-600 to-rose-800",
    accentColor: "#e11d48",
    image: null as string | null,
  },
  {
    id: 14,
    title: "Oracle Associate",
    issuer: "Oracle",
    category: "Cloud",
    grade: null as string | null,
    file: new URL("../assets/Certfications/Oracle Associate.pdf", import.meta.url).href,
    description: "Oracle technology fundamentals covering database concepts, cloud services, and Oracle ecosystem architecture.",
    gradient: "from-rose-600 to-rose-800",
    accentColor: "#e11d48",
    image: imgOracleAssociate as string | null,
  },
  {
    id: 15,
    title: "Spring - Ecosystem and Core",
    issuer: "LearnQuest",
    category: "Backend",
    grade: "86.60%" as string | null,
    file: new URL("../assets/Certfications/Spring - Ecosystem and Core.pdf", import.meta.url).href,
    description: "Spring Framework core concepts, dependency injection, Spring Boot, Spring MVC, REST APIs, and enterprise Java development.",
    gradient: "from-green-500 to-green-700",
    accentColor: "#22c55e",
    image: imgSpring as string | null,
  }
];

const categories = ["All", "Cloud", "DevOps", "Networking", "Frontend", "Backend", "AI/ML", "DSA"];

const getCategoryDot = (category: string) => {
  const map: Record<string, string> = {
    Cloud: "bg-blue-500",
    DevOps: "bg-orange-500",
    Networking: "bg-teal-500",
    Frontend: "bg-cyan-500",
    Backend: "bg-green-500",
    "AI/ML": "bg-yellow-500",
    DSA: "bg-purple-500",
  };
  return map[category] ?? "bg-red-500";
};

// ── Single card ──────────────────────────────────────────────
const CertCard = ({
  cert,
  index,
  openTooltip,
  setOpenTooltip,
}: {
  cert: typeof certificatesData[0];
  index: number;
  openTooltip: number | null;
  setOpenTooltip: (id: number | null) => void;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), index * 70);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className="relative flex flex-col rounded-2xl border shrink-0 overflow-visible group"
      style={{
        width: "272px",
        background: "hsl(var(--card))",
        borderColor: "hsl(var(--border))",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateX(0) translateY(0)" : "translateX(20px) translateY(4px)",
        transition: "opacity 400ms ease, transform 400ms ease, box-shadow 300ms ease, border-color 300ms ease",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = cert.accentColor + "55";
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = `0 18px 40px ${cert.accentColor}1a`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "hsl(var(--border))";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* ── Banner ── */}
      <div className={`relative h-24 rounded-t-2xl overflow-hidden shrink-0`}>
        {/* Image or gradient fallback */}
        {cert.image ? (
          <>
            <img
              src={cert.image}
              alt={cert.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Category-colored tinted overlay */}
            <div
              className="absolute inset-0"
              style={{ background: cert.accentColor + "33" }}
            />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient}`} />
        )}

        {/* Shine sweep */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.13) 50%, transparent 65%)" }}
        />
        <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/10 blur-2xl" />

        {/* Category badge */}
        <span className="absolute top-3 left-3 z-10 bg-black/40 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/15">
          {cert.category}
        </span>

        {/* Grade badge */}
        {cert.grade && (
          <span
            className="absolute top-3 right-10 z-10 bg-emerald-500/90 text-white px-2.5 py-1 rounded-full text-[10px] font-bold border border-emerald-400/30"
            style={{ boxShadow: "0 0 10px rgba(16,185,129,0.4)" }}
          >
            ✦ {cert.grade}
          </span>
        )}

        {/* Info button */}
        <button
          className="absolute -bottom-4 right-4 z-30 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: "hsl(var(--card))",
            borderColor: "hsl(var(--border))",
            color: "hsl(var(--muted-foreground))",
            boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
          }}
          onClick={e => {
            e.stopPropagation();
            setOpenTooltip(openTooltip === cert.id ? null : cert.id);
          }}
          aria-label={`Info about ${cert.title}`}
        >
          <Info className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ── Tooltip ── */}
      <div
        className="absolute right-3 top-[88px] z-50 w-[90%] pointer-events-none"
        style={{
          opacity: openTooltip === cert.id ? 1 : 0,
          transform: openTooltip === cert.id ? "translateY(0) scale(1)" : "translateY(-5px) scale(0.97)",
          visibility: openTooltip === cert.id ? "visible" : "hidden",
          transition: "opacity 200ms ease, transform 200ms ease",
        }}
      >
        <div
          className="relative rounded-xl p-3 text-[12px] leading-relaxed border"
          style={{
            background: "hsl(var(--popover))",
            borderColor: cert.accentColor + "45",
            color: "hsl(var(--muted-foreground))",
            boxShadow: `0 12px 30px rgba(0,0,0,0.4), 0 0 0 1px ${cert.accentColor}18`,
          }}
        >
          <div className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full" style={{ background: cert.accentColor }} />
          <p className="pl-3">{cert.description}</p>
          <div
            className="absolute -top-2 right-4 w-3.5 h-3.5 rotate-45 border-t border-l"
            style={{ background: "hsl(var(--popover))", borderColor: cert.accentColor + "45" }}
          />
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-grow p-4 pt-7">
        <h3 className="font-bold text-[14px] leading-snug mb-1.5" style={{ color: "hsl(var(--foreground))" }}>
          {cert.title}
        </h3>
        <div className="flex items-center gap-1.5 mb-4">
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${getCategoryDot(cert.category)}`} />
          <p className="text-[12px]" style={{ color: "hsl(var(--muted-foreground))" }}>{cert.issuer}</p>
        </div>
        <div className="mt-auto">
          <button
            onClick={() => window.open(cert.file, "_blank")}
            className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-[13px] font-semibold border transition-all duration-300 group/btn"
            style={{ borderColor: cert.accentColor + "55", color: cert.accentColor, background: "transparent" }}
            onMouseEnter={e => {
              const b = e.currentTarget;
              b.style.background = cert.accentColor;
              b.style.color = "#fff";
              b.style.borderColor = cert.accentColor;
              b.style.boxShadow = `0 0 18px ${cert.accentColor}35`;
            }}
            onMouseLeave={e => {
              const b = e.currentTarget;
              b.style.background = "transparent";
              b.style.color = cert.accentColor;
              b.style.borderColor = cert.accentColor + "55";
              b.style.boxShadow = "none";
            }}
          >
            View Certificate
            <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:-translate-y-px group-hover/btn:translate-x-px" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Horizontal scroll row with fade edges ────────────────────
const ScrollRow = ({
  certs,
  openTooltip,
  setOpenTooltip,
}: {
  certs: typeof certificatesData;
  openTooltip: number | null;
  setOpenTooltip: (id: number | null) => void;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateState = () => {
    const el = rowRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    // Small delay so DOM is painted
    setTimeout(updateState, 100);
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [certs]);

  const scroll = (dir: "left" | "right") =>
    rowRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });

  return (
    <div className="relative">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-4 w-24 z-20 pointer-events-none flex items-center justify-start pl-2"
        style={{
          opacity: canLeft ? 1 : 0,
          transition: "opacity 300ms ease",
          background: "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.7) 50%, transparent 100%)",
        }}
      >
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="pointer-events-auto w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: "hsl(var(--card))",
            borderColor: "hsl(var(--border))",
            color: "hsl(var(--foreground))",
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          }}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-4 w-24 z-20 pointer-events-none flex items-center justify-end pr-2"
        style={{
          opacity: canRight ? 1 : 0,
          transition: "opacity 300ms ease",
          background: "linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background) / 0.7) 50%, transparent 100%)",
        }}
      >
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="pointer-events-auto w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            background: "hsl(var(--card))",
            borderColor: "hsl(var(--border))",
            color: "hsl(var(--foreground))",
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          }}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Track */}
      <div
        ref={rowRef}
        className="flex gap-5 overflow-x-auto pb-5 px-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {certs.map((cert, i) => (
          <CertCard
            key={cert.id}
            cert={cert}
            index={i}
            openTooltip={openTooltip}
            setOpenTooltip={setOpenTooltip}
          />
        ))}
      </div>
    </div>
  );
};

// ── Main section ─────────────────────────────────────────────
const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openTooltip, setOpenTooltip] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedCerts, setDisplayedCerts] = useState(certificatesData);

  useEffect(() => {
    const close = () => setOpenTooltip(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const handleFilterChange = (category: string) => {
    if (category === activeFilter) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(category);
      setDisplayedCerts(
        category === "All" ? certificatesData : certificatesData.filter(c => c.category === category)
      );
      setTimeout(() => setIsAnimating(false), 50);
    }, 250);
  };

  const counts = categories.reduce((acc, cat) => {
    acc[cat] = cat === "All" ? certificatesData.length : certificatesData.filter(c => c.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden" style={{ background: "hsl(var(--background))" }}>
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-[0.04] blur-3xl"
          style={{ background: "radial-gradient(circle, #9b1c1c, transparent)" }} />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full opacity-[0.03] blur-3xl"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center" data-aos="fade-up">
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-[13px] font-semibold tracking-wide border"
            style={{
              background: "rgba(155,28,28,0.08)",
              borderColor: "rgba(155,28,28,0.25)",
              color: "hsl(var(--primary))",
              boxShadow: "0 0 20px rgba(155,28,28,0.1)",
            }}
          >
            <Award className="w-3.5 h-3.5" />
            15 Certifications &amp; Counting 🚀
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3" style={{ color: "hsl(var(--foreground))" }}>
            Certificates &amp;{" "}
            <span style={{ color: "hsl(var(--primary))" }}>Achievements</span>
          </h2>
          <div className="w-16 h-1 rounded-full mb-4" style={{ background: "hsl(var(--primary))" }} />
          <p className="text-sm md:text-base max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
            Verified certifications from Microsoft, IBM, Cisco, Oracle &amp; more
          </p>
        </div>

        {/* Filter bar */}
        <div
          className="flex overflow-x-auto hide-scrollbar pb-4 mb-8 gap-2 justify-start sm:justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map(cat => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shrink-0 border transition-all duration-300 dark:border-border"
                style={{
                  background: isActive ? "hsl(var(--primary))" : "transparent",
                  color: isActive ? "#fff" : "hsl(var(--muted-foreground))",
                  borderColor: isActive ? "hsl(var(--primary))" : "hsl(var(--border))",
                  boxShadow: isActive ? "0 0 18px rgba(155,28,28,0.3)" : "none",
                  transform: isActive ? "scale(1.04)" : "scale(1)",
                }}
              >
                {cat}
                <span
                  className="text-[11px] px-1.5 py-0.5 rounded-full font-bold min-w-[20px] text-center"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.2)" : "hsl(var(--secondary))",
                    color: isActive ? "#fff" : "hsl(var(--secondary-foreground))",
                  }}
                >
                  {counts[cat]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Horizontal scroll row */}
        <div
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 250ms ease, transform 250ms ease",
          }}
        >
          {displayedCerts.length > 0 ? (
            <ScrollRow
              certs={displayedCerts}
              openTooltip={openTooltip}
              setOpenTooltip={setOpenTooltip}
            />
          ) : (
            <div
              className="flex flex-col items-center justify-center py-20 rounded-3xl border-2 border-dashed"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border"
                style={{ background: "hsl(var(--secondary))", borderColor: "hsl(var(--border))" }}>
                <SearchX className="w-6 h-6" style={{ color: "hsl(var(--muted-foreground))" }} />
              </div>
              <h3 className="font-bold text-lg mb-1" style={{ color: "hsl(var(--foreground))" }}>No certificates found</h3>
              <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                None in the <span style={{ color: "hsl(var(--primary))" }}>"{activeFilter}"</span> category yet.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Certificates;
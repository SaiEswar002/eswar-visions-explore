import { useState } from "react";
import { ExternalLink } from "lucide-react";
import TiltedCard from "./TiltedCard";

/* ── Constants ── */
const GITHUB_USER = "SaiEswar002";
const snakeLight = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_USER}/output/github-contribution-grid-snake.svg`;
const snakeDark = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_USER}/output/github-contribution-grid-snake-dark.svg`;

const GITHUB_URL = `https://github.com/${GITHUB_USER}`;
const CODECHEF_URL = "https://www.codechef.com/users/sai_eswar_123";
const HACKERRANK_URL = "https://www.hackerrank.com/profile/h2300039123";

/* ── GitHub card content ── */
const GitHubContent = () => {
  const isDark = typeof window !== "undefined" && document.documentElement.classList.contains("dark");
  const [snakeLoaded, setSnakeLoaded] = useState(false);
  const [snakeSrc, setSnakeSrc] = useState(isDark ? snakeDark : snakeLight);

  // Exact data from your screenshot
  const languages = [
    { name: "Python", pct: "39.29%", color: "bg-sky-600" },
    { name: "JavaScript", pct: "32.28%", color: "bg-yellow-400" },
    { name: "TypeScript", pct: "19.40%", color: "bg-blue-500" },
    { name: "CSS", pct: "5.56%", color: "bg-purple-600" },
    { name: "HTML", pct: "3.46%", color: "bg-orange-500" },
  ];

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Snake Wrapper */}
      <div
        className="w-full rounded-xl flex flex-col items-center justify-center overflow-hidden p-2"
        style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))", minHeight: 110 }}
      >
        {!snakeLoaded && (
          <div className="flex justify-center items-end gap-1 py-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 rounded-sm bg-primary/25 animate-pulse"
                style={{ height: `${8 + i * 3}px`, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        )}
        <img
          src={snakeSrc}
          alt="GitHub contribution snake"
          className={`w-full h-auto ${snakeLoaded ? "block" : "hidden"}`}
          loading="lazy"
          onLoad={() => setSnakeLoaded(true)}
          onError={() => setSnakeSrc(isDark ? snakeLight : snakeDark)}
        />
      </div>

      {/* Top Languages Pure UI (Replaces the broken image/signal) */}
      <div 
        className="rounded-xl p-4 flex flex-col gap-3" 
        style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}
      >
        <p className="text-sm font-bold text-red-800 dark:text-red-400">Most Used Languages</p>
        
        {/* Full multi-colored progress bar line */}
        <div className="w-full h-2 rounded-full overflow-hidden flex bg-muted">
          {languages.map((lang) => (
            <div 
              key={lang.name} 
              style={{ width: lang.pct }} 
              className={`${lang.color} h-full`}
            />
          ))}
        </div>

        {/* Legend Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-1">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-2 text-xs">
              <span className={`w-3 h-3 rounded-full ${lang.color} shrink-0`} />
              <span className="text-muted-foreground font-medium">{lang.name}</span>
              <span className="text-foreground/70 ml-auto">{lang.pct}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── CodeChef card content ── */
const CodeChefContent = () => (
  <div className="flex flex-col gap-3 w-full">
    <div className="rounded-xl p-4 flex flex-col gap-3" style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm shrink-0">SE</div>
        <div>
          <p className="font-bold text-sm text-foreground">sai_eswar_123</p>
          <p className="text-xs text-muted-foreground">Competitive Programmer</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {["Algorithms", "Data Structures", "Problem Solving", "DSA"].map(t => (
          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
        ))}
      </div>
    </div>

    <div className="rounded-xl p-4 flex flex-col gap-2.5" style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Focus Areas</p>
      {[
        { label: "Long Challenge Contests", icon: "🏆" },
        { label: "Cook-Off & Lunchtime Rounds", icon: "⚡" },
        { label: "Greedy & DP Problems", icon: "🧩" },
        { label: "Graph Algorithms", icon: "🌐" },
      ].map(item => (
        <div key={item.label} className="flex items-center gap-2">
          <span className="text-sm">{item.icon}</span>
          <span className="text-xs text-foreground">{item.label}</span>
        </div>
      ))}
    </div>

    <div className="rounded-xl overflow-hidden flex justify-center py-2" style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}>
      <img
        src="https://img.shields.io/badge/CodeChef-sai__eswar__123-5B4638?style=for-the-badge&logo=codechef&logoColor=white"
        alt="CodeChef badge"
        loading="lazy"
        className="h-7"
      />
    </div>
  </div>
);

/* ── HackerRank card content ── */
const HackerRankContent = () => (
  <div className="flex flex-col gap-3 w-full">
    <div className="rounded-xl p-4 flex flex-col gap-3" style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm shrink-0">SE</div>
        <div>
          <p className="font-bold text-sm text-foreground">h2300039123</p>
          <p className="text-xs text-muted-foreground">Problem Solver</p>
        </div>
      </div>
    </div>

    <div className="rounded-xl p-4 flex flex-col gap-2.5" style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Practice Domains</p>
      {[
        { label: "Problem Solving (Basic → Adv)", icon: "🧠" },
        { label: "Python & Java Challenges", icon: "🐍" },
        { label: "SQL Queries", icon: "🗃️" },
        { label: "30 Days of Code", icon: "📅" },
        { label: "10 Days of Statistics", icon: "📊" },
      ].map(item => (
        <div key={item.label} className="flex items-center gap-2">
          <span className="text-sm">{item.icon}</span>
          <span className="text-xs text-foreground">{item.label}</span>
        </div>
      ))}
    </div>

    <div className="rounded-xl overflow-hidden flex justify-center py-2" style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}>
      <img
        src="https://img.shields.io/badge/HackerRank-h2300039123-00EA64?style=for-the-badge&logo=hackerrank&logoColor=white"
        alt="HackerRank badge"
        loading="lazy"
        className="h-7"
      />
    </div>
  </div>
);

/* ── SVGs ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);
const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M11.257.004C5.055.193.194 5.239.004 11.44c-.193 6.202 4.854 11.363 11.056 11.556 6.203.192 11.364-4.854 11.556-11.056C22.809 5.737 17.46.003 11.257.004zm-.534 3.99c.178 0 .35.013.516.034L9.74 7.952a2.42 2.42 0 0 0-.483 1.446c0 1.345 1.09 2.436 2.436 2.436a2.43 2.43 0 0 0 2.304-1.66l1.013-3.197a7.662 7.662 0 0 1 3.194 4.61H5.583a7.674 7.674 0 0 1 5.14-7.594zm.534 14.012a7.692 7.692 0 0 1-7.674-7.23h15.348a7.692 7.692 0 0 1-7.674 7.23z" />
  </svg>
);
const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.886-10.392-6c-.645-1.115-.645-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.915h.005a.26.26 0 0 0 .26-.26V6.27a.26.26 0 0 0-.26-.26H6.271a.258.258 0 0 0-.258.258v.39c0 .143.115.258.258.258h.005v10.073h-.005a.26.26 0 0 0-.26.26v.39c0 .142.115.257.258.257H9.96a.258.258 0 0 0 .257-.258v-.384a.258.258 0 0 0-.257-.258h-.005v-3.974h4.073v3.974h-.005a.26.26 0 0 0-.26.26v.384c0 .142.116.257.259.257h3.68a.258.258 0 0 0 .258-.258v-.384a.258.258 0 0 0-.258-.258h-.006V6.915h.006a.258.258 0 0 0 .258-.258v-.39a.258.258 0 0 0-.258-.257l-3.147-.211z" />
  </svg>
);

/* ── Platform card wrapper ── */
interface PlatformCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
  btnLabel: string;
  delay?: number;
  children: React.ReactNode;
}

const PlatformCard = ({ icon, title, subtitle, href, btnLabel, delay = 0, children }: PlatformCardProps) => (
  <div className="h-full" data-aos="fade-up" data-aos-delay={delay}>
    <TiltedCard
      containerHeight="100%"
      containerWidth="100%"
      imageHeight="100%"
      imageWidth="100%"
      rotateAmplitude={8}
      scaleOnHover={1.05}
      showMobileWarning={false}
      showTooltip={false}
    >
      <div className="portfolio-card flex flex-col gap-4 h-full w-full hover:shadow-xl transition-shadow duration-500">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            {icon}
          </div>
          <div className="min-w-0 text-left">
            <h3 className="font-bold text-base text-foreground leading-tight">{title}</h3>
            <p className="text-xs text-muted-foreground leading-snug mt-0.5">{subtitle}</p>
          </div>
        </div>
        <div className="flex-1 text-left">{children}</div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-semibold border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
        >
          {btnLabel} <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </TiltedCard>
  </div>
);

/* ── Main Component ── */
const CodingActivity = () => (
  <section id="coding-activity" className="py-16 bg-background dark:bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="section-title">Coding Activity</h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm mt-4">
          Live contributions, competitive programming, and problem-solving across platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <PlatformCard icon={<GithubIcon />} title="GitHub Contributions" subtitle="Live stats & contribution snake" href={GITHUB_URL} btnLabel="View GitHub Profile" delay={0}>
          <GitHubContent />
        </PlatformCard>

        <PlatformCard icon={<CodeChefIcon />} title="CodeChef Activity" subtitle="Competitive programming & contests" href={CODECHEF_URL} btnLabel="View CodeChef Profile" delay={120}>
          <CodeChefContent />
        </PlatformCard>

        <PlatformCard icon={<HackerRankIcon />} title="HackerRank Progress" subtitle="Problem solving & skill domains" href={HACKERRANK_URL} btnLabel="View HackerRank Profile" delay={240}>
          <HackerRankContent />
        </PlatformCard>
      </div>
    </div>
  </section>
);

export default CodingActivity;
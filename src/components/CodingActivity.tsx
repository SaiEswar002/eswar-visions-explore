import { useState } from "react";
import { ExternalLink } from "lucide-react";

/* ── Snake URLs — generated in SaiEswar002/SaiEswar002 profile repo ── */
const PROFILE_REPO   = "SaiEswar002/SaiEswar002";

const makeSnakeUrl = (repo: string, dark: boolean) =>
  `https://raw.githubusercontent.com/${repo}/output/github-contribution-grid-snake${dark ? "-dark" : ""}.svg`;

const GITHUB_URL    = "https://github.com/SaiEswar002";
const CODECHEF_URL  = "https://www.codechef.com/users/sai_eswar_123";
const HACKERRANK_URL= "https://www.hackerrank.com/profile/h2300039123";

/* ── Live snake with multi-URL fallback chain ── */
const SnakeContribution = () => {
  const isDark = typeof window !== "undefined" && document.documentElement.classList.contains("dark");

  // Try dark theme first, then light theme fallback
  const urls = [
    makeSnakeUrl(PROFILE_REPO, isDark),
    makeSnakeUrl(PROFILE_REPO, !isDark),
  ];

  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const failed = idx >= urls.length;

  return (
    <div
      className="w-full rounded-xl overflow-hidden p-2"
      style={{
        background: "hsl(var(--secondary))",
        border: "1px solid hsl(var(--border))",
      }}
    >
      {!failed ? (
        <>
          {!loaded && (
            <div className="flex items-center justify-center gap-1 py-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 rounded-sm bg-primary/30 animate-pulse"
                  style={{ height: `${10 + i * 4}px`, animationDelay: `${i * 0.12}s` }}
                />
              ))}
            </div>
          )}
          <img
            key={urls[idx]}
            src={urls[idx]}
            alt="GitHub contribution snake animation"
            className={`w-full h-auto transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0 h-0"}`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => { setLoaded(false); setIdx(i => i + 1); }}
          />
        </>
      ) : (
        /* All URLs failed — show contribution grid placeholder */
        <div className="flex flex-col items-center gap-2 py-3">
          <div className="flex gap-0.5 flex-wrap justify-center" style={{ maxWidth: 240 }}>
            {Array.from({ length: 35 * 5 }).map((_, i) => {
              const v = Math.random();
              const c =
                v > 0.85 ? "hsl(0 67% 36%)" :
                v > 0.65 ? "hsl(0 67% 46%)" :
                v > 0.45 ? "hsl(0 67% 56%)" :
                v > 0.25 ? "hsl(60 56% 85%)" :
                           "hsl(60 56% 93%)";
              return (
                <div
                  key={i}
                  style={{ width: 8, height: 8, background: c, borderRadius: 2, flexShrink: 0, margin: "0.5px" }}
                />
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-1">
            Run the snake workflow in GitHub Actions to show live data
          </p>
        </div>
      )}
    </div>
  );
};

/* ── CodeChef panel ── */
const CodeChefPanel = () => {
  const bars = [65, 80, 50, 90, 70, 85, 60, 75, 88, 55, 92, 78];
  return (
    <div className="w-full flex flex-col gap-2.5">
      <div
        className="rounded-xl p-3 flex items-center gap-3"
        style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}
      >
        <div className="flex flex-col items-center shrink-0">
          <div className="text-2xl font-black text-primary">3★</div>
          <div className="text-[9px] text-muted-foreground uppercase tracking-widest">Rating</div>
        </div>
        <div className="w-px h-8 bg-border" />
        <div className="flex-1 min-w-0">
          <p className="text-primary font-bold text-sm truncate">sai_eswar_123</p>
          <p className="text-muted-foreground text-xs">Competitive Programmer</p>
          <div className="flex gap-1 mt-1 flex-wrap">
            {["Algorithms", "DSA"].map(t => (
              <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div
        className="rounded-xl p-3"
        style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}
      >
        <p className="text-[10px] text-muted-foreground mb-2 uppercase tracking-widest">Contest Activity</p>
        <div className="flex items-end gap-0.5 h-8">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t transition-all duration-700"
              style={{
                height: `${h}%`,
                background: `hsl(0 67% ${36 + (h / 100) * 20}%)`,
                opacity: 0.6 + (h / 100) * 0.4,
                transitionDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── HackerRank panel ── */
const HackerRankPanel = () => {
  const skills = [
    { name: "Problem Solving", pct: 85 },
    { name: "Python",          pct: 72 },
    { name: "SQL",             pct: 68 },
    { name: "Java",            pct: 60 },
  ];
  const badges = ["Problem Solving", "Python", "SQL", "30 Days of Code"];

  return (
    <div className="w-full flex flex-col gap-2.5">
      <div
        className="rounded-xl p-3"
        style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}
      >
        <p className="text-[10px] text-muted-foreground mb-2.5 uppercase tracking-widest">Skill Proficiency</p>
        <div className="flex flex-col gap-2">
          {skills.map(s => (
            <div key={s.name}>
              <div className="flex justify-between mb-0.5">
                <span className="text-[11px] text-foreground">{s.name}</span>
                <span className="text-[11px] font-bold text-primary">{s.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-border overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {badges.map(b => (
          <span
            key={b}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold bg-primary/10 text-primary border border-primary/25"
          >
            ⭐ {b}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ── Icons ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);
const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M11.257.004C5.055.193.194 5.239.004 11.44c-.193 6.202 4.854 11.363 11.056 11.556 6.203.192 11.364-4.854 11.556-11.056C22.809 5.737 17.46.003 11.257.004zm-.534 3.99c.178 0 .35.013.516.034L9.74 7.952a2.42 2.42 0 0 0-.483 1.446c0 1.345 1.09 2.436 2.436 2.436a2.43 2.43 0 0 0 2.304-1.66l1.013-3.197a7.662 7.662 0 0 1 3.194 4.61H5.583a7.674 7.674 0 0 1 5.14-7.594zm.534 14.012a7.692 7.692 0 0 1-7.674-7.23h15.348a7.692 7.692 0 0 1-7.674 7.23z"/>
  </svg>
);
const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.886-10.392-6c-.645-1.115-.645-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.915h.005a.26.26 0 0 0 .26-.26V6.27a.26.26 0 0 0-.26-.26H6.271a.258.258 0 0 0-.258.258v.39c0 .143.115.258.258.258h.005v10.073h-.005a.26.26 0 0 0-.26.26v.39c0 .142.115.257.258.257H9.96a.258.258 0 0 0 .257-.258v-.384a.258.258 0 0 0-.257-.258h-.005v-3.974h4.073v3.974h-.005a.26.26 0 0 0-.26.26v.384c0 .142.116.257.259.257h3.68a.258.258 0 0 0 .258-.258v-.384a.258.258 0 0 0-.258-.258h-.006V6.915h.006a.258.258 0 0 0 .258-.258v-.39a.258.258 0 0 0-.258-.257l-3.147-.211z" />
  </svg>
);

/* ── Platform card ── */
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
  <div
    className="portfolio-card flex flex-col gap-4"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    {/* Header row */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="font-bold text-base text-foreground leading-tight">{title}</h3>
        <p className="text-xs text-muted-foreground leading-snug mt-0.5">{subtitle}</p>
      </div>
    </div>

    {/* Content slot */}
    <div className="flex-1">{children}</div>

    {/* CTA */}
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-semibold border border-primary/30 text-primary bg-primary/8 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
    >
      {btnLabel}
      <ExternalLink className="w-3.5 h-3.5" />
    </a>
  </div>
);

/* ══════════════════════════════════════════
   Main Section — themed to portfolio palette
   ══════════════════════════════════════════ */
const CodingActivity = () => (
  <section
    id="coding-activity"
    className="py-16 bg-background dark:bg-background"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="section-title">Coding Activity</h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm mt-4">
          Live contributions, competitive programming, and problem-solving across platforms.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlatformCard
          icon={<GithubIcon />}
          title="GitHub Contributions"
          subtitle="Open-source projects & live contribution snake"
          href={GITHUB_URL}
          btnLabel="View GitHub Profile"
          delay={0}
        >
          <SnakeContribution />
        </PlatformCard>

        <PlatformCard
          icon={<CodeChefIcon />}
          title="CodeChef Activity"
          subtitle="Competitive programming & algorithmic contests"
          href={CODECHEF_URL}
          btnLabel="View CodeChef Profile"
          delay={120}
        >
          <CodeChefPanel />
        </PlatformCard>

        <PlatformCard
          icon={<HackerRankIcon />}
          title="HackerRank Progress"
          subtitle="Skill badges & problem-solving across domains"
          href={HACKERRANK_URL}
          btnLabel="View HackerRank Profile"
          delay={240}
        >
          <HackerRankPanel />
        </PlatformCard>
      </div>
    </div>
  </section>
);

export default CodingActivity;

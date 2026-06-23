import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const GITHUB_SNAKE_DARK =
  "https://raw.githubusercontent.com/SaiEswar002/SaiEswar002/output/github-contribution-grid-snake-dark.svg";
const GITHUB_SNAKE_LIGHT =
  "https://raw.githubusercontent.com/SaiEswar002/SaiEswar002/output/github-contribution-grid-snake.svg";

const GITHUB_URL = "https://github.com/SaiEswar002";
const CODECHEF_URL = "https://www.codechef.com/users/sai_eswar_123";
const HACKERRANK_URL = "https://www.hackerrank.com/profile/h2300039123";

/* ── Animated network canvas background ── */
const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const dots = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath(); ctx.arc(d.x, d.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56,189,248,0.45)"; ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y, dist = Math.hypot(dx, dy);
        if (dist < 130) {
          ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(56,189,248,${0.12 * (1 - dist / 130)})`; ctx.lineWidth = 0.7; ctx.stroke();
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

/* ── Live GitHub Snake ── */
const SnakeContribution = () => {
  const [snakeLoaded, setSnakeLoaded] = useState(false);
  const [snakeFailed, setSnakeFailed] = useState(false);
  const isDark = typeof window !== "undefined" && document.documentElement.classList.contains("dark");
  const primaryUrl = isDark ? GITHUB_SNAKE_DARK : GITHUB_SNAKE_LIGHT;
  const fallbackUrl = isDark ? GITHUB_SNAKE_LIGHT : GITHUB_SNAKE_DARK;
  const [src, setSrc] = useState(primaryUrl);

  const handleError = () => {
    if (src !== fallbackUrl) setSrc(fallbackUrl);
    else setSnakeFailed(true);
  };

  return (
    <div className="w-full rounded-xl overflow-hidden p-2" style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(56,189,248,0.15)" }}>
      {!snakeFailed ? (
        <>
          {!snakeLoaded && (
            <div className="flex flex-col items-center justify-center gap-2 py-5 text-slate-500 text-xs">
              <div className="flex gap-1 items-end">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="w-2 rounded-sm bg-slate-600 animate-pulse" style={{ height: `${12 + i * 3}px`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <span>Loading live contributions…</span>
            </div>
          )}
          <img src={src} alt="Live GitHub contribution snake" className={`w-full h-auto transition-opacity duration-500 ${snakeLoaded ? "opacity-100" : "opacity-0 h-0"}`} loading="lazy" onLoad={() => setSnakeLoaded(true)} onError={handleError} />
        </>
      ) : (
        <div className="flex flex-col items-center gap-2 py-3">
          <div className="flex gap-0.5 flex-wrap justify-center" style={{ maxWidth: 260 }}>
            {Array.from({ length: 52 * 5 }).map((_, i) => {
              const v = Math.random();
              const c = v > 0.85 ? "#39d353" : v > 0.65 ? "#26a641" : v > 0.45 ? "#006d32" : v > 0.25 ? "#0e4429" : "#161b22";
              return <div key={i} style={{ width: 9, height: 9, background: c, borderRadius: 2, flexShrink: 0, margin: "0.5px" }} />;
            })}
          </div>
          <p className="text-slate-500 text-[10px] text-center">Add the snake.yml to your profile repo to show live data</p>
        </div>
      )}
    </div>
  );
};

/* ── CodeChef rich panel ── */
const CodeChefPanel = () => {
  const bars = [65, 80, 50, 90, 70, 85, 60, 75, 88, 55, 92, 78];
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Rating card */}
      <div className="rounded-xl p-4 flex items-center gap-4" style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)" }}>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-black text-amber-400">3★</div>
          <div className="text-[10px] text-amber-500/70 uppercase tracking-widest mt-0.5">Rating</div>
        </div>
        <div className="h-10 w-px bg-amber-400/20" />
        <div className="flex-1">
          <p className="text-amber-300 font-bold text-sm">sai_eswar_123</p>
          <p className="text-slate-500 text-xs">Competitive Programmer</p>
          <div className="flex gap-1 mt-1.5">
            {["Algorithms", "Data Structures"].map(t => (
              <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">{t}</span>
            ))}
          </div>
        </div>
      </div>
      {/* Activity bars */}
      <div className="rounded-xl p-3" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(251,191,36,0.12)" }}>
        <p className="text-[10px] text-slate-500 mb-2 uppercase tracking-widest">Contest Activity</p>
        <div className="flex items-end gap-0.5 h-10">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `rgba(251,191,36,${0.3 + (h / 100) * 0.7})`, transition: "height 1s ease", transitionDelay: `${i * 60}ms` }} />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] text-slate-600">Jan</span>
          <span className="text-[9px] text-slate-600">Dec</span>
        </div>
      </div>
    </div>
  );
};

/* ── HackerRank rich panel ── */
const HackerRankPanel = () => {
  const skills = [
    { name: "Problem Solving", pct: 85, color: "#22c55e" },
    { name: "Python",          pct: 72, color: "#86efac" },
    { name: "SQL",             pct: 68, color: "#4ade80" },
    { name: "Java",            pct: 60, color: "#16a34a" },
  ];
  const badges = ["Problem Solving", "Python", "SQL", "30 Days of Code"];

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Skill bars */}
      <div className="rounded-xl p-4" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.18)" }}>
        <p className="text-[10px] text-slate-500 mb-3 uppercase tracking-widest">Skill Proficiency</p>
        <div className="flex flex-col gap-2.5">
          {skills.map(s => (
            <div key={s.name}>
              <div className="flex justify-between mb-0.5">
                <span className="text-[11px] text-slate-400">{s.name}</span>
                <span className="text-[11px] font-bold" style={{ color: s.color }}>{s.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${s.pct}%`, background: s.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Badges */}
      <div className="flex flex-wrap gap-1.5">
        {badges.map(b => (
          <span key={b} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", color: "#4ade80" }}>
            ⭐ {b}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ── Activity Card wrapper ── */
interface CardProps {
  icon: React.ReactNode; iconBg: string; title: string; subtitle: string;
  href: string; btnLabel: string; accentColor: string; delay?: number; children?: React.ReactNode;
}
const ActivityCard = ({ icon, iconBg, title, subtitle, href, btnLabel, accentColor, delay = 0, children }: CardProps) => (
  <div
    className="relative flex flex-col items-center text-center rounded-2xl p-6 gap-5 h-full"
    style={{ background: "rgba(10,20,40,0.75)", border: `1px solid ${accentColor}30`, backdropFilter: "blur(14px)", boxShadow: `0 4px 40px rgba(0,0,0,0.5), 0 0 0 1px ${accentColor}10 inset` }}
    data-aos="fade-up" data-aos-delay={delay}
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: accentColor }} />
    <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${iconBg}`}>{icon}</div>
    <div className="relative z-10 w-full flex flex-col items-center gap-3 flex-1">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-400 max-w-xs leading-relaxed">{subtitle}</p>
      <div className="w-full flex-1 flex items-start justify-center">{children}</div>
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 mt-2"
        style={{ background: `${accentColor}18`, border: `1px solid ${accentColor}55`, color: accentColor }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${accentColor}35`; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${accentColor}18`; }}
      >
        {btnLabel} <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  </div>
);

/* ── Icons ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);
const CodeChefIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
    <path d="M11.257.004C5.055.193.194 5.239.004 11.44c-.193 6.202 4.854 11.363 11.056 11.556 6.203.192 11.364-4.854 11.556-11.056C22.809 5.737 17.46.003 11.257.004zm-.534 3.99c.178 0 .35.013.516.034L9.74 7.952a2.42 2.42 0 0 0-.483 1.446c0 1.345 1.09 2.436 2.436 2.436a2.43 2.43 0 0 0 2.304-1.66l1.013-3.197a7.662 7.662 0 0 1 3.194 4.61H5.583a7.674 7.674 0 0 1 5.14-7.594zm.534 14.012a7.692 7.692 0 0 1-7.674-7.23h15.348a7.692 7.692 0 0 1-7.674 7.23z"/>
  </svg>
);
const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.886-10.392-6c-.645-1.115-.645-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.915h.005a.26.26 0 0 0 .26-.26V6.27a.26.26 0 0 0-.26-.26H6.271a.258.258 0 0 0-.258.258v.39c0 .143.115.258.258.258h.005v10.073h-.005a.26.26 0 0 0-.26.26v.39c0 .142.115.257.258.257H9.96a.258.258 0 0 0 .257-.258v-.384a.258.258 0 0 0-.257-.258h-.005v-3.974h4.073v3.974h-.005a.26.26 0 0 0-.26.26v.384c0 .142.116.257.259.257h3.68a.258.258 0 0 0 .258-.258v-.384a.258.258 0 0 0-.258-.258h-.006V6.915h.006a.258.258 0 0 0 .258-.258v-.39a.258.258 0 0 0-.258-.257l-3.147-.211z" />
  </svg>
);

/* ══════════════════════════════════════════ */
const CodingActivity = () => (
  <section id="coding-activity" className="relative py-24 overflow-hidden"
    style={{ background: "linear-gradient(160deg, #060d1a 0%, #0a1628 40%, #06111f 100%)" }}>
    <NetworkBackground />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
          style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.3)", color: "#38bdf8" }}>
          Competitive Programming &amp; Open Source
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Coding Activity</h2>
        <p className="text-slate-400 max-w-lg mx-auto text-base">Live contributions, competitive programming, and problem-solving across platforms.</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <ActivityCard icon={<GithubIcon />} iconBg="bg-gray-800" title="GitHub Contributions"
          subtitle="Open-source projects and live contribution activity — powered by GitHub Actions snake."
          href={GITHUB_URL} btnLabel="View GitHub Profile" accentColor="#38bdf8" delay={0}>
          <SnakeContribution />
        </ActivityCard>

        <ActivityCard icon={<CodeChefIcon />} iconBg="bg-amber-800" title="CodeChef Activity"
          subtitle="Competitive programming contests and algorithmic challenges."
          href={CODECHEF_URL} btnLabel="View CodeChef Profile" accentColor="#fbbf24" delay={150}>
          <CodeChefPanel />
        </ActivityCard>

        <ActivityCard icon={<HackerRankIcon />} iconBg="bg-green-800" title="HackerRank Progress"
          subtitle="Skill badges and problem-solving across domains on HackerRank."
          href={HACKERRANK_URL} btnLabel="View HackerRank Profile" accentColor="#22c55e" delay={300}>
          <HackerRankPanel />
        </ActivityCard>
      </div>
    </div>
  </section>
);

export default CodingActivity;

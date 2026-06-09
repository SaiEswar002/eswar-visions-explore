import { Film, Gamepad2, Youtube } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Logo imports ──────────────────────────────────────────────
import capcutLogo from "@/assets/Hobbies_logos/video_editing/capcut_logo.png";
import premiereLogo from "@/assets/Hobbies_logos/video_editing/Adobe_Premiere_Pro_logo.png";
import afterEffectsLogo from "@/assets/Hobbies_logos/video_editing/Adobe_After_Effects_logo.png";
import davinciLogo from "@/assets/Hobbies_logos/video_editing/Davinci_resolve_logo.png";
import codmLogo from "@/assets/Hobbies_logos/pc_gaming/codm_logo.png";
import valorantLogo from "@/assets/Hobbies_logos/pc_gaming/valorant_logo.png";
import marvelRivalsLogo from "@/assets/Hobbies_logos/pc_gaming/marvel_rivals_logo.png";
import genshinLogo from "@/assets/Hobbies_logos/pc_gaming/genshin_impact_logo.png";

// ── Video Editing expanded content ───────────────────────────
const videoEditingTools = [
  { logo: capcutLogo, name: "CapCut", desc: "Quick edits & mobile-first" },
  { logo: premiereLogo, name: "Adobe Premiere Pro", desc: "Professional video editing" },
  { logo: afterEffectsLogo, name: "Adobe After Effects", desc: "Motion graphics & VFX" },
  { logo: davinciLogo, name: "DaVinci Resolve", desc: "Color grading & finishing" },
];

// ── PC Gaming expanded content ────────────────────────────────
const gamingMobile = [
  { logo: codmLogo, name: "Call of Duty Mobile", short: "CODM" },
];
const gamingPC = [
  { logo: valorantLogo, name: "Valorant" },
  { logo: marvelRivalsLogo, name: "Marvel Rivals" },
  { logo: genshinLogo, name: "Genshin Impact" },
];

// ── YouTube channels ──────────────────────────────────────────
interface Channel {
  name: string;
  niche: string;
  url: string;
}
const channels: Channel[] = [
  {
    name: "Raj Shamani",
    niche: "Entrepreneurship & Life",
    url: "https://www.youtube.com/@rajshamani",
  },
  {
    name: "Telugu Connects",
    niche: "Telugu Interviews",
    url: "https://www.youtube.com/@TeluguConnects_",
  },
  {
    name: "Raw Talks with VK",
    niche: "Unfiltered Conversations",
    url: "https://www.youtube.com/@rawtalkswithvk",
  },
  {
    name: "Chari Not Sorry",
    niche: "Comedy & Culture",
    url: "https://www.youtube.com/@charinotsorry",
  },
];

// ── Shared animation config ───────────────────────────────────
const expandAnimation = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.35, ease: "easeInOut" },
};

// ── Main Hobbies component ────────────────────────────────────
const Hobbies = () => {
  const [expandedHobby, setExpandedHobby] = useState<string | null>(null);

  const toggleHobby = (name: string) => {
    setExpandedHobby(prev => (prev === name ? null : name));
  };

  return (
    <section id="hobbies" className="beige-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Hobbies &amp; Interests</h2>

        {/* 3-column grid on desktop, 1-column stack on mobile — items-start keeps columns independent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* ── Column 1: Video Editing ── */}
          <div className="flex flex-col">
            <div
              className="portfolio-card group cursor-pointer select-none rounded-2xl shadow-sm border border-border"
              data-aos="fade-up"
              data-aos-delay="0"
              onClick={() => toggleHobby("video-editing")}
              role="button"
              tabIndex={0}
              aria-expanded={expandedHobby === "video-editing"}
              aria-label="Toggle Video Editing details"
              onKeyDown={e => e.key === "Enter" && toggleHobby("video-editing")}
            >
              <div className="text-center mb-4">
                <Film className="skill-icon group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Video Editing</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Creating engaging visual content and storytelling through editing
                </p>
                <span className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                  {expandedHobby === "video-editing" ? "▲ Close" : "▼ See my tools"}
                </span>
              </div>
            </div>

            <AnimatePresence>
              {expandedHobby === "video-editing" && (
                <motion.div
                  key="video-editing-panel"
                  {...expandAnimation}
                  style={{ overflow: "hidden" }}
                  className="mt-2"
                >
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                      <Film className="w-5 h-5 text-primary" /> Tools I Use
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {videoEditingTools.map(tool => (
                        <div
                          key={tool.name}
                          className="flex flex-col items-center gap-2 p-4 bg-secondary rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 text-center"
                        >
                          <img src={tool.logo} alt={tool.name} className="w-10 h-10 object-contain" />
                          <span className="font-semibold text-sm text-foreground">{tool.name}</span>
                          <span className="text-xs text-muted-foreground">{tool.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Column 2: PC Gaming ── */}
          <div className="flex flex-col">
            <div
              className="portfolio-card group cursor-pointer select-none rounded-2xl shadow-sm border border-border"
              data-aos="fade-up"
              data-aos-delay="150"
              onClick={() => toggleHobby("pc-gaming")}
              role="button"
              tabIndex={0}
              aria-expanded={expandedHobby === "pc-gaming"}
              aria-label="Toggle PC Gaming details"
              onKeyDown={e => e.key === "Enter" && toggleHobby("pc-gaming")}
            >
              <div className="text-center mb-4">
                <Gamepad2 className="skill-icon group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">PC Gaming</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Exploring virtual worlds and strategic gameplay experiences
                </p>
                <span className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                  {expandedHobby === "pc-gaming" ? "▲ Close" : "▼ See my games"}
                </span>
              </div>
            </div>

            <AnimatePresence>
              {expandedHobby === "pc-gaming" && (
                <motion.div
                  key="pc-gaming-panel"
                  {...expandAnimation}
                  style={{ overflow: "hidden" }}
                  className="mt-2"
                >
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                      <Gamepad2 className="w-5 h-5 text-primary" /> My Gaming Setup
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Mobile */}
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          📱 Mobile
                        </p>
                        <div className="flex flex-col gap-3">
                          {gamingMobile.map(g => (
                            <div
                              key={g.name}
                              className="flex items-center gap-3 p-3 bg-secondary rounded-xl border border-border"
                            >
                              <img src={g.logo} alt={g.name} className="w-9 h-9 object-contain flex-shrink-0" />
                              <div>
                                <p className="font-semibold text-sm text-foreground">{g.name}</p>
                                <p className="text-xs text-muted-foreground">{g.short}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Laptop/PC */}
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          💻 Laptop / PC
                        </p>
                        <div className="flex flex-col gap-3">
                          {gamingPC.map(g => (
                            <div
                              key={g.name}
                              className="flex items-center gap-3 p-3 bg-secondary rounded-xl border border-border"
                            >
                              <img src={g.logo} alt={g.name} className="w-9 h-9 object-contain flex-shrink-0" />
                              <p className="font-semibold text-sm text-foreground">{g.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Column 3: Podcasts & YouTube ── */}
          <div className="flex flex-col">
            <div
              className="portfolio-card group cursor-pointer select-none rounded-2xl shadow-sm border border-border"
              data-aos="fade-up"
              data-aos-delay="300"
              onClick={() => toggleHobby("podcasts")}
              role="button"
              tabIndex={0}
              aria-expanded={expandedHobby === "podcasts"}
              aria-label="Toggle Podcasts and YouTube details"
              onKeyDown={e => e.key === "Enter" && toggleHobby("podcasts")}
            >
              <div className="text-center mb-4">
                <Youtube
                  className="skill-icon group-hover:scale-110 transition-transform"
                  style={{ color: "#FF0000" }}
                />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Podcasts &amp; YouTube 🎙️
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Trending creators I follow for inspiration, tech, and life.
                </p>
                <span className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 text-xs font-semibold rounded-full"
                  style={{ background: "#FF000015", color: "#c00" }}
                >
                  {expandedHobby === "podcasts" ? "▲ Close" : "▼ See my channels"}
                </span>
              </div>
            </div>

            <AnimatePresence>
              {expandedHobby === "podcasts" && (
                <motion.div
                  key="podcasts-panel"
                  {...expandAnimation}
                  style={{ overflow: "hidden" }}
                  className="mt-2"
                >
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                      <Youtube className="w-5 h-5" style={{ color: "#FF0000" }} /> Creators I Follow
                    </h4>
                    {/* 2×2 on desktop, 1-col on mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {channels.map(ch => (
                        <a
                          key={ch.name}
                          href={ch.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block bg-secondary border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300"
                          aria-label={`Watch ${ch.name} on YouTube`}
                        >
                          {/* Red banner header */}
                          <div
                            className="h-14 flex items-center justify-center"
                            style={{
                              background:
                                "linear-gradient(135deg, #c00 0%, #FF0000 60%, #ff4444 100%)",
                            }}
                          >
                            <Youtube className="w-7 h-7 text-white drop-shadow" />
                          </div>
                          <div className="p-3">
                            <h5 className="font-bold text-[14px] text-foreground mb-1 group-hover:text-red-500 transition-colors">
                              {ch.name}
                            </h5>
                            <span
                              className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full mb-2"
                              style={{ background: "#FF000015", color: "#c00" }}
                            >
                              {ch.niche}
                            </span>
                            <div className="flex items-center gap-1.5 text-[13px] font-semibold text-red-600 group-hover:gap-2.5 transition-all duration-200">
                              <Youtube className="w-4 h-4" />
                              Watch →
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
        {/* No separate "Creators I Follow" section — moved into Podcasts expand panel */}
      </div>
    </section>
  );
};

export default Hobbies;
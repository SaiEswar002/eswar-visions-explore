import { Film, Gamepad2, Youtube } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Video Editing expanded content ───────────────────────────
const videoEditingTools = [
  { emoji: "🎬", name: "CapCut", desc: "Quick edits & mobile-first" },
  { emoji: "🎞️", name: "Adobe Premiere Pro", desc: "Professional video editing" },
  { emoji: "✨", name: "Adobe After Effects", desc: "Motion graphics & VFX" },
  { emoji: "🎥", name: "DaVinci Resolve", desc: "Color grading & finishing" },
];

// ── PC Gaming expanded content ────────────────────────────────
const gamingMobile = [
  { emoji: "📱", name: "Call of Duty Mobile", short: "CODM" },
];
const gamingPC = [
  { emoji: "🎯", name: "Valorant" },
  { emoji: "⚡", name: "Marvel Rivals" },
  { emoji: "🌸", name: "Genshin Impact" },
];

// ── YouTube channels ──────────────────────────────────────────
interface Channel {
  name: string;
  niche: string;
  url: string;
  accentHex: string;
}
const channels: Channel[] = [
  {
    name: "Raj Shamani",
    niche: "Entrepreneurship & Life",
    url: "https://www.youtube.com/@rajshamani",
    accentHex: "#FF0000",
  },
  {
    name: "Telugu Connects",
    niche: "Telugu Interviews",
    url: "https://www.youtube.com/@TeluguConnects_",
    accentHex: "#FF0000",
  },
  {
    name: "Raw Talks with VK",
    niche: "Unfiltered Conversations",
    url: "https://www.youtube.com/@rawtalkswithvk",
    accentHex: "#FF0000",
  },
  {
    name: "Chari Not Sorry",
    niche: "Comedy & Culture",
    url: "https://www.youtube.com/@charinotsorry",
    accentHex: "#FF0000",
  },
];

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

        {/* ── Hobby Cards Grid ── */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Video Editing */}
          <div
            className="portfolio-card group cursor-pointer select-none"
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
              <p className="text-muted-foreground text-sm mb-3">Creating engaging visual content and storytelling through editing</p>
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {expandedHobby === "video-editing" ? "▲ Close" : "▼ See my tools"}
              </span>
            </div>
          </div>

          {/* PC Gaming */}
          <div
            className="portfolio-card group cursor-pointer select-none"
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
              <p className="text-muted-foreground text-sm mb-3">Exploring virtual worlds and strategic gameplay experiences</p>
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {expandedHobby === "pc-gaming" ? "▲ Close" : "▼ See my games"}
              </span>
            </div>
          </div>

          {/* Podcasts & YouTube */}
          <div
            className="portfolio-card group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-center mb-4">
              <Youtube className="skill-icon group-hover:scale-110 transition-transform" style={{ color: "#FF0000" }} />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Podcasts &amp; YouTube 🎙️</h3>
              <p className="text-muted-foreground text-sm">Trending creators I follow for inspiration, tech, and life.</p>
            </div>
          </div>
        </div>

        {/* ── Expanded Panel: Video Editing ── */}
        <AnimatePresence>
          {expandedHobby === "video-editing" && (
            <motion.div
              key="video-editing-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden mb-8"
            >
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                  <Film className="w-5 h-5 text-primary" /> Tools I Use
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {videoEditingTools.map(tool => (
                    <div
                      key={tool.name}
                      className="flex flex-col items-center gap-2 p-4 bg-secondary rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 text-center"
                    >
                      <span className="text-3xl">{tool.emoji}</span>
                      <span className="font-semibold text-sm text-foreground">{tool.name}</span>
                      <span className="text-xs text-muted-foreground">{tool.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Expanded Panel: PC Gaming ── */}
        <AnimatePresence>
          {expandedHobby === "pc-gaming" && (
            <motion.div
              key="pc-gaming-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden mb-8"
            >
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-primary" /> My Gaming Setup
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Mobile */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">📱 Mobile</p>
                    <div className="flex flex-col gap-3">
                      {gamingMobile.map(g => (
                        <div key={g.name} className="flex items-center gap-3 p-3 bg-secondary rounded-xl border border-border">
                          <span className="text-2xl">{g.emoji}</span>
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
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">💻 Laptop / PC</p>
                    <div className="flex flex-col gap-3">
                      {gamingPC.map(g => (
                        <div key={g.name} className="flex items-center gap-3 p-3 bg-secondary rounded-xl border border-border">
                          <span className="text-2xl">{g.emoji}</span>
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

        {/* ── YouTube / Podcasts Section ── */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
            Creators I Follow 🎙️
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {channels.map(ch => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300"
                aria-label={`Watch ${ch.name} on YouTube`}
              >
                {/* Red banner header */}
                <div
                  className="h-16 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #c00 0%, #FF0000 60%, #ff4444 100%)" }}
                >
                  <Youtube className="w-8 h-8 text-white drop-shadow" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-[15px] text-foreground mb-1 group-hover:text-red-500 transition-colors">
                    {ch.name}
                  </h4>
                  <span
                    className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full mb-3"
                    style={{ background: "#FF000015", color: "#c00" }}
                  >
                    {ch.niche}
                  </span>
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-red-600 group-hover:gap-2.5 transition-all duration-200">
                    <Youtube className="w-4 h-4" />
                    Watch
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
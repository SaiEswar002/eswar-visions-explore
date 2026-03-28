import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Award, Users, X, ChevronLeft, ChevronRight, Calendar, Lightbulb, Palette, Trophy, ExternalLink, Eye, Zap, Brain, GraduationCap, Gamepad2, PartyPopper, BookOpen, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// ── Image paths via Vite's URL pattern (no eager static imports) ──
const img = (path: string) => new URL(`../assets/${path}`, import.meta.url).href;

const hackathonGalleries = {
    anuragh: [
        { src: img("Hackathons/H_3-Anuragh/1767356107404.jpg"), caption: "Anuragh Hackathon" },
        { src: img("Hackathons/H_3-Anuragh/1767356109037.jpg"), caption: "Anuragh Hackathon" },
        { src: img("Hackathons/H_3-Anuragh/1767356110730.jpg"), caption: "Anuragh Hackathon" },
        { src: img("Hackathons/H_3-Anuragh/1767608461127.jpg"), caption: "Anuragh Hackathon" },
        { src: img("Hackathons/H_3-Anuragh/1767608461133.jpg"), caption: "Anuragh Hackathon" },
        { src: img("Hackathons/H_3-Anuragh/1767608461240.jpg"), caption: "Anuragh Hackathon" },
        { src: img("Hackathons/H_3-Anuragh/1767608461298.jpg"), caption: "Anuragh Hackathon" },
        { src: img("Hackathons/H_3-Anuragh/1767608461568.jpg"), caption: "Anuragh Hackathon" },
        { src: img("Hackathons/H_3-Anuragh/1767608461671.jpg"), caption: "Anuragh Hackathon" },
        { src: img("Hackathons/H_3-Anuragh/1767608461728.jpg"), caption: "Anuragh Hackathon" },
        { src: img("Hackathons/H_3-Anuragh/1767608462004.jpg"), caption: "Anuragh Hackathon" },
        { src: img("Hackathons/H_3-Anuragh/certificate.jpg"), caption: "Certificate – Anuragh" },
    ],
    iiit: [
        { src: img("Hackathons/H_2-IIIT/1766918664227.jpg"), caption: "IIIT TechZite 2025" },
        { src: img("Hackathons/H_2-IIIT/1766918664235.jpg"), caption: "IIIT TechZite 2025" },
        { src: img("Hackathons/H_2-IIIT/1766918669087.jpg"), caption: "IIIT TechZite 2025" },
        { src: img("Hackathons/H_2-IIIT/1767455548345.jpg"), caption: "IIIT TechZite 2025" },
        { src: img("Hackathons/H_2-IIIT/1767455552880.jpg"), caption: "IIIT TechZite 2025" },
        { src: img("Hackathons/H_2-IIIT/1767455554746.jpg"), caption: "IIIT TechZite 2025" },
    ],
    pscmr: [
        { src: img("Hackathons/H_1-PSCMR/1766551286827.jpg"), caption: "PSCMR Hackathon" },
        { src: img("Hackathons/H_1-PSCMR/1766551287146.jpg"), caption: "PSCMR Hackathon" },
        { src: img("Hackathons/H_1-PSCMR/1766551287271.jpg"), caption: "PSCMR Hackathon" },
        { src: img("Hackathons/H_1-PSCMR/1766551287820.jpg"), caption: "PSCMR Hackathon" },
        { src: img("Hackathons/H_1-PSCMR/1766551287916.jpg"), caption: "PSCMR Hackathon" },
        { src: img("Hackathons/H_1-PSCMR/1766551287967.jpg"), caption: "PSCMR Hackathon" },
        { src: img("Hackathons/H_1-PSCMR/certificate.jpg"), caption: "Certificate – PSCMR" },
    ],
};

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
    const [selectedSubExperience, setSelectedSubExperience] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hackathonGallery, setHackathonGallery] = useState<keyof typeof hackathonGalleries | null>(null);
    const [hackathonImageIndex, setHackathonImageIndex] = useState(0);
    const [expGalleryOpen, setExpGalleryOpen] = useState(false);
    const [expGalleryIdx, setExpGalleryIdx] = useState(0);

    const experiences = [
        {
            id: "internship",
            type: "Internship",
            title: "Google Android Developer Virtual Internship",
            organization: "AICTE (EduSkills)",
            period: "Apr - Jun 2025",
            description: "Completed comprehensive training in Android development, mobile app architecture, and modern development practices.",
            icon: Briefcase
        },
        {
            id: "freelance",
            type: "Freelance",
            title: "Book Cover Designer",
            organization: "VGS Publishers",
            period: "Jun 2025",
            description: "This role required a strong ability to blend creative visual concepts with strict adherence to educational publishing standards, ensuring covers were both appealing and informative.",
            icon: Award,
            hasSubExperiences: true
        },
        {
            id: "club",
            type: "Club Activity",
            title: "Vice President - Mayavi Club",
            organization: "College Organization",
            period: "Current",
            description: "Actively participated in organizing SIL events and worked on innovative 3D modeling and AR/VR projects.",
            icon: Users,
            hasSubExperiences: true
        }
    ];

    const subExperiences = {
        igdc: {
            id: "igdc",
            title: "IGDC 2025 Journey",
            Icon: Gamepad2,
            summary: "An incredible 3-day immersion into India's gaming ecosystem from November 5-7, 2025 in Hyderabad.",
            gradient: "from-[#6b0f0f] to-[#9B1C1C]",
            images: [
                { src: img("Mayavi/IGDC/IGDC_GROUP.jpeg"), caption: "IGDC 2025 Group Photo" },
                { src: img("Mayavi/IGDC/igdc.jpg"), caption: "IGDC Conference" },
                { src: img("Mayavi/IGDC/igdc2.jpg"), caption: "Event Highlights" },
                { src: img("Mayavi/IGDC/VR.jpg"), caption: "VR Experience" },
                { src: img("Mayavi/IGDC/VR-with_VR_GUN.jpg"), caption: "VR Gaming with Gun Controller" },
                { src: img("Mayavi/IGDC/VR-with_VR_CINEMATIC_EXPERIENCE.jpg"), caption: "VR Cinematic Experience" },
                { src: img("Mayavi/IGDC/krafton.jpg"), caption: "Krafton Booth" },
                { src: img("Mayavi/IGDC/Real-cricket-app-team.jpg"), caption: "Real Cricket Team" },
                { src: img("Mayavi/IGDC/Real-cricket-app-team2.jpg"), caption: "Real Cricket App Demo" },
                { src: img("Mayavi/IGDC/me.jpg"), caption: "At IGDC 2025" },
                { src: img("Mayavi/IGDC/experienced_games_onPC.jpg"), caption: "Gaming on PC" }
            ],
            content: (
                <div className="prose prose-invert prose-lg max-w-none text-gray-200 space-y-6">
                    <p className="leading-relaxed">
                        From <strong>November 5th to 7th, 2025</strong>, I had the incredible opportunity to attend the{" "}
                        <strong className="text-purple-300">India Game Developer Conference (IGDC)</strong> in Hyderabad—one of the most
                        prestigious events in the Indian gaming industry.
                    </p>

                    <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-500/30">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Users className="w-6 h-6 text-purple-300" />
                            Engaging Conversations
                        </h3>
                        <ul className="space-y-2 text-purple-100">
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                <span><strong>IGDC-Heads</strong> – Exploring technology and gaming innovation</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                <span><strong>Krafton</strong> – AAA game development insights</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                <span><strong>Ubisoft</strong> – Creative processes and global trends</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                <span><strong>Real Cricket, EpicGames, Nazora Industries</strong> and many more!</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-6 rounded-xl border border-blue-500/30">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Lightbulb className="w-6 h-6 text-cyan-300" />
                            Key Takeaways
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-cyan-200">Deep insights into the gaming ecosystem</strong>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-cyan-200">AI and emerging technologies in gaming</strong>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <strong className="text-cyan-200">Valuable networking opportunities</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        samyak: {
            id: "samyak",
            title: "Samyak College Fest",
            Icon: PartyPopper,
            summary: "Organized and conducted innovative AR/VR and 3D modeling events for our college fest.",
            gradient: "from-[#7a1010] to-[#c0392b]",
            images: [
                { src: img("Mayavi/Samyak/e1.png"), caption: "Samyak Event 1" },
                { src: img("Mayavi/Samyak/e2.png"), caption: "Samyak Event 2" },
                { src: img("Mayavi/Samyak/e3.png"), caption: "Samyak Event 3" },
                { src: img("Mayavi/Samyak/e4.png"), caption: "Samyak Event 4" },
                { src: img("Mayavi/Samyak/e5.png"), caption: "Samyak Event 5" },
                { src: img("Mayavi/Samyak/e6.png"), caption: "Samyak Event 6" },
                { src: img("Mayavi/Samyak/e7.png"), caption: "Samyak Event 7" },
                { src: img("Mayavi/Samyak/e8.png"), caption: "Samyak Event 8" }
            ],
            content: (
                <div className="prose prose-invert prose-lg max-w-none text-gray-200 space-y-6">
                    <p className="leading-relaxed">
                        As Vice President of the Mayavi Club, I led the organization and execution of innovative events during{" "}
                        <strong className="text-orange-300">Samyak</strong>, our college's annual technical and cultural fest.
                    </p>

                    <div className="bg-gradient-to-r from-orange-900/50 to-pink-900/50 p-6 rounded-xl border border-orange-500/30">
                        <h3 className="text-2xl font-bold text-white mb-4">Events Organized</h3>
                        <ul className="space-y-2 text-orange-100">
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                <span><strong>AR/VR Experiences</strong> – Immersive technology demonstrations</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                <span><strong>3D Modeling Workshops</strong> – Hands-on creative sessions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                <span><strong>Interactive Installations</strong> – Engaging student participation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        vgscovers: {
            id: "vgscovers",
            title: "Book Cover Portfolio",
            Icon: BookOpen,
            summary: "Educational book cover designs for VGS Publishers across multiple subjects including Physics, Chemistry, Mathematics, and more.",
            gradient: "from-[#3d0a0a] to-[#7a1010]",
            images: [
                { src: img("VGS/Botony coverpage sample-1.png"), caption: "Botany Cover Design" },
                { src: img("VGS/Chemistry coverpage sample -1.png"), caption: "Chemistry Cover - Design 1" },
                { src: img("VGS/Chemistry Coverpage sample - 2.png"), caption: "Chemistry Cover - Design 2" },
                { src: img("VGS/Chemistry coverpage sample - 3.png"), caption: "Chemistry Cover - Design 3" },
                { src: img("VGS/Civics coverpage sample -1.png"), caption: "Civics Cover - Design 1" },
                { src: img("VGS/civics coverpages sample -2.png"), caption: "Civics Cover - Design 2" },
                { src: img("VGS/Mathematics coverpage samplepage - 1.png"), caption: "Mathematics Cover Design" },
                { src: img("VGS/Physics Coverpage Sample - 1.png"), caption: "Physics Cover - Design 1" },
                { src: img("VGS/Physics Coverpage sample - 2.png"), caption: "Physics Cover - Design 2" },
                { src: img("VGS/Physics coverpage sample - 3.png"), caption: "Physics Cover - Design 3" },
                { src: img("VGS/Physics coverpage sample - 4.png"), caption: "Physics Cover - Design 4" },
                { src: img("VGS/SocialStudies coverpage sample -1].png"), caption: "Social Studies Cover Design" }
            ],
            content: (
                <div className="prose prose-invert prose-lg max-w-none text-gray-200 space-y-6">
                    <p className="leading-relaxed">
                        During my freelance work with <strong className="text-indigo-300">VGS Publishers</strong> in June 2025,
                        I designed engaging and informative book covers for educational materials across multiple subjects.
                    </p>

                    <div className="bg-gradient-to-r from-indigo-900/50 to-violet-900/50 p-6 rounded-xl border border-indigo-500/30">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Palette className="w-6 h-6 text-indigo-300" />
                            Design Approach
                        </h3>
                        <ul className="space-y-2 text-indigo-100">
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                <span><strong>Creative Visual Concepts</strong> – Eye-catching designs that appeal to students</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                <span><strong>Educational Standards</strong> – Strict adherence to publishing guidelines</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                <span><strong>Subject-Specific Themes</strong> – Tailored designs for each academic subject</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                <span><strong>Professional Quality</strong> – Print-ready designs meeting industry standards</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    };

    const handleViewClick = (expId: string) => {
        setSelectedExperience(expId);
        setSelectedSubExperience(null);
        setCurrentImageIndex(0);
    };

    const handleSubExperienceClick = (subExpId: string) => {
        setSelectedSubExperience(subExpId);
        setCurrentImageIndex(0);
    };

    const handleClose = () => {
        if (selectedSubExperience) {
            setSelectedSubExperience(null);
        } else {
            setSelectedExperience(null);
        }
    };

    const nextImage = () => {
        const images = selectedSubExperience ? subExperiences[selectedSubExperience as keyof typeof subExperiences].images : [];
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        const images = selectedSubExperience ? subExperiences[selectedSubExperience as keyof typeof subExperiences].images : [];
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const currentSubExp = selectedSubExperience ? subExperiences[selectedSubExperience as keyof typeof subExperiences] : null;

    return (
        <section id="experience" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatePresence mode="wait">
                    {!selectedExperience ? (
                        // Initial View - All Experience Boxes
                        <motion.div
                            key="all-experiences"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="section-title">Experience & Activities</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="portfolio-card animate-fade-up"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="p-2 bg-primary/10 rounded-lg">
                                                <exp.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                                            {exp.title}
                                        </h3>

                                        <div className="mb-3">
                                            <p className="text-sm font-medium text-primary">{exp.organization}</p>
                                            <p className="text-xs text-muted-foreground">{exp.period}</p>
                                        </div>

                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        <Button
                                            onClick={() => handleViewClick(exp.id)}
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                        >
                                            View
                                        </Button>
                                    </motion.div>
                                ))}
                            </div>

                            {/* ── Hackathons ── */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-16"
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Trophy className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">Hackathons</h3>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {/* Anuragh */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="portfolio-card relative"
                                    >
                                        <button
                                            onClick={() => { setHackathonGallery("anuragh"); setHackathonImageIndex(0); }}
                                            className="absolute top-4 right-4 p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                                            title="View Gallery"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                                                <Zap className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-foreground">Anuragh Hackathon</h4>
                                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">Salesforce · Einstein AI</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            Participated in CarePlus &amp; AgentX challenges powered by Salesforce Einstein AI, building innovative solutions and earning recognition.
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <a
                                                href="https://www.linkedin.com/posts/sai-eswar-b04240286_hackathonsuccess-careplus-salesforce-activity-7413887253925785600-8VdQ"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-primary hover:underline"
                                            >
                                                <ExternalLink className="w-4 h-4" /> CarePlus Challenge Post
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/posts/sai-eswar-b04240286_agentx-salesforce-einsteinai-activity-7412828820652609536-HkOp"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-primary hover:underline"
                                            >
                                                <ExternalLink className="w-4 h-4" /> AgentX Challenge Post
                                            </a>
                                        </div>
                                    </motion.div>

                                    {/* IIIT */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="portfolio-card relative"
                                    >
                                        <button
                                            onClick={() => { setHackathonGallery("iiit"); setHackathonImageIndex(0); }}
                                            className="absolute top-4 right-4 p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                                            title="View Gallery"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                                                <Brain className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-foreground">IIIT – TechZite 2025</h4>
                                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">AI &amp; ML · Healthcare Innovation</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            Built an AI/ML-powered healthcare solution at TechZite 2025 hosted by IIIT, focusing on real-world medical problem-solving.
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <a
                                                href="https://www.linkedin.com/posts/potturi-shanmukha-b7b13638b_aiandml-techzite2025-healthcareinnovation-ugcPost-7413245908148006912-2uD7"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-primary hover:underline"
                                            >
                                                <ExternalLink className="w-4 h-4" /> Team Post
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/posts/sai-eswar-b04240286_aiandml-techzite2025-healthcareinnovation-activity-7410994092085579776-rHWB"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-primary hover:underline"
                                            >
                                                <ExternalLink className="w-4 h-4" /> My Post
                                            </a>
                                        </div>
                                    </motion.div>

                                    {/* PSCMR */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                        className="portfolio-card relative"
                                    >
                                        <button
                                            onClick={() => { setHackathonGallery("pscmr"); setHackathonImageIndex(0); }}
                                            className="absolute top-4 right-4 p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                                            title="View Gallery"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                                                <GraduationCap className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-foreground">PSCMR Hackathon</h4>
                                                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">EdTech · Student Innovation</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            Competed in an EdTech-focused hackathon at PSCMR College, exploring innovative solutions for educational technology challenges.
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <a
                                                href="https://www.linkedin.com/posts/sai-eswar-b04240286_studentlife-edtech-hackathon-activity-7409453170680295424-y90_"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-primary hover:underline"
                                            >
                                                <ExternalLink className="w-4 h-4" /> LinkedIn Post
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : !selectedSubExperience ? (
                        // Selected Experience - Centered with Sub-Experiences
                        <motion.div
                            key="selected-experience"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="min-h-screen"
                        >
                            {/* Centered Experience Box */}
                            <motion.div
                                initial={{ scale: 0.8, y: 100 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                                className="portfolio-card max-w-2xl mx-auto mb-12 relative"
                            >
                                <Button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <X className="w-5 h-5" />
                                </Button>

                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        {(() => {
                                            const exp = experiences.find(e => e.id === selectedExperience);
                                            const Icon = exp?.icon || Users;
                                            return <Icon className="w-6 h-6 text-primary" />;
                                        })()}
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                                            {experiences.find(e => e.id === selectedExperience)?.type}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-2 text-foreground">
                                    {experiences.find(e => e.id === selectedExperience)?.title}
                                </h3>

                                <div className="mb-3">
                                    <p className="text-base font-medium text-primary">
                                        {experiences.find(e => e.id === selectedExperience)?.organization}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {experiences.find(e => e.id === selectedExperience)?.period}
                                    </p>
                                </div>

                                <p className="text-base text-muted-foreground leading-relaxed">
                                    {experiences.find(e => e.id === selectedExperience)?.description}
                                </p>
                            </motion.div>

                            {/* Sub-Experiences for Club Activity and Freelance */}
                            {(selectedExperience === "club" || selectedExperience === "freelance") && (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                                        Explore My {selectedExperience === "club" ? "Activities" : "Work"}
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                        {Object.values(subExperiences)
                                            .filter(subExp =>
                                                (selectedExperience === "club" && (subExp.id === "igdc" || subExp.id === "samyak")) ||
                                                (selectedExperience === "freelance" && subExp.id === "vgscovers")
                                            )
                                            .map((subExp, index) => (
                                                <motion.div
                                                    key={subExp.id}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 + index * 0.2 }}
                                                    whileHover={{ scale: 1.05, y: -10 }}
                                                    className={`bg-gradient-to-br ${subExp.gradient} p-8 rounded-2xl shadow-2xl cursor-pointer relative overflow-hidden group`}
                                                    onClick={() => handleSubExperienceClick(subExp.id)}
                                                >
                                                    {/* Shine effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                                    <div className="relative z-10">
                                                        <div className="mb-5 p-3 bg-white/20 rounded-xl w-fit">
                                                            <subExp.Icon className="w-8 h-8 text-white" />
                                                        </div>
                                                        <h4 className="text-2xl font-bold text-white mb-4">
                                                            {subExp.title}
                                                        </h4>
                                                        <p className="text-white/90 mb-6 leading-relaxed">
                                                            {subExp.summary}
                                                        </p>
                                                        <Button
                                                            className="w-full bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm font-semibold"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleSubExperienceClick(subExp.id);
                                                            }}
                                                        >
                                                            View Details
                                                        </Button>
                                                    </div>
                                                </motion.div>
                                            ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ) : (
                        // Sub-Experience Detail View
                        <motion.div
                            key="sub-experience-detail"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="min-h-screen"
                        >
                            {/* Header */}
                            <motion.div
                                initial={{ scale: 0.8, y: 100 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                                className={`bg-gradient-to-br ${currentSubExp?.gradient} p-8 rounded-2xl shadow-2xl mb-8 relative overflow-hidden max-w-4xl mx-auto`}
                            >
                                <Button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm"
                                    size="icon"
                                >
                                    <X className="w-5 h-5" />
                                </Button>

                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-3 bg-white/20 rounded-xl">
                                        {currentSubExp && <currentSubExp.Icon className="w-8 h-8 text-white" />}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white flex-1">
                                        {currentSubExp?.title}
                                    </h3>
                                    {currentSubExp && currentSubExp.images.length > 0 && (
                                        <button
                                            onClick={() => { setExpGalleryOpen(true); setExpGalleryIdx(0); }}
                                            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors flex items-center gap-2 text-sm font-medium pr-4"
                                            title="View Gallery"
                                        >
                                            <Eye className="w-5 h-5" /> Gallery
                                        </button>
                                    )}
                                </div>
                            </motion.div>

                            {/* Detail Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-primary/20 max-w-4xl mx-auto"
                            >
                                {currentSubExp?.content}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Experience Sub-section Gallery Modal */}
            <AnimatePresence>
                {expGalleryOpen && currentSubExp && currentSubExp.images.length > 0 && (() => {
                    const imgs = currentSubExp.images;
                    const total = imgs.length;
                    return (
                        <motion.div
                            key="exp-gallery-modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                            onClick={() => setExpGalleryOpen(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 40 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 40 }}
                                transition={{ type: "spring", damping: 22, stiffness: 140 }}
                                className="relative bg-slate-900 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal header */}
                                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                        <ImageIcon className="w-5 h-5 text-primary" /> Gallery
                                        <span className="text-sm font-normal text-gray-400">
                                            {expGalleryIdx + 1} / {total}
                                        </span>
                                    </h3>
                                    <button
                                        onClick={() => setExpGalleryOpen(false)}
                                        className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Image */}
                                <div className="relative bg-black">
                                    <motion.img
                                        key={expGalleryIdx}
                                        src={imgs[expGalleryIdx].src}
                                        alt={imgs[expGalleryIdx].caption}
                                        loading="lazy"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-[420px] object-contain"
                                    />

                                    <button
                                        onClick={() => setExpGalleryIdx((p) => (p - 1 + total) % total)}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={() => setExpGalleryIdx((p) => (p + 1) % total)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>

                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-3 text-center">
                                        <p className="text-white text-sm font-medium">{imgs[expGalleryIdx].caption}</p>
                                    </div>
                                </div>

                                {/* Dots */}
                                <div className="flex justify-center gap-1.5 py-4">
                                    {imgs.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setExpGalleryIdx(i)}
                                            className={`h-2 rounded-full transition-all ${
                                                i === expGalleryIdx
                                                    ? "w-6 bg-primary"
                                                    : "w-2 bg-gray-600 hover:bg-gray-400"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })()}
            </AnimatePresence>

            {/* Hackathon Gallery Modal */}
            <AnimatePresence>
                {hackathonGallery && (() => {
                    const imgs = hackathonGalleries[hackathonGallery];
                    const total = imgs.length;
                    return (
                        <motion.div
                            key="hackathon-gallery-modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                            onClick={() => setHackathonGallery(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 40 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 40 }}
                                transition={{ type: "spring", damping: 22, stiffness: 140 }}
                                className="relative bg-slate-900 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal header */}
                                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                        📸 Gallery
                                        <span className="text-sm font-normal text-gray-400">
                                            {hackathonImageIndex + 1} / {total}
                                        </span>
                                    </h3>
                                    <button
                                        onClick={() => setHackathonGallery(null)}
                                        className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Image */}
                                <div className="relative bg-black">
                                    <motion.img
                                        key={hackathonImageIndex}
                                        src={imgs[hackathonImageIndex].src}
                                        alt={imgs[hackathonImageIndex].caption}
                                        loading="lazy"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-[420px] object-contain"
                                    />

                                    {/* Prev */}
                                    <button
                                        onClick={() => setHackathonImageIndex((p) => (p - 1 + total) % total)}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>

                                    {/* Next */}
                                    <button
                                        onClick={() => setHackathonImageIndex((p) => (p + 1) % total)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>

                                    {/* Caption */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-3 text-center">
                                        <p className="text-white text-sm font-medium">{imgs[hackathonImageIndex].caption}</p>
                                    </div>
                                </div>

                                {/* Dot indicators */}
                                <div className="flex justify-center gap-1.5 py-4">
                                    {imgs.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setHackathonImageIndex(i)}
                                            className={`h-2 rounded-full transition-all ${
                                                i === hackathonImageIndex
                                                    ? "w-6 bg-primary"
                                                    : "w-2 bg-gray-600 hover:bg-gray-400"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })()}
            </AnimatePresence>
        </section>
    );
};

export default Experience;

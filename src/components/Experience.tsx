import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Award, Users, X, ChevronLeft, ChevronRight, Calendar, Lightbulb, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import IGDC images
import igdcGroup from "@/assets/Mayavi/IGDC/IGDC_GROUP.jpeg";
import igdc1 from "@/assets/Mayavi/IGDC/igdc.jpg";
import igdc2 from "@/assets/Mayavi/IGDC/igdc2.jpg";
import vrExperience from "@/assets/Mayavi/IGDC/VR.jpg";
import vrGun from "@/assets/Mayavi/IGDC/VR-with_VR_GUN.jpg";
import vrCinematic from "@/assets/Mayavi/IGDC/VR-with_VR_CINEMATIC_EXPERIENCE.jpg";
import krafton from "@/assets/Mayavi/IGDC/krafton.jpg";
import realCricket1 from "@/assets/Mayavi/IGDC/Real-cricket-app-team.jpg";
import realCricket2 from "@/assets/Mayavi/IGDC/Real-cricket-app-team2.jpg";
import meAtIGDC from "@/assets/Mayavi/IGDC/me.jpg";
import gamesOnPC from "@/assets/Mayavi/IGDC/experienced_games_onPC.jpg";

// Import Samyak images
import samyak1 from "@/assets/Mayavi/Samyak/e1.png";
import samyak2 from "@/assets/Mayavi/Samyak/e2.png";
import samyak3 from "@/assets/Mayavi/Samyak/e3.png";
import samyak4 from "@/assets/Mayavi/Samyak/e4.png";
import samyak5 from "@/assets/Mayavi/Samyak/e5.png";
import samyak6 from "@/assets/Mayavi/Samyak/e6.png";
import samyak7 from "@/assets/Mayavi/Samyak/e7.png";
import samyak8 from "@/assets/Mayavi/Samyak/e8.png";

// Import VGS book cover images
import botany1 from "@/assets/VGS/Botony coverpage sample-1.png";
import chemistry1 from "@/assets/VGS/Chemistry coverpage sample -1.png";
import chemistry2 from "@/assets/VGS/Chemistry Coverpage sample - 2.png";
import chemistry3 from "@/assets/VGS/Chemistry coverpage sample - 3.png";
import civics1 from "@/assets/VGS/Civics coverpage sample -1.png";
import civics2 from "@/assets/VGS/civics coverpages sample -2.png";
import math1 from "@/assets/VGS/Mathematics coverpage samplepage - 1.png";
import physics1 from "@/assets/VGS/Physics Coverpage Sample - 1.png";
import physics2 from "@/assets/VGS/Physics Coverpage sample - 2.png";
import physics3 from "@/assets/VGS/Physics coverpage sample - 3.png";
import physics4 from "@/assets/VGS/Physics coverpage sample - 4.png";
import social1 from "@/assets/VGS/SocialStudies coverpage sample -1].png";

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
    const [selectedSubExperience, setSelectedSubExperience] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            emoji: "🎮",
            summary: "An incredible 3-day immersion into India's gaming ecosystem from November 5-7, 2025 in Hyderabad.",
            gradient: "from-purple-600 to-blue-600",
            images: [
                { src: igdcGroup, caption: "IGDC 2025 Group Photo" },
                { src: igdc1, caption: "IGDC Conference" },
                { src: igdc2, caption: "Event Highlights" },
                { src: vrExperience, caption: "VR Experience" },
                { src: vrGun, caption: "VR Gaming with Gun Controller" },
                { src: vrCinematic, caption: "VR Cinematic Experience" },
                { src: krafton, caption: "Krafton Booth" },
                { src: realCricket1, caption: "Real Cricket Team" },
                { src: realCricket2, caption: "Real Cricket App Demo" },
                { src: meAtIGDC, caption: "At IGDC 2025" },
                { src: gamesOnPC, caption: "Gaming on PC" }
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
                                <span className="text-2xl">✅</span>
                                <div>
                                    <strong className="text-cyan-200">Deep insights into the gaming ecosystem</strong>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
                                <div>
                                    <strong className="text-cyan-200">AI and emerging technologies in gaming</strong>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl">✅</span>
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
            emoji: "🎉",
            summary: "Organized and conducted innovative AR/VR and 3D modeling events for our college fest.",
            gradient: "from-orange-600 to-pink-600",
            images: [
                { src: samyak1, caption: "Samyak Event 1" },
                { src: samyak2, caption: "Samyak Event 2" },
                { src: samyak3, caption: "Samyak Event 3" },
                { src: samyak4, caption: "Samyak Event 4" },
                { src: samyak5, caption: "Samyak Event 5" },
                { src: samyak6, caption: "Samyak Event 6" },
                { src: samyak7, caption: "Samyak Event 7" },
                { src: samyak8, caption: "Samyak Event 8" }
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
            emoji: "📚",
            summary: "Educational book cover designs for VGS Publishers across multiple subjects including Physics, Chemistry, Mathematics, and more.",
            gradient: "from-indigo-600 to-violet-600",
            images: [
                { src: botany1, caption: "Botany Cover Design" },
                { src: chemistry1, caption: "Chemistry Cover - Design 1" },
                { src: chemistry2, caption: "Chemistry Cover - Design 2" },
                { src: chemistry3, caption: "Chemistry Cover - Design 3" },
                { src: civics1, caption: "Civics Cover - Design 1" },
                { src: civics2, caption: "Civics Cover - Design 2" },
                { src: math1, caption: "Mathematics Cover Design" },
                { src: physics1, caption: "Physics Cover - Design 1" },
                { src: physics2, caption: "Physics Cover - Design 2" },
                { src: physics3, caption: "Physics Cover - Design 3" },
                { src: physics4, caption: "Physics Cover - Design 4" },
                { src: social1, caption: "Social Studies Cover Design" }
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
                                                        <div className="text-5xl mb-4">{subExp.emoji}</div>
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

                                <div className="text-5xl mb-4">{currentSubExp?.emoji}</div>
                                <h3 className="text-3xl font-bold text-white">
                                    {currentSubExp?.title}
                                </h3>
                            </motion.div>

                            {/* Detail Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-primary/20 max-w-4xl mx-auto"
                            >
                                {currentSubExp?.content}

                                {/* Image Gallery */}
                                {currentSubExp && currentSubExp.images.length > 0 && (
                                    <div className="mt-12">
                                        <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                            📸 Gallery
                                        </h3>

                                        <div className="relative bg-black/30 rounded-xl overflow-hidden">
                                            <motion.img
                                                key={currentImageIndex}
                                                src={currentSubExp.images[currentImageIndex].src}
                                                alt={currentSubExp.images[currentImageIndex].caption}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                                className="w-full h-[400px] md:h-[500px] object-cover"
                                            />

                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                <p className="text-white text-center font-semibold">
                                                    {currentSubExp.images[currentImageIndex].caption}
                                                </p>
                                            </div>

                                            <Button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm"
                                                size="icon"
                                            >
                                                <ChevronLeft className="w-6 h-6" />
                                            </Button>

                                            <Button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm"
                                                size="icon"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </Button>
                                        </div>

                                        <div className="flex justify-center gap-2 mt-4">
                                            {currentSubExp.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                                                        ? "bg-primary w-8"
                                                        : "bg-gray-500 hover:bg-gray-400"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Experience;

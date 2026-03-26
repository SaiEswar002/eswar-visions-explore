import { Award } from "lucide-react";

const pscmrCert = new URL("../assets/Hackathons/H_1-PSCMR/certificate.jpg", import.meta.url).href;
const anuraghCert = new URL("../assets/Hackathons/H_3-Anuragh/certificate.jpg", import.meta.url).href;

const certificates = [
  {
    id: "pscmr",
    title: "PSCMR Hackathon Certificate",
    event: "EdTech Student Innovation Hackathon",
    organization: "PSCMR College of Engineering & Technology",
    date: "March 2025",
    image: pscmrCert,
    gradient: "from-[#1a3a6b] to-[#2563eb]",
    tag: "EdTech · Innovation",
  },
  {
    id: "anuragh",
    title: "Anuragh Hackathon Certificate",
    event: "Salesforce Einstein AI Challenge (CarePlus & AgentX)",
    organization: "Anurag University",
    date: "October 2025",
    image: anuraghCert,
    gradient: "from-[#9B1C1C] to-[#c0392b]",
    tag: "Salesforce · Einstein AI",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">
          Certificates &amp; Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group portfolio-card overflow-hidden flex flex-col transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="zoom-in-up"
              data-aos-delay={index * 200}
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-br ${cert.gradient} -mx-6 -mt-6 mb-5 px-5 py-5 flex items-center gap-3`}>
                <div className="p-2 bg-white/20 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold text-white/80 bg-white/15 px-2 py-0.5 rounded-full">
                  {cert.tag}
                </span>
              </div>

              {/* Certificate image with shimmer effect */}
              <div className="relative overflow-hidden rounded-xl mb-4 cursor-pointer"
                onClick={() => window.open(cert.image, "_blank")}
              >
                {/* shimmer overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 z-10 pointer-events-none" />
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-52 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
              <p className="text-sm text-primary font-medium mb-1">{cert.event}</p>
              <p className="text-xs text-muted-foreground mb-1">{cert.organization}</p>
              <p className="text-xs text-muted-foreground/70 mt-auto pt-2 border-t border-border">📅 {cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

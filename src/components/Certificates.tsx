import { Award, FileText, ExternalLink } from "lucide-react";

const pscmrCert = new URL("../assets/Hackathons/H_1-PSCMR/certificate.jpg", import.meta.url).href;
const anuraghCert = new URL("../assets/Hackathons/H_3-Anuragh/certificate.jpg", import.meta.url).href;
const aicteCert = new URL("../assets/AICTE Certificate_page-0001.pdf", import.meta.url).href;

type CertBase = {
  id: string;
  title: string;
  event: string;
  organization: string;
  date: string;
  gradient: string;
  tag: string;
};

type ImageCert = CertBase & { type: "image"; image: string };
type PdfCert   = CertBase & { type: "pdf";   pdf: string };
type Cert = ImageCert | PdfCert;

const certificates: Cert[] = [
  {
    id: "aicte",
    type: "pdf",
    title: "Google Android Developer Virtual Internship",
    event: "Android Development Virtual Internship Program",
    organization: "AICTE (EduSkills) & Google",
    date: "Apr – Jun 2025",
    pdf: aicteCert,
    gradient: "from-[#1a6b3a] to-[#16a34a]",
    tag: "Internship · Android",
  },
  {
    id: "pscmr",
    type: "image",
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
    type: "image",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => {
            const openTarget = cert.type === "pdf" ? cert.pdf : cert.image;
            return (
              <div
                key={cert.id}
                className="group portfolio-card overflow-hidden flex flex-col transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                data-aos="zoom-in-up"
                data-aos-delay={index * 150}
                onClick={() => window.open(openTarget, "_blank")}
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

                {/* Preview area */}
                <div className="relative overflow-hidden rounded-xl mb-4 h-52 bg-secondary flex items-center justify-center">
                  {/* Shimmer overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 z-10 pointer-events-none" />

                  {cert.type === "image" ? (
                    <img
                      src={(cert as ImageCert).image}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* PDF placeholder */
                    <div className="flex flex-col items-center gap-3 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      <FileText className="w-16 h-16" />
                      <span className="text-sm font-semibold">View Certificate PDF</span>
                      <ExternalLink className="w-4 h-4 opacity-60" />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-primary font-medium mb-1">{cert.event}</p>
                <p className="text-xs text-muted-foreground mb-1">{cert.organization}</p>
                <p className="text-xs text-muted-foreground/70 mt-auto pt-2 border-t border-border">📅 {cert.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

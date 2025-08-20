import { Briefcase, Award, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "Internship",
      title: "Google Android Developer Virtual Internship",
      organization: "AICTE (EduSkills)",
      period: "Apr - Jun 2025",
      description: "Completed comprehensive training in Android development, mobile app architecture, and modern development practices.",
      icon: Briefcase
    },
    {
      type: "Freelance",
      title: "Book Cover Designer",
      organization: "VGS Publishers",
      period: "Intermediate 1st-year",
      description: "Designed engaging book covers for educational materials, combining creativity with educational publishing standards.",
      icon: Award
    },
    {
      type: "Club Activity",
      title: "Vice President - Mayavi Club",
      organization: "College Organization",
      period: "Current",
      description: "Actively participated in organizing SIL events and worked on innovative 3D modeling and AR/VR projects.",
      icon: Users
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Experience & Activities</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
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
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import { Film, Gamepad2, Headphones } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      name: "Video Editing",
      icon: Film,
      emoji: "🎬",
      description: "Creating engaging visual content and storytelling through editing"
    },
    {
      name: "PC Gaming",
      icon: Gamepad2,
      emoji: "🎮",
      description: "Exploring virtual worlds and strategic gameplay experiences"
    },
    {
      name: "Podcasts",
      icon: Headphones,
      emoji: "🎧",
      description: "Learning from industry experts and staying updated with trends"
    }
  ];

  return (
    <section id="hobbies" className="beige-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Hobbies & Interests</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.name}
              className="portfolio-card text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="text-4xl mb-4">{hobby.emoji}</div>
                <hobby.icon className="skill-icon group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {hobby.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
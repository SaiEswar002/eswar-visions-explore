import { useEffect, useState } from 'react';

const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Check if intro has been shown before
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro === 'true') {
      onComplete();
      return;
    }

    // Animation sequence
    const timer1 = setTimeout(() => setAnimationPhase(1), 500); // Background fade in
    const timer2 = setTimeout(() => setAnimationPhase(2), 800); // Main text fade in
    const timer3 = setTimeout(() => setAnimationPhase(3), 1200); // Subtext slide up
    const timer4 = setTimeout(() => setAnimationPhase(4), 3500); // Start fade out
    const timer5 = setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem('hasSeenIntro', 'true');
      onComplete();
    }, 4000); // Complete fade out and cleanup

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background gradient with fade in animation */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/40 to-background/60 transition-opacity duration-1000 ${
          animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Japanese text with fade in and scale up animation */}
        <h1 
          className={`text-6xl md:text-8xl lg:text-9xl font-bold text-primary mb-4 transition-all duration-1000 ${
            animationPhase >= 2 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90'
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          こんにちは
        </h1>
        
        {/* English translation with slide up and fade in animation */}
        <p 
          className={`text-xl md:text-2xl text-muted-foreground transition-all duration-700 ${
            animationPhase >= 3
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Kon'nichiwa
        </p>
      </div>

      {/* Overlay for fade out effect */}
      <div 
        className={`absolute inset-0 bg-background transition-opacity duration-500 ${
          animationPhase >= 4 ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default Intro;

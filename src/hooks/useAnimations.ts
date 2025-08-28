import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      // Initialize AOS
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic',
      });

      // Initialize GSAP ScrollTrigger
      ScrollTrigger.refresh();

      initialized.current = true;
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return {
    gsap,
    AOS,
    ScrollTrigger,
  };
};

// Hero animations
export const heroAnimations = (heroRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      
      // Hero section fade in
      tl.fromTo(heroRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' }
      );

      // Text heading animation
      tl.fromTo('.hero-heading', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.5'
      );

      // Hero image animation
      tl.fromTo('.hero-image', 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' },
        '-=0.3'
      );

      // Subtitle and buttons animation
      tl.fromTo('.hero-content > *:not(.hero-heading)', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
      );
    }
  }, [heroRef]);
};

// About section specific animations
export const useAboutAnimations = () => {
  const aboutAnimations = useRef<gsap.core.Timeline | null>(null);

  const initAboutAnimations = (
    headingRef: React.RefObject<HTMLHeadingElement>,
    imageRef: React.RefObject<HTMLImageElement>,
    descriptionRef: React.RefObject<HTMLParagraphElement>,
    skillRefs: (HTMLDivElement | null)[]
  ) => {
    useEffect(() => {
      if (headingRef.current && imageRef.current && descriptionRef.current) {
        // Create master timeline for about section
        aboutAnimations.current = gsap.timeline({
          scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        });

        // Typing effect for heading
        aboutAnimations.current.fromTo(headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
          },
          0
        );

        // Circular mask reveal for profile image
        aboutAnimations.current.fromTo(imageRef.current,
          {
            clipPath: 'circle(0% at 50% 50%)',
            opacity: 0,
            scale: 0.8
          },
          {
            clipPath: 'circle(100% at 50% 50%)',
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power2.out'
          },
          0.3
        );

        // Staggered text animation for description
        const textLines = descriptionRef.current.innerHTML.split('. ').filter(line => line.trim());
        descriptionRef.current.innerHTML = textLines.map(line => 
          `<span class="text-line opacity-0">${line}.</span>`
        ).join(' ');

        aboutAnimations.current.fromTo('.text-line',
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
          },
          0.6
        );

        // Skill tags pop-in animation
        aboutAnimations.current.fromTo(skillRefs.filter(ref => ref !== null),
          {
            opacity: 0,
            y: 30,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.7)'
          },
          1.2
        );
      }

      return () => {
        if (aboutAnimations.current) {
          aboutAnimations.current.kill();
        }
      };
    }, [headingRef, imageRef, descriptionRef, skillRefs]);
  };

  return { initAboutAnimations };
};

// Scroll animations using GSAP ScrollTrigger
export const useScrollAnimations = () => {
  useEffect(() => {
    // About section animations
    gsap.utils.toArray('.about-animate').forEach((element: any) => {
      gsap.fromTo(element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 95%', // Further adjusted to improve visibility during scroll
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Project cards animations
    gsap.utils.toArray('.project-card').forEach((card: any, index: number) => {
      gsap.fromTo(card,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Skills cards animations
    gsap.utils.toArray('.skill-card').forEach((card: any, index: number) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Education timeline animations
    gsap.utils.toArray('.timeline-item').forEach((item: any, index: number) => {
      gsap.fromTo(item,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Refresh ScrollTrigger after all animations are set up
    ScrollTrigger.refresh();
  }, []);
};

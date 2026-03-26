import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";

// Lazily loaded heavy components
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Contact = lazy(() => import("@/components/Contact"));

const LoadingFallback = () => (
  <div className="py-20 text-center text-muted-foreground animate-pulse">Loading…</div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Experience />
      </Suspense>
      <Certificates />
      <Hobbies />
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;

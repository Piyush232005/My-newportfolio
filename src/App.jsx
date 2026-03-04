import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialProofBar from './components/SocialProofBar';
import Features from './components/Features';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Philosophy from './components/Philosophy';
import Comparison from './components/Comparison';
import Certifications from './components/Certifications';
import InitiateProtocol from './components/InitiateProtocol';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // Sync Lenis with GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Initial page load sequence
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '#page-wipe',
        { y: '0%' },
        { y: '-100%', duration: 1.5, ease: 'power3.inOut', delay: 0.8 }
      );
    }, containerRef);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-obsidian min-h-screen text-white">
      {/* Wipe Overlay */}
      <div 
        id="page-wipe" 
        className="fixed inset-0 z-[99999] bg-obsidian flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-4xl md:text-6xl font-drama font-bold tracking-widest text-champagne">
          PIYUSH<span className="text-white">.</span>
        </h1>
      </div>

      <CustomCursor />
      <Navigation />

      <main className="w-full flex justify-center items-center flex-col">
        <Hero />
        <SocialProofBar />
        <Features/>
        <Certifications />
        <Experience />
        <Education />
        <Philosophy />
        <Comparison />
        <Projects />
        <InitiateProtocol />
      </main>

      <Footer />
    </div>
  );
}

export default App;

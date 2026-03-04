import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-el',
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1, 
          scale: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-32 px-6 md:px-16 w-full flex items-center justify-center relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-champagne flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-obsidian mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] rounded-full border border-obsidian/10 animate-spin-slow" style={{ animationDuration: '40s' }} />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="cta-el font-drama text-[clamp(2.5rem,8vw,5.5rem)] leading-[1] font-bold text-obsidian tracking-tight mb-6">
          Ready to Engineer <br/>
          <span className="italic text-white">True Reliability?</span>
        </h2>
        
        <p className="cta-el font-sans text-obsidian/80 max-w-xl text-lg mb-12 font-medium">
          Whether you need a robust cloud architecture, a highly-optimized CI/CD pipeline, or a premium digital product — I am ready to architect your success.
        </p>
        
        <div className="cta-el flex flex-col sm:flex-row items-center gap-6">
          {/* Email Consultation Button */}
          <a
            href="mailto:contact@piyush.dev"
            data-cursor="interactive"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-obsidian text-champagne rounded-full font-mono text-sm tracking-widest font-bold overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">REQUEST TECHNICAL CONSULTATION</span>
            <div className="absolute inset-x-0 bottom-0 h-0 bg-white group-hover:h-full transition-all duration-300 ease-out z-0" />
            <span className="relative z-10 hidden group-hover:inline-block ml-2 text-obsidian transition-colors delay-100">→</span>
          </a>

          {/* Download CV (Google Drive Link) */}
          <a
            href="https://drive.google.com/your-cv-link-here"
            target="_blank"
            rel="noreferrer"
            data-cursor="interactive"
            className="group inline-flex items-center justify-center px-8 py-4 border border-obsidian/30 text-obsidian hover:bg-obsidian/5 rounded-full font-mono text-sm tracking-widest font-bold transition-all"
          >
            DOWNLOAD CV
          </a>
        </div>

      </div>
    </section>
  );
}

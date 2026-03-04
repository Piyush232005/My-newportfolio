import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Typewriter } from 'react-simple-typewriter';
import myImg from '../assets/my.png';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP Text Animations
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-el',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, delay: 0.5, ease: 'power3.out' }
      );

      // Continuous floating animation for the profile image
      gsap.to('.hero-img-container', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5
      });
    }, containerRef);

    // Cleanup
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden bg-obsidian text-white flex items-end pb-20 md:pb-32 px-6 md:px-16">
      
      {/* Gradient Overlay bottom-to-top */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 lg:gap-32 mt-20 md:mt-0">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 flex-1">
          <h2 className="hero-el text-sm md:text-lg font-mono tracking-widest text-slate-300 uppercase">
            Architectural Integrity. DevOps Mastery.
          </h2>
          
          <h1 className="hero-el text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] font-drama font-bold tracking-tight">
            Engineering <br/> 
            <span className="text-champagne italic">
              <Typewriter
                words={['Digital Resilience', 'Scalable Systems', 'Cloud Architectures','Backend Engg','DevOps','Full Stack']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>
          
          <p className="hero-el mt-4 max-w-[480px] text-base md:text-lg font-sans text-slate-300 leading-relaxed font-light">
            I orchestrate high-performance distributed systems on AWS and craft immersive, human-centric web experiences.
          </p>
          
          <div className="hero-el mt-8 pt-4">
            <a
              href="https://drive.google.com/file/d/1gxVMky6WeRPBfELyTVDn0k1mi4UwV3-q/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              data-cursor="interactive"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-champagne text-obsidian rounded-full font-mono text-sm tracking-widest font-bold overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">DOWNLOAD CV</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="hero-el hero-img-container flex-shrink-0 relative w-64 h-64 md:w-[450px] md:h-[450px] rounded-full border-[3px] border-champagne/80 shadow-[0_0_60px] shadow-champagne/40 overflow-hidden flex items-center justify-center bg-obsidian/40 backdrop-blur-sm group">
          <div className="absolute inset-0 bg-gradient-to-tr from-champagne/20 via-transparent to-transparent z-10 pointer-events-none"></div>
          <img 
            src={myImg} 
            alt="Piyush Profile" 
            className="w-[110%] h-[110%] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
      </div>
    </section>
  );
}

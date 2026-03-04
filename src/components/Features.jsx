import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Card 1: Diagnostic Shuffler --- //
const shufflerItems = [
  { label: 'Cloud Architecture', status: 'RESILIENT', color: 'text-green-400' },
  { label: 'Security Protocols', status: 'ENFORCED', color: 'text-champagne' },
  { label: 'System Scalability', status: 'ELASTIC', color: 'text-blue-400' },
];

function DiagnosticShuffler() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shufflerItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col flex-1 min-h-[140px] justify-center overflow-hidden [perspective:800px]">
      <div 
        ref={containerRef}
        key={currentIndex}
        className="flex items-center justify-between border border-white/10 bg-obsidian/50 p-4 rounded-xl animate-flip-in"
        style={{ animation: 'flipIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}
      >
        <span className="font-mono text-sm tracking-wide text-slate-300">
          {shufflerItems[currentIndex].label}
        </span>
        <span className={`font-mono text-xs font-bold tracking-widest ${shufflerItems[currentIndex].color} flex items-center gap-2`}>
          <span className={`w-1.5 h-1.5 rounded-full bg-current animate-pulse`} />
          {shufflerItems[currentIndex].status}
        </span>
      </div>
    </div>
  );
}

// --- Card 2: Telemetry Typewriter --- //
const telemetryMessages = [
  "INITIALIZING FULL-STACK ORCHESTRATION...",
  "DEPLOYING NODE.JS BACKEND...",
  "ATTACHING REACT FRONTEND...",
  "BRIDGING COMPLEX LOGIC TO CINEMATIC UI...",
  "SYSTEM NOMINAL."
];

function TelemetryTypewriter() {
  const [displayText, setDisplayText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let currentText = '';
    const message = telemetryMessages[messageIndex];
    let charIndex = 0;
    let scrambleTicks = 10;
    
    // Scramble phase
    const scrambleInterval = setInterval(() => {
      if (scrambleTicks > 0) {
        setDisplayText(Math.random().toString(36).substring(2, 10).toUpperCase());
        scrambleTicks--;
      } else {
        clearInterval(scrambleInterval);
        // Type phase
        const typeInterval = setInterval(() => {
          if (charIndex < message.length) {
            currentText += message[charIndex];
            setDisplayText(currentText);
            charIndex++;
          } else {
            clearInterval(typeInterval);
            setTimeout(() => {
              setMessageIndex((prev) => (prev + 1) % telemetryMessages.length);
            }, 2000);
          }
        }, 30);
      }
    }, 40);

    return () => clearInterval(scrambleInterval);
  }, [messageIndex]);

  return (
    <div className="flex-1 flex flex-col justify-end min-h-[140px]">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="font-mono text-[10px] text-red-500 tracking-widest">LIVE</span>
      </div>
      <p className="font-mono text-sm text-champagne break-words">
        {'> '} {displayText}
        <span className="animate-pulse inline-block w-2.5 h-4 align-middle bg-champagne ml-1"></span>
      </p>
    </div>
  );
}

// --- Card 3: Signal Graph --- //
function SignalGraph() {
  const pathRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
    
    // Animate on mount
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power2.out',
      delay: 0.5
    });
  }, []);

  return (
    <div className="flex-1 min-h-[140px] flex flex-col justify-end pt-4">
      <p className="font-mono text-xs text-slate-400 mb-2 tracking-widest">CI/CD PIPELINE EFFICIENCY</p>
      <div className="relative w-full h-full flex-1">
        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
          <path 
            ref={pathRef}
            d="M 0 35 L 20 25 L 40 30 L 60 10 L 80 15 L 100 5" 
            fill="none" 
            stroke="#C9A84C" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Data points */}
          {[
            {x:0, y:35}, {x:20, y:25}, {x:40, y:30}, {x:60, y:10}, {x:80, y:15}, {x:100, y:5}
          ].map((pt, i) => (
             <circle 
               key={i} 
               cx={pt.x} cy={pt.y} r="3" 
               className="fill-obsidian stroke-champagne stroke-2 animate-pulse"
               style={{ animationDelay: `${i * 0.2}s` }}
             />
          ))}
        </svg>
      </div>
    </div>
  );
}

// --- Main Features Component --- //
export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="why-me" className="py-24 px-6 md:px-16 w-full max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-mono tracking-widest text-champagne uppercase mb-4">Core Principles</h2>
        <h3 className="text-4xl md:text-5xl font-drama font-bold">The Architecture of Impact</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="feature-card bg-slate/40 border border-white/5 rounded-[2rem] p-8 shadow-xl flex flex-col hover:bg-slate/60 transition-colors">
          <div className="mb-6">
            <h4 className="font-sans font-bold text-xl mb-2 text-white">Architectural Integrity</h4>
            <p className="font-sans text-sm text-slate-300 leading-relaxed">
              I don’t just write code; I design AWS-certified cloud infrastructures that are resilient, scalable, and secure by default.
            </p>
          </div>
          <DiagnosticShuffler />
        </div>

        {/* Card 2 */}
        <div className="feature-card bg-slate/40 border border-white/5 rounded-[2rem] p-8 shadow-xl flex flex-col hover:bg-slate/60 transition-colors">
          <div className="mb-6">
            <h4 className="font-sans font-bold text-xl mb-2 text-white">Full-Stack Orchestration</h4>
            <p className="font-sans text-sm text-slate-300 leading-relaxed">
              Bridging the gap between complex backend logic (Node.js/Python) and immersive, high-conversion frontend experiences.
            </p>
          </div>
          <TelemetryTypewriter />
        </div>

        {/* Card 3 */}
        <div className="feature-card bg-slate/40 border border-white/5 rounded-[2rem] p-8 shadow-xl flex flex-col hover:bg-slate/60 transition-colors">
          <div className="mb-6">
            <h4 className="font-sans font-bold text-xl mb-2 text-white">DevOps Lifecycle</h4>
            <p className="font-sans text-sm text-slate-300 leading-relaxed">
              From local development to global deployment, I automate the entire pipeline to ensure 99.9% uptime and rapid iteration.
            </p>
          </div>
          <SignalGraph />
        </div>

      </div>
    </section>
  );
}

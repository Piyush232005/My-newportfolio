import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Check if device supports hover
    if (window.matchMedia('(pointer: coarse)').matches) {
      return; // Disable on touch devices
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Use quickSetter for high performance
    const setDotX = gsap.quickSetter(dot, 'x', 'px');
    const setDotY = gsap.quickSetter(dot, 'y', 'px');
    const setRingX = gsap.quickSetter(ring, 'x', 'px');
    const setRingY = gsap.quickSetter(ring, 'y', 'px');

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let ringPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Direct update for dot (zero lag)
      setDotX(mouse.x);
      setDotY(mouse.y);
    };

    const updateRing = () => {
      // Lerp ring position
      ringPos.x += (mouse.x - ringPos.x) * 0.12;
      ringPos.y += (mouse.y - ringPos.y) * 0.12;
      
      setRingX(ringPos.x);
      setRingY(ringPos.y);
    };

    // Attach mouse move
    window.addEventListener('mousemove', onMouseMove);
    
    // Setup animation loop for ring
    gsap.ticker.add(updateRing);

    // Add CSS globally for clickable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('button') || target.closest('a') || target.closest('[data-cursor="interactive"]')) {
        gsap.to(ring, { width: 60, height: 60, margin: '-30px 0 0 -30px', backgroundColor: 'rgba(201, 168, 76, 1)', mixBlendMode: 'exclusion', duration: 0.3 });
        gsap.to(dot, { scale: 0.5, duration: 0.3 });
      } else if (target.closest('p') || target.closest('h1') || target.closest('h2') || target.closest('h3') || target.closest('span')) {
        gsap.to(ring, { width: 4, height: 20, margin: '-10px 0 0 -2px', borderRadius: '2px', duration: 0.3 });
      } else {
        gsap.to(ring, { width: 32, height: 32, margin: '-16px 0 0 -16px', borderRadius: '50%', backgroundColor: 'transparent', mixBlendMode: 'normal', duration: 0.3 });
        gsap.to(dot, { scale: 1, duration: 0.3 });
      }
    };

    const handleMouseDown = () => {
      gsap.to(dot, { scale: 0.6, duration: 0.1 });
    };
    const handleMouseUp = () => {
      gsap.to(dot, { scale: 1, duration: 0.1 });
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      gsap.ticker.remove(updateRing);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-champagne rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{ transform: 'translate(-50%, -50%)', margin: '-4px 0 0 -4px' }}
      />
      {/* Ring */}
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-champagne/30 pointer-events-none z-[9999] hidden md:block transition-all duration-75 ease-out origin-center"
        style={{ transform: 'translate(-50%, -50%)', margin: '-16px 0 0 -16px' }}
      />
    </>
  );
}

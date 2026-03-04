import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import gsap from 'gsap';

export default function CertificationModal({ cert, onClose }) {
  useEffect(() => {
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Entrance animation
    gsap.fromTo('.modal-backdrop', 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    );
    
    gsap.fromTo('.modal-content', 
      { opacity: 0, scale: 0.95, y: 20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.5)', delay: 0.1 }
    );

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    // Exit animation
    gsap.to('.modal-content', { opacity: 0, scale: 0.95, y: 20, duration: 0.3, ease: 'power2.in' });
    gsap.to('.modal-backdrop', { opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: onClose });
  };

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 modal-backdrop bg-obsidian/80 backdrop-blur-sm">
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={handleClose}
      ></div>
      
      <div className="modal-content relative w-[90vw] max-w-5xl bg-obsidian border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex items-center justify-center p-2">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-emerald-500/80 text-white backdrop-blur-md transition-all scale-100 hover:scale-110"
        >
          <X size={24} />
        </button>

        {/* Full Image Display */}
        <div className="w-full relative rounded-xl overflow-hidden bg-black/50 aspect-video flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay z-10 pointer-events-none"></div>
          <img 
            src={cert.image} 
            alt={cert.title} 
            className="w-full h-full object-contain"
          />
        </div>
        
      </div>
    </div>
  );
}

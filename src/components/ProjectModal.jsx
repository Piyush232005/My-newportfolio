import React, { useEffect, useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import gsap from 'gsap';

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // GSAP Entrance Animation
    const tl = gsap.timeline();
    
    tl.fromTo(overlayRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    ).fromTo(modalRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' },
      "-=0.1"
    );

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    
    tl.to(modalRef.current, { 
      opacity: 0, scale: 0.95, y: 10, duration: 0.3, ease: 'power2.in' 
    }).to(overlayRef.current, { 
      opacity: 0, duration: 0.3, ease: 'power2.in' 
    }, "-=0.2");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        ref={overlayRef}
        className="modal-backdrop absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={handleClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        ref={modalRef}
        className="modal-content relative w-[90vw] max-w-4xl max-h-[90vh] bg-obsidian border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row z-10 overflow-hidden"
      >
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-champagne/90 hover:text-obsidian text-white backdrop-blur-md transition-all scale-100 hover:scale-110"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-2/5 h-48 md:h-auto relative bg-black/50 border-r border-white/5">
          <div className="absolute inset-0 bg-champagne/5 mix-blend-overlay z-10 pointer-events-none"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-contain p-4 md:p-6"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col overflow-y-auto">
          
          <div className="flex flex-wrap gap-2 mb-4">
             {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono tracking-wider text-champagne bg-champagne/10 rounded-full border border-champagne/20"
                >
                  {tech}
                </span>
             ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h3>

          <div className="text-gray-300 mb-8 leading-relaxed space-y-4">
            <p>{project.fullDescription}</p>
          </div>

          <div className="mt-auto pt-6 border-t border-white/10">
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-champagne text-obsidian rounded-full font-mono font-bold tracking-widest text-sm hover:scale-[1.02] transition-transform duration-300"
            >
              <Github size={20} />
              <span>VIEW REPOSITORY</span>
              <ExternalLink size={16} className="transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProjectModal;

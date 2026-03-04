import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Stagger animation for the project cards
      gsap.fromTo(
        '.project-card',
        { 
          opacity: 0, 
          y: 60 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="relative w-full min-h-screen bg-obsidian py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2 mix-blend-screen" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-champagne/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Grid Canvas */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Content */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-drama font-bold text-white mb-6 uppercase tracking-wider">
            PROJECTS
          </h2>
          <p className="text-base md:text-lg text-slate-400 font-sans leading-relaxed">
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.
          </p>
        </div>

        {/* 3x2 Grid View */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project) => (
             <ProjectCard 
               key={project.id} 
               project={project} 
               onClick={() => setSelectedProject(project)} 
             />
          ))}
        </div>

      </div>

      {/* Conditional Project ModalPopup */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

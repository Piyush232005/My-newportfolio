import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full transition-all duration-400 ease-out w-[95%] max-w-6xl ${
        scrolled ? 'bg-obsidian/70 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border border-transparent'
      }`}
    >
      <div className="text-xl font-drama font-bold tracking-widest text-white cursor-pointer" onClick={(e) => handleNavClick(e, 'hero')}>
        PIYUSH<span className="text-champagne">.</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm text-slate-300 font-mono tracking-wide">
        <a href="#why-me" onClick={(e) => handleNavClick(e, 'why-me')} className="hover:text-champagne transition-colors">Why Me</a>
        <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')} className="hover:text-champagne transition-colors">Certifications</a>
        <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-champagne transition-colors">Experience</a>
        <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="hover:text-champagne transition-colors">Education</a>
        <a href="#philosophy" onClick={(e) => handleNavClick(e, 'philosophy')} className="hover:text-champagne transition-colors">Philosophy</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-champagne transition-colors">Projects</a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="#initiate-protocol"
          onClick={(e) => handleNavClick(e, 'initiate-protocol')}
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-champagne text-obsidian font-mono text-sm font-semibold hover:bg-white transition-colors"
        >
          INITIATE <span className="hidden sm:inline">&nbsp;PROTOCOL</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-[120%] left-0 w-full bg-[#131025]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#why-me" onClick={(e) => handleNavClick(e, 'why-me')} className="text-white font-mono text-lg hover:text-champagne transition-colors border-b border-white/5 pb-2">Why Me</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="text-white font-mono text-lg hover:text-champagne transition-colors border-b border-white/5 pb-2">Experience</a>
          <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="text-white font-mono text-lg hover:text-champagne transition-colors border-b border-white/5 pb-2">Education</a>
          <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')} className="text-white font-mono text-lg hover:text-champagne transition-colors border-b border-white/5 pb-2">Certifications</a>
          <a href="#philosophy" onClick={(e) => handleNavClick(e, 'philosophy')} className="text-white font-mono text-lg hover:text-champagne transition-colors border-b border-white/5 pb-2">Philosophy</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-white font-mono text-lg hover:text-champagne transition-colors border-b border-white/5 pb-2">Projects</a>
          <a href="#initiate-protocol" onClick={(e) => handleNavClick(e, 'initiate-protocol')} className="mt-4 px-5 py-3 rounded-full bg-champagne text-obsidian font-mono text-sm font-semibold text-center hover:bg-white transition-colors">
            INITIATE PROTOCOL
          </a>
        </div>
      )}
    </nav>
  );
}

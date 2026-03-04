import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CertificationCard, { certificationsData } from "./CertificationCard";
import CertificationModal from "./CertificationModal";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const sectionRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered entrance animation for cards
      gsap.fromTo(
        ".cert-card-wrapper",
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="bg-obsidian text-white relative min-h-screen overflow-hidden flex flex-col justify-center py-24" id="certifications">
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-screen opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-champagne/5 rounded-full blur-[120px] mix-blend-screen opacity-20 transform -translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 w-full flex-shrink-0 z-10 pt-20 mb-10 md:mb-16">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Major <span className="font-drama text-champagne italic">Certifications</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mt-4">
          Validation of my technical expertise and continuous commitment to mastering modern technologies.
        </p>
      </div>

      {/* Certifications 2x2 Grid */}
      <div className="container mx-auto px-6 md:px-12 w-full relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card-wrapper">
              <CertificationCard cert={cert} onClick={() => setSelectedCert(cert)} />
            </div>
          ))}
        </div>
      </div>

      {/* Certification Modal Popup */}
      {selectedCert && (
        <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
};

export default Certifications;

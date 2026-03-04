import React from 'react';

const ExperienceCard = ({ exp }) => {
  return (
    <div className="relative bg-[#131025] border border-white/10 rounded-2xl p-6 md:p-8 w-full shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:-translate-y-1 duration-300">
      
      {/* Header section */}
      <div className="flex items-start gap-4 mb-6">
        {/* Company Logo Container */}
        <div className="w-16 h-16 rounded-xl bg-white p-2 flex-shrink-0 flex items-center justify-center overflow-hidden">
          <img 
            src={exp.logo} 
            alt={exp.company} 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Role & Company Info */}
        <div className="flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
            {exp.role}
          </h3>
          <p className="text-gray-400 text-sm md:text-base font-medium mt-1">
            {exp.company}
          </p>
          <p className="text-gray-500 text-xs md:text-sm mt-1">
            {exp.duration}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
        {exp.description}
      </p>

      {/* Skills */}
      {exp.skills && exp.skills.length > 0 && (
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-purple-600/80 text-white text-xs md:text-sm rounded-md shadow-sm border border-purple-400/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;

import React from 'react';

const EducationCard = ({ edu }) => {
  return (
    <div className="relative bg-[#131025] border border-white/10 rounded-2xl p-6 md:p-8 w-full shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-all hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] hover:-translate-y-1 duration-300">
      
      {/* Header section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4 relative">
        
        {/* Card Logo Image */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white p-2 flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/20 shadow-md">
          <img 
            src={edu.logo} 
            alt={edu.institution} 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-between items-start w-full mb-1 flex-col gap-1 md:gap-0">
             <h3 className="text-xl font-bold text-white leading-tight">
               {edu.degree}
             </h3>
             <h4 className="text-lg font-semibold text-white leading-tight">
               {edu.course}
             </h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base font-medium">
            {edu.institution}
          </p>
          <p className="text-gray-500 text-xs mt-1">
             {edu.duration}
          </p>
        </div>
      </div>
      
      {/* Grade */}
      <div className="mb-4">
        <span className="text-sky-400 font-bold text-sm tracking-wide">
          {edu.grade}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        {edu.description}
      </p>

    </div>
  );
};

export default EducationCard;

import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Translation } from '../data/translations';

interface DoctorsSectionProps {
  t: Translation;
  onDoctorClick?: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ t, onDoctorClick }) => {
  return (
    <section id="doctors" className="pt-8 sm:pt-10 pb-8 sm:pb-10 bg-gradient-to-b from-[#FAF6FA] via-[#FFFFFF] to-[#FAF6FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2.5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A102D] tracking-tight">
            {t.doctors.title}
          </h2>

          <p className="text-sm sm:text-base text-[#56335B] font-medium leading-relaxed">
            {t.doctors.subtitle}
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className={t.doctors.list.length === 1 ? "max-w-3xl mx-auto" : "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"}>
          {t.doctors.list.map((doctor) => (
            <div
              key={doctor.id}
              className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl"
            >
              
              {/* Main Card Content */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Left Side: Avatar Box & Name Badge Pill */}
                <div className="flex flex-col items-center shrink-0 w-full sm:w-auto">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl p-1 bg-gradient-to-tr from-[#652D6C] via-[#9A389F] to-[#4D1F53] shadow-md">
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top rounded-xl bg-white"
                      onError={(e) => {
                        // Fallback if image path needs fallback
                        (e.target as HTMLElement).setAttribute('src', '/dr-mitra-vinda.png');
                      }}
                    />
                  </div>

                  {/* Dark Purple Name Badge Pill Under Photo */}
                  <div className="mt-3 bg-[#652D6C] text-white px-4 py-1.5 rounded-full text-xs font-extrabold shadow-md tracking-wide text-center w-full max-w-[200px]">
                    {doctor.name}
                  </div>
                </div>

                {/* Right Side: Details & Qualifications */}
                <div className="space-y-3.5 flex-1 w-full pt-1 sm:pt-0">
                  
                  {/* Doctor Name */}
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2A102D] tracking-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#652D6C]">
                      {doctor.title}
                    </p>
                  </div>

                  {/* Qualifications Pill Box (matching reference image) */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF3FB] border border-[#652D6C]/15 flex items-start gap-2.5">
                    <GraduationCap className="w-5 h-5 text-[#9A389F] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-bold text-[#4D1F53] leading-snug">
                      {doctor.qualifications}
                    </p>
                  </div>

                  {/* Bio Description */}
                  <p className="text-xs sm:text-sm text-[#56335B] font-medium leading-relaxed">
                    {doctor.bio}
                  </p>

                </div>

              </div>

              {/* Bottom Achievement & Experience Ribbon Bar (matches reference image) */}
              <div className="mt-6 pt-4 border-t border-[#652D6C]/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#652D6C]">
                  <Award className="w-4 h-4 text-[#9A389F]" />
                  <span>{doctor.achievementBadge}</span>
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-[#FAF3FB] border border-[#652D6C]/20 text-[#652D6C] text-xs font-black uppercase tracking-wider shadow-sm shrink-0">
                  {doctor.expBadge}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

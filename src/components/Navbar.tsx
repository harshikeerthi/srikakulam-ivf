import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Language, Translation } from '../data/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
  onBookClick: () => void;
  onOpenRegistrationModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, onBookClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/95 border-b border-[#652D6C]/15 shadow-sm transition-all duration-300">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Brand Logos */}
        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          <a href="#" className="flex items-center group focus:outline-none" title="Medcy IVF - Miracles Made Here">
            <img 
              src="/medcy-logo.png" 
              alt="Medcy IVF Logo - Miracles Made Here" 
              className="h-8 sm:h-10 lg:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
          <span className="h-4 sm:h-5 w-px bg-[#652D6C]/25" aria-hidden="true"></span>
          <a href="#" className="flex items-center group focus:outline-none" title="Vizag IVF Centre - Conceiving Joy">
            <img 
              src="/vizag-ivf-logo.png" 
              alt="Vizag IVF Centre Logo - Conceiving Joy" 
              className="h-8 sm:h-10 lg:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Language Toggle Button */}
          <div className="flex items-center bg-[#FAF6FA] border border-[#652D6C]/25 rounded-full p-0.5 sm:p-1 shadow-inner">
            <button
              onClick={() => setLang('en')}
              className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-bold rounded-full transition-all flex items-center gap-1 ${
                lang === 'en'
                  ? 'bg-[#652D6C] text-white shadow-md'
                  : 'text-[#56335B] hover:text-[#652D6C]'
              }`}
              title="Switch to English"
            >
              <span className="sm:hidden">EN</span>
              <span className="hidden sm:inline">English</span>
            </button>
            <button
              onClick={() => setLang('te')}
              className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-bold rounded-full transition-all flex items-center gap-1 ${
                lang === 'te'
                  ? 'bg-[#652D6C] text-white shadow-md'
                  : 'text-[#56335B] hover:text-[#652D6C]'
              }`}
              title="తెలుగు మార్చండి"
            >
              <span className="sm:hidden">తె</span>
              <span className="hidden sm:inline">తెలుగు</span>
            </button>
          </div>

          {/* Direct Call Button */}
          <a
            href="tel:07799772221"
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#652D6C] bg-[#FAF3FB] hover:bg-[#652D6C] hover:text-white border border-[#652D6C]/30 transition-all group"
          >
            <Phone className="w-4 h-4 text-[#9A389F] group-hover:text-white transition-colors animate-pulse" />
            <span>{t.nav.phone}</span>
          </a>

          {/* Book Appointment CTA (Hidden on mobile, visible on sm and up) */}
          <button
            onClick={onBookClick}
            className="hidden sm:flex btn-primary-purple px-4 lg:px-6 py-2 rounded-full text-xs sm:text-sm font-bold items-center gap-2 shadow-md shrink-0 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-300 shrink-0" />
            <span>{t.nav.bookAppointment}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

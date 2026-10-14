import React, { useState } from 'react';
import { Calendar, Sparkles, User, Phone, ChevronRight, Percent } from 'lucide-react';
import { Translation } from '../data/translations';

interface HeroProps {
  t: Translation;
  onFormSubmit: (data: { name: string; phone: string; slot: string; date: string; age?: string; formSource?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onFormSubmit }) => {
  const isTe = t.nav.brandName.includes('మెడ్సీ');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    date: new Date().toISOString().split('T')[0],
    slot: t.hero.slotOptions[0] || '10:00 AM - 07:00 PM'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmit({
        ...formData,
        formSource: 'Consultation Registration (Hero Form)'
      });
    }, 600);
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF6FA] min-h-[calc(100vh-8.5rem)] flex flex-col justify-center items-center py-6 sm:py-8 lg:py-10 px-6 sm:px-12 lg:px-20 xl:px-28">
      {/* Hero Full Background Image (Mother & Baby IVF Artwork) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/hero-ivf-mother-baby-bg.png" 
          alt="Vizag IVF Mother and Baby" 
          className="w-full h-full object-cover object-right sm:object-center opacity-85 sm:opacity-90"
        />
        {/* Soft, gentle left gradient for optimal text contrast while keeping background artwork clear and visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6FA]/70 via-[#FAF6FA]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF6FA]/60" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10 xl:gap-14">
          
          {/* Left Column: Headlines & Pricing Info */}
          <div className="space-y-4 sm:space-y-5 lg:col-span-6 order-1 lg:order-1">
            
            {/* Brand Eyebrow: VIZAG IVF (Poppins SemiBold) */}
            <div className="font-poppins font-semibold text-xs sm:text-sm tracking-widest text-[#652D6C] uppercase flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#9A389F] rounded-full inline-block"></span>
              <span>VIZAG IVF</span>
            </div>

            {/* Main Headline */}
            <h1 className="tracking-tight text-[#2A102D] leading-[1.15]">
              <span className="block font-poppins font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#2A102D]">
                {t.hero.headlinePart1}
              </span>
              <span className="block font-poppins font-extrabold italic text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#652D6C] via-[#9A389F] to-[#7E3282] mt-1 sm:mt-1.5">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Tagline Line */}
            {t.hero.tagline && (
              <p className="text-base sm:text-lg lg:text-xl font-bold text-[#4D1F53] tracking-tight">
                {t.hero.tagline}
              </p>
            )}

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-base text-[#56335B] leading-relaxed max-w-2xl font-medium">
              {t.hero.subtext}
            </p>

            {/* NMC Compliant IVF Pricing Highlight Card */}
            <div className="relative w-full rounded-2xl p-1 bg-gradient-to-r from-[#652D6C] via-[#9A389F] to-[#4D1F53] shadow-xl overflow-hidden group mt-3">
              <div className="relative w-full rounded-xl bg-gradient-to-r from-[#652D6C] via-[#7E3282] to-[#4D1F53] p-5 sm:p-6 flex flex-col justify-between gap-3 overflow-hidden text-white border border-white/20">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider border border-white/25">
                    {t.hero.offerBadge || "SRIKAKULAM CENTRE"}
                  </span>
                  <div className="flex items-center gap-1.5 text-yellow-300 text-xs font-bold">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span>Transparent Pricing</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-poppins font-black text-xl sm:text-2xl lg:text-[26px] text-white tracking-tight leading-snug drop-shadow-sm">
                    {t.hero.offerText}
                  </h3>
                  <p className="text-xs sm:text-sm text-pink-200 font-semibold tracking-wide">
                    {t.hero.offerNote}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Enlarged Registration Form (Image 2) */}
          <div className="lg:col-span-6 order-2 lg:order-2 w-full">
            <div className="bg-white relative shadow-2xl border border-[#652D6C]/25 p-6 sm:p-8 lg:p-9 rounded-3xl w-full">
              
              {/* Form Header */}
              <div className="text-center mb-5 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A102D] tracking-tight">
                  {t.hero.formTitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#56335B] mt-1 font-semibold">
                  {t.hero.formSubtitle}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
                
                {/* Full Name Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1.5">
                    {t.hero.fullNameLabel}
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3.5 top-3.5 text-[#652D6C]" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.hero.fullNamePlaceholder}
                      className="w-full pl-11 pr-4 py-3 sm:py-3.5 text-sm sm:text-base bg-[#FAF6FA]/50 border border-[#652D6C]/30 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D] shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Mobile & Age Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1.5">
                      {t.hero.mobileLabel}
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 absolute left-3.5 top-3.5 text-[#652D6C]" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.hero.mobilePlaceholder}
                        className="w-full pl-11 pr-4 py-3 sm:py-3.5 text-sm sm:text-base bg-[#FAF6FA]/50 border border-[#652D6C]/30 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1.5">
                      {t.hero.ageLabel}
                    </label>
                    <input
                      type="number"
                      min="18"
                      max="60"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder={t.hero.agePlaceholder}
                      className="w-full px-3 py-3 sm:py-3.5 text-sm sm:text-base bg-[#FAF6FA]/50 border border-[#652D6C]/30 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-center text-[#2A102D] shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Date & Time Slot Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1.5">
                      {t.hero.dateLabel}
                    </label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 absolute left-3.5 top-3.5 text-[#652D6C] pointer-events-none" />
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-11 pr-3 py-3 sm:py-3.5 text-sm sm:text-base bg-[#FAF6FA]/50 border border-[#652D6C]/30 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#2A102D] mb-1.5">
                      {t.hero.slotLabel}
                    </label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full px-3 py-3 sm:py-3.5 text-sm sm:text-base bg-[#FAF6FA]/50 border border-[#652D6C]/30 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-sm transition-all cursor-pointer"
                    >
                      {t.hero.slotOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent rounded-xl font-extrabold text-base sm:text-lg py-3.5 sm:py-4 px-6 flex items-center justify-center gap-2 shadow-xl mt-3 group hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                >
                  <span>{isSubmitting ? t.hero.submitting : t.hero.submitButton}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs sm:text-sm text-center text-[#56335B] font-medium pt-1 leading-normal max-w-sm mx-auto">
                  <span className="inline-block mr-1">🔒</span>
                  <span>{t.hero.privacyNote}</span>
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

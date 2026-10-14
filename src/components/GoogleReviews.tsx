import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageCircleHeart } from 'lucide-react';
import { Translation } from '../data/translations';

interface GoogleReviewsProps {
  t: Translation;
  onBookClick?: () => void;
}

export const GoogleReviews: React.FC<GoogleReviewsProps> = ({ t, onBookClick }) => {
  const reviewsData = t.reviews;
  if (!reviewsData) return null;

  return (
    <section id="reviews" className="pt-6 sm:pt-8 pb-12 sm:pb-16 bg-[#FAF6FA] relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#652D6C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#D91B5C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#652D6C]/10 text-[#652D6C] text-xs font-black uppercase tracking-wider">
            <MessageCircleHeart className="w-4 h-4 text-[#9A389F]" />
            <span>{reviewsData.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2A102D] tracking-tight">
            {reviewsData.title}
          </h2>

          <p className="text-sm sm:text-base text-[#56335B] font-medium leading-relaxed">
            {reviewsData.subtitle}
          </p>
        </div>

        {/* Google Official Rating Summary Pill */}
        <div className="max-w-xl mx-auto mb-8 sm:mb-10 bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-[#652D6C]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* Google G Logo SVG */}
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 p-2">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-[#2A102D]">{reviewsData.ratingScore}</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-bold text-[#56335B]">
                {reviewsData.reviewsCount} • {reviewsData.branchName}
              </p>
            </div>
          </div>

          <a
            href={reviewsData.gmbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF3FB] hover:bg-[#652D6C] text-[#652D6C] hover:text-white border border-[#652D6C]/20 text-xs font-extrabold transition-all duration-200 shrink-0 shadow-sm"
          >
            <span>Google Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviewsData.items.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl border border-[#652D6C]/10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative group"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {/* User Initials Avatar */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#652D6C] to-[#9A389F] text-white font-extrabold text-sm flex items-center justify-center shadow-md shrink-0">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-extrabold text-sm text-[#2A102D]">
                          {review.name}
                        </h4>
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20 shrink-0" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#8E0956] bg-pink-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                        {review.badge}
                      </span>
                    </div>
                  </div>

                  {/* Google 'G' mini badge */}
                  <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-200">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                  </div>
                </div>

                {/* Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-gray-400">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#56335B] font-medium leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#652D6C]">
                  {review.treatment}
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View Remaining GMB Page Button */}
        <div className="mt-8 sm:mt-10 text-center flex items-center justify-center">
          <a
            href={reviewsData.gmbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FAF3FB] text-[#652D6C] border-2 border-[#652D6C]/30 font-extrabold text-sm shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-5 h-5 shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>
            <span>{reviewsData.viewAllReviews}</span>
            <ExternalLink className="w-4 h-4 text-[#9A389F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

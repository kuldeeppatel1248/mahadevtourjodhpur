import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote, MapPin } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-[#0F0F0F]">
      {/* Decorative Gradients */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
            Guest Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Loved By <span className="text-gold font-bold">Trusted Guests</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Read stories of exceptional comfort and pristine safety shared by couples, wedding planners, and corporate groups who toured with us.
          </p>
        </div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between h-full relative group border border-white/5 shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              {/* Quote icon watermark in gold */}
              <div className="absolute top-6 right-6 text-[#D4AF37]/15 group-hover:text-[#D4AF37]/25 transition-colors">
                <Quote className="w-10 h-10 transform -scale-x-100" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4.5 h-4.5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Comment text */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 italic relative z-10">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="border-t border-[#D4AF37]/10 pt-5 mt-auto flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-gray-500 text-[10px] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{review.location}</span>
                  </div>
                </div>
                
                {/* Date stamp */}
                <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                  {review.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;

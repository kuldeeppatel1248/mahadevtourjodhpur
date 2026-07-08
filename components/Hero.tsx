import React from 'react';
import { CONTACT_INFO, BUSINESS_NAME, TAGLINE } from '../constants';
import { Phone, Calendar, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]"
    >
      {/* Background Image of Mehrangarh Fort with Golden Sunset Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1800" 
          alt="Mehrangarh Fort Jodhpur Golden Hour" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] sepia-[0.1] contrast-[1.1] animate-[pulse_10s_infinite_alternate]"
          loading="eager"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        
        {/* Golden particle dots for royal atmosphere */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#D4AF37_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left mt-8 lg:mt-0">
          {/* Royal badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 mb-6 animate-[bounce_2s_infinite_alternate]">
            <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#F3E5AB]">
              Rajasthan's #1 Rated Luxury Fleet
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.15]">
            Experience Rajasthan in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D1] via-[#D4AF37] to-[#AA7C11] filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
              Royal Luxury
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium mb-8 max-w-2xl">
            {TAGLINE}. Enjoy seamless travel, expert local drivers, transparent direct pricing, and Jodhpur's finest premium fleet.
          </p>

          {/* Core USP quick tags */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 w-full max-w-lg">
            <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-2 rounded-lg backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>100% Secure & Trusted</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-2 rounded-lg backdrop-blur-md">
              <Star className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Chauffeur Guided</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-2 rounded-lg backdrop-blur-md col-span-2 sm:col-span-1">
              <span className="text-[#D4AF37] font-bold">★</span>
              <span>Zero Hidden Toll Charges</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={onBookClick}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold text-sm tracking-widest uppercase rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:brightness-110 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Your Ride
              <ArrowRight className="w-4 h-4" />
            </button>

            <a 
              href={`tel:${CONTACT_INFO.phoneNumbers[0]}`}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#1F1F1F]/90 hover:bg-[#2D2D2D]/90 text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] font-bold text-sm tracking-widest uppercase rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] active:scale-95 transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              Call Chauffeur
            </a>
          </div>
        </div>

        {/* Right Side: High quality premium Force Urbania overlay */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
            {/* Ambient Gold Halo in the background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-full blur-[80px] pointer-events-none" />
            
            {/* Showcase Glassmorphism Stats Card */}
            <div className="glass-card absolute -top-4 -left-4 z-20 px-4 py-3 rounded-xl border border-[#D4AF37]/30 flex items-center gap-3 shadow-2xl animate-[float_4s_infinite_ease-in-out]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] flex items-center justify-center text-black font-bold text-sm">
                4.9
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Premium Rating</div>
                <div className="text-[10px] text-gray-400">Over 1,200+ Happy Journeys</div>
              </div>
            </div>

            {/* Main Luxury Force Urbania mockup frame */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:border-[#D4AF37]/70 hover:shadow-[0_20px_60px_rgba(212,175,55,0.2)]">
              {/* Force Urbania Travel Image */}
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" 
                alt="Force Urbania Luxury Van Jodhpur" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Card Bottom Tag */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 border-t border-[#D4AF37]/10">
                <div className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-1">Our Flagship Force Urbania</div>
                <p className="text-xs text-gray-300">10-17 VIP pushback leather seats, individual USB climate console, and heavy air suspension.</p>
              </div>
            </div>

            {/* Quick action card at bottom-right */}
            <div className="glass-card absolute -bottom-4 -right-4 z-20 px-5 py-3.5 rounded-xl border border-[#D4AF37]/30 shadow-2xl">
              <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1">Bookings Open</div>
              <div className="text-sm font-semibold text-white">Starts from ₹11/km Only</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Golden Wave Separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden pointer-events-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12 fill-[#0B0B0B] text-[#0B0B0B]">
          <path d="M0,0 C150,90 350,120 600,120 C850,120 1050,90 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

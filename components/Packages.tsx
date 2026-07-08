import React from 'react';
import { TOUR_PACKAGES } from '../constants';
import { TourPackage } from '../types';
import { Calendar, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 relative overflow-hidden bg-[#0F0F0F]">
      {/* Decorative Gold Elements */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-[#AA7C11]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
            Signature Rajasthan Expeditions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Curated <span className="text-gold font-bold">Royal Tour Packages</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Journey into the land of magnificent forts, serene lakes, and golden dunes with our hassle-free, fully chauffeured luxury tour experiences.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg: TourPackage) => (
            <div 
              key={pkg.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-full group border border-white/5 shadow-2xl transition-all duration-500 hover:scale-[1.01]"
            >
              <div>
                {/* Visual Cover image with duration badge */}
                <div className="relative h-64 overflow-hidden border-b border-[#D4AF37]/10">
                  <img 
                    src={pkg.imageUrl} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Duration overlay badge */}
                  <div className="absolute top-4 left-4 bg-[#0B0B0B]/90 border border-[#D4AF37]/30 backdrop-blur-md text-white font-bold text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-xl">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6">
                  {/* Destinations path */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {pkg.destinations.map((dest, index) => (
                      <React.Fragment key={index}>
                        <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
                          {dest}
                        </span>
                        {index < pkg.destinations.length - 1 && (
                          <span className="text-gray-600 text-xs font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                    {pkg.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Highlights section */}
                  <div className="border-t border-[#D4AF37]/10 pt-5 mt-5">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-3">Expedition Highlights</h4>
                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-gray-300 leading-normal">
                          <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Price Estimate & Booking trigger */}
              <div className="p-6 border-t border-[#D4AF37]/10 mt-auto bg-black/40">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-gray-500 block">Starting Tour Fare</span>
                    <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-[#AA7C11]">
                      {pkg.priceEstimate}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#D4AF37] font-semibold tracking-wider">All Transfers Incl.</span>
                </div>

                <button 
                  onClick={() => onSelectPackage(pkg.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold text-xs tracking-widest uppercase rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:brightness-110 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  Book This Package
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Packages;

import React from 'react';
import { SERVICES } from '../constants';
import { ServiceItem } from '../types';
import { Plane, Map, Compass, Sparkles, Briefcase, ChevronRight } from 'lucide-react';

interface ServicesProps {
  onServiceSelect: () => void;
}

// Icon Mapping dictionary
const iconMap: { [key: string]: React.ComponentType<any> } = {
  PlaneTakeoff: Plane,
  Map: Map,
  Compass: Compass,
  Sparkles: Sparkles,
  Briefcase: Briefcase
};

const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0B0B0B]">
      {/* Decorative Golden Ambient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
            Premium Travel Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Our Bespoke <span className="text-gold font-bold">Luxury Services</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            From the minute you step foot into Rajasthan to the grandest corporate or wedding logistics, we ensure seamless execution with zero stress.
          </p>
        </div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName] || Compass;
            return (
              <div 
                key={service.id}
                className="glass-card rounded-2xl p-8 flex flex-col justify-between h-full group border border-white/5 shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div>
                  {/* Decorative Icon Wrapper */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A] border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:border-[#D4AF37]/80 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500">
                    <IconComponent className="w-7 h-7 transform group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Highlights of services */}
                  <ul className="space-y-2 mb-8">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA block */}
                <button 
                  onClick={onServiceSelect}
                  className="w-full text-center py-2.5 bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-gray-300 hover:text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95"
                >
                  Inquire For Service
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;

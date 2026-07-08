import React from 'react';
import { ShieldCheck, Heart, UserCheck, Scale, BadgePercent, ShieldAlert } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Pristine Sanitized Comfort',
      desc: 'All vehicles undergo rigid chemical sanitization, continuous inspection, and carry professional air perfumes before every booking.',
      icon: ShieldCheck
    },
    {
      title: 'Strict Direct Pricing',
      desc: 'No middleman, no tourist trap commissions, no hidden luggage fees. You receive honest, fully detailed quotes with actual tolls.',
      icon: Scale
    },
    {
      title: 'Polite Certified Chauffeurs',
      desc: 'Chauffeurs are highly polite, multi-lingual, and carry 8+ years of highway experience across Rajasthan cities.',
      icon: UserCheck
    },
    {
      title: '24/7 Dedicated Support',
      desc: 'Our offices in Rokdiya Balaji Jodhpur remain accessible 24 hours a day to handle emergency booking adjustments or road assistance.',
      icon: Heart
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0B0B0B]">
      {/* Golden Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.3em] uppercase mb-3">
              Unmatched Trust Standards
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              Why Travelers Choose <span className="text-gold font-bold">Mahadev Tour</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              In a tourist market often cluttered with brokers, pushy sales, and sudden surprises, Mahadev Tour Jodhpur is established on a singular principle: <strong>Absolute Transparency</strong>.
            </p>
            
            {/* Visual Callout */}
            <div className="w-full bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 p-6 rounded-2xl">
              <div className="flex gap-4 items-center">
                <span className="text-3xl">🤝</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Our Sacred Custody</h4>
                  <p className="text-xs text-gray-400">Under the protective values of Lord Mahadev, we safeguard your family with pure, safe travel.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-[#141414]/80 border border-white/5 shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37]/20 transition-all">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import React from 'react';
import { BUSINESS_NAME, TAGLINE, CONTACT_INFO } from '../constants';
import { Award, Compass, HeartHandshake, ShieldAlert } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0B0B0B]">
      {/* Decorative Light Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-[#AA7C11]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Images Grid with Royal Accent */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl hover:border-[#D4AF37]/60 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=600" 
                    alt="Jodhpur Blue City streets" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl hover:border-[#D4AF37]/60 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" 
                    alt="Rajasthan Thar desert camp" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl hover:border-[#D4AF37]/60 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&q=80&w=600" 
                    alt="Umaid Bhawan Palace" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl hover:border-[#D4AF37]/60 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600" 
                    alt="Our luxury van service" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Overlapping Trust Seal Card */}
            <div className="absolute -bottom-6 -left-6 md:left-6 bg-gradient-to-br from-[#1A1A1A] to-black border border-[#D4AF37]/40 p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] max-w-[240px] z-20">
              <div className="text-[#D4AF37] font-bold text-3xl mb-1">8+ Years</div>
              <div className="text-sm font-semibold text-white uppercase tracking-wider mb-1">Rajasthan Sightseeing</div>
              <p className="text-xs text-gray-400">Awarded local trust with unmatched luxury rating.</p>
            </div>
          </div>

          {/* Right Side: Content and Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.3em] uppercase mb-3">
              Royal Heritage & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              Welcome to <span className="text-gold font-bold">{BUSINESS_NAME}</span>
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Mahadev Tour Jodhpur is a premier luxury travel company based in the heart of the Blue City, Jodhpur. Inspired by the rich cultural heritage and royal hospitality of Rajasthan, we follow the timeless tradition of <strong>"Atithi Devo Bhava"</strong>—treating every guest with the utmost respect and warmth.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Whether you are landing at the Jodhpur Airport, planning a local sightseeing tour to explore Mehrangarh Fort and Umaid Bhawan Palace, arranging grand transport for a royal wedding, or embarking on a long multi-day expedition across Udaipur, Jaipur, and Jaisalmer sand dunes, we provide a perfect, premium, well-maintained fleet and highly professional, polite drivers who double as local cultural guides.
            </p>

            {/* Quick Core Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Tailored Rajasthan Packages</h4>
                  <p className="text-xs text-gray-400">Customized itineraries catering to your distinct luxury, comfort, and timing preferences.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Pristine Quality Fleet</h4>
                  <p className="text-xs text-gray-400">Spotless premium cars ranging from luxury Force Urbania, MUVs like Innova Crysta, to budget sedans.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Professional Chauffeurs</h4>
                  <p className="text-xs text-gray-400">Experienced, polite, state-licensed drivers ensuring complete highway safety and hospitality.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <span className="text-lg font-bold">₹</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Direct & Honest Rates</h4>
                  <p className="text-xs text-gray-400">Zero broker commissions, no hidden surcharges. Transparent toll and state boundary tax billing.</p>
                </div>
              </div>
            </div>

            {/* Quote of Trust */}
            <div className="border-l-2 border-[#D4AF37] pl-6 py-1 italic text-gray-300 text-sm max-w-xl">
              "We don't just book trips. We craft lifelong memories of Rajasthan. That is why our guests trust us again and again. Under the protection of Lord Mahadev, travel in absolute security."
              <span className="block text-xs font-bold uppercase tracking-widest text-[#D4AF37] not-italic mt-2">
                — Dharama Saran, Founder, Mahadev Tour Jodhpur
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

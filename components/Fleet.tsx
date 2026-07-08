import React from 'react';
import { FLEET } from '../constants';
import { Vehicle } from '../types';
import { Users, Briefcase, Compass, Shield, ArrowUpRight } from 'lucide-react';

interface FleetProps {
  onSelectVehicle: (vehicleName: string) => void;
}

const Fleet: React.FC<FleetProps> = ({ onSelectVehicle }) => {
  return (
    <section id="fleet" className="py-24 relative overflow-hidden bg-[#0F0F0F]">
      {/* Gold grid mesh background accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
            Our Elite Chauffeur Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Travel in High-End <span className="text-gold font-bold">Royal Comfort</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Every vehicle in our fleet is meticulously sanitized, premium-perfumed, heavily air-conditioned, and maintained to international standards.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET.map((vehicle: Vehicle) => (
            <div 
              key={vehicle.id} 
              className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Vehicle Image with Zoom Hover */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-zinc-950 border-b border-[#D4AF37]/15">
                <img 
                  src={vehicle.imageUrl} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Seating Capacity Tag */}
                <div className="absolute top-4 left-4 bg-black/90 text-[#D4AF37] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 backdrop-blur-md flex items-center gap-1.5 shadow-xl">
                  <Users className="w-3.5 h-3.5" />
                  <span>{vehicle.seatingCapacity}</span>
                </div>

                {/* Vehicle Type Ribbon */}
                <div className="absolute bottom-4 right-4 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded shadow-lg">
                  {vehicle.type}
                </div>
              </div>

              {/* Vehicle Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                    {vehicle.name}
                  </h3>
                  <p className="text-[#D4AF37] text-xs italic font-medium tracking-wide mb-4">
                    {vehicle.tagline}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    {vehicle.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block">Premium Specs Included</span>
                    {vehicle.features.slice(0, 3).map((feat, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rates & Action Button */}
                <div className="border-t border-[#D4AF37]/10 pt-5 mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-gray-500 block">Estimated Luxury Fare</span>
                      <span className="text-lg font-bold text-white">
                        {vehicle.perKmRate} <span className="text-xs text-gray-400 font-medium">/ km</span>
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-wider text-gray-500 block">Or Day Package</span>
                      <span className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded">
                        {vehicle.dayRate}
                      </span>
                    </div>
                  </div>

                  <button 
                    onClick={() => onSelectVehicle(vehicle.name)}
                    className="w-full flex items-center justify-center gap-2 py-3 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] hover:text-black hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#AA7C11] font-bold text-xs tracking-widest uppercase rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 active:scale-95 cursor-pointer"
                  >
                    Select & Book Vehicle
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Fleet;

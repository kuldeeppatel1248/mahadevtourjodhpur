import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Eye } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = ['All', 'Jodhpur', 'Heritage', 'Desert', 'Wedding', 'Udaipur', 'Sightseeing'];

  const filteredImages = activeTab === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#0B0B0B]">
      {/* Mesh grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
            Visual Rajasthan Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Our Royal <span className="text-gold font-bold">Tour Gallery</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Explore breathtaking captures from the Blue City's streets, gold desert camps, and royal events arranged by Mahadev Tour Jodhpur.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 mb-12 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === cat 
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#141414] text-gray-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid with Interactive Pop and Zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/5 group shadow-xl bg-zinc-950 transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image with zoom effect */}
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-[0.6]"
                loading="lazy"
              />

              {/* Gold gradient inner bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Floating detail tag showing category */}
              <span className="absolute top-4 right-4 bg-black/85 text-[#D4AF37] border border-[#D4AF37]/30 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                {img.category}
              </span>

              {/* Title & Overlay (visible on hover) */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-3 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                  <Eye className="w-4 h-4" />
                </div>
                
                <h4 className="text-white text-base font-bold tracking-wide leading-tight uppercase mb-1">
                  {img.title}
                </h4>
                <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">
                  Guided Sightseeing Circle
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;

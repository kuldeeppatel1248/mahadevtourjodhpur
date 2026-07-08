import React, { useState, useEffect } from 'react';
import { BUSINESS_NAME, CONTACT_INFO } from '../constants';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavClick: (targetId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About Us', id: 'about' },
    { label: 'Our Fleet', id: 'fleet' },
    { label: 'Services', id: 'services' },
    { label: 'Tour Packages', id: 'packages' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled || mobileMenuOpen 
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-gradient-to-b from-black/80 to-transparent py-6'
        }`}
      >
        {/* Top Mini Bar for Contact - Desktop only */}
        {!scrolled && !mobileMenuOpen && (
          <div className="hidden lg:block border-b border-[#D4AF37]/10 pb-3 mb-3 text-xs tracking-widest text-gray-400">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
                  Premium Travel Service in Rajasthan
                </span>
                <span className="hover:text-[#D4AF37] transition-colors">
                  📍 {CONTACT_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#D4AF37] transition-colors">
                  ✉️ {CONTACT_INFO.email}
                </a>
                <a 
                  href={CONTACT_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  {CONTACT_INFO.instagram}
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Animated Gold Logo with "M" and Trishul */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="flex items-center group relative z-50"
          >
            <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1F1F1F] to-[#0D0D0D] border border-[#D4AF37]/30 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:border-[#D4AF37]/80 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 mr-3">
              {/* Spinning gold background decoration */}
              <div className="absolute inset-0.5 rounded-full border border-dashed border-[#D4AF37]/20 group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />
              
              {/* Gold Trishul SVG */}
              <svg 
                className="w-7 h-7 filter drop-shadow-[0_2px_5px_rgba(212,175,55,0.5)] transform group-hover:scale-110 transition-transform duration-500" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="navGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F3E5AB" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#AA7C11" />
                  </linearGradient>
                </defs>
                {/* Trishul Path */}
                <path d="M50 15 L50 82" stroke="url(#navGold)" strokeWidth="4.5" strokeLinecap="round"/>
                <path d="M46 15 L50 4 L54 15 Z" fill="url(#navGold)" />
                <path d="M28 35 C28 58, 45 61, 50 61" stroke="url(#navGold)" strokeWidth="4" strokeLinecap="round"/>
                <path d="M26 35 L28 25 L30 35 Z" fill="url(#navGold)" />
                <path d="M72 35 C72 58, 55 61, 50 61" stroke="url(#navGold)" strokeWidth="4" strokeLinecap="round"/>
                <path d="M70 35 L72 25 L74 35 Z" fill="url(#navGold)" />
                {/* Damru center */}
                <path d="M43 66 L57 66 L43 72 L57 72 Z" fill="url(#navGold)" stroke="url(#navGold)" strokeWidth="1" />
                <circle cx="50" cy="85" r="3.5" fill="url(#navGold)" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D1] via-[#D4AF37] to-[#AA7C11] group-hover:brightness-125 transition-all duration-300">
                MAHADEV
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">
                TOUR JODHPUR
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }} 
                className="text-xs uppercase tracking-widest font-semibold text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Call & Book CTAs - Desktop */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href={`tel:${CONTACT_INFO.phoneNumbers[0]}`}
              className="flex items-center gap-2 px-3.5 py-1.5 border border-[#D4AF37]/30 rounded-full text-xs font-semibold tracking-wider text-gray-300 hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              {CONTACT_INFO.phoneNumbers[0]}
            </a>
            
            <button 
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-semibold text-xs tracking-widest uppercase rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="block lg:hidden text-gray-300 hover:text-[#D4AF37] focus:outline-none z-50 p-1.5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6.5 h-6.5" /> : <Menu className="w-6.5 h-6.5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0B0B0B]/98 z-40 flex flex-col justify-center px-8 transition-all duration-500 ease-in-out border-b border-[#D4AF37]/10 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col space-y-6 text-center max-w-sm mx-auto w-full">
          <div className="flex justify-center mb-4">
            {/* Centered logo on open mobile menu */}
            <div className="w-16 h-16 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-black/80">
              <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15 L50 82" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round"/>
                <path d="M46 15 L50 4 L54 15 Z" fill="#D4AF37" />
                <path d="M28 35 C28 58, 45 61, 50 61" stroke="#D4AF37" strokeWidth="4.5" strokeLinecap="round"/>
                <path d="M26 35 L28 25 L30 35 Z" fill="#D4AF37" />
                <path d="M72 35 C72 58, 55 61, 50 61" stroke="#D4AF37" strokeWidth="4.5" strokeLinecap="round"/>
                <path d="M70 35 L72 25 L74 35 Z" fill="#D4AF37" />
                <circle cx="50" cy="85" r="4.5" fill="#D4AF37" />
              </svg>
            </div>
          </div>

          <div className="text-[#D4AF37] text-sm tracking-widest uppercase font-semibold border-b border-[#D4AF37]/10 pb-4 mb-2">
            {BUSINESS_NAME}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }} 
                className="py-2.5 text-xs font-semibold tracking-wider uppercase text-gray-300 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg border border-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Quick Contacts on Mobile Menu */}
          <div className="border-t border-[#D4AF37]/10 pt-6 mt-4 flex flex-col gap-3">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">Instant Booking Hotlines</span>
            {CONTACT_INFO.phoneNumbers.map((phone, idx) => (
              <a 
                key={idx}
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-white hover:text-[#D4AF37] py-2 bg-[#D4AF37]/5 hover:bg-[#D4AF37]/10 border border-[#D4AF37]/10 rounded-lg transition-all"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

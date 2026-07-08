import React from 'react';
import { CONTACT_INFO, BUSINESS_NAME, TAGLINE } from '../constants';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavClick: (targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-gray-400 pt-20 pb-12 border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand & Trishul */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              {/* Gold Trishul SVG */}
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-black">
                <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 15 L50 82" stroke="#D4AF37" strokeWidth="5.5" strokeLinecap="round"/>
                  <path d="M46 15 L50 4 L54 15 Z" fill="#D4AF37" />
                  <path d="M28 35 C28 58, 45 61, 50 61" stroke="#D4AF37" strokeWidth="4.5" strokeLinecap="round"/>
                  <path d="M26 35 L28 25 L30 35 Z" fill="#D4AF37" />
                  <path d="M72 35 C72 58, 55 61, 50 61" stroke="#D4AF37" strokeWidth="4.5" strokeLinecap="round"/>
                  <path d="M70 35 L72 25 L74 35 Z" fill="#D4AF37" />
                  <circle cx="50" cy="85" r="4" fill="#D4AF37" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-[#AA7C11] tracking-wider">
                  MAHADEV
                </span>
                <span className="text-[9px] tracking-[0.3em] text-gray-500 font-bold">
                  TOUR JODHPUR
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 mb-6 max-w-xs">
              {TAGLINE}. Providing Jodhpur's premier chauffeured luxury transport. Experience the warmth of royal desert hospitality.
            </p>

            {/* Social handles */}
            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.instagramUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="Instagram Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                aria-label="Email Address"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2.5">
            <h4 className="font-bold text-white mb-6 text-xs uppercase tracking-widest border-l-2 border-[#D4AF37] pl-3">
              Explore Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); onNavClick('services'); }} className="hover:text-[#D4AF37] transition-colors">
                  Local Sightseeing
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); onNavClick('services'); }} className="hover:text-[#D4AF37] transition-colors">
                  Airport Transfers
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => { e.preventDefault(); onNavClick('packages'); }} className="hover:text-[#D4AF37] transition-colors">
                  Rajasthan Packages
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); onNavClick('services'); }} className="hover:text-[#D4AF37] transition-colors">
                  Wedding Transportation
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); onNavClick('services'); }} className="hover:text-[#D4AF37] transition-colors">
                  Corporate Contracts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 text-xs uppercase tracking-widest border-l-2 border-[#D4AF37] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onNavClick('about'); }} className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#fleet" onClick={(e) => { e.preventDefault(); onNavClick('fleet'); }} className="hover:text-[#D4AF37] transition-colors">
                  Our Chauffeur Fleet
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); onNavClick('gallery'); }} className="hover:text-[#D4AF37] transition-colors">
                  Tour Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => { e.preventDefault(); onNavClick('reviews'); }} className="hover:text-[#D4AF37] transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); onNavClick('faq'); }} className="hover:text-[#D4AF37] transition-colors">
                  FAQ Accordion
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & HQ */}
          <div className="lg:col-span-3.5">
            <h4 className="font-bold text-white mb-6 text-xs uppercase tracking-widest border-l-2 border-[#D4AF37] pl-3">
              Office HQ
            </h4>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {CONTACT_INFO.address}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {CONTACT_INFO.phoneNumbers.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone}`} className="hover:text-[#D4AF37] transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#D4AF37] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright bar with top trigger */}
        <div className="border-t border-[#D4AF37]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium">
          
          <div>
            <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All Rights Reserved.</p>
            <p className="text-[10px] text-zinc-600 mt-1 uppercase tracking-widest">Travel With Trust | Powered by Lord Mahadev Protection</p>
          </div>

          {/* Smooth Back to Top button */}
          <button 
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/20 hover:border-[#D4AF37] rounded-full text-xs text-gray-400 hover:text-[#D4AF37] transition-all bg-zinc-950 shadow-md focus:outline-none cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

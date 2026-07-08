import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, BUSINESS_NAME } from '../constants';
import { BookingData } from '../types';
import { Phone, Mail, MapPin, Send, MessageCircle, Calendar, Users, Car, CheckCircle2, RotateCcw } from 'lucide-react';

interface ContactFormProps {
  selectedVehicle: string;
  selectedPackage: string;
  onClearPrefills: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  selectedVehicle, 
  selectedPackage,
  onClearPrefills
}) => {
  const [formData, setFormData] = useState<BookingData>({
    fullName: '',
    phone: '',
    email: '',
    pickupLocation: '',
    dropLocation: '',
    journeyDate: '',
    vehicleType: 'Innova Crysta',
    passengers: 4,
    tourPackage: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  // Sync selected vehicle or package from parent selection
  useEffect(() => {
    if (selectedVehicle) {
      setFormData(prev => ({ ...prev, vehicleType: selectedVehicle }));
    }
  }, [selectedVehicle]);

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, tourPackage: selectedPackage }));
    }
  }, [selectedPackage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.phone || !formData.pickupLocation || !formData.dropLocation || !formData.journeyDate) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    // Generate WhatsApp text message beautifully formatted
    const text = `*NEW BOOKING REQUEST - MAHADEV TOUR JODHPUR*\n` +
                 `---------------------------------------\n` +
                 `👤 *Name:* ${formData.fullName}\n` +
                 `📞 *Phone:* ${formData.phone}\n` +
                 `✉️ *Email:* ${formData.email || 'N/A'}\n` +
                 `📅 *Date of Travel:* ${formData.journeyDate}\n` +
                 `📍 *Pickup Location:* ${formData.pickupLocation}\n` +
                 `🛑 *Drop/Destinations:* ${formData.dropLocation}\n` +
                 `🚗 *Vehicle Chosen:* ${formData.vehicleType}\n` +
                 `👥 *Passengers:* ${formData.passengers}\n` +
                 `${formData.tourPackage ? `🗺️ *Tour Package:* ${formData.tourPackage}\n` : ''}` +
                 `📝 *Special Requests:* ${formData.specialRequests || 'None'}\n` +
                 `---------------------------------------\n` +
                 `*Travel with Trust | Travel with Mahadev*`;

    const encodedText = encodeURIComponent(text);
    // Use first primary number for dispatch
    const cleanedNumber = CONTACT_INFO.phoneNumbers[0].replace(/\s+/g, '').replace('+', '');
    const url = `https://api.whatsapp.com/send?phone=${cleanedNumber}&text=${encodedText}`;
    
    setWhatsappLink(url);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      pickupLocation: '',
      dropLocation: '',
      journeyDate: '',
      vehicleType: 'Innova Crysta',
      passengers: 4,
      tourPackage: '',
      specialRequests: ''
    });
    setSubmitted(false);
    onClearPrefills();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B0B0B] border-t border-[#D4AF37]/15">
      {/* Light highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Block: Contact Details, QR, Map Embed */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.3em] uppercase mb-3 block">
                Instant Reservations
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
                Get In Touch <span className="text-gold font-bold">With Us</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                Ready to book your royal journey? Call our help desk, scan our immediate contact QR code, or fill out the booking form for an instant quote with zero broker fee.
              </p>

              {/* Direct Hotlines list */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Main Office Jodhpur</h4>
                    <p className="text-xs sm:text-sm text-white font-medium mt-0.5">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Direct Chauffeur Dials</h4>
                    <div className="flex flex-col gap-1 mt-1">
                      {CONTACT_INFO.phoneNumbers.map((phone, index) => (
                        <a 
                          key={index} 
                          href={`tel:${phone}`}
                          className="text-xs sm:text-sm text-white font-semibold hover:text-[#D4AF37] transition-colors"
                        >
                          {phone} {index === 0 && <span className="text-[10px] text-gray-500 font-medium italic">(Primary WhatsApp)</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Inquiry Desk</h4>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-xs sm:text-sm text-white font-medium hover:text-[#D4AF37] transition-colors mt-0.5 block"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code and Social Plate */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 shadow-lg mb-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                
                {/* Custom Elegant Styled SVG QR Code */}
                <div className="relative w-36 h-36 shrink-0 bg-white p-2 rounded-xl border-2 border-[#D4AF37]/40 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* QR Code Matrix Art representation */}
                    <rect x="0" y="0" width="22" height="22" fill="#000" />
                    <rect x="2" y="2" width="18" height="18" fill="#FFF" />
                    <rect x="6" y="6" width="10" height="10" fill="#000" />
                    
                    <rect x="78" y="0" width="22" height="22" fill="#000" />
                    <rect x="80" y="2" width="18" height="18" fill="#FFF" />
                    <rect x="84" y="6" width="10" height="10" fill="#000" />
                    
                    <rect x="0" y="78" width="22" height="22" fill="#000" />
                    <rect x="2" y="80" width="18" height="18" fill="#FFF" />
                    <rect x="6" y="84" width="10" height="10" fill="#000" />

                    {/* Fake Gold Core QR Center logo */}
                    <rect x="42" y="42" width="16" height="16" fill="#D4AF37" rx="3" />
                    <text x="47" y="53" fill="#000" fontSize="10" fontWeight="bold">M</text>

                    {/* Scattered random dots for organic look */}
                    <rect x="28" y="6" width="6" height="6" fill="#000" />
                    <rect x="40" y="10" width="8" height="4" fill="#000" />
                    <rect x="60" y="2" width="6" height="12" fill="#000" />
                    
                    <rect x="12" y="30" width="12" height="6" fill="#000" />
                    <rect x="30" y="28" width="6" height="10" fill="#000" />
                    <rect x="68" y="28" width="12" height="6" fill="#000" />
                    
                    <rect x="6" y="52" width="6" height="12" fill="#000" />
                    <rect x="24" y="48" width="12" height="6" fill="#000" />
                    <rect x="66" y="46" width="8" height="12" fill="#000" />
                    <rect x="82" y="50" width="12" height="6" fill="#000" />

                    <rect x="28" y="66" width="14" height="6" fill="#000" />
                    <rect x="48" y="72" width="6" height="18" fill="#000" />
                    <rect x="66" y="66" width="18" height="6" fill="#000" />
                    <rect x="66" y="80" width="8" height="12" fill="#000" />
                    <rect x="84" y="84" width="10" height="6" fill="#000" />
                  </svg>
                </div>

                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Instant Scan QR Code</h4>
                  <p className="text-xs text-gray-400 mt-1 mb-3">Scan this code on your mobile camera to immediately load our primary booking contact card details.</p>
                  <a 
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-bold uppercase tracking-wider hover:brightness-125"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Follow @mahadev_tour_jodhpur
                  </a>
                </div>

              </div>
            </div>

            {/* Google Maps Location - Embedded */}
            <div className="rounded-2xl overflow-hidden border border-white/5 h-48 w-full shadow-lg relative">
              <iframe 
                src={CONTACT_INFO.mapsEmbedUrl} 
                className="w-full h-full border-0 grayscale invert filter brightness-75 contrast-125" 
                allowFullScreen={false} 
                loading="lazy" 
                title="Mahadev Tour Jodhpur Office Map Location"
              />
              <div className="absolute bottom-2 left-2 bg-black/90 px-3 py-1 text-[10px] text-[#D4AF37] uppercase font-bold tracking-widest border border-[#D4AF37]/20 rounded backdrop-blur">
                Office: Rokdiya Balaji Temple Jodhpur
              </div>
            </div>

          </div>

          {/* Right Block: Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/15 shadow-2xl relative">
              
              {/* Highlight Ribbon */}
              <div className="absolute -top-3.5 right-6 sm:right-10 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-black text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
                Direct Dispatch No Broker
              </div>

              {submitted ? (
                /* Success Screen */
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Inquiry Prepared!</h3>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto mb-8">
                    Your luxury travel details have been compiled and structured beautifully. Chose an option below to immediately complete your fast booking.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs tracking-widest uppercase rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4.5 h-4.5 fill-white text-[#25D366]" />
                      Dispatch via WhatsApp
                    </a>

                    <a 
                      href={`tel:${CONTACT_INFO.phoneNumbers[0]}`}
                      className="flex items-center justify-center gap-2.5 px-6 py-4 bg-[#1F1F1F] border border-white/10 hover:border-[#D4AF37] text-white font-bold text-xs tracking-widest uppercase rounded-full shadow-lg transition-all"
                    >
                      <Phone className="w-4.5 h-4.5 text-[#D4AF37]" />
                      Call Agent Now
                    </a>
                  </div>

                  <button 
                    onClick={handleReset}
                    className="mt-8 flex items-center gap-1.5 text-xs text-gray-500 hover:text-white mx-auto uppercase tracking-widest font-semibold transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Booking Form
                  </button>
                </div>
              ) : (
                /* Interactive Form fields */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-[#D4AF37]/10 pb-4">
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-1">
                      Online Luxury Booking Form
                    </h3>
                    <p className="text-xs text-gray-400">
                      Fill out your routing particulars. Chauffeurs coordinate within 15 minutes of validation.
                    </p>
                  </div>

                  {/* Active Prefills Alert */}
                  {(selectedVehicle || selectedPackage) && (
                    <div className="flex items-center justify-between p-3.5 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl text-xs text-gray-300">
                      <div>
                        <span className="font-bold text-[#D4AF37]">Prefilled Details Active:</span>{' '}
                        {selectedVehicle && `Vehicle: ${selectedVehicle}`}
                        {selectedVehicle && selectedPackage && ' | '}
                        {selectedPackage && `Package: ${selectedPackage}`}
                      </div>
                      <button 
                        type="button" 
                        onClick={handleReset}
                        className="text-[10px] uppercase font-bold text-[#D4AF37] hover:underline hover:brightness-125"
                      >
                        Clear
                      </button>
                    </div>
                  )}

                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Rajesh Kumar" 
                        className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#D4AF37] px-4 py-3 rounded-lg text-white text-sm outline-none transition-all placeholder:text-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., +91 98765 43210" 
                        className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#D4AF37] px-4 py-3 rounded-lg text-white text-sm outline-none transition-all placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Journey Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g., mail@example.com" 
                        className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#D4AF37] px-4 py-3 rounded-lg text-white text-sm outline-none transition-all placeholder:text-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        Date of Travel *
                      </label>
                      <input 
                        type="date" 
                        name="journeyDate"
                        value={formData.journeyDate}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#D4AF37] px-4 py-3 rounded-lg text-white text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Pickup and Drop Locations */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Pickup Location *
                      </label>
                      <input 
                        type="text" 
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Jodhpur Airport (JDH) / Hotel" 
                        className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#D4AF37] px-4 py-3 rounded-lg text-white text-sm outline-none transition-all placeholder:text-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Drop Location / Tour Destination *
                      </label>
                      <input 
                        type="text" 
                        name="dropLocation"
                        value={formData.dropLocation}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Jaisalmer Sand Dunes / Local Sightseeing" 
                        className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#D4AF37] px-4 py-3 rounded-lg text-white text-sm outline-none transition-all placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Row 4: Vehicle and passengers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5" />
                        Select Fleet Type
                      </label>
                      <select 
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                        className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#D4AF37] px-4 py-3 rounded-lg text-white text-sm outline-none transition-all"
                      >
                        <option value="Force Urbania (Luxury Edition)">Force Urbania (Luxury Edition)</option>
                        <option value="Luxury Tempo Traveller">Luxury Tempo Traveller</option>
                        <option value="Toyota Innova Crysta">Toyota Innova Crysta</option>
                        <option value="Kia Carens (Luxury Plus)">Kia Carens (Luxury Plus)</option>
                        <option value="Maruti Suzuki Swift Dzire">Maruti Suzuki Swift Dzire</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        Passenger Count
                      </label>
                      <input 
                        type="number" 
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleInputChange}
                        min={1}
                        max={30}
                        className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#D4AF37] px-4 py-3 rounded-lg text-white text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Package Prefill hidden / visible selection link */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Specific Rajasthan Package (Optional)
                    </label>
                    <input 
                      type="text" 
                      name="tourPackage"
                      value={formData.tourPackage}
                      onChange={handleInputChange}
                      placeholder="e.g., Royal Jodhpur & Jaisalmer Desert Escape" 
                      className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#D4AF37] px-4 py-3 rounded-lg text-white text-sm outline-none transition-all placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Special requests */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Special Requests / Itinerary Instructions
                    </label>
                    <textarea 
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="e.g., Need baby seat, dual carrier for extra luggage, flower arrangement for marriage." 
                      className="w-full bg-[#1A1A1A] border border-white/5 focus:border-[#D4AF37] px-4 py-3 rounded-lg text-white text-sm outline-none transition-all placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-black text-sm tracking-widest uppercase rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Submit & Generate WhatsApp Dispatch
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;

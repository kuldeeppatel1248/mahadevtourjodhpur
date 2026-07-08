import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 90; // account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectVehicle = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    scrollToSection('contact');
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    scrollToSection('contact');
  };

  const handleClearPrefills = () => {
    setSelectedVehicle('');
    setSelectedPackage('');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Premium Sticky Navigation Bar */}
      <Navbar onNavClick={scrollToSection} />
      
      <main className="relative">
        {/* Hero Banner with Force Urbania showcase */}
        <Hero onBookClick={() => scrollToSection('contact')} />
        
        {/* About Jodhpur & Mahadev Tours */}
        <About />
        
        {/* Vehicle Fleet Showcase (Force Urbania, Tempo Traveller, Innova Crysta, Kia Carens, Dzire) */}
        <Fleet onSelectVehicle={handleSelectVehicle} />
        
        {/* Core Bespoke Services Grid */}
        <Services onServiceSelect={() => scrollToSection('contact')} />
        
        {/* Curated Rajasthan Tour Packages */}
        <Packages onSelectPackage={handleSelectPackage} />
        
        {/* Core Trust Factors & Pillars */}
        <WhyChooseUs />
        
        {/* Filterable Rajasthan Visual Portfolio */}
        <Gallery />
        
        {/* Guest Reviews & Testimonials */}
        <Reviews />
        
        {/* FAQ Accordion */}
        <FAQ />
        
        {/* Interactive Booking and Contact Form with Google Maps */}
        <ContactForm 
          selectedVehicle={selectedVehicle}
          selectedPackage={selectedPackage}
          onClearPrefills={handleClearPrefills}
        />
      </main>

      {/* Royal Black and Gold Footer */}
      <Footer onNavClick={scrollToSection} />
      
      {/* Floating AI Tour Guide Assistant with click suggestions */}
      <Assistant />
    </div>
  );
}

export default App;

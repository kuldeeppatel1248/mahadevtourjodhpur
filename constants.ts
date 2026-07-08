import { Vehicle, ServiceItem, TourPackage, Review, FAQItem } from './types';

export const BUSINESS_NAME = 'Mahadev Tour Jodhpur';
export const TAGLINE = 'Travel With Trust | Travel With Mahadev';

export const CONTACT_INFO = {
  address: 'Rokdiya Balaji, Pratap Nagar, Jodhpur, Rajasthan 342001',
  phoneNumbers: [
    '+91 97992 06662',
    '+91 82397 40582',
    '+91 80033 43624'
  ],
  email: 'dharamasaran62@gmail.com',
  instagram: '@mahadev_tour_jodhpur',
  instagramUrl: 'https://instagram.com/mahadev_tour_jodhpur',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3577.818442871131!2d72.9818818753232!3d26.267503777038927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c353b3b64c1%3A0xe6bf4c08e5e8e88e!2sRokadiya%20Balaji%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};

export const FLEET: Vehicle[] = [
  {
    id: 'force-urbania',
    name: 'Force Urbania (Luxury Edition)',
    tagline: 'The Ultimate Royal Travel Experience',
    description: 'Experience private-jet comfort on Indian roads. Equipped with premium reclining leather seats, individual AC vents, customized ambient LED lighting, wide panoramic windows, and ample luggage space.',
    seatingCapacity: '10 to 17 Seats',
    type: 'Luxury Coach',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000', // Luxury van
    features: [
      'Ultra-Premium Reclining Seats',
      'Individual USB Charging Ports',
      'Panoramic Sun-Safe Glass Windows',
      'State-of-the-art Infotainment Screen',
      'Advanced Air Suspension for Smooth Ride'
    ],
    perKmRate: '₹24 - ₹28',
    dayRate: '₹6,500/day'
  },
  {
    id: 'tempo-traveller',
    name: 'Luxury Tempo Traveller',
    tagline: 'Perfect for Grand Group Journeys',
    description: 'Highly custom-built for large families, wedding groups, and corporate squads. Excellent head room, heavy air conditioning, pushback premium seating, and professional state-tour capability.',
    seatingCapacity: '9, 12, 17, 26 Seats',
    type: 'Luxury Coach',
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000', // Premium group traveller van
    features: [
      'Heavy Duty AC with individual controls',
      'Luxurious pushback seating',
      'High-definition LCD TV & Music System',
      'Spacious overhead and rear boot space',
      'Polite, uniform-clad expert highway drivers'
    ],
    perKmRate: '₹18 - ₹24',
    dayRate: '₹5,000/day'
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    tagline: 'Premium Executive Comfort',
    description: 'The absolute benchmark of reliable luxury in India. Smooth ride, high structural safety, excellent luxury aesthetics, and perfect quiet cabin insulation for corporate travel or family getaways.',
    seatingCapacity: '6 to 7 Seats',
    type: 'Premium MUV',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000', // Luxury SUV
    features: [
      'Captain Seats with central armrests',
      'Tri-Zone Automatic Climate Control',
      'Best-in-class NVH (noise/vibration) insulation',
      'Dual Front & Side Airbags for absolute safety',
      'Large spacious rear boot for heavy bags'
    ],
    perKmRate: '₹15 - ₹17',
    dayRate: '₹4,000/day'
  },
  {
    id: 'kia-carens',
    name: 'Kia Carens (Luxury Plus)',
    tagline: 'Modern, Tech-Forward Travel',
    description: 'The new age of elegant family touring. Blends high safety standards with premium tech like sky-view sunroofs, air purifiers, and superb interior leather touchpoints.',
    seatingCapacity: '6 to 7 Seats',
    type: 'Premium MUV',
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000', // Modern crossover/MPV
    features: [
      'Electric One-Touch Tumble Seats',
      'Bose Premium Surround Sound system',
      'Smart Pure Air Purifier built-in',
      'Ambient mood lighting (64 colors)',
      '6 Airbags & stability controls standard'
    ],
    perKmRate: '₹14 - ₹16',
    dayRate: '₹3,500/day'
  },
  {
    id: 'swift-dzire',
    name: 'Maruti Suzuki Swift Dzire',
    tagline: 'Economical, Elegant & Fast Tourer',
    description: 'Ideal for small families, couples, business travelers, airport transits, and quick local sightseeing. Outstanding fuel efficiency translated to highly competitive tour rates without compromising on AC comfort.',
    seatingCapacity: '4 Seats',
    type: 'Sedan',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000', // Sedan
    features: [
      'Compact sedan with comfortable rear legroom',
      'Powerful cooling automatic air conditioning',
      'Ample trunk space for up to 3 medium suitcases',
      'Bluetooth enabled audio for your personal playlist',
      'Fast-tag enabled toll transit for non-stop rides'
    ],
    perKmRate: '₹11 - ₹13',
    dayRate: '₹2,500/day'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'airport-transit',
    title: 'Airport Pickup & Drop',
    description: 'Timely, comfortable arrivals and departures. Our chauffeur will meet you with a personalized name-board at Jodhpur Airport (JDH).',
    iconName: 'PlaneTakeoff',
    details: ['24/7 flight-tracking to adjust to delays', 'Porters service coordination', 'Zero waiting time post-terminal exit']
  },
  {
    id: 'local-sightseeing',
    title: 'Local Jodhpur Sightseeing',
    description: 'Explore the Blue City in absolute royalty. Curated daily circuits encompassing Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada, Clock Tower, and Mandore Gardens.',
    iconName: 'Map',
    details: ['Flexible stop timings', 'Insider suggestions for local cuisine & shopping', 'Experienced drivers acting as certified guides']
  },
  {
    id: 'rajasthan-tours',
    title: 'Rajasthan Tour Packages',
    description: 'A grand expedition across the Land of Kings. Seamless multi-day travel itineraries encompassing Jaipur, Udaipur, Jaisalmer, Pushkar, Mount Abu, and Bikaner.',
    iconName: 'Compass',
    details: ['Customizable route maps', 'Best luxury heritage hotel connections', 'Desert camp & camel safari coordination']
  },
  {
    id: 'wedding-transport',
    title: 'Wedding Luxury Transport',
    description: 'Ensure a grand Rajasthani royal wedding. Coordinated premium fleets of Force Urbania, Innova Crysta, and luxury cars for barat, guest pick-ups, and luxury transits.',
    iconName: 'Sparkles',
    details: ['Uniformed drivers for grand event look', 'Flower decoration coordination', 'Dedicated logistical coordinator for big events']
  },
  {
    id: 'corporate-tours',
    title: 'Corporate Tours & Events',
    description: 'Premium business mobility. Spotless premium vehicles with high Wi-Fi accessibility, laptop charger ports, and absolute corporate standard punctuality.',
    iconName: 'Briefcase',
    details: ['Professional invoice with GST billing', 'Bulk-booking discounts', 'Quiet-cabin guarantees for on-the-road business meetings']
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'package-jodhpur-jaisalmer',
    title: 'Royal Jodhpur & Jaisalmer Desert Escape',
    duration: '4 Days & 3 Nights',
    destinations: ['Jodhpur', 'Mehrangarh', 'Jaisalmer', 'Sam Sand Dunes'],
    imageUrl: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1000', // Golden dunes of Jaisalmer
    priceEstimate: '₹14,999 onwards',
    description: 'A spectacular journey that captures the true essence of Western Rajasthan. Admire the Blue City’s monolithic fort and drift into the mystical sand dunes of Thar for a night under the stars.',
    highlights: [
      'Guided tour of Mehrangarh Fort & Jaswant Thada in Jodhpur',
      'Exclusive high-octane 4x4 Jeep Dune Bashing in Jaisalmer',
      'Luxury desert camp stay with Rajasthani folk dance & traditional thali dinner',
      'Sunset camel back ride over pristine Sam sand dunes'
    ]
  },
  {
    id: 'package-lake-palace',
    title: 'Mewar Luxury & Lake City Extravaganza',
    duration: '5 Days & 4 Nights',
    destinations: ['Udaipur', 'Lake Pichola', 'Mount Abu', 'Ranakpur Temple'],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000', // Gorgeous lake city palace
    priceEstimate: '₹18,500 onwards',
    description: 'Immerse yourself in the romantic, lush green lakes and cooling hill ranges of Rajasthan. Witness the architectural wonders of Mewar royalty and relax at Rajasthan’s only hill station, Mount Abu.',
    highlights: [
      'Royal cruise boat ride at sunset on Lake Pichola, Udaipur',
      'Scenic drive through the gorgeous Aravalli mountain ranges',
      'Visit to the world-famous carved marble Ranakpur Jain Temple',
      'Boating and beautiful sunset viewing at Nakki Lake in Mount Abu'
    ]
  },
  {
    id: 'package-grand-rajasthan',
    title: 'Grand Heritage Triangle Tour',
    duration: '7 Days & 6 Nights',
    destinations: ['Jaipur', 'Pushkar', 'Jodhpur', 'Udaipur'],
    imageUrl: 'https://images.unsplash.com/photo-1477584305359-0d540f35da61?auto=format&fit=crop&q=80&w=1000', // Jaipur Hawa Mahal / Fort
    priceEstimate: '₹26,999 onwards',
    description: 'The ultimate royal loop. Ideal for international tourists or first-time explorers seeking a comprehensive, luxurious look at India’s historic forts, palaces, local bazaars, and spiritual centers.',
    highlights: [
      'Amber Fort elephant transit or Jeep ride in Jaipur',
      'Visit to the sacred Brahma Temple and holy lake in Pushkar',
      'Blue City blue houses tour & vintage car collection view in Jodhpur',
      'Grand City Palace and Sajjangarh Monsoon Palace tours in Udaipur'
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Anjali Sharma',
    location: 'Mumbai, India',
    rating: 5,
    date: 'June 2026',
    comment: 'We booked the Force Urbania for a family wedding in Jodhpur. The vehicle was exceptionally clean, matching international standards. The leather reclining chairs and ambient lighting felt super premium. The driver was extremely polite and knew the best routes.'
  },
  {
    id: 'r2',
    name: 'David K.',
    location: 'Munich, Germany',
    rating: 5,
    date: 'May 2026',
    comment: 'Mahadev Tour Jodhpur organized our Jodhpur-Jaisalmer trip. The Innova Crysta was spotless. Driver Dharam spoke good English and guided us through local Rajasthani restaurants. Outstanding punctuality and superb glassmorphism booking assistance.'
  },
  {
    id: 'r3',
    name: 'Rajesh Patel',
    location: 'Ahmedabad, India',
    rating: 5,
    date: 'July 2026',
    comment: 'Absolute trust! Travelled with Mahadev for corporate group touring. Their pricing was completely direct and transparent—no hidden charges. The Tempo Traveller was fully loaded with an excellent AC system, high-tech screen, and USB charging. Excellent service.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I book a vehicle with Mahadev Tour Jodhpur?',
    answer: 'You can instantly book by filling out our Online Booking Form, clicking our Floating WhatsApp button to chat directly, or calling our hotlines (+91 97992 06662). No advance stress—we will coordinate immediately.'
  },
  {
    question: 'What is included in your per kilometer or day rates?',
    answer: 'Our luxury rates include clean professional vehicle charges, experienced state-licensed driver fees, and primary fuel. State taxes, toll fees, and parking charges are charged directly at actuals or can be bundled based on your custom itinerary.'
  },
  {
    question: 'Are your drivers trained for tourist locations in Rajasthan?',
    answer: 'Absolutely. All our drivers have 8+ years of professional experience across Rajasthani terrain. They are highly polite, strictly uniform-clad, and act as incredible local guides pointing out authentic photo-spots and heritage food joints.'
  },
  {
    question: 'Can I customize my Rajasthan tour packages?',
    answer: 'Yes! All tour packages listed are fully customizable. We can modify duration, destinations, choice of fleet, and hotel bookings to craft your perfect dream tour of Rajasthan.'
  }
];

export const GALLERY_IMAGES = [
  {
    title: 'Mehrangarh Fort Skyline',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800',
    category: 'Jodhpur'
  },
  {
    title: 'Umaid Bhawan Palace Grounds',
    imageUrl: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&q=80&w=800',
    category: 'Heritage'
  },
  {
    title: 'Sam Sand Dunes Camping',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    category: 'Desert'
  },
  {
    title: 'Udaipur Lake Palace Night View',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    category: 'Udaipur'
  },
  {
    title: 'Scenic Rajasthan Mountain Highs',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800',
    category: 'Sightseeing'
  },
  {
    title: 'Royal Indian Wedding Chariot',
    imageUrl: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800',
    category: 'Wedding'
  }
];

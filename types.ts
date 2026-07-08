export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  description: string;
  seatingCapacity: string;
  type: 'Luxury Coach' | 'Premium MUV' | 'Sedan';
  imageUrl: string;
  features: string[];
  perKmRate?: string;
  dayRate?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Map to Lucide icons
  details: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  destinations: string[];
  imageUrl: string;
  priceEstimate: string;
  description: string;
  highlights: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BookingData {
  fullName: string;
  phone: string;
  email: string;
  pickupLocation: string;
  dropLocation: string;
  journeyDate: string;
  vehicleType: string;
  passengers: number;
  tourPackage?: string;
  specialRequests?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

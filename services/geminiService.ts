/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { FLEET, SERVICES, TOUR_PACKAGES, CONTACT_INFO } from '../constants';

const getSystemInstruction = () => {
  const fleetContext = FLEET.map(v => 
    `- ${v.name} (${v.seatingCapacity}): ${v.description}. Features: ${v.features.join(', ')}. Est Rates: ${v.perKmRate}/km or ${v.dayRate}`
  ).join('\n');

  const tourContext = TOUR_PACKAGES.map(p => 
    `- ${p.title} (${p.duration}): destinations: ${p.destinations.join(' -> ')}. Price: ${p.priceEstimate}. Description: ${p.description}`
  ).join('\n');

  return `You are the Royal AI Travel Concierge for "Mahadev Tour Jodhpur", a premium luxury travel company based in Jodhpur, Rajasthan.
  Your tone is warm, polite, incredibly hospitable (inspired by "Padharo Mhare Desh" - Welcome to our land), helpful, and professional. 
  
  Our Tagline: "Travel With Trust | Travel With Mahadev"
  Our Contact Details:
  - Office Address: ${CONTACT_INFO.address}
  - Phone Numbers: ${CONTACT_INFO.phoneNumbers.join(', ')}
  - Email: ${CONTACT_INFO.email}
  - Instagram: ${CONTACT_INFO.instagram}

  Our Fleet:
  ${fleetContext}

  Our Curated Rajasthan Tour Packages:
  ${tourContext}

  Guide rules:
  1. Welcome tourists to the royal land of Rajasthan.
  2. Answer queries regarding sightseeing spots in Jodhpur (Mehrangarh, Umaid Bhawan, Jaswant Thada, Mandore Gardens), customized Rajasthan itineraries, fleet seating capacity, per km rates, or hotel bookings.
  3. Encourage them to book using the online booking form or directly get in touch via click-to-call or WhatsApp.
  4. Keep responses elegant, structured with bold headings or bullet points where helpful, but concise enough (usually under 4 sentences) for a mobile chat interface.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    // Robustly attempt to get the API key, handling ReferenceError if process is not defined
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "Pranam! I am your Mahadev Travel Assistant. (Please configure your GEMINI_API_KEY to start a live interactive AI chat, or contact us directly at +91 97992 06662!)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Pranam! I am having a slight issue reaching our travel servers right now. Please feel free to call us directly on +91 97992 06662 for instant luxury bookings!";
  }
};
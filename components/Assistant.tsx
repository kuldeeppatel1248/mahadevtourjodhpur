import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { Send, X, MessageSquare, Sparkles, HelpCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      id: 'm1', 
      role: 'model', 
      text: 'Pranam! Welcome to the royal land of Rajasthan. 🚩 I am your Mahadev Travel Assistant. Ask me anything about our premium fleet (like Force Urbania or Innova Crysta), tour prices, curated itineraries, or Jodhpur sightseeing!', 
      timestamp: new Date().toLocaleTimeString() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestionChips = [
    'Tell me about Force Urbania',
    '3-Day Jodhpur & Jaisalmer Route',
    'Are there hidden charges?',
    'Local Jodhpur Sightseeing spots'
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = { 
      id: `u-${Date.now()}`, 
      role: 'user', 
      text: text, 
      timestamp: new Date().toLocaleTimeString() 
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { 
        id: `ai-${Date.now()}`, 
        role: 'model', 
        text: responseText, 
        timestamp: new Date().toLocaleTimeString() 
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      // Error handled in service
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-[#0D0D0D] rounded-2xl shadow-[0_20px_50px_rgba(212,175,55,0.15)] w-[90vw] sm:w-[400px] h-[550px] mb-4 flex flex-col overflow-hidden border border-[#D4AF37]/30 animate-[slide-up-fade_0.4s_ease-out]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#141414] to-[#0A0A0A] p-4 border-b border-[#D4AF37]/20 flex justify-between items-center">
            <div className="flex items-center gap-3.5">
              <div className="relative w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-black">
                <div className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/10 animate-spin" />
                <Sparkles className="w-4.5 h-4.5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4AF37] text-sm uppercase tracking-wider block">
                  Mahadev AI Assistant
                </span>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">
                  Royal Rajasthan Guide
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-[#D4AF37] transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-[#0B0B0B] no-scrollbar" ref={scrollRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] px-4.5 py-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-lg ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-black font-semibold' 
                      : 'bg-[#141414] border border-[#D4AF37]/15 text-gray-200'
                  }`}
                >
                  {/* Convert newlines to breaks for structured answers */}
                  {msg.text.split('\n').map((paragraph, idx) => (
                    <p key={idx} className={idx > 0 ? 'mt-2' : ''}>
                      {paragraph}
                    </p>
                  ))}
                  <span className={`block text-[8px] mt-2 text-right ${msg.role === 'user' ? 'text-black/50' : 'text-gray-600'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-[#141414] border border-[#D4AF37]/10 rounded-2xl px-5 py-3.5 flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-4 py-2 bg-black border-t border-[#D4AF37]/10 overflow-x-auto whitespace-nowrap no-scrollbar flex gap-2">
            {suggestionChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                disabled={isThinking}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141414] border border-white/5 hover:border-[#D4AF37]/30 text-[10px] font-bold text-gray-400 hover:text-white transition-all whitespace-nowrap cursor-pointer disabled:opacity-50"
              >
                <HelpCircle className="w-3 h-3 text-[#D4AF37]" />
                {chip}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#050505] border-t border-[#D4AF37]/15">
            <div className="flex gap-2.5 relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask our royal travel expert..." 
                className="flex-1 bg-[#141414] border border-white/5 focus:border-[#D4AF37] px-4 py-3 rounded-xl text-xs sm:text-sm outline-none transition-all placeholder:text-zinc-600 text-white"
                disabled={isThinking}
              />
              <button 
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isThinking}
                className="bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black w-11 h-11 flex items-center justify-center rounded-xl hover:brightness-110 transition-all disabled:opacity-50 cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Gold Trishul Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-gradient-to-br from-zinc-900 to-black border border-[#D4AF37]/40 text-[#D4AF37] w-14 h-14 flex items-center justify-center rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 z-50 cursor-pointer"
        aria-label="Mahadev AI Concierge Chatbot"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#D4AF37] border-2 border-black flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping" />
            </span>
          </div>
        )}
      </button>

      {/* Floating Phone and WhatsApp Direct Anchors - stacked on left/right side */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-3">
          {/* Quick Call */}
          <a
            href={`tel:${CONTACT_INFO.phoneNumbers[0]}`}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1F1F1F] to-[#0A0A0A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-xl hover:scale-110 active:scale-95 transition-transform"
            title="Call Support Directly"
          >
            <Phone className="w-5 h-5" />
          </a>
          
          {/* WhatsApp Direct Chat */}
          <a
            href={`https://api.whatsapp.com/send?phone=${CONTACT_INFO.phoneNumbers[0].replace(/\s+/g, '').replace('+', '')}&text=Pranam%2C%20I%20want%20to%20book%20a%20luxury%20tour%20package%20with%20Mahadev%20Tour%20Jodhpur.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-transform"
            title="Chat On WhatsApp"
          >
            <MessageSquare className="w-5.5 h-5.5 fill-white text-[#25D366]" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Assistant;

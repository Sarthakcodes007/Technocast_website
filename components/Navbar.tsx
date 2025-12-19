'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f172a]/95 backdrop-blur-md border-b border-blue-500/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TC</span>
            </div>
            <span className="text-xl font-bold text-white">TechnoCast</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-blue-200 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('approach')}
              className="text-blue-200 hover:text-white transition-colors"
            >
              Approach
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-blue-200 hover:text-white transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection('enquiry')}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-semibold"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}


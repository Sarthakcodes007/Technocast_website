'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    // Load Three.js and Vanta.js dynamically
    const loadVanta = async () => {
      if (typeof window !== 'undefined' && !window.VANTA) {
        // Load Three.js
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        threeScript.async = true;
        document.head.appendChild(threeScript);

        // Load Vanta.js NET effect from local file
        const vantaScript = document.createElement('script');
        vantaScript.src = '/vanta.net.min.js';
        vantaScript.async = true;
        document.head.appendChild(vantaScript);

        // Wait for scripts to load
        await new Promise((resolve) => {
          const checkVanta = () => {
            if (window.THREE && window.VANTA) {
              resolve(true);
            } else {
              setTimeout(checkVanta, 100);
            }
          };
          checkVanta();
        });
      }

      // Initialize Vanta effect
      if (window.VANTA && vantaRef.current) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xffffff, // White color for blue and white theme
          backgroundColor: 0x0f172a, // Blue background matching site theme
          points: 12.00,
          maxDistance: 25.00,
          spacing: 18.00,
          showDots: true,
        });
      }
    };

    loadVanta();

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Vanta.js animated background */}
      <div ref={vantaRef} className="absolute inset-0 w-full h-full"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-white text-sm font-medium">
            Multi-Agentic Technology Forecasting Platform
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">TechnoCast</span>
          <br />
          <span className="text-white">Intelligence in Minutes,</span>
          <br />
          <span className="text-white">Not Months</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Revolutionize technology forecasting with AI-powered multi-agentic intelligence. 
          Transform weeks of research into instant, actionable insights.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-900/60 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-white mb-2">90%+</div>
            <div className="text-blue-200">Time Reduction</div>
          </div>
          <div className="bg-blue-900/60 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200">Automated Monitoring</div>
          </div>
          <div className="bg-blue-900/60 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-white mb-2">50%+</div>
            <div className="text-blue-200">Cost Reduction</div>
          </div>
        </div>
      </div>
    </section>
  );
}


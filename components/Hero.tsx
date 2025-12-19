'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  // Initialize Vanta when both scripts are ready
  useEffect(() => {
    if (!threeLoaded || !vantaLoaded || !vantaRef.current) return;

    const initializeVanta = () => {
      if (!vantaRef.current || !window.VANTA || !window.THREE) {
        console.warn('Vanta.js or Three.js not available');
        return;
      }

      try {
        // Destroy existing instance if any
        if (vantaEffect.current) {
          try {
            vantaEffect.current.destroy();
          } catch (e) {
            // Ignore destroy errors
          }
        }

        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xffffff,
          backgroundColor: 0x0f172a,
          points: 12.00,
          maxDistance: 25.00,
          spacing: 18.00,
          showDots: true,
        });
      } catch (error) {
        console.error('Error initializing Vanta.js:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initializeVanta();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.error('Error destroying Vanta effect:', error);
        }
        vantaEffect.current = null;
      }
    };
  }, [threeLoaded, vantaLoaded]);

  return (
    <>
      {/* Load Three.js */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          setThreeLoaded(true);
        }}
        onError={(e) => {
          console.error('Failed to load Three.js:', e);
        }}
      />
      
      {/* Load Vanta.js */}
      <Script
        src="/vanta.net.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          setVantaLoaded(true);
        }}
        onError={(e) => {
          console.error('Failed to load Vanta.js:', e);
        }}
      />

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
    </>
  );
}


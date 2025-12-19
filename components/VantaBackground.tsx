'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

interface VantaBackgroundProps {
  children: React.ReactNode;
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
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

        // Load Vanta.js NET effect
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
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
          color: 0xffffff, // White color for black and white theme
          backgroundColor: 0x0a0a0a, // Dark background
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
    <div ref={vantaRef} className="absolute inset-0 w-full h-full">
      {children}
    </div>
  );
}


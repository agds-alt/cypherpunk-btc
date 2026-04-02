"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    // Fade in animation
    setTimeout(() => setIsVisible(true), 100);

    // Pulsing glow effect
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    // Fade out before navigation
    setIsVisible(false);
    setTimeout(() => {
      router.push('/home');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Bitcoin Symbol with Glow */}
        <div className="mb-8 relative">
          <div
            className="absolute inset-0 blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(249, 115, 22, ${0.3 + (glowIntensity / 200)}) 0%, transparent 70%)`,
              transform: 'scale(1.5)'
            }}
          />
          <div className="relative text-9xl font-bold bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
            ₿
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Cypherpunk BTC
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-xl md:text-2xl mb-12 font-light tracking-wide">
          Satoshi's Vision • Digital Sovereignty
        </p>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          className="group relative px-12 py-5 text-lg font-medium text-white transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

          {/* Button border animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity animate-spin-slow"
               style={{ padding: '2px' }}>
            <div className="w-full h-full bg-black rounded-full" />
          </div>

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-12 py-4 rounded-full">
            Enter the Rabbit Hole
            <svg
              className="w-6 h-6 group-hover:translate-x-2 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Quote */}
        <div className="mt-16 max-w-2xl mx-auto">
          <p className="text-slate-600 text-sm italic border-l-2 border-orange-500/30 pl-4">
            "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"
          </p>
          <p className="text-slate-700 text-xs mt-2">
            — Genesis Block, Satoshi Nakamoto
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}

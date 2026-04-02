"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    // Check if we're back online
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Initial check
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Bitcoin Symbol */}
        <div className="mb-8 relative">
          <div className="text-9xl font-bold bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            ₿
          </div>
        </div>

        {/* Status */}
        {isOnline ? (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-400 text-sm font-mono">Back Online</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-200">
              Connection Restored
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              You're back online. You can now continue learning about Bitcoin.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              Return to Home
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20">
                <span className="relative flex h-3 w-3">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-red-400 text-sm font-mono">Offline</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-200">
              You're Offline
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              No internet connection detected. Some features may not be available.
            </p>

            {/* Tips while offline */}
            <div className="mt-12 p-8 rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-slate-800/50 text-left">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
                <span>💡</span>
                <span>Bitcoin Works Offline Too</span>
              </h2>
              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  Just like this app can work offline with PWA, Bitcoin transactions can be prepared offline
                  and broadcast when you're back online.
                </p>
                <p className="leading-relaxed">
                  This is one of Bitcoin's strengths - you can sign transactions without an internet connection
                  using hardware wallets, then broadcast them later.
                </p>
                <p className="text-orange-400 font-semibold mt-6">
                  "Not your keys, not your coins" - even when offline 🔐
                </p>
              </div>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-slate-300 rounded-full font-medium hover:bg-slate-700 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Again
            </button>
          </>
        )}

        {/* Quote */}
        <div className="mt-16 max-w-2xl mx-auto">
          <p className="text-slate-600 text-sm italic border-l-2 border-orange-500/30 pl-4">
            "Bitcoin is a technological tour de force."
          </p>
          <p className="text-slate-700 text-xs mt-2">
            — Bill Gates
          </p>
        </div>
      </div>
    </div>
  );
}

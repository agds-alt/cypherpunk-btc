"use client";

import { useLanguage } from './LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-xl border border-slate-800/50 rounded-full p-1 shadow-lg shadow-orange-500/5">
        <button
          onClick={() => setLanguage('en')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 font-mono ${
            language === 'en'
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('id')}
          className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 font-mono ${
            language === 'id'
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          }`}
        >
          ID
        </button>
      </div>
    </div>
  );
}

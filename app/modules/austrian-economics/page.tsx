"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function AustrianEconomics() {
  const { t } = useLanguage();
  const [inflationYears, setInflationYears] = useState(10);
  const [inflationRate, setInflationRate] = useState(5);
  const [initialAmount, setInitialAmount] = useState(100000); // Default 100rb
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate purchasing power loss
  const purchasingPower = (initialAmount * Math.pow(1 - inflationRate / 100, inflationYears)).toFixed(0);
  const loss = (((initialAmount - Number(purchasingPower)) / initialAmount) * 100).toFixed(2);

  // Format Rupiah
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Back button */}
        <Link
          href="/home"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-all duration-300 mb-8 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-mono text-sm">Back to Home</span>
        </Link>

        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 font-mono text-xs font-bold tracking-wider">
              {t.modules.module} 1
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent animate-gradient">
              {t.austrian.pageTitle}
            </span>
          </h1>
          <p className="text-2xl text-slate-300 font-light leading-relaxed">
            {t.austrian.pageSubtitle}
          </p>
        </div>

        {/* Introduction */}
        <section
          className={`mb-20 transition-all duration-1000 delay-150 ${
            scrollY > 50 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="group relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-orange-400 mb-4 flex items-center gap-3">
                <span className="text-4xl">💡</span>
                {t.austrian.whyMatters}
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                {t.austrian.whyMattersDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Sound Money Definition */}
        <section
          className={`mb-20 transition-all duration-1000 delay-300 ${
            scrollY > 150 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            {t.austrian.soundMoneyTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "💎", title: t.austrian.scarce, desc: t.austrian.scarceDesc, bad: t.austrian.fiatInfinite, good: t.austrian.btcCap, delay: 0 },
              { icon: "🛡️", title: t.austrian.durable, desc: t.austrian.durableDesc, bad: t.austrian.paperDegrades, good: t.austrian.btcDigital, delay: 0.1 },
              { icon: "✂️", title: t.austrian.divisible, desc: t.austrian.divisibleDesc, bad: t.austrian.goldHard, good: t.austrian.btcSats, delay: 0.2 }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-slate-800/50 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
                style={{
                  transitionDelay: `${item.delay}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-orange-400 mb-3">{item.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{item.desc}</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-500/5 border border-red-500/10 rounded-xl">
                      <span className="text-red-400 text-xl">❌</span>
                      <span className="text-slate-500 text-sm">{item.bad}</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-500/5 border border-green-500/10 rounded-xl">
                      <span className="text-green-400 text-xl">✅</span>
                      <span className="text-slate-300 text-sm font-medium">{item.good}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Time Preference */}
        <section
          className={`mb-20 transition-all duration-1000 delay-500 ${
            scrollY > 400 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">⏰</span>
            {t.austrian.timePreference}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative p-8 rounded-3xl backdrop-blur-xl bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">❌</span>
                  {t.austrian.highTimePreference}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: "💸", text: t.austrian.moneyLosesValue },
                    { icon: "🚫", text: t.austrian.noSave },
                    { icon: "📉", text: t.austrian.noCapital },
                    { icon: "🔄", text: t.austrian.povertyCycle }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-colors">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-slate-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl backdrop-blur-xl bg-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">✅</span>
                  {t.austrian.lowTimePreference}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: "📈", text: t.austrian.moneyGainsValue },
                    { icon: "🎯", text: t.austrian.deferGratification },
                    { icon: "💰", text: t.austrian.capitalAccumulation },
                    { icon: "🚀", text: t.austrian.wealthBuilding }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-colors">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-slate-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Calculator */}
        <section
          className={`mb-20 transition-all duration-1000 delay-700 ${
            scrollY > 700 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">🧮</span>
            {t.austrian.inflationCalculator}
          </h2>

          <div className="relative p-10 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-orange-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl" />
            <div className="relative">
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                {t.austrian.inflationDesc}
              </p>

              {/* Initial Amount Selector */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-400 mb-4 font-mono uppercase tracking-wider">
                  Nominal Awal
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setInitialAmount(100000)}
                    className={`flex-1 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                      initialAmount === 100000
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                        : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-300 border border-slate-700'
                    }`}
                  >
                    Rp 100.000
                  </button>
                  <button
                    onClick={() => setInitialAmount(1000000)}
                    className={`flex-1 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                      initialAmount === 1000000
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                        : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-300 border border-slate-700'
                    }`}
                  >
                    Rp 1.000.000
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-3 font-mono uppercase tracking-wider">
                    {t.austrian.years} <span className="text-orange-400 text-2xl">{inflationYears}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={inflationYears}
                    onChange={(e) => setInflationYears(Number(e.target.value))}
                    className="slider w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer hover:bg-slate-700 transition-colors"
                    style={{
                      background: `linear-gradient(to right, rgb(249 115 22) 0%, rgb(249 115 22) ${(inflationYears/50)*100}%, rgb(30 41 59) ${(inflationYears/50)*100}%, rgb(30 41 59) 100%)`
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-3 font-mono uppercase tracking-wider">
                    {t.austrian.inflationRate} <span className="text-orange-400 text-2xl">{inflationRate}%</span> {t.austrian.perYear}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                    className="slider w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer hover:bg-slate-700 transition-colors"
                    style={{
                      background: `linear-gradient(to right, rgb(249 115 22) 0%, rgb(249 115 22) ${(inflationRate/20)*100}%, rgb(30 41 59) ${(inflationRate/20)*100}%, rgb(30 41 59) 100%)`
                    }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="group p-8 bg-slate-800/50 backdrop-blur rounded-2xl text-center border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-1">
                  <div className="text-sm text-slate-400 mb-3 font-mono uppercase tracking-wider">{t.austrian.initialAmount}</div>
                  <div className="text-4xl font-black text-slate-200">{formatRupiah(initialAmount)}</div>
                </div>

                <div className="group p-8 bg-red-500/10 backdrop-blur rounded-2xl text-center border border-red-500/30 hover:border-red-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20">
                  <div className="text-sm text-slate-400 mb-3 font-mono uppercase tracking-wider">{t.austrian.after} {inflationYears} {t.austrian.years.toLowerCase()}</div>
                  <div className="text-4xl font-black text-red-400">{formatRupiah(Number(purchasingPower))}</div>
                </div>

                <div className="group p-8 bg-orange-500/10 backdrop-blur rounded-2xl text-center border border-orange-500/30 hover:border-orange-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20">
                  <div className="text-sm text-slate-400 mb-3 font-mono uppercase tracking-wider">{t.austrian.purchasingPowerLost}</div>
                  <div className="text-4xl font-black text-orange-400">{loss}%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cantillon Effect */}
        <section
          className={`mb-20 transition-all duration-1000 delay-900 ${
            scrollY > 1000 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">🏦</span>
            {t.austrian.cantillonEffect}
          </h2>

          <div className="relative p-10 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 mb-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              {t.austrian.cantillonDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", icon: "🏛️", title: t.austrian.centralBankPrints, desc: t.austrian.centralBankPrintsDesc },
              { step: "2", icon: "👔", title: t.austrian.banksGetFirst, desc: t.austrian.banksGetFirstDesc },
              { step: "3", icon: "💰", title: t.austrian.richBuyAssets, desc: t.austrian.richBuyAssetsDesc },
              { step: "4", icon: "😢", title: t.austrian.poorGetInflation, desc: t.austrian.poorGetInflationDesc }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl backdrop-blur-xl bg-slate-900/50 border border-slate-800/50 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-bold">{item.step}</span>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bitcoin vs Fiat */}
        <section
          className={`mb-20 transition-all duration-1000 delay-1100 ${
            scrollY > 1300 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">⚔️</span>
            {t.austrian.btcVsFiat}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full backdrop-blur-xl bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="px-8 py-6 text-left text-slate-400 font-bold uppercase tracking-wider text-sm">{t.austrian.aspect}</th>
                  <th className="px-8 py-6 text-left text-orange-400 font-bold uppercase tracking-wider text-sm">₿ Bitcoin</th>
                  <th className="px-8 py-6 text-left text-red-400 font-bold uppercase tracking-wider text-sm">💵 {t.austrian.fiat}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  { aspect: t.austrian.supply, btc: t.austrian.btcSupply, fiat: t.austrian.fiatSupply },
                  { aspect: t.austrian.control, btc: t.austrian.btcControl, fiat: t.austrian.fiatControl },
                  { aspect: t.austrian.inflation, btc: t.austrian.btcInflation, fiat: t.austrian.fiatInflation },
                  { aspect: t.austrian.confiscation, btc: t.austrian.btcConfiscation, fiat: t.austrian.fiatConfiscation },
                  { aspect: t.austrian.censorship, btc: t.austrian.btcCensorship, fiat: t.austrian.fiatCensorship }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-8 py-6 font-bold text-slate-300">{row.aspect}</td>
                    <td className="px-8 py-6 text-green-400">{row.btc}</td>
                    <td className="px-8 py-6 text-red-400">{row.fiat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Takeaways */}
        <section
          className={`mb-20 transition-all duration-1000 delay-1300 ${
            scrollY > 1600 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            {t.austrian.keyTakeaways}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "💎", text: t.austrian.takeaway1 },
              { icon: "📉", text: t.austrian.takeaway2 },
              { icon: "🏦", text: t.austrian.takeaway3 },
              { icon: "⚡", text: t.austrian.takeaway4 }
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 p-6 rounded-2xl backdrop-blur-xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-4xl flex-shrink-0 transform group-hover:scale-110 transition-transform">{item.icon}</span>
                <p className="text-slate-300 text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-10 border-t border-slate-800">
          <Link
            href="/home"
            className="group flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-x-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-slate-300 group-hover:text-orange-400 transition-colors">Back to Modules</span>
          </Link>

          <Link
            href="/modules/monetary-history"
            className="group flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:shadow-orange-500/30"
          >
            <span className="text-white font-bold">Next: {t.modules.monetary.title}</span>
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Custom slider styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(249 115 22), rgb(234 88 12));
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.2);
          transition: all 0.2s;
        }
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 0 6px rgba(249, 115, 22, 0.3);
        }
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(249 115 22), rgb(234 88 12));
          cursor: pointer;
          border: none;
          box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.2);
          transition: all 0.2s;
        }
        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 0 6px rgba(249, 115, 22, 0.3);
        }
      `}</style>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function MonetaryHistory() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hyperinflationCases = [
    {
      country: "Weimar Germany",
      year: "1923",
      peakRate: "29,500% per month",
      cause: "WWI reparations, money printing",
      outcome: "Economic collapse, rise of extremism",
      lesson: "War debts + printing = disaster"
    },
    {
      country: "Zimbabwe",
      year: "2008",
      peakRate: "79.6 billion % per month",
      cause: "Land reform, money printing",
      outcome: "Abandoned currency, use USD",
      lesson: "Political mismanagement destroys money"
    },
    {
      country: "Venezuela",
      year: "2018",
      peakRate: "130,060% per year",
      cause: "Oil dependence, socialism, printing",
      outcome: "Mass exodus, Bitcoin adoption",
      lesson: "Resource curse + bad policy = collapse"
    },
    {
      country: "Argentina",
      year: "2023-2024",
      peakRate: "211% per year",
      cause: "Chronic deficits, money printing",
      outcome: "Dollarization debate, crypto surge",
      lesson: "Recurring crises from same mistakes"
    }
  ];

  const monetaryTimeline = [
    { year: "1816-1914", event: t.monetary.goldStandardEra, impact: t.monetary.goldStandardImpact, icon: "🏆" },
    { year: "1914", event: t.monetary.ww1Event, impact: t.monetary.ww1Impact, icon: "⚔️" },
    { year: "1944", event: t.monetary.brettonWoods, impact: t.monetary.brettonWoodsImpact, icon: "🤝" },
    { year: "1971", event: t.monetary.nixonShockEvent, impact: t.monetary.nixonShockImpact, icon: "💥" },
    { year: "1971-2024", event: t.monetary.fiatEra, impact: t.monetary.fiatEraImpact, icon: "📉" },
    { year: "2009", event: t.monetary.bitcoinGenesis, impact: t.monetary.bitcoinGenesisImpact, icon: "₿" }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
              {t.modules.module} 2
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-red-300 via-red-400 to-orange-500 bg-clip-text text-transparent animate-gradient">
              {t.monetary.pageTitle}
            </span>
          </h1>
          <p className="text-2xl text-slate-300 font-light leading-relaxed">
            {t.monetary.pageSubtitle}
          </p>
        </div>

        {/* Timeline */}
        <section
          className={`mb-20 transition-all duration-1000 delay-150 ${
            scrollY > 50 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">📜</span>
            {t.monetary.timelineTitle}
          </h2>

          <div className="relative">
            {/* Vertical gradient line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent"></div>

            <div className="space-y-8">
              {monetaryTimeline.map((item, i) => (
                <div key={i} className="relative pl-24 group">
                  {/* Animated icon */}
                  <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 group-hover:border-orange-500/50 rounded-full flex items-center justify-center text-3xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                    {item.icon}
                  </div>

                  {/* Content card */}
                  <div className="p-8 rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-slate-800/50 group-hover:border-orange-500/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-orange-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-4 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 font-mono text-sm font-bold">
                          {item.year}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-200">{item.event}</h3>
                      </div>
                      <p className="text-slate-400 text-lg leading-relaxed">{item.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nixon Shock Deep Dive */}
        <section
          className={`mb-20 transition-all duration-1000 delay-300 ${
            scrollY > 400 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">💥</span>
            {t.monetary.nixonShockTitle}
          </h2>

          <div className="relative p-10 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-orange-500/30 mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl" />
            <div className="relative">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">{t.monetary.whatHappened}</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {t.monetary.nixonDesc}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="group p-8 rounded-2xl backdrop-blur-xl bg-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <h4 className="text-xl font-bold text-green-400 mb-6">{t.monetary.before1971}</h4>
                    <ul className="space-y-4">
                      {[t.monetary.fixed35, t.monetary.limitedPrinting, t.monetary.stablePower, t.monetary.trustUSD].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 bg-black/20 rounded-xl">
                          <span className="text-green-400 text-xl">✅</span>
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="group p-8 rounded-2xl backdrop-blur-xl bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <h4 className="text-xl font-bold text-red-400 mb-6">{t.monetary.after1971}</h4>
                    <ul className="space-y-4">
                      {[t.monetary.noGoldBacking, t.monetary.unlimitedPrinting, t.monetary.usdLost99, t.monetary.boomBustIncrease].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 bg-black/20 rounded-xl">
                          <span className="text-red-400 text-xl">❌</span>
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20">
            <h4 className="text-xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <span className="text-2xl">📊</span>
              {t.monetary.impactData}
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-black/20 rounded-xl text-center">
                <div className="text-slate-400 mb-2 text-sm uppercase tracking-wider font-mono">{t.monetary.goldPrice1971}</div>
                <div className="text-4xl font-black text-slate-200">$35/oz</div>
              </div>
              <div className="p-6 bg-black/20 rounded-xl text-center">
                <div className="text-slate-400 mb-2 text-sm uppercase tracking-wider font-mono">{t.monetary.goldPrice2024}</div>
                <div className="text-4xl font-black text-orange-400">$2,000/oz</div>
              </div>
              <div className="p-6 bg-black/20 rounded-xl text-center">
                <div className="text-slate-400 mb-2 text-sm uppercase tracking-wider font-mono">{t.monetary.increase}</div>
                <div className="text-4xl font-black text-green-400">5,614%</div>
              </div>
            </div>
            <p className="text-slate-400 mt-6 text-center text-lg">
              {t.monetary.notGoldUp} <span className="text-red-400 font-bold">{t.monetary.usdLosingValue}</span>.
            </p>
          </div>
        </section>

        {/* Hyperinflation Cases */}
        <section
          className={`mb-20 transition-all duration-1000 delay-500 ${
            scrollY > 800 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">🔥</span>
            {t.monetary.hyperinflationTitle}
          </h2>

          <div className="space-y-6">
            {hyperinflationCases.map((crisis, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-slate-800/50 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-orange-400 mb-2">{crisis.country}</h3>
                      <p className="text-slate-500 font-mono">{crisis.year}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400 mb-2 uppercase tracking-wider font-mono">{t.monetary.peakInflation}</div>
                      <div className="text-3xl font-black text-red-400">{crisis.peakRate}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-slate-800/30 rounded-xl">
                      <div className="text-slate-500 mb-2 text-sm uppercase tracking-wider font-mono">{t.monetary.cause}</div>
                      <div className="text-slate-300">{crisis.cause}</div>
                    </div>
                    <div className="p-4 bg-slate-800/30 rounded-xl">
                      <div className="text-slate-500 mb-2 text-sm uppercase tracking-wider font-mono">{t.monetary.outcome}</div>
                      <div className="text-slate-300">{crisis.outcome}</div>
                    </div>
                    <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                      <div className="text-slate-500 mb-2 text-sm uppercase tracking-wider font-mono">{t.monetary.lesson}</div>
                      <div className="text-orange-400 font-bold">{crisis.lesson}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/30">
            <h4 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">⚠️</span>
              {t.monetary.commonPattern}
            </h4>
            <ol className="space-y-4">
              {[
                t.monetary.pattern1,
                t.monetary.pattern2,
                t.monetary.pattern3,
                t.monetary.pattern4,
                t.monetary.pattern5,
                t.monetary.pattern6
              ].map((pattern, i) => (
                <li key={i} className="flex items-start gap-4 p-4 bg-black/20 rounded-xl">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold">{i + 1}</span>
                  <span className="text-slate-300 text-lg">{pattern}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Modern Fiat Problems */}
        <section
          className={`mb-20 transition-all duration-1000 delay-700 ${
            scrollY > 1200 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">📉</span>
            {t.monetary.modernFiatTitle}
          </h2>

          <div className="p-10 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-orange-500/30 mb-8">
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {t.monetary.modernFiatDesc} <span className="text-orange-400 font-bold">{t.monetary.modernFiatDesc2}</span>.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { year: "1", loss: "5%", value: "$95" },
                { year: "10", loss: "40%", value: "$60" },
                { year: "30", loss: "78%", value: "$22" },
                { year: "50", loss: "92%", value: "$8" }
              ].map((data, i) => (
                <div
                  key={data.year}
                  className="group p-6 bg-slate-800/50 backdrop-blur rounded-2xl text-center border border-slate-700 hover:border-red-500/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500/20"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="text-slate-400 text-sm mb-3 uppercase tracking-wider font-mono">
                    {data.year} {data.year === "1" ? t.monetary.year : t.monetary.years}
                  </div>
                  <div className="text-4xl font-black text-red-400 mb-2">{data.loss}</div>
                  <div className="text-slate-500">{t.monetary.worth} {data.value}</div>
                </div>
              ))}
            </div>

            <p className="text-slate-400 mt-6 text-center">
              {t.monetary.atInflation}
            </p>
          </div>
        </section>

        {/* Why Bitcoin Different */}
        <section
          className={`mb-20 transition-all duration-1000 delay-900 ${
            scrollY > 1600 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">₿</span>
            {t.monetary.whyBitcoinTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-3xl backdrop-blur-xl bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">❌</span>
                  {t.monetary.fiatVulnerabilities}
                </h3>
                <ul className="space-y-4">
                  {[
                    t.monetary.fiatVuln1,
                    t.monetary.fiatVuln2,
                    t.monetary.fiatVuln3,
                    t.monetary.fiatVuln4
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-black/20 rounded-xl">
                      <span className="text-red-400 text-xl">→</span>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group p-8 rounded-3xl backdrop-blur-xl bg-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                  <span className="text-3xl">✅</span>
                  {t.monetary.bitcoinProtections}
                </h3>
                <ul className="space-y-4">
                  {[
                    t.monetary.btcProt1,
                    t.monetary.btcProt2,
                    t.monetary.btcProt3,
                    t.monetary.btcProt4
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-black/20 rounded-xl">
                      <span className="text-green-400 text-xl">→</span>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section
          className={`mb-20 transition-all duration-1000 delay-1100 ${
            scrollY > 2000 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            {t.common.keyTakeaways}
          </h2>

          <div className="space-y-4">
            {[
              t.monetary.takeaway1,
              t.monetary.takeaway2,
              t.monetary.takeaway3,
              t.monetary.takeaway4,
              t.monetary.takeaway5
            ].map((takeaway, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 p-6 rounded-2xl backdrop-blur-xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-bold">{i + 1}</span>
                <p className="text-slate-300 text-lg leading-relaxed">{takeaway}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-10 border-t border-slate-800">
          <Link
            href="/modules/austrian-economics"
            className="group flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-x-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-slate-300 group-hover:text-orange-400 transition-colors">
              Previous: {t.modules.austrian.title}
            </span>
          </Link>

          <Link
            href="/modules/halving-cycles"
            className="group flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:shadow-orange-500/30"
          >
            <span className="text-white font-bold">Next: {t.modules.halving.title}</span>
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

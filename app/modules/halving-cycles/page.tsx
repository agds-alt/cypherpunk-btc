"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function HalvingCycles() {
  const { t } = useLanguage();
  const [selectedHalving, setSelectedHalving] = useState(0);

  const halvingData = [
    {
      event: "Genesis → Halving 1",
      period: "2009-2012",
      blockReward: "50 BTC",
      blocks: "0 - 210,000",
      startPrice: "$0",
      endPrice: "$12",
      peak: "$31 (Jun 2011)",
      roi: "Infinite (0 to $12)",
      totalMined: "10.5M BTC (50%)"
    },
    {
      event: "Halving 1",
      period: "Nov 2012 - Jul 2016",
      blockReward: "25 BTC",
      blocks: "210,000 - 420,000",
      startPrice: "$12",
      endPrice: "$650",
      peak: "$1,150 (Nov 2013)",
      roi: "+5,316%",
      totalMined: "15.75M BTC (75%)"
    },
    {
      event: "Halving 2",
      period: "Jul 2016 - May 2020",
      blockReward: "12.5 BTC",
      blocks: "420,000 - 630,000",
      startPrice: "$650",
      endPrice: "$8,700",
      peak: "$19,700 (Dec 2017)",
      roi: "+1,238%",
      totalMined: "18.375M BTC (87.5%)"
    },
    {
      event: "Halving 3",
      period: "May 2020 - Apr 2024",
      blockReward: "6.25 BTC",
      blocks: "630,000 - 840,000",
      startPrice: "$8,700",
      endPrice: "$64,000",
      peak: "$69,000 (Nov 2021)",
      roi: "+636%",
      totalMined: "19.6875M BTC (93.75%)"
    },
    {
      event: "Halving 4",
      period: "Apr 2024 - 2028 (est)",
      blockReward: "3.125 BTC",
      blocks: "840,000 - 1,050,000",
      startPrice: "$64,000",
      endPrice: "TBD",
      peak: "TBD",
      roi: "TBD",
      totalMined: "~20.34M BTC (96.875%)"
    }
  ];

  const supplySchedule = [
    { year: 2012, halving: 1, reward: 25, supply: "10.5M", percent: 50 },
    { year: 2016, halving: 2, reward: 12.5, supply: "15.75M", percent: 75 },
    { year: 2020, halving: 3, reward: 6.25, supply: "18.375M", percent: 87.5 },
    { year: 2024, halving: 4, reward: 3.125, supply: "19.6875M", percent: 93.75 },
    { year: 2028, halving: 5, reward: 1.5625, supply: "20.34M", percent: 96.875 },
    { year: 2032, halving: 6, reward: 0.78125, supply: "20.67M", percent: 98.4375 },
    { year: 2140, halving: "~64", reward: 0, supply: "21M", percent: 100 }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-orange-500 font-mono text-sm">{t.modules.module} 3</span>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            {t.halving.pageTitle}
          </h1>
          <p className="text-xl text-slate-400">
            {t.halving.pageSubtitle}
          </p>
        </div>

        {/* What is Halving */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">⚡ {t.halving.whatIsHalving}</h2>

          <div className="p-8 bg-slate-900/50 border border-orange-500/20 rounded-lg mb-6">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {t.halving.halvingDesc1} <span className="text-orange-400 font-bold">210,000 {t.halving.halvingDesc2}</span> {t.halving.halvingDesc3} <span className="text-orange-400 font-bold">{t.halving.halvingDesc4}</span> {t.halving.halvingDesc5}
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-800/50 rounded text-center">
                <div className="text-3xl mb-2">🎁</div>
                <div className="text-sm text-slate-400 mb-1">Block 0-210k</div>
                <div className="text-2xl font-bold text-orange-400">50 BTC</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded text-center">
                <div className="text-3xl mb-2">🎁</div>
                <div className="text-sm text-slate-400 mb-1">Block 210k-420k</div>
                <div className="text-2xl font-bold text-orange-400">25 BTC</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded text-center">
                <div className="text-3xl mb-2">🎁</div>
                <div className="text-sm text-slate-400 mb-1">Block 420k-630k</div>
                <div className="text-2xl font-bold text-orange-400">12.5 BTC</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded text-center">
                <div className="text-3xl mb-2">🎁</div>
                <div className="text-sm text-slate-400 mb-1">Current (840k+)</div>
                <div className="text-2xl font-bold text-orange-400">3.125 BTC</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-orange-500/5 border border-orange-500/10 rounded-lg">
            <h4 className="font-bold text-orange-400 mb-3">📐 {t.halving.theMath}</h4>
            <div className="font-mono text-sm text-slate-300 space-y-1">
              <div>210,000 blocks × 10 min/block = 2,100,000 minutes</div>
              <div>2,100,000 min ÷ 60 ÷ 24 ÷ 365 = ~4 years</div>
              <div className="pt-2 text-orange-400">{t.halving.halvingEvery}</div>
            </div>
          </div>
        </section>

        {/* Historical Halvings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">📊 {t.halving.historicalData}</h2>

          {/* Halving Selector */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {halvingData.map((halving, i) => (
              <button
                key={i}
                onClick={() => setSelectedHalving(i)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedHalving === i
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {halving.event}
              </button>
            ))}
          </div>

          {/* Selected Halving Details */}
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-lg">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-orange-400 mb-2">
                  {halvingData[selectedHalving].event}
                </h3>
                <p className="text-slate-400">{halvingData[selectedHalving].period}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-500">Block Reward</div>
                <div className="text-3xl font-bold text-orange-400">
                  {halvingData[selectedHalving].blockReward}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded">
                  <div className="text-sm text-slate-400 mb-1">Blocks</div>
                  <div className="text-xl font-bold text-slate-200">
                    {halvingData[selectedHalving].blocks}
                  </div>
                </div>
                <div className="p-4 bg-slate-800/50 rounded">
                  <div className="text-sm text-slate-400 mb-1">Start Price</div>
                  <div className="text-xl font-bold text-slate-200">
                    {halvingData[selectedHalving].startPrice}
                  </div>
                </div>
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded">
                  <div className="text-sm text-slate-400 mb-1">Peak Price</div>
                  <div className="text-xl font-bold text-green-400">
                    {halvingData[selectedHalving].peak}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded">
                  <div className="text-sm text-slate-400 mb-1">Total Mined by End</div>
                  <div className="text-xl font-bold text-slate-200">
                    {halvingData[selectedHalving].totalMined}
                  </div>
                </div>
                <div className="p-4 bg-slate-800/50 rounded">
                  <div className="text-sm text-slate-400 mb-1">End Price</div>
                  <div className="text-xl font-bold text-slate-200">
                    {halvingData[selectedHalving].endPrice}
                  </div>
                </div>
                <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded">
                  <div className="text-sm text-slate-400 mb-1">ROI (Cycle)</div>
                  <div className="text-xl font-bold text-orange-400">
                    {halvingData[selectedHalving].roi}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Schedule */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">📈 {t.halving.supplySchedule}</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left p-4 text-slate-400 font-medium">Year</th>
                  <th className="text-left p-4 text-slate-400 font-medium">Halving #</th>
                  <th className="text-left p-4 text-slate-400 font-medium">Block Reward</th>
                  <th className="text-left p-4 text-slate-400 font-medium">Total Supply</th>
                  <th className="text-left p-4 text-slate-400 font-medium">% of 21M</th>
                </tr>
              </thead>
              <tbody>
                {supplySchedule.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800/50">
                    <td className="p-4 text-orange-400 font-bold">{row.year}</td>
                    <td className="p-4 text-slate-300">{row.halving}</td>
                    <td className="p-4 text-slate-300">{row.reward} BTC</td>
                    <td className="p-4 text-slate-200 font-semibold">{row.supply}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-orange-500"
                            style={{ width: `${row.percent}%` }}
                          ></div>
                        </div>
                        <span className="text-slate-400 w-16">{row.percent}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-6 bg-orange-500/5 border border-orange-500/10 rounded-lg">
            <p className="text-slate-300 text-sm">
              <span className="text-orange-400 font-semibold">Key insight:</span> By 2032 (Halving 6),
              98.4% of all Bitcoin will exist. The remaining 1.6% will be mined over the next 108 years
              until 2140 when rewards hit 0.
            </p>
          </div>
        </section>

        {/* The 4-Year Cycle Pattern */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">🔄 {t.halving.fourYearCycle}</h2>

          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-orange-400 mb-4">Typical Cycle Phases:</h3>

            <div className="space-y-4">
              {[
                {
                  phase: "1. Halving Event",
                  timing: "Month 0",
                  description: "Block reward cuts in half → supply shock begins",
                  sentiment: "Neutral to slightly bullish"
                },
                {
                  phase: "2. Accumulation",
                  timing: "Months 1-12",
                  description: "Price consolidates, smart money accumulates",
                  sentiment: "Boring, sideways action"
                },
                {
                  phase: "3. Bull Run",
                  timing: "Months 12-18",
                  description: "Price explodes as supply shock hits + demand increases",
                  sentiment: "Euphoria, 'Bitcoin to $1M!' headlines"
                },
                {
                  phase: "4. Peak & Crash",
                  timing: "Months 18-24",
                  description: "All-time high → 70-85% correction",
                  sentiment: "'Bitcoin is dead' (for the 400th time)"
                },
                {
                  phase: "5. Bear Market",
                  timing: "Months 24-48",
                  description: "Long grind lower, capitulation, depression",
                  sentiment: "Despair, most people give up"
                },
                {
                  phase: "6. Next Halving",
                  timing: "Month 48",
                  description: "Cycle repeats...",
                  sentiment: "Hope returns, cycle starts again"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-800/30 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-slate-200">{item.phase}</h4>
                      <span className="text-sm text-slate-500">({item.timing})</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-1">{item.description}</p>
                    <p className="text-orange-400 text-sm italic">{item.sentiment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">💡 {t.halving.whyThisMatters}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Supply Shock Theory</h3>
              <div className="space-y-3 text-slate-300 text-sm">
                <p>1. Miners earn half as many BTC for same work</p>
                <p>2. Same demand + reduced new supply = upward pressure</p>
                <p>3. Takes 12-18 months for price to reflect supply shock</p>
                <p>4. Eventually demand catches up → bull run</p>
              </div>
            </div>

            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Stock-to-Flow Link</h3>
              <div className="space-y-3 text-slate-300 text-sm">
                <p>1. Halving doubles Bitcoin's Stock-to-Flow ratio</p>
                <p>2. Higher S2F = higher scarcity = higher value</p>
                <p>3. Post-halving, Bitcoin's hardness ≈ Gold</p>
                <p>4. Pattern held for 15+ years (4 halvings)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">🔑 {t.common.keyTakeaways}</h2>

          <div className="space-y-4">
            {[
              t.halving.takeaway1,
              t.halving.takeaway2,
              t.halving.takeaway3,
              t.halving.takeaway4,
              t.halving.takeaway5
            ].map((takeaway, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                <span className="text-orange-400 font-bold">{i + 1}.</span>
                <span className="text-slate-300">{takeaway}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-slate-800">
          <Link
            href="/modules/monetary-history"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
          >
            ← {t.modules.monetary.title}
          </Link>
          <Link
            href="/modules/stock-to-flow"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium transition-colors"
          >
            {t.nav.next} {t.modules.s2f.title} →
          </Link>
        </div>
      </div>
    </div>
  );
}
